"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
type Props = {};

export default function about({}: Props) {
  return (
    <div className="aboutPage">
      <div
        className="aboutHero relative bg-[url(/assets/5.jpg)] w-full h-[60vh] bg-cover bg-bottom"
        dir="rtl"
      >
        <div className="to-bg-black-10 z-[1] absolute inset-0 h-full w-full bg-gradient-to-t from-black/60 via-black/25" />

        <div className="heroContent pt-[10rem] text-center md:text-start z-[10] px-[2rem] md:max-w-[800px] md:pt-[15rem]">
          <Typography className="text-2xl md:text-3xl font-600 text-white">

            بدأت الفكرة مع صديقنا مرتضى التميمي الذي قرر تنظيف نهر دجلة
            للاستمتاع بغروب الشمس.
          </Typography>

          <Typography className="text-md md:text-xl text-white">
            بعد دعم فريق المحاربين وحملة التشجير، تطورت المبادرة لتصبح حملة
            #سفراء_النظافة.
          </Typography>
        </div>
      </div>

      <div className="about mb-[8rem] container sm:mx-auto mt-[6rem] ml-0 ">

        <div className="post flex flex-col lg:mx-[8rem] md:flex-row px-[1rem] mt-[2rem]">
          <div className="imgContainer h-[25rem] md:h-[30rem] min-w-[400px] w-full">
            <div className="w-full h-full pl-0 pr-[12rem] py-[2rem]">
              <div className="bg-[url('/assets/1.png')] w-full shadow-[10px_10px_0px_0px_#9DDBAD] transition hover:shadow-[0px_0px_0px_0px_#9DDBAD] rounded-md h-full bg-cover bg-center"></div>
            </div>
          </div>

          <div
            className="aboutContent flex justify-center items-start flex-col pl-0 sm:pl-4"

            dir="rtl"
          >
            <h2 className="text-4xl font-semibold leading-[1.3] text-black mb-2 text-center">
              من هم سفراء النظافة؟
            </h2>
            <p>
              هذه الحملة تهمنا جميعًا. نحن جميعًا سفراء النظافة، نلتزم بما يلي:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <p>عدم التخلّص من النفايات في الأماكن العامة</p>
              </li>
              <li>
                <p>مساعدة الآخرين في التخلّص من النفايات</p>
              </li>
              <li>
                <p>المشاركة في تنظيف الأماكن العامة</p>
              </li>
            </ul>{" "}
            <br></br>
            <div
              className="aboutContent flex justify-center items-start flex-col pl-0 sm:pl-4"

              dir="rtl"
            >
              <h2 className="text-4xl font-semibold leading-[1.3] text-black mb-2 text-center">
                رسالتنا
              </h2>

              <p>
                كلنا نكدر نصنع تغيير ايجابي ولازم نتعاون ونسعى من اجل عراق انظف
                واجمل
              </p>

              <p>
                الخطوة القادمة:<br></br>
                فريقنا مستمر بتوسيع المشروع وتنظيم فعاليات تخلي يوم الحملة فرحة
                واحتفال كبير بالنظافة والانجازات الي يحققوها سفراء النظافة،
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
