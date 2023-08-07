import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";

type Props = {}

export default function HomeCarousel({}: Props) {
  return (
    <Carousel className="h-[40rem]" autoplay={true} autoplayDelay={5000} loop={true}>
      <div className="relative h-full w-full" dir='rtl'>
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full pt-[10rem] bg-black/75">
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
                        <Button size="lg" color="amber" className='rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] font-light'>
                            اشترك
                        </Button>
                    </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full" dir='rtl'>
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full pt-[10rem] bg-black/75">
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
                        <Button size="lg" color="amber" className='rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] font-light'>
                            اشترك
                        </Button>
                    </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full" dir='rtl'>
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full pt-[10rem] bg-black/75">
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
                        <Button size="lg" color="amber" className='rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] font-light'>
                            اشترك
                        </Button>
                    </div>
          </div>
        </div>
      </div>
    </Carousel>
  )
}