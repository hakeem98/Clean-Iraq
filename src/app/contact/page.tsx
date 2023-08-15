import FormField from "@/components/FormField";
import React from "react";
import { Textarea, Input, Button } from "../material-tailwind";

import "tailwindcss/tailwind.css";
//contact us page
const Contact = () => {
  return (
    <div
      className="p-10 max-w-3xl mx-auto w-auto text-center pt-[12rem] pb-[6rem]"
      dir="rtl"
    >
      <h1 className="text-3xl font-bold font-sans underline decoration-green-300 decoration-8  underline-offset-8 ">
        تواصل معنا
      </h1>
      <form className="py-4 mt-4 border-t flex flex-col gap-5  w-auto text-right">
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
        <FormField name="email" label="البريد الألكتروني">
          <Input
            className="bg-[#F6F6F6] pt-2"
            name="name"
            variant="standard"
            color="blue"
            label="البريد الألكتروني"
            id="email"
          />
        </FormField>
        <FormField name="message" label="شنو هي رسالتك">
          <Textarea
            variant="standard"
            color="blue"
            label="شنو هي رسالتك"
            className="bg-[#F6F6F6]"
            id="message"
            name="message"
          />
        </FormField>
        <div className="btn">
          <Button
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
