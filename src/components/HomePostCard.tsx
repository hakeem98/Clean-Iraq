import React from "react";
import { Typography } from "../app/material-tailwind";
import LinkButton from "./LinkButton";
import AnimateOnView from "./AnimateOnView";

type Props = {
  dir: "rtl" | "ltr";
};

export default function HomePostCard({ dir }: Props) {
  return (
    <AnimateOnView>
      <div
        className="post grid grid-cols-1 lg:grid-cols-2 lg:mx-[8rem] md:flex-row px-[1rem] mt-[2rem]"
        dir={dir}
      >
        <div className="imgContainer h-[25rem] md:h-[30rem] min-w-[400px] w-full">
          <div
            className={`w-full h-full py-[2rem] ${
              dir === "rtl" ? "pl-0 lg:pl-[4rem]" : "pr-0 lg:pr-[4rem]"
            }`}
          >
            <div className="bg-[url('/assets/1.png')] w-full self-start shadow-[10px_10px_0px_0px_#9DDBAD] transition hover:shadow-[0px_0px_0px_0px_#9DDBAD] rounded-md h-full bg-cover bg-center"></div>
          </div>
        </div>

        <div
          className={`postContent flex justify-center items-start flex-col ${
            dir === "rtl" ? "pr-0 lg:pr-[4rem]" : "pl-0 lg:pl-[4rem]"
          }`}
          dir="rtl"
        >
          <Typography variant="h2" color="black" className="mb-2 text-center">
            عنوان المنشور
          </Typography>
          <p>
            وريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
            أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
            انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي
            يت أليكيوب أكس أيا كوممودو كونسيكيوات .
          </p>

          <LinkButton link="#">قراءة المزيد</LinkButton>
        </div>
      </div>
    </AnimateOnView>
  );
}
