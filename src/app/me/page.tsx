"use client";

import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import BlogPost from "../blogs/[...slug]/page";
import { ProfileTabs } from "@/components/Profile/ProfileTabs";
const posts = [
  {
    description:
      "اليوم كان اول يوم في حملة مدينة الموصل وكنا سعداء جدا والله ارقى ناس بربي فد ناس شكاكيين والله ارقى ناس بروح الغالية ارقـي ناس بكيفكم لا تصدكون اني كلت ارقى ناس بس محد يصدك وبكيفكم بعد ",
    id: 1,
  },
  {
    description: "First Blog Post",
    id: 2,
  },
];
export default function () {
  const [postsProfile, setPostsProfile] = useState([]);
  const [eventsProfile, setEventsProfile] = useState([]);

  return (
    <div className="container sm:px-[1rem] md:px-[1.5rem] sm:mx-auto grid grid-cols-12 grid-rows-1  gap-8 pt-[15vh] pb ">
      <div className="col-span-12 md:col-span-5 row-span-1 md:row-auto mt-18">
        <div className=" max-w-[100%] flex justify-center items-center ">
          <div className="dark:!bg-navy-800 shadow-shadow-500 shadow-3xl rounded-primary relative mx-auto flex h-full w-full flex-col items-center bg-white bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none shadow-lg gap-2 w-5">
            <div
              className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover p-20"
              style={{
                backgroundImage: 'url("https://i.ibb.co/FWggPq1/banner.png")',
              }}
            >
              <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
                <img className="h-full w-full rounded-full" src="" alt="" />
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <Typography variant="h4" className="text-bluePrimary font-bold">
                أمير نشوان
              </Typography>
              <Typography
                variant="p"
                className="text-lightSecondary font-normal"
              >
                @ameernashwan
              </Typography>
            </div>
            <div className="w-full">
              <Textarea
                label="Disabled"
                disabled
                value="aklfhasklfhaslkfhaslkjfghaslkgahs"
              />
            </div>
            <Button fullWidth color="gray">
              تعديل المعلومات الشخصية
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-7 row-span-1 md:row-auto">
        {" "}
        <ProfileTabs posts={posts} events={eventsProfile} />
      </div>
    </div>
  );
}
