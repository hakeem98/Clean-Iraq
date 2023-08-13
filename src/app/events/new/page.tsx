"use client";
import React, { useState } from "react";
import {
  Typography,
  Input,
  Button,
  Textarea,
  Checkbox,
} from "../../material-tailwind";
import MyGoogleMaps from "../../../components/MyGoogleMaps";

import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import FormField from "@/components/FormField";

type Props = {};

export default function newEvent({}: Props) {
  const [marker, setMarker] = useState<{ lat: number; lng: number }>();

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
    setMarker({
      lat: 0,
      lng: 0,
    });
  };

  return (
    <div
      dir="rtl"
      className="max-w-[800px] pt-[8rem] pb-[6rem] container px-[2rem] sm:px-[1rem] md:px-[1.5rem] sm:mx-auto"
    >
      <div className="">
        <Typography variant="h2" color="black" className="mb-2 text-center">
          بدء حملة جديدة
        </Typography>

        <div className="map-location h-[25rem] mb-[2rem] rounded-lg overflow-hidden">
          <Typography
            variant="h4"
            color="black"
            className="font-light mb-2 mt-4"
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

      <form className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          {/* place name */}
          <FormField name="placeName" label="مكان الحملة">
            <Input
              className="bg-[#F6F6F6] pt-2"
              id="placeName"
              name="placeName"
              variant="standard"
              color="blue"
              label="مكان الحملة"
            />
          </FormField>

          {/* place picture */}
          <FormField name="placeImage" label="صورة المكان">
            <Input
              className="bg-[#F6F6F6] pt-2"
              id="placeImage"
              name="placeImage"
              variant="standard"
              color="blue"
              label="صورة المكان"
            />
          </FormField>

          {/* campaign date */}
          <FormField name="campaignDate" label="تاريخ الحملة">
            <Input
              className="bg-[#F6F6F6] pt-2"
              id="campaignDate"
              name="campaignDate"
              variant="standard"
              color="blue"
              label="تاريخ الحملة"
            />
          </FormField>

          {/* campaign time */}
          <FormField name="campaignTime" label="وقت الحملة">
            <Input
              className="bg-[#F6F6F6] pt-2"
              id="campaignTime"
              name="campaignTime"
              variant="standard"
              color="blue"
              label="وقت الحملة"
              type="text"
            />
          </FormField>
        </div>

        {/* additional notes */}
        <FormField name="additionalNotes" label="ملاحظات إضافية (اختياري)">
          <Textarea
            variant="standard"
            color="blue"
            label="اضف الملاحظات هنا..."
            className="bg-[#F6F6F6] pt-2"
            id="additionalNotes"
            name="additionalNotes"
          />
        </FormField>

        <div className="btn">
          <Button
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
