"use client";
import React from "react";
import { Input, Radio, Textarea } from "../../material-tailwind";
import FormField from "@/components/FormField";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });

type Props = {};

export default function page({}: Props) {
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
          <form className="w-full">
            <h3 className="mt-4 text-[1.1rem] sm:text-[1.3rem]">
              نشكرك على اهتمامك, حتى تكون جزء من التغيير راجاءاً قم بملىء
              المعلومات التالية
            </h3>

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

            <FormField name="age" label="العمر">
              <Input
                className="bg-[#F6F6F6] pt-2"
                id="age"
                name="age"
                variant="standard"
                color="blue"
                label="العمر"
              />
            </FormField>

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

            <div className="mt-[1rem] px-2 py-4 bg-white rounded-[6px] w-full shadow-sm border border-gray-100">
              <div className="field-control">
                <label className="" htmlFor="sex">
                  الجنس
                </label>
                <div className="flex flex-col gap-2">
                  <Radio name="sex" label="ذكر" />
                  <Radio name="sex" label="انثى" />
                </div>
              </div>
            </div>

            <div className="mt-[1rem] px-2 py-4 bg-white rounded-[6px] w-full shadow-sm border border-gray-100">
              <div className="field-control">
                <label className="" htmlFor="job">
                  هل انت/ي
                </label>
                <div className="flex flex-col gap-2">
                  <Radio name="job" label="طالب/ة" />
                  <Radio name="job" label="موظف/ة" />
                </div>
              </div>
            </div>

            <div className="mt-[1rem] px-2 py-4 bg-white rounded-[6px] w-full shadow-sm border border-gray-100">
              <div className="field-control">
                <label className="" htmlFor="prevExp">
                  هل شاركت في حملات تطوعية سابقة
                </label>
                <div className="flex flex-col gap-2">
                  <Radio name="prevExp" label="نعم" />
                  <Radio name="prevExp" label="لا" />
                </div>
              </div>
            </div>

            <FormField name="comment" label="هل لديك اي تعليق">
              <Textarea
                variant="standard"
                color="blue"
                label="هل لديك اي تعليق"
                className="bg-[#F6F6F6] pt-2"
                id="comment"
                name="comment"
              />
            </FormField>

            <div className="btn">
              <button className="rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] text-[#000] hover:bg-opacity-90 transition">
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
