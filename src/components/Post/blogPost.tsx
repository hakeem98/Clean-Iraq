import { Like } from "@/components/Post/LikeBtn";
import { ProfileHeader } from "@/components/Profile/ProfileHeader";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Carousel,
} from "@material-tailwind/react";
import "boxicons";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BlogPost({ post, handleOpen }: any) {
  const router = useRouter();
  return (
    <div className="mx-1">
      <Card className="max-w-[600px] max-h-[600px] overflow-hidden m-3 px-6 shadow-lg bg-gray-50 my-7 border-r-4 border-b-4 transition ease-out delay-100 hover:border-green-300">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="flex items-center justify-between pt-0 pb-4 mx-0 p-10"
        >
          <ProfileHeader />
        </CardHeader>
        <CardBody
          className="py-1 bg-gray-100 rounded-lg p-3 mx-4"
          onClick={() => handleOpen()}
          style={{
            cursor: "pointer",
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
          <Typography>
            {post?.description.length <= 20
              ? post?.description
              : post?.description.slice(0, 250) + "عرض المزيد ...."}
          </Typography>
        </CardBody>
        <CardFooter className="flex-column items-center py-4 py-1 bg-gray-100 rounded-lg p-3 mx-0 my-3">
          <Like />
        </CardFooter>
      </Card>
    </div>
  );
}
