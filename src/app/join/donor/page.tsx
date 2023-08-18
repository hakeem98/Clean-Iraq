"use client";
import React, { useEffect, useState } from "react";
import { Checkbox, Input } from "../../material-tailwind";
import FormField from "@/components/FormField";
import { Tajawal } from "next/font/google";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Props = {};

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });

export default function page({}: Props) {
  const [options, setOptions] = useState([
    {
      id: 1,
      label: "cleaning_eq",
      title: "مواد تنظيف",
    },
    {
      id: 2,
      label: "tools",
      title: "اجهزه او عدة للتنظيف",
    },
    {
      id: 3,
      label: "trashcans",
      title: "حاويات واكياس نفايات",
    },
    {
      id: 4,
      label: "clothes",
      title: "عدة وملابس للسلامه والوقاية",
    },
    {
      id: 5,
      label: "part_transfer",
      title: "خدمة نقل للمتطوعين والمشاركين",
    },
    {
      id: 7,
      label: "trash_transfer",
      title: "خدمة نقل للنفايات",
    },
    {
      id: 8,
      label: "finance",
      title: "مبلغ مالي",
    },
    {
      id: 9,
      label: "others",
      title: "أخرى",
    },
  ]);

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const schema = yup
    .object({
      name: yup.string().required("الرجاء ادخال الاسم"),
      phone_number: yup.string().required("الرجاء ادخال رقم الهاتف"),
      location: yup.string().required("الرجاء اختيار السكن"),
      options: yup.array().min(1, "الرجاء الاختيار على الاقل خيار واحد"),
      others: yup
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
            <FormField
              name="options"
              label="بشنو تحب تتبرع"
              error={errors.options}
            >
              <div className="">
                <h1 className="mb-[.8rem] text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem]">
                  بشنو تحب تتبرع
                </h1>
                {options.map((option) => (
                  <div key={option.id}>
                    <div className="py-[.2rem] flex items-center">
                      <Checkbox
                        color="teal"
                        id={option.title}
                        value={option.title}
                        {...register("options", {
                          required: "الرجاء اختيار على الاقل خيار واحد",
                        })}
                      />

                      <label
                        htmlFor={option.title}
                        className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] mx-2"
                      >
                        {option.title}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </FormField>

            <FormField name="others" label="اخرى" error={errors.others}>
              <Input
                className="bg-[#F6F6F6] pt-2"
                id="others"
                variant="standard"
                color="blue"
                label="مواد اخرى..."
                {...register("others", {
                  required: "الرجاء توضيح بشنو تحب تتبرع",
                })}
              />
            </FormField>

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
                  type="tel"
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

            <div className="btn">
              <button className="rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] text-[#000] hover:bg-opacity-90 transition">
                شارك
              </button>
            </div>
            <p className="note text-[#595959] mt-2 ">
              بعد الضفط على الزر اعلاه سيتواصل معك الفريق خلال مده قصيرة ليتم
              تأكيد واكمال عملية التبرع
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
