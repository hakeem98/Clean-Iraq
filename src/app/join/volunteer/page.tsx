"use client";
import React from "react";
import { Input, Radio, Textarea } from "../../material-tailwind";
import FormField from "@/components/FormField";
import { Tajawal } from "next/font/google";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });
type Props = {};

export default function page({}: Props) {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const schema = yup
    .object({
      name: yup.string().required("الرجاء ادخال الاسم"),
      phone_number: yup.string().required("الرجاء ادخال رقم الهاتف"),
      location: yup.string().required("الرجاء اختيار السكن"),
      age: yup.string().required("الرجاء ادخال العمر"),
      gender: yup.string().required("الرجاء اختيار الجنس"),
      hobby: yup.string().required("الرجاء اختيار الوظيفة"),
      history: yup.string().required("الرجاء اختيار نعم او لا"),
      message: yup
        .string()
        .max(100, "الرجاء ادخال رسالتك بحد أقصى 100 حرف")
        .min(10, "الرجاء ادخال رسالتك على الأقل 10 أحرف"),
    })
    .required();

  const onSubmit = (data: any) => {
    console.log(data);

    reset();
  };

  return (
    <div dir="rtl" className="pt-[8rem] pb-[8rem] bg-[#F6FFFA]">
      <div
        className={`container  max-w-[640px] px-[1.5rem] sm:mx-auto ${tajawal.className}`}
      >
        <div className="donor__title text-center">
          <h1 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-[600]">
            الرجاء ملىء المعلومات التالية
          </h1>
        </div>

        <div className="">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="mt-4 text-[1.1rem] sm:text-[1.3rem]">
              نشكرك على اهتمامك, حتى تكون جزء من التغيير راجاءاً قم بملىء
              المعلومات التالية
            </h3>

            <div className="flex flex-col sm:flex-row gap-x-2">
              <FormField name="name" label="الأسم" error={errors.name}>
                <Input
                  className="bg-[#F6F6F6] pt-2"
                  id="name"
                  variant="standard"
                  color="blue"
                  label="الأسم"
                  {...register("name", { required: "الرجاء ادخال الاسم" })}
                />
              </FormField>

              <FormField
                name="phoneNumber"
                label="رقم الهاتف"
                error={errors.phone_number}
              >
                <Input
                  className="bg-[#F6F6F6] pt-2"
                  id="phoneNumber"
                  variant="standard"
                  color="blue"
                  label="رقم الهاتف"
                  {...register("phone_number", {
                    required: "الرجاء ادخال رقم الهاتف",
                  })}
                />
              </FormField>
            </div>

            <FormField name="age" label="العمر" error={errors.age}>
              <Input
                className="bg-[#F6F6F6] pt-2"
                id="age"
                variant="standard"
                color="blue"
                label="العمر"
                {...register("age", {
                  required: "الرجاء ادخال العمر",
                })}
              />
            </FormField>

            <FormField name="location" label="السكن" error={errors.location}>
              <Input
                className="bg-[#F6F6F6] pt-2"
                id="location"
                variant="standard"
                color="blue"
                label="السكن"
                {...register("location", {
                  required: "الرجاء ادخال السكن",
                })}
              />
            </FormField>

            <FormField name="gender" label="الجنس" error={errors.gender}>
              <label className="" htmlFor="sex">
                الجنس
              </label>
              <div className="flex flex-col gap-2">
                <Radio
                  label="ذكر"
                  value={"male"}
                  {...register("gender", {
                    required: "الرجاء اختيار الجنس",
                  })}
                />
                <Radio
                  value={"female"}
                  label="انثى"
                  {...register("gender", {
                    required: "الرجاء اختيار الجنس",
                  })}
                />
              </div>
            </FormField>

            <FormField name="hobby" label="الوظيفة" error={errors.hobby}>
              <label className="" htmlFor="job">
                هل انت/ي
              </label>
              <div className="flex flex-col gap-2">
                <Radio
                  value={"student"}
                  label="طالب/ة"
                  {...register("hobby", {
                    required: "الرجاء اختيار الوظيفة",
                  })}
                />
                <Radio
                  value={"employee"}
                  label="موظف/ة"
                  {...register("hobby", {
                    required: "الرجاء اختيار الوظيفة",
                  })}
                />
                <Radio
                  value={"not_employee"}
                  label="لا اعمل"
                  {...register("hobby", {
                    required: "الرجاء اختيار الوظيفة",
                  })}
                />
              </div>
            </FormField>

            <FormField
              name="history"
              label="هل شاركت في حملات سابقة"
              error={errors.history}
            >
              <label className="" htmlFor="history">
                هل شاركت في حملات تطوعية سابقة
              </label>
              <div className="flex flex-col gap-2">
                <Radio
                  value={"yes"}
                  label="نعم"
                  {...register("history", {
                    required: "الرجاء اختيار نعم او لا",
                  })}
                />
                <Radio
                  value={"no"}
                  label="لا"
                  {...register("history", {
                    required: "الرجاء اختيار نعم او لا",
                  })}
                />
              </div>
            </FormField>

            <FormField
              name="message"
              label="هل لديك اي تعليق"
              error={errors.message}
            >
              <Textarea
                variant="standard"
                color="blue"
                label="هل لديك اي تعليق"
                className="bg-[#F6F6F6] pt-2"
                id="message"
                {...register("message", {
                  required: "الرجاء كتابة تعليقك",
                })}
              />
            </FormField>

            <div className="btn">
              <button
                type="submit"
                className="rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] text-[#000] hover:bg-opacity-90 transition"
              >
                شارك
              </button>
            </div>
            <p className="note text-[#595959] mt-2 ">
              بعد الضفط على الزر اعلاه سيتواصل معك الفريق خلال مده قصيرة ليتم
              تأكيد طلبك للمشاركة في الحملة
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
