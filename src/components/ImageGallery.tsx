import React, { useState } from "react";
import { Typography } from "../app/material-tailwind";
import Image from "./Image";

type Props = {};

export default function ImageGallery({}: Props) {
  const [galleryImgs, setGalleryImgs] = useState([
    {
      id: 1,
      imgLink: "assets/gallery/1.jpg",
    },
    {
      id: 2,
      imgLink: "assets/gallery/2.jpg",
    },
    {
      id: 3,
      imgLink: "assets/gallery/3.jpg",
    },
    {
      id: 4,
      imgLink: "assets/gallery/4.jpg",
    },
    {
      id: 5,
      imgLink: "assets/gallery/5.JPG",
    },
    {
      id: 6,
      imgLink: "assets/gallery/6.jpg",
    },
    {
      id: 7,
      imgLink: "assets/gallery/7.jpg",
    },
    {
      id: 8,
      imgLink: "assets/gallery/8.jpg",
    },
    {
      id: 9,
      imgLink: "assets/gallery/9.jpg",
    },
  ]);

  return (
    <>
      <div className="gallery bg-[#9DDBAD] mt-[4rem] pb-[4rem]">
        <Typography
          variant="h2"
          color="dark"
          className="text-center pt-[3rem] pb-[2rem]"
        >
          الصور
        </Typography>

        <div className="galleryList px-[2rem] md:px-[0rem]">
          <div className="container mx-auto grid gap-6 grid-cols-2 md:grid-cols-3">
            {galleryImgs.map((img) => (
              <Image img={{ id: img.id, imgLink: img.imgLink }} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
