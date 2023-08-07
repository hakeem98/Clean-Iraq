"use client"
import HomeCarousel from '../components/HomeCarousel'
import { Card, CardHeader, CardBody, Typography, Input , Button, Textarea} from "./material-tailwind"
import { useState } from 'react'
import MyGoogleMaps from "../components/MyGoogleMaps"
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import {GoPerson} from "react-icons/go"
import { PiTrash } from "react-icons/pi"
import { IoLocationOutline } from "react-icons/io5"

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
    }
])

const handleMapClick = () => {
    console.log("clicked")
}
const handlePinClick = () => {
    console.log("clicked")
}

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

            <div className="aboutUsContent flex justify-center items-start flex-col pl-0 sm:pl-4" dir='rtl'>
                <Typography variant="h2" color="black" className="mb-2 text-center">
                    من نحن؟
                </Typography>
                <p>وريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
                أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد
                أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات .
                </p>
                <div className="flex justify-center mt-[2rem]">
                    <Typography variant="h5" color="dark" className="relative after:z-[-1] after:rounded-lg after:absolute after:w-[108%] after:bottom-0  after:left-[-4px] after:h-full after:transition after:translate-y-5 after:hover:translate-y-0 px-2 overflow-hidden after:duration-[.4s] after:bg-green-200 cursor-pointer">
                        رؤية المزيد
                    </Typography>
                </div>
            </div>
            </div>
        </div>

        {/* Events and Stats */}
        <div className="statsAndEvents relative bg-[#9DDBAD] mt-[40rem] md:mt-[20rem]">
        <div className="stats absolute w-full px-[2rem] sm:px-[1rem] md:px-[1.5rem] top-[-36rem] md:top-[-15rem]">
            <div className="statsCards container mx-auto bg-[#82B092] rounded-md shadow-md border-b-2 border-b-amber-300 w-full py-[2rem] flex flex-col md:flex-row md:justify-around">

                <div className="card1 flex flex-col justify-center items-center py-[2rem]">
                    <div className="icon">
                        <GoPerson className="text-[4rem] text-white" />
                    </div>
                        <Typography
                        variant="h2"
                        color="white"
                        className="text-center font-bold text-[2rem] sm:text-[1.9rem] md:text-[2rem]"
                        >+10,000</Typography>
                        <Typography
                        variant="h2"
                        color="white"
                        className="text-center font-bold text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem]"
                        >متطوع</Typography>
                </div>

                <div className="card2 flex flex-col justify-center items-center py-[2rem]">
                    <div className="icon">
                        <PiTrash className="text-[4rem] text-white"/>
                        </div>
                        <Typography
                            variant="h2"
                            color="white"
                            className="text-center font-bold text-[2rem] sm:text-[1.9rem] md:text-[2rem]"
                            >+75,000</Typography>
                            <Typography
                            variant="h2"
                            color="white"
                            className="text-center font-bold text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem]"
                            >كيس نفايات</Typography>
                </div>

                <div className="card3 flex flex-col justify-center items-center py-[1.5rem]">
                    <div className="icon">
                        <IoLocationOutline className="text-[4rem] text-white"/>
                    </div>
                        <Typography
                            variant="h2"
                            color="white"
                            className="text-center font-bold text-[2rem] sm:text-[1.9rem] md:text-[2rem]"
                            >+50</Typography>
                            <Typography
                            variant="h2"
                            color="white"
                            className="text-center font-bold text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem]"
                            >حملة تنظيف</Typography>
                </div>
            </div>
        </div>

        {/* Events */}
        <div className="events pt-[8rem] pb-[6rem] container px-[2rem] sm:px-[1rem] md:px-[1.5rem] sm:mx-auto">{/* map and location */}
            <div className="" dir="rtl">
            <Typography variant="h2" color="black" className="mb-2">
                    الحملات الجاية
            </Typography>
            <div className="map-location h-[25rem] mb-[2rem] rounded-lg overflow-hidden">
                <div className="google-map rounded-md overflow-hidden h-full w-full ">
                    <MyGoogleMaps handleMapClick={handleMapClick} zoom={5} >
                        {
                            markers &&
                                markers.map((marker, index) => (
                                    <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} onClick={handlePinClick}/>
                                ))
                        }
                    </MyGoogleMaps>
                </div>
            </div>
            </div>

            {/* list of the events */}
            {/* 1 */}
            <div className="events-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card
                dir="rtl"
                className="relative grid w-full overflow-hidden shadow-none hover:shadow-md transition">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
                >
                    <div className="to-bg-black-10 pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/50" />
                </CardHeader>
                <CardBody className="relative flex flex-col justify-between py-14 px-6 md:px-12">
                    <Typography
                    variant="h2"
                    color="white"
                    className="mb-[8rem] text-center font-bold text-[1.8rem] sm:text-[1.9rem] md:text-[2rem]"
                    >
                        2023/08/20
                    </Typography>
                    <div className="mt-[4rem]">
                        <div className="flex flex-col my-4">
                            <div className="location mb-2">
                                <Typography variant="h5" className="text-gray-100">
                                    بغداد / ابو نؤاس مقابل مطعم ورق عنب
                                </Typography>
                            </div>
                            <div className="time">
                                <Typography variant="h5" className="text-gray-100">
                                    11:00 صباحاً
                                </Typography>
                            </div>
                        </div>
                        <Button size="lg" color="amber" className="w-full font-light">شارك</Button>
                    </div>
                </CardBody>
            </Card>

            {/* 2 */}
            <Card
                dir="rtl"
                className="relative grid w-full overflow-hidden">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
                >
                    <div className="to-bg-black-10 pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/50" />
                </CardHeader>
                <CardBody className="relative flex flex-col justify-between py-14 px-6 md:px-12">
                    <Typography
                    variant="h2"
                    color="white"
                    className="mb-[8rem] text-center font-bold text-[1.8rem] sm:text-[1.9rem] md:text-[2rem]"
                    >
                        2023/08/20
                    </Typography>
                    <div className="mt-[4rem]">
                        <div className="flex flex-col my-4">
                            <div className="location mb-2">
                                <Typography variant="h5" className="text-gray-100">
                                    بغداد / ابو نؤاس مقابل مطعم ورق عنب
                                </Typography>
                            </div>
                            <div className="time">
                                <Typography variant="h5" className="text-gray-100">
                                    11:00 صباحاً
                                </Typography>
                            </div>
                        </div>
                        <Button size="lg" color="amber" className="w-full font-light">شارك</Button>
                    </div>
                </CardBody>
            </Card>

            {/* 3 */}
            <Card
                dir="rtl"
                className="relative grid w-full overflow-hidden">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
                >
                    <div className="to-bg-black-10 pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/50" />
                </CardHeader>
                <CardBody className="relative flex flex-col justify-between py-14 px-6 md:px-12">
                    <Typography
                    variant="h2"
                    color="white"
                    className="mb-[8rem] text-center font-bold text-[1.8rem] sm:text-[1.9rem] md:text-[2rem]"
                    >
                        2023/08/20
                    </Typography>
                    <div className="mt-[4rem]">
                        <div className="flex flex-col my-4">
                            <div className="location mb-2">
                                <Typography variant="h5" className="text-gray-100">
                                    بغداد / ابو نؤاس مقابل مطعم ورق عنب
                                </Typography>
                            </div>
                            <div className="time">
                                <Typography variant="h5" className="text-gray-100">
                                    11:00 صباحاً
                                </Typography>
                            </div>
                        </div>
                        <Button size="lg" color="amber" className="w-full font-light">شارك</Button>
                    </div>
                </CardBody>
            </Card>

            </div>
            <div className="flex justify-center mt-[2rem]">
                    <Typography variant="h5" color="dark" className="z-10 relative after:z-[-1] after:rounded-lg after:absolute after:w-[108%] after:bottom-0  after:left-[-4px] after:h-full after:transition after:translate-y-5 after:hover:translate-y-0 px-2 overflow-hidden after:duration-[.4s] after:bg-amber-400 cursor-pointer">
                        رؤية المزيد
                    </Typography>
            </div>
        </div>
        </div>

        {/* Posts */}
        <div className="posts container sm:mx-auto mt-[6rem]">
            <Typography variant="h2" color="dark" className="text-center mb-[4rem]">شاركنا تجربتك</Typography>
            <div className="">
                {/* -- */}
                <div className="post flex flex-col lg:mx-[8rem] md:flex-row px-[1rem] mt-[2rem]">
                    <div className="imgContainer h-[25rem] md:h-[30rem] min-w-[400px] w-full">
                        <div className="w-full h-full px-[4rem] py-[2rem] ">
                        <div className="bg-[url('/assets/1.png')] w-full shadow-[10px_10px_0px_0px_#9DDBAD] transition hover:shadow-[0px_0px_0px_0px_#9DDBAD] rounded-md h-full bg-cover bg-center"></div>
                        </div>
                    </div>

                    <div className="postContent flex justify-center items-start flex-col pl-0 sm:pl-4" dir='rtl'>
                        <Typography variant="h2" color="black" className="mb-2 text-center">
                            عنوان المنشور
                        </Typography>
                        <p>وريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
                        أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد
                        أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات .
                        </p>
                        <div className="flex justify-center mt-[2rem]">
                            <Typography variant="h5" color="dark" className="relative after:z-[-1] after:rounded-lg after:absolute after:w-[108%] after:bottom-0  after:left-[-4px] after:h-full after:transition after:translate-y-5 after:hover:translate-y-0 px-2 overflow-hidden after:duration-[.4s] after:bg-green-200 cursor-pointer">
                                قراءة المزيد
                            </Typography>
                        </div>
                    </div>
                </div>

                {/* -- */}
                <div className="post flex flex-col lg:mx-[8rem] md:flex-row px-[1rem] mt-[2rem]" dir="rtl">
                    <div className="imgContainer h-[25rem] md:h-[30rem] min-w-[400px] w-full">
                        <div className="w-full h-full px-[4rem] py-[2rem] ">
                        <div className="bg-[url('/assets/1.png')] w-full shadow-[10px_10px_0px_0px_#9DDBAD] transition hover:shadow-[0px_0px_0px_0px_#9DDBAD] rounded-md h-full bg-cover bg-center"></div>
                        </div>
                    </div>

                    <div className="postContent flex justify-center items-start flex-col pl-0 sm:pl-4" dir='rtl'>
                        <Typography variant="h2" color="black" className="mb-2 text-center">
                            عنوان المنشور
                        </Typography>
                        <p>وريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
                        أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد
                        أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات .
                        </p>
                        <div className="flex justify-center mt-[2rem]">
                            <Typography variant="h5" color="dark" className="relative after:z-[-1] after:rounded-lg after:absolute after:w-[108%] after:bottom-0  after:left-[-4px] after:h-full after:transition after:translate-y-5 after:hover:translate-y-0 px-2 overflow-hidden after:duration-[.4s] after:bg-green-200 cursor-pointer">
                                قراءة المزيد
                            </Typography>
                        </div>
                    </div>
                </div>

                {/* -- */}
                <div className="post flex flex-col lg:mx-[8rem] md:flex-row px-[1rem] mt-[2rem]">
                    <div className="imgContainer h-[25rem] md:h-[30rem] min-w-[400px] w-full">
                        <div className="w-full h-full px-[4rem] py-[2rem] ">
                        <div className="bg-[url('/assets/1.png')] w-full shadow-[10px_10px_0px_0px_#9DDBAD] transition hover:shadow-[0px_0px_0px_0px_#9DDBAD] rounded-md h-full bg-cover bg-center"></div>
                        </div>
                    </div>

                    <div className="postContent flex justify-center items-start flex-col pl-0 sm:pl-4" dir='rtl'>
                        <Typography variant="h2" color="black" className="mb-2 text-center">
                            عنوان المنشور
                        </Typography>
                        <p>وريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
                        أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد
                        أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات .
                        </p>
                        <div className="flex justify-center mt-[2rem]">
                            <Typography variant="h5" color="dark" className="relative after:z-[-1] after:rounded-lg after:absolute after:w-[108%] after:bottom-0  after:left-[-4px] after:h-full after:transition after:translate-y-5 after:hover:translate-y-0 px-2 overflow-hidden after:duration-[.4s] after:bg-green-200 cursor-pointer">
                                قراءة المزيد
                            </Typography>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-[2rem]">
                    <Typography variant="h5" color="dark" className="z-10 relative after:z-[-1] after:rounded-lg after:absolute after:w-[108%] after:bottom-0  after:left-[-4px] after:h-full after:transition after:translate-y-5 after:hover:translate-y-0 px-2 overflow-hidden after:duration-[.4s] after:bg-amber-400 cursor-pointer">
                        تصفح المزيد
                    </Typography>
                </div>

            </div>
        </div>

        {/* Gallery */}
        <div className="gallery bg-[#9DDBAD] mt-[4rem] pb-[4rem]">
            <Typography variant="h2" color="dark" className="text-center pt-[3rem] pb-[2rem]">الصور</Typography>

            <div className="galleryList px-[2rem] md:px-[0rem]">
                <div className="container mx-auto grid gap-6 grid-cols-2 md:grid-cols-3">
                    <div className="imgContainer h-[300px] sm:h-[400px] rounded-md overflow-hidden shadow-[0px_0px_0px_0px_#9DDBAD] transition hover:shadow-[5px_5px_0px_0px_#E3AB5D]">
                        <div className="bg-[url('/assets/gallery/1.jpg')] w-full h-full bg-cover bg-center">
                        </div>
                    </div>

                    <div className="imgContainer h-[300px] sm:h-[400px] rounded-md overflow-hidden shadow-[0px_0px_0px_0px_#9DDBAD] transition hover:shadow-[5px_5px_0px_0px_#E3AB5D]">
                        <div className="bg-[url('/assets/gallery/2.jpg')] w-full h-full bg-cover bg-center">
                        </div>
                    </div>

                    <div className="imgContainer h-[300px] sm:h-[400px] rounded-md overflow-hidden shadow-[0px_0px_0px_0px_#9DDBAD] transition hover:shadow-[5px_5px_0px_0px_#E3AB5D]">
                        <div className="bg-[url('/assets/gallery/3.jpg')] w-full h-full bg-cover bg-center">
                        </div>
                    </div>

                    <div className="imgContainer h-[300px] sm:h-[400px] rounded-md overflow-hidden shadow-[0px_0px_0px_0px_#9DDBAD] transition hover:shadow-[5px_5px_0px_0px_#E3AB5D]">
                        <div className="bg-[url('/assets/gallery/4.jpg')] w-full h-full bg-cover bg-center">
                        </div>
                    </div>

                    <div className="imgContainer h-[300px] sm:h-[400px] rounded-md overflow-hidden shadow-[0px_0px_0px_0px_#9DDBAD] transition hover:shadow-[5px_5px_0px_0px_#E3AB5D]">
                        <div className="bg-[url('/assets/gallery/5.JPG')] w-full h-full bg-cover bg-center">
                        </div>
                    </div>

                    <div className="imgContainer h-[300px] sm:h-[400px] rounded-md overflow-hidden shadow-[0px_0px_0px_0px_#9DDBAD] transition hover:shadow-[5px_5px_0px_0px_#E3AB5D]">
                        <div className="bg-[url('/assets/gallery/6.jpg')] w-full h-full bg-cover bg-center">
                        </div>
                    </div>

                    <div className="imgContainer h-[300px] sm:h-[400px] rounded-md overflow-hidden shadow-[0px_0px_0px_0px_#9DDBAD] transition hover:shadow-[5px_5px_0px_0px_#E3AB5D]">
                        <div className="bg-[url('/assets/gallery/7.jpg')] w-full h-full bg-cover bg-center">
                        </div>
                    </div>

                    <div className="imgContainer h-[300px] sm:h-[400px] rounded-md overflow-hidden shadow-[0px_0px_0px_0px_#9DDBAD] transition hover:shadow-[5px_5px_0px_0px_#E3AB5D]">
                        <div className="bg-[url('/assets/gallery/8.jpg')] w-full h-full bg-cover bg-center">
                        </div>
                    </div>

                    <div className="imgContainer h-[300px] sm:h-[400px] rounded-md overflow-hidden shadow-[0px_0px_0px_0px_#9DDBAD] transition hover:shadow-[5px_5px_0px_0px_#E3AB5D]">
                        <div className="bg-[url('/assets/gallery/9.jpg')] w-full h-full bg-cover bg-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Subs */}
        <div className="subs mt-[4rem] mb-[20rem]">
            <div className="container mx-auto">
                <Typography variant="h3" color="dark" className="text-center">اشترك</Typography>
                <Typography variant="p" color="dark" className="text-center">
                    لتبقى على اطلاع وعلم بالحملات والمبادرات القادمة
                </Typography>
                <form dir='rtl'>
                    <div className='mt-[1rem] px-2 py-4 bg-white rounded-[6px] shadow-sm border border-gray-100'>
                        <div className="field-control">
                            <label className="" htmlFor="name">البريد الألكتروني</label>
                            <br />
                            <br />
                            <Input className="pt-2" id="name" name="name" variant="standard" color="blue"  label="البريد الألكتروني" />
                        </div>
                    </div>
                    <div className="btn">
                        <Button size="lg" color="amber" className='rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] font-light'>
                            اشترك
                        </Button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}
