"use client"
import React, { useState } from "react"
import { Card, CardHeader, CardBody, Typography, Input , Button, Textarea} from "../material-tailwind"
import MyGoogleMaps from "../../components/MyGoogleMaps"
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';



export default function events() {
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
        <div className="pt-[8rem] pb-[6rem] container px-[2rem] sm:px-[1rem] md:px-[1.5rem] sm:mx-auto">

            {/* map and location */}
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

            {/* suggestions form */}
            <div dir="rtl" className="mt-[4rem] max-w-[800px] mx-auto">
                <Typography variant="h2" color="black" className="mb-2 text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem]" >
                عندك اقتراحات للحملة الجاية؟
                </Typography>
                <form>
                <div className='mt-[1rem] px-2 py-4 bg-white rounded-[6px] shadow-sm border border-gray-100'>
                    <div className="field-control">
                        <label className="" htmlFor="name">الأسم:</label>
                        <br />
                        <br />
                        <Input className="bg-[#F6F6F6] pt-2" id="name" name="name" variant="standard" color="blue"  label="الأسم" />
                    </div>
                </div>
                <div className='mt-[1rem] px-2 py-4 bg-white rounded-[6px] shadow-sm border border-gray-100'>
                    <div className="field-control">
                        <label className="" htmlFor="suggestion">شنو هو اقتراحك:</label>
                        <br />
                        <br />
                        <Textarea variant="standard" color="blue" label="اكتب اقتراحك هنا..." className="bg-[#F6F6F6] pt-2" id="suggestion" name="suggestion"/>

                        {/* <Input multiple={true}  variant="standard" color="blue"  label= type="text"/> */}
                    </div>

                </div>
                <div className="btn">
                    <Button size="lg" color="amber" className='rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] font-light'>إرسال</Button>
                </div>
                </form>

            </div>

            <div className="mt-[4rem]" dir="rtl">
                <Typography variant="h2" color="black" className="mb-2">
                        الحملات السابقة
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
                <div className="events-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1 */}
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
                    <Typography variant="h5" color="dark" className="relative after:z-[-1] after:rounded-lg after:absolute after:w-[108%] after:bottom-0  after:left-[-4px] after:h-full after:transition after:translate-y-5 after:hover:translate-y-0 px-2 overflow-hidden after:duration-[.4s] after:bg-green-200 cursor-pointer">
                        رؤية المزيد
                    </Typography>
                </div>
        </div>
    )
}