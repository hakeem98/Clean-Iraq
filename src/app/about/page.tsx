"use client"
import React from 'react'
import { Typography } from '@material-tailwind/react'
type Props = {}

export default function about({}: Props) {
  return (
    <div className="aboutPage">
      <div className="aboutHero relative bg-[url(/assets/5.jpg)] w-full h-[60vh] bg-cover bg-bottom" dir="rtl">
      <div className="to-bg-black-10 z-[1] absolute inset-0 h-full w-full bg-gradient-to-t from-black/60 via-black/25" />


        <div className="heroContent pt-[10rem] text-center z-[10] px-[2rem] md:max-w-[800px] md:pt-[15rem]">
          <Typography className="text-2xl md:text-3xl font-600 text-white ">
          بدت الفكرة وية صديقنا مرتضى التميمي ‎من قرر يطلع ينظف نهر دجلة حتى يگدر يستمتع بمنظر الغروب من ضفاف النهر
          </Typography>

          <Typography className="text-md md:text-xl text-white ">
          وبعد دعم فريق المحاربين وحملة تشجير تطورت المبادرة وانطلقت حملة #سفراء النظافة
          </Typography>

        </div>
      </div>

      <div className="flex flex-col md:flex-row px-[1rem] mt-[2rem]"  dir="rtl">

        <div className="content">
          <div className="howAreWe">
          
          
          </div>
          <div className="ourMessage"></div>
        </div>

        

        <div class="post flex flex-col lg:mx-[8rem] md:flex-row px-[1rem] mt-[2rem]">
          <div class="imgContainer h-[25rem] md:h-[30rem] min-w-[400px] w-full">
          <div class="w-full h-full px-[4rem] py-[2rem] "><div class="bg-[url('/assets/1.png')] w-full shadow-[10px_10px_0px_0px_#9DDBAD] transition hover:shadow-[0px_0px_0px_0px_#9DDBAD] rounded-md h-full bg-cover bg-center"></div></div>
                </div>
                <div class="postContent flex justify-center items-start flex-col pl-0 sm:pl-4" dir="rtl">
                  <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-black mb-2 text-center"> منو سفراء النظافة؟</h2>
                  <Typography variant="h5" className="text-md md:text-xl font-600 text-black ">
          هذي الحملة منكم واليكم. انا وانت واحنا كلنا سفراء النظافة اذا نحرص على نظافة هذا البلد ونتعهد على:
          </Typography>

          <ul className='list-disc'>
            <li><p>ما اشمر نفايات ابداً</p></li>
            <li><p>نوعي الأخرين اذا يذبون زبالة</p></li>
            <li><p>نساهم بتنظيف الاماكن العامة</p></li>
          </ul>
                  
                  <div class="flex justify-center mt-[2rem]">
                    <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit relative after:z-[-1] after:rounded-lg after:absolute after:w-[108%] after:bottom-0 after:left-[-4px] after:h-full after:transition after:translate-y-5 after:hover:translate-y-0 px-2 overflow-hidden after:duration-[.4s] after:bg-green-200 cursor-pointer">قراءة المزيد</h5>
                    </div>
                    </div>
                    </div>

      </div>

      


    </div>
  )
}
