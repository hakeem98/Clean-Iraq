"use client";
import FormField from "@/components/FormField";
import React from "react";
import { Textarea, Input, Button } from "../material-tailwind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "tailwindcss/tailwind.css";
//contact us page
const Contact = () => {
  const schema = yup
    .object({
      name: yup.string().required("الرجاء ادخال الاسم"),
      email: yup
        .string()
        .email("الرجاء ادخال بريد الكتروني صحيح 'example@email.com'")
        .required("للاشتراك, الرجاء ادخال البريد الالكتروني"),
      message: yup
        .string()
        .max(100, "الرجاء ادخال رسالتك بحد أقصى 100 حرف")
        .min(10, "الرجاء ادخال رسالتك على الأقل 10 أحرف")
        .required("الرجاء ادخل رسالتك قبل الارسال"),
    })
    .required();

  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = (data: any) => {
    console.log(data);

    reset();
  };

  return (
    <div
      className="p-10 max-w-3xl mx-auto w-auto text-center pt-[12rem] pb-[6rem]"
      dir="rtl"
    >
      <h1 className="text-3xl font-bold font-sans underline decoration-green-300 decoration-8  underline-offset-8 ">
        تواصل معنا
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-4 mt-4 border-t flex flex-col gap-5  w-auto text-right"
      >
        <FormField name="name" label="الأسم" error={errors.name}>
          <Input
            className="bg-[#F6F6F6] pt-2"
            id="name"
            name="name"
            variant="standard"
            color="blue"
            label="الأسم"
          />
        </FormField>
        <FormField name="email" label="البريد الألكتروني" error={errors.email}>
          <Input
            className="bg-[#F6F6F6] pt-2"
            variant="standard"
            color="blue"
            label="البريد الألكتروني"
            id="email"
            {...register("email", {
              required: "للاشتراك, الرجاء ادخال البريد الالكتروني",
            })}
          />
        </FormField>
        <FormField name="message" label="شنو هي رسالتك" error={errors.message}>
          <Textarea
            variant="standard"
            color="blue"
            label="شنو هي رسالتك"
            className="bg-[#F6F6F6]"
            id="message"
            {...register("message")}
          />
        </FormField>
        <div className="btn">
          <Button
            type="submit"
            size="lg"
            color="amber"
            className="rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1rem] font-light"
          >
            إرسال
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
