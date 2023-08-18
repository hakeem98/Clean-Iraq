"use client";
import React, { useState } from "react";
import { Typography, Input, Button, Textarea } from "../../material-tailwind";
import MyGoogleMaps from "../../../components/MyGoogleMaps";
import { useForm } from "react-hook-form";
import { Marker } from "@react-google-maps/api";
import FormField from "@/components/FormField";
import { SlPicture } from "react-icons/sl";
import { Tajawal } from "next/font/google";
import * as yup from "yup";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });
type Props = {};

export default function newEvent({}: Props) {
  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const today = new Date().toISOString().split("T")[0];

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const schema = yup
    .object({
      placeName: yup.string().required("الرجاء ادخال مكان الحملة"),
      eventDate: yup.date().required("Date is required"),
      eventTime: yup.string().required("Time is required"),
      notes: yup
        .string()
        .max(100, "الرجاء ادخال ملاحظاتك بحد أقصى 100 حرف")
        .min(10, "الرجاء ادخال ملاحظاتك على الأقل 10 أحرف"),
    })
    .required();

  const onSubmit = (data: any) => {
    const formData = {
      geoLocation: marker,
      ...data,
    };
    console.log(formData);

    reset();
  };

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const newMarker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      setMarker(newMarker);
    }
  };

  const handlePinClick = () => {
    setMarker(null);
  };

  return (
    <div
      dir="rtl"
      className="max-w-[800px] pt-[8rem] pb-[6rem] container px-[2rem] sm:px-[1rem] md:px-[1.5rem] sm:mx-auto"
    >
      <div className="">
        <Typography variant="h2" color="black" className="mb-2 text-center  dark:text-white">
          بدء حملة جديدة
        </Typography>

        <div className="map-location h-[25rem] mb-[2rem] rounded-lg overflow-hidden">
          <Typography
            variant="h4"
            color="black"
            className="font-light mb-2 mt-4  dark:text-white "
          >
            موقع الحملة
          </Typography>
          <div className="google-map rounded-md overflow-hidden h-full w-full ">
            <MyGoogleMaps handleMapClick={handleMapClick} zoom={5}>
              {marker && (
                <Marker
                  position={{ lat: marker.lat, lng: marker.lng }}
                  onClick={handlePinClick}
                />
              )}
            </MyGoogleMaps>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto ">
        {/* place picture */}
        <FormField name="placeImage" label="صورة المكان">
          <div className="flex justify-start items-start">
            <div className="w-full">
              <label
                htmlFor="placeImage"
                className="flex w-full items-center"
                dir="rtl"
              >
                <div className="h-full p-6 flex bg-green-300 rounded-full shadow-md cursor-pointer items-center ">
                  <SlPicture className="text-[1.5rem]" />
                </div>
                <Typography
                  variant="p"
                  className={`text-gray-600 font-light mb-2 mt-4 mr-4 ${tajawal.className}`}
                >
                  اضف صورة للحملة
                </Typography>
              </label>
            </div>
            <input
              type="file"
              autoComplete="off"
              className="bg-[#F6F6F6] pt-2 hidden "
              id="placeImage"
              color="blue"
              {...register("placeImage")}
            />
          </div>
        </FormField>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          {/* place name */}
          <FormField
            name="placeName"
            label="مكان الحملة"
            error={errors.placeName}
          >
            <Input
              autoComplete="off"
              className="bg-[#F6F6F6] pt-2"
              id="placeName"
              variant="standard"
              color="blue"
              label="مكان الحملة"
              {...register("placeName", {
                required: "اسم مكان الحملة مطلوب", // Validation error message
                maxLength: {
                  value: 20,
                  message: "اسم مكان الحملة لا يجب ان يتجاوز ال20 حرف",
                },
                minLength: {
                  value: 8,
                  message: "اسم مكان الحملة يجب ان يكون اكثر من 8 احرف",
                },
              })}
            />
          </FormField>

          {/* campaign date */}
          <FormField
            name="campaignDate"
            label="تاريخ الحملة"
            error={errors.eventDate}
          >
            <Input
              type="date"
              min={today}
              autoComplete="off"
              className="bg-[#F6F6F6] pt-2"
              id="campaignDate"
              variant="standard"
              color="blue"
              label="تاريخ الحملة"
              {...register("eventDate", {
                required: "الرجاء ادخال تاريخ الحملة",
              })}
            />
          </FormField>

          {/* campaign time */}
          <FormField name="campaignTime" label="وقت الحملة">
            <Input
              type="time"
              autoComplete="off"
              className="bg-[#F6F6F6] pt-2"
              id="campaignTime"
              variant="standard"
              color="blue"
              label="وقت الحملة"
              {...register("eventTime", {
                required: "الرجاء ادخال وقت الحملة",
              })}
            />
          </FormField>
        </div>

        {/* additional notes */}
        <FormField
          name="additionalNotes"
          label="ملاحظات إضافية (اختياري)"
          error={errors.notes}
        >
          <Textarea
            variant="standard"
            color="blue"
            label="اضف الملاحظات هنا..."
            className="bg-[#F6F6F6] pt-2"
            id="additionalNotes"
            {...register("notes", {
              required: "الرجاء كتابة ملاحظاتك",
            })}
          />
        </FormField>

        <div className="btn">
          <Button
            type="submit"
            size="lg"
            color="amber"
            className="rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] font-light"
          >
            بدء الحملة
          </Button>
        </div>
      </form>
    </div>
  );
}
