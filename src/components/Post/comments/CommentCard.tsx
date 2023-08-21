import { ProfileCard } from "@/components/Profile/ProfileCard";
import { ProfileHeader } from "@/components/Profile/ProfileHeader";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const CommentCard = ({}: any) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Card
        dir={i18n.language === "en" ? "ltr" : "rtl"}
        color="transparent"
        shadow={false}
        className="w-full max-w-full p-2 max-h-[200px] border-4 transition ease-out delay-100 hover:border-green-300"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0"
        >
          <ProfileHeader />
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography className="overflow-y-auto h-20">
            حملتنا اليوم راح تكون مختلفة، لذلك نرجو منكم الالتزام بالخطوات حتى
            نحرص على تنظيم رائع كلش كلش ضروري تسجلون وتجيبون الباركود مال تسجيل.
            بدون تسجيل وباركود ما راح نكدر ننطيكم
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};
