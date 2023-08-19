// pages/blog/[slug].js
"use client";
import { ProfileHeader } from "@/components/Profile/ProfileHeader";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Carousel,
  IconButton,
  Input,
  Dialog,
  DialogFooter,
  Button,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import "boxicons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function BlogPost({ post }: any) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <div className="mx-1">
      <Card
        className="max-w-[450px] max-h-[650px] overflow-hidden m-3 px-6 shadow-lg bg-gray-50 my-7 dark:bg-black"
        onClick={handleOpen}
        style={{
          cursor: "pointer",
        }}
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="flex items-center justify-between pt-0 pb-4 mx-0 dark:bg-black"
        >
          <ProfileHeader />
        </CardHeader>
        <CardBody className="py-1 bg-gray-100 rounded-lg p-3 mx-4   dark:bg-black dark:text-white">
          <Carousel
            className="rounded-xl"
            style={{ border: "4px solid #9DDBAD" }}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </Carousel>
          <br />
          <Typography dir={i18n.language === "en" ? "ltr" : "rtl"}>
            {t("lorem")}
          </Typography>
        </CardBody>
        <CardFooter className="flex-column items-center py-4 py-1 bg-gray-100 rounded-lg p-3 mx-0 my-3">
          <IconButton variant="text" className="text-black">
            <i className="bx bx-heart bx-sm" />
          </IconButton>
          <IconButton variant="text" className="text-black">
            <i className="bx bx-comment bx-sm" />
          </IconButton>
        </CardFooter>
      </Card>
      <Dialog size="xl" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <ProfileHeader />
        </DialogHeader>
        <DialogBody className="p-0 flex-row grid grid-cols-2 grid-rows-1 gap-0">
          <div className="col-start-2 row-start-1 flex justify-center items-center py-1 bg-gray-100 rounded-lg p-3 mx-2">
            {" "}
            <Typography variant="h1" className="">
              {t("no comments")}
            </Typography>
          </div>
          <div className="col-start-1 row-start-1 mx-2">
            <CardBody
              className="py-1 bg-gray-100 rounded-lg p-3 mx-4"
              style={{
                marginLeft: "0px",
                marginRight: "0px",
              }}
            >
              <Carousel
                className="rounded-xl"
                style={{ border: "4px solid #9DDBAD" }}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
              </Carousel>
              <br />
              <Typography>{t("lorem")}</Typography>
            </CardBody>
          </div>
        </DialogBody>
        <DialogFooter className="justify-between">. </DialogFooter>
      </Dialog>
    </div>
  );
}
