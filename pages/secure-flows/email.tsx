import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Wrapper } from "../../components/Wrapper";
import { DataContext } from "../_app";

interface EmailProps {}

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
});

export const Email: React.FC<EmailProps> = ({}) => {
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

    setData({
      ...datas,
      ...data,
    });

    const emailProvider = data["email"].split("@")[1].split(".")[0];
    push(`/email/validate/${emailProvider}`);
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
      title="Email address"
      loading={!isValid || loading}
      onSubmit={onSubmit}
      subTitle={`Please Verify Your Email`}
      icon={
        <svg
          className="pt4 pb2 signup-img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="EmailIcon"
          fill="#0078E7"
          width={`3.75em`}
          height={`3.75em`}
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      }
    >
      <Input
        label={`Email Address`}
        name={`email`}
        register={register}
        resetField={resetField}
        curValue={watch(`email`)}
        error={errors.email && (errors.email.message as unknown as string)}
      />
    </Wrapper>
  );
};

export default Email;
