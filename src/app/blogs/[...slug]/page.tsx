"use client";
import { CommentCard } from "@/components/Post/comments/CommentCard";
import { ProfileHeader } from "@/components/Profile/ProfileHeader";
import {
  CardBody,
  Carousel,
  Dialog,
  DialogBody,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function PostDetails({ closeModal, selectedPost }: any) {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialog
        dir={i18n.language === "en" ? "ltr" : "rtl"}
        size="xl"
        open={selectedPost !== null}
        handler={closeModal}
        className="overflow-y-auto max-h-[90vh] p-10 dark:bg-blue-gray-900 dark:text-white"
      >
        <DialogBody className="p-0 dark:bg-blue-gray-900  dark:text-white">
          <div className="col-start-1 row-start-1 mx-2 flex">
            <CardBody
              className="py-1 bg-gray-100 rounded-lg p-3 mx-4 w-[80vh] max-h-[75vh] dark:bg-blue-gray-900  dark:text-white "
              style={{
                marginLeft: "0px",
                marginRight: "0px",
              }}
            >
              <ProfileHeader />

              <Carousel
                className="rounded-xl  max-h-[35vh]"
                style={{ border: "4px solid #9DDBAD" }}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i
                            ? "w-8 bg-white"
                            : "w-4 bg-white/50 "
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                <img
                  src="url('/assets/1.png')"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <img
                  src="url('/assets/1.png')"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
              </Carousel>
              <br />
              <Typography className="overflow-y-auto max-h-[20vh] ">
                حملتنا اليوم راح تكون مختلفة، لذلك نرجو منكم الالتزام بالخطوات
                حتى نحرص على تنظيم رائع كلش كلش ضروري تسجلون وتجيبو ونريد
                نشاركها وية اكبر عدد من الناس. من تخلص المطارات راح تكون خلصت
                الحملة وبعد ما نكدر نستقبل متطوعين. لذلك اذا جبتو وياكم
                مطاراتكم، هذا يعني راح نكدر نستقبل متطوعين اكثر تطبيق كريم يوفر
                الكم رحلات مجانية باستخدام كود الخصم CLEANIRAQ. اذا ما تحتاجون
                الخصم، خلو الاخرين سيتفادون منه. اذا ممكن اكثر من شخص يشترك
                بالخصم من نفس المنطقة، هذا راح يكون افضل حتى نكدر نفيد اكبر عدد
                من الناس. نرجو تستخدمون التعليقات بهذا البوست حتى تنسقون مع بع
                هذي الحملة راح تكون اول حدث يتنظم بهذي الطريقة، لذلك نرجو منكم
                تتعاونون ويانا واعذرونا من اي تقصير. احنا كلنا دا نتعلم سوية
                ونشكر ثقتكم ودعمكم النا متحمسين نشوفكم اليوم,
              </Typography>
            </CardBody>
            <div className="flex-col justify-center items-center py-1 bg-gray-100 rounded-lg p-3 mx-2 overflow-y-auto h-[75vh] w-[70vh] gap-16 dark:bg-blue-gray-900  dark:text-white">
              <Typography variant="h4" className="p-6">
                التعليقات
              </Typography>
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
