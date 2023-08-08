"use client"
import Link from 'next/link';
import React from 'react'
import { PiHandHeartLight } from 'react-icons/pi';
import { PiHandshakeLight } from 'react-icons/pi';
import { Typography } from "../material-tailwind"


export default function join() {

  return (
    <div className='overflow-hidden mx-auto my-0 flex justify-center items-center flex-col bg-[#F6FFFA]'>
      <div
      className='bg-[#82B092] pt-[8rem] md:pt-[6rem] w-full h-[40vh]'
      >
      <div
        className='w-full flex justify-center px-[1rem]'
        >
        <div className='max-w-[800px] mt-[2rem] pt-[4rem]'>
          <Typography
          className="text-white font-[600] text-center md:text-end text-xl md:text-2xl lg:text-3xl mb-4">
            كلنا نكدر نصنع تغيير ايجابي ولازم نتعاون ونسعى من اجل عراق انظف واجمل
          </Typography>
          <Typography
          className="text-white font-[300] text-center md:text-end text-sm md:text-md lg:text-xl">
            شارك ويانا وصير جزئ من التغيير
          </Typography>
          </div>
      </div>
    </div>
    <div className='flex justify-center items-center flex-col mt-[2rem] pb-[8rem] pt-[4rem]'>
      <div>
        <Typography variant="h4" className='join mb-[2rem]'>شلون تكدر تشارك؟</Typography>
      </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2'>
          <div className='cardContainer bg-[#FFFFFF] shadow-md mb-4 rounded-[6px]'>
            <div className="card mx-6 my-8 flex text-center flex-col">

              <div className="iconContainer px-8">
                <div className="icon p-4 flex justify-center items-center rounded-full bg-[#508161]">
                  <PiHandHeartLight className="text-[#F1FAF0] text-[4rem]" />
                </div>
              </div>

              <div className="body">
                <h1 className='text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] mt-[.1rem] mb-[1.3rem]'>متبرع</h1>
              </div>

              <div className="btn">
                <Link href={"/join/donor"}>
                  <button className='rounded-[6px] bg-[#E3AB5D] w-full py-[.5rem] text-[#000] hover:bg-opacity-90 transition'>شارك</button>
                </Link>
              </div>
            </div>
          </div>

          <div className='cardContainer bg-[#FFFFFF] shadow-md mb-4 rounded-[6px]'>
            <div className="card mx-6 my-8 flex text-center flex-col">

              <div className="iconContainer px-8">
                <div className="icon p-4 rounded-full bg-[#508161]">
                  <PiHandshakeLight className="text-[#F1FAF0] text-[4rem]" />
                </div>
              </div>

              <div className="body">
                <h1 className='text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] mt-[.1rem] mb-[1.3rem]'>متطوع</h1>
              </div>

              <div className="btn">
                <Link href={"/join/volunteer"}>
                  <button className='rounded-[6px] bg-[#E3AB5D] w-full py-[.5rem] text-[#000] hover:bg-opacity-90 transition'>شارك</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

    </div>
    </div>
  )
}