// pages/blog/[slug].js
"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import "boxicons";

export default function BlogPost({ post }: any) {
  return (
    <div className="mx-1">
      <Card className="max-w-[600px] overflow-hidden m-3 px-10 ">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="flex items-center gap-1 pt-0 pb-4"
        >
          <Avatar
            size="lg"
            variant="circular"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="tania andrew"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                أمير نشوان{" "}
              </Typography>
            </div>
            <Typography color="blue-gray">اليوم</Typography>
          </div>
        </CardHeader>
        <CardBody className="py-1">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            className="w-full h-80 object-cover max-h-[300px]"
          />
          <br />
          <Typography>
            وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل
            وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم
            إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت
            مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن
            كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم
            تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center gap-4 py-4 ">
          <Typography>
            <i className="bx bx-heart bx-sm"></i>
          </Typography>
          <Typography>
            <i className="bx bx-comment bx-sm"></i>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
