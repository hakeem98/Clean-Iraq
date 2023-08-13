"use client";
import HomeCarousel from "../components/HomeCarousel";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
  Textarea,
} from "./material-tailwind";
import { useState } from "react";
import MyGoogleMaps from "../components/MyGoogleMaps";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { GoPerson } from "react-icons/go";
import { PiTrash } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import EventCard from "@/components/EventCard";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import HomePostCard from "@/components/HomePostCard";
import LinkButton from "@/components/LinkButton";
import ImageGallery from "@/components/ImageGallery";
import FormField from "@/components/FormField";
import Stats from "@/components/Stats";

export default function Home() {
  const [markers, setMarkers] = useState([
    {
      lat: 33.296947,
      lng: 44.399979,
    },
    {
      lat: 30.534528,
      lng: 47.832244,
    },
    {
      lat: 30.461913,
      lng: 47.985047,
    },
    {
      lat: 30.546185,
      lng: 47.752038,
    },
  ]);

  const handleMapClick = () => {
    console.log("clicked");
  };
  const handlePinClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <HomeCarousel />
      {/* About us */}
      <div className="container mx-auto px-4">
        {/* About us */}
        <div className="aboutUs flex flex-col md:flex-row px-[1rem] mt-[2rem]">
          <div className="imgContainer h-[25rem] md:h-[30rem] min-w-[400px] w-full">
            <div className="w-full h-full px-[4rem] py-[2rem] ">
              <div className="bg-[url('/assets/1.png')] w-full shadow-[10px_10px_0px_0px_#9DDBAD] transition hover:shadow-[0px_0px_0px_0px_#9DDBAD] rounded-md h-full bg-cover bg-center"></div>
            </div>
          </div>

          <div
            className="aboutUsContent flex justify-center items-start flex-col pl-0 sm:pl-4"
            dir="rtl"
          >
            <Typography variant="h2" color="black" className="mb-2 text-center">
              من نحن؟
            </Typography>
            <p>
              وريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت
              دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا .
              يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو
              لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات .
            </p>
            <LinkButton link="/about">قراءة المزيد</LinkButton>
          </div>
        </div>
      </div>

      {/* Events and Stats */}
      <div className="statsAndEvents relative bg-[#9DDBAD] mt-[40rem] md:mt-[20rem]">
        <Stats />

        {/* Events */}
        <div className="events pt-[8rem] pb-[6rem] container px-[2rem] sm:px-[1rem] md:px-[1.5rem] sm:mx-auto">
          {/* map and location */}
          <div className="" dir="rtl">
            <Typography variant="h2" color="black" className="mb-2">
              الحملات الجاية
            </Typography>
            <div className="map-location h-[25rem] mb-[2rem] rounded-lg overflow-hidden">
              <div className="google-map rounded-md overflow-hidden h-full w-full ">
                <MyGoogleMaps handleMapClick={handleMapClick} zoom={5}>
                  {markers &&
                    markers.map((marker, index) => (
                      <Marker
                        key={index}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        onClick={handlePinClick}
                      />
                    ))}
                </MyGoogleMaps>
              </div>
            </div>
          </div>

          {/* list of the events */}
          {/* 1 */}
          <div className="events-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href={"/join"}>
              <EventCard>
                <div className="mt-[4rem] children">
                  <div className="flex flex-col my-4">
                    <div className="location mb-2 flex items-center py-2">
                      <div className="icon mx-2">
                        <GoLocation className="text-[2rem] text-white" />
                      </div>
                      <Typography variant="h5" className="text-gray-100">
                        بغداد / ابو نؤاس مقابل مطعم ورق عنب
                      </Typography>
                    </div>
                    <div className="time flex items-center">
                      <div className="icon mx-2">
                        <AiOutlineClockCircle className="text-[2rem] text-white" />
                      </div>
                      <Typography variant="h5" className="text-gray-100">
                        11:00 صباحاً
                      </Typography>
                    </div>
                  </div>
                  <Button size="lg" color="amber" className="w-full font-light">
                    شارك
                  </Button>
                </div>
              </EventCard>
            </Link>

            <Link href={"/join"}>
              <EventCard>
                <div className="mt-[4rem] children">
                  <div className="flex flex-col my-4">
                    <div className="location mb-2 flex items-center py-2">
                      <div className="icon mx-2">
                        <GoLocation className="text-[2rem] text-white" />
                      </div>
                      <Typography variant="h5" className="text-gray-100">
                        بغداد / ابو نؤاس مقابل مطعم ورق عنب
                      </Typography>
                    </div>
                    <div className="time flex items-center">
                      <div className="icon mx-2">
                        <AiOutlineClockCircle className="text-[2rem] text-white" />
                      </div>
                      <Typography variant="h5" className="text-gray-100">
                        11:00 صباحاً
                      </Typography>
                    </div>
                  </div>
                  <Button size="lg" color="amber" className="w-full font-light">
                    شارك
                  </Button>
                </div>
              </EventCard>
            </Link>

            <Link href={"/join"}>
              <EventCard>
                <div className="mt-[4rem] children">
                  <div className="flex flex-col my-4">
                    <div className="location mb-2 flex items-center py-2">
                      <div className="icon mx-2">
                        <GoLocation className="text-[2rem] text-white" />
                      </div>
                      <Typography variant="h5" className="text-gray-100">
                        بغداد / ابو نؤاس مقابل مطعم ورق عنب
                      </Typography>
                    </div>
                    <div className="time flex items-center">
                      <div className="icon mx-2">
                        <AiOutlineClockCircle className="text-[2rem] text-white" />
                      </div>
                      <Typography variant="h5" className="text-gray-100">
                        11:00 صباحاً
                      </Typography>
                    </div>
                  </div>
                  <Button size="lg" color="amber" className="w-full font-light">
                    شارك
                  </Button>
                </div>
              </EventCard>
            </Link>
          </div>
          <LinkButton link="/events">
            <Typography variant="h5">رؤية المزيد</Typography>
          </LinkButton>
        </div>
      </div>

      {/* Posts */}
      <div className="posts container sm:mx-auto mt-[6rem]">
        <Typography variant="h2" color="dark" className="text-center mb-[4rem]">
          شاركنا تجربتك
        </Typography>
        <div className="">
          <HomePostCard dir="ltr" />
          <HomePostCard dir="rtl" />
          <HomePostCard dir="ltr" />

          <div className="flex justify-center items-center">
            <LinkButton link="/blogs">
              <Typography variant="h5">رؤية المزيد</Typography>
            </LinkButton>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <ImageGallery />

      {/* Subs */}
      <div className="subs my-[8rem]">
        <div className="container mx-auto">
          <Typography variant="h3" color="dark" className="text-center">
            اشترك
          </Typography>
          <Typography variant="p" color="dark" className="text-center">
            لتبقى على اطلاع وعلم بالحملات والمبادرات القادمة
          </Typography>
          <form dir="rtl">
            <FormField name="email" label="البريد الألكتروني">
              <Input
                className="bg-[#F6F6F6] pt-2"
                name="name"
                variant="standard"
                color="blue"
                label="البريد الألكتروني"
                id="email"
              />
            </FormField>
            <div className="btn">
              <Button
                size="lg"
                color="amber"
                className="rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] font-light"
              >
                اشترك
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
