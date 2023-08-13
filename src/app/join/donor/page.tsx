"use client";
import React, { useState } from "react";
import { Checkbox, Input } from "../../material-tailwind";
import FormField from "@/components/FormField";

type Props = {};

export default function page({}: Props) {
  const [options, setOptions] = useState([
    {
      id: 1,
      title: "مواد تنظيف",
    },
    {
      id: 2,
      title: "اجهزه او عدة للتنظيف",
    },
    {
      id: 3,
      title: "حاويات واكياس نفايات",
    },
    {
      id: 4,
      title: "عدة وملابس للسلامه والوقاية",
    },
    {
      id: 5,
      title: "خدمة نقل للمتطوعين والمشاركين",
    },
    {
      id: 6,
      title: "خدمة نقل للمتطوعين",
    },
    {
      id: 7,
      title: "خدمة نقل للنفايات",
    },
    {
      id: 8,
      title: "مبلغ مالي",
    },
    {
      id: 9,
      title: "أخرى",
    },
  ]);

  return (
    <div dir="rtl" className="pt-[8rem] pb-[8rem] bg-[#F6FFFA]">
      <div className="container  max-w-[640px] px-[1.5rem] sm:mx-auto ">
        <div className="donor__title text-center">
          <h1 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-[600]">
            الرجاء ملىء المعلومات التالية
          </h1>
        </div>

        <div className="">
          <form className="w-full">
            <div className="mt-[1rem] px-2 py-4 bg-white rounded-[6px] shadow-md flex flex-col items-start">
              <h1 className="mb-[.8rem] text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem]">
                بشنو تحب تتبرع
              </h1>
              {options.map((option) => (
                <div key={option.id}>
                  <div className="py-[.2rem] flex items-center">
                    <Checkbox color="teal" id={option.title} name="option" />

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

            <FormField name="others" label="اخرى">
              <Input
                className="bg-[#F6F6F6] pt-2"
                id="others"
                name="others"
                variant="standard"
                color="blue"
                label="مواد اخرى..."
              />
            </FormField>

            <div className="flex flex-col sm:flex-row gap-x-2">
              <FormField name="name" label="الأسم">
                <Input
                  className="bg-[#F6F6F6] pt-2"
                  id="name"
                  name="name"
                  variant="standard"
                  color="blue"
                  label="الأسم"
                />
              </FormField>

              <FormField name="phoneNumber" label="رقم الهاتف">
                <Input
                  className="bg-[#F6F6F6] pt-2"
                  id="phoneNumber"
                  name="phoneNumber"
                  variant="standard"
                  color="blue"
                  label="رقم الهاتف"
                />
              </FormField>
            </div>

            <FormField name="location" label="السكن">
              <Input
                className="bg-[#F6F6F6] pt-2"
                id="location"
                name="location"
                variant="standard"
                color="blue"
                label="السكن"
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
