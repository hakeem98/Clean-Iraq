import React from "react";
import Link from "next/link";
import BlogPost from "./[...slug]/page";
import { Button } from "../material-tailwind";

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

export default function Blog() {
  return (
    <div
      className=" container sm:px-[1rem] md:px-[1.5rem] sm:mx-auto flex-column justify-center items-center "
      dir="rtl"
    >
      <div className="flex max-w-full flex-wrap mx-5">
        <Button
          className="flex justify-evenly gap-3"
          style={{
            background: "#9DDBAD",
          }}
        >
          اضف منشورا
          <i className="bx bx-plus-medical"></i>
        </Button>
      </div>
      <div className="flex max-w-full flex-wrap justify-between mx-15">
        {posts.map((post) => (
          <BlogPost post={post} />
        ))}
      </div>
    </div>
  );
}
