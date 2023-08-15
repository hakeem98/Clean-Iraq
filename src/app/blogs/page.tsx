"use client";
import React from "react";
import Link from "next/link";
import BlogPost from "./[...slug]/page";
import { AddPost } from "@/components/Post/AddPost";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
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
      className=" container sm:px-[1rem] md:px-[1.5rem] sm:mx-auto flex-column justify-center items-center  "
      dir="rtl"
    >
      <div className="mx-16">
        <AddPost />
      </div>
      <div className="flex max-w-full flex-wrap justify-center ">
        {posts.map((post) => (
          <BlogPost post={post} />
        ))}
      </div>
    </div>
  );
}
