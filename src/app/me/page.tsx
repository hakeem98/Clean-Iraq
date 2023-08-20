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
import React from "react";
import "tailwindcss/tailwind.css";
import BlogPost from "../blogs/[...slug]/page";
const posts = [
  {
    title: "First Blog Post",
    slug: "first-blog-post",
  },
  {
    title: "Second Blog Post",
    slug: "second-blog-post",
  },
  {
    title: "Second Blog Post",
    slug: "second-blog-post",
  },
  {
    title: "Second Blog Post",
    slug: "second-blog-post",
  },
  // Add more posts here...
];
const data = [
  {
    label: "الحملات",
    value: "html",
    desc: `لا يوجد`,
  },
  {
    label: "المنشورات",
    value: "react",
    desc: `لا يوجد.`,
  },
];
export default function () {
  return (
    <div className="grid grid-cols-5 grid-rows-1 gap-4  container sm:px-[1rem] md:px-[1.5rem] sm:mx-auto my-10 dark:bg-black">
      <div className=" max-w-[400px] col-span-2 flex justify-center items-center">
        <div className="dark:!bg-navy-800 shadow-shadow-500 shadow-3xl rounded-primary relative mx-auto flex h-full w-full flex-col items-center dark:bg-black bg-white bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none shadow-lg gap-2 w-5">
          <div
            className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover p-20 "
            style={{
              backgroundImage: 'url("https://i.ibb.co/FWggPq1/banner.png")',
            }}
          >
            <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:bg-black">
              <img className="h-full w-full rounded-full" src="" alt="" />
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center ">
            <Typography variant="h4" className="text-bluePrimary font-bold">
              أمير نشوان
            </Typography>
            <Typography variant="p" className="text-lightSecondary font-normal">
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
      <div className="col-span-3 col-start-3 bg-gray-300 max-w-[90%] px-20 shadow-md bg-gray-50 my-7 ">
        <Tabs value="html">
          <TabsHeader className="my-10">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}

// {<div className="grid grid-cols-5 grid-rows-1 gap-4">
// <div className="col-span-3 row-span-2">14</div>
// </div>
