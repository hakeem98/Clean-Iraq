import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

type Props = {};

export default function HomeCarousel({}: Props) {
  return (
    <Carousel
      className="h-[40rem]"
      autoplay={true}
      autoplayDelay={5000}
      loop={true}
    >
      <div className="relative h-full w-full" dir="rtl">
        <div className="h-full w-full bg-[url('/assets/carousel_1.jpg')] bg-center bg-cover bg-no-repeat" />
        <div className="absolute inset-0 grid h-full w-full pt-[10rem] bg-black bg-opacity-50">
          <div className="w-3/4 md:w-2/4 pt-[10rem] px-[4rem] mr-[1rem] md:mr-[8rem]">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              حملة منكم واليكم.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-2 opacity-80"
            >
              كلنا سفراء نظافة اذا نحرص على نظافة هذا البلد
            </Typography>
            <div className="btn">
              <Link className="w-full h-full" href="/join">
                <Button
                  size="lg"
                  color="amber"
                  className="rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] font-light"
                >
                  اشترك
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full" dir="rtl">
        <div className="h-full w-full bg-[url('/assets/carousel_2.jpg')]  min-h-full bg-center bg-cover bg-no-repeat" />

        <div className="absolute inset-0 grid h-full w-full pt-[10rem] bg-black bg-opacity-30">
          <div className="w-3/4 md:w-2/4 pt-[10rem] px-[4rem] mr-[1rem] md:mr-[8rem]">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              حملة منكم واليكم.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-2 opacity-80"
            >
              كلنا سفراء نظافة اذا نحرص على نظافة هذا البلد
            </Typography>
            <div className="btn">
              <Link href="/join">
                <Button
                  size="lg"
                  color="amber"
                  className="rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] font-light"
                >
                  اشترك
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full" dir="rtl">
        <div className="h-full w-full bg-[url('/assets/carousel_3.jpg')] bg-center min-h-full bg-cover bg-no-repeat"></div>
        <div className="absolute inset-0 grid h-full w-full pt-[10rem] bg-black bg-opacity-30">
          <div className="w-3/4 md:w-2/4 pt-[10rem] px-[4rem] mr-[1rem] sm:mr-[2rem] md:mr-[8rem]">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              حملة منكم واليكم.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-2 opacity-80"
            >
              كلنا سفراء نظافة اذا نحرص على نظافة هذا البلد
            </Typography>
            <div className="btn">
              <Link href="/join">
                <Button
                  size="lg"
                  color="amber"
                  className="rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] font-light"
                >
                  اشترك
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
