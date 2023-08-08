"use client"
import React, { useState } from 'react'
import { Checkbox, Input} from "../../material-tailwind"

type Props = {}

export default function page({}: Props) {
    const [options, setOptions] = useState([
        {
            id: 1,
            title: "مواد تنظيف"
        },
        {
            id: 2,
            title: "اجهزه او عدة للتنظيف"
        },
        {
            id: 3,
            title: "حاويات واكياس نفايات"
        },
        {
            id: 4,
            title: "عدة وملابس للسلامه والوقاية"
        },
        {
            id: 5,
            title: "خدمة نقل للمتطوعين والمشاركين"
        },
        {
            id: 6,
            title: "خدمة نقل للمتطوعين"
        },
        {
            id: 7,
            title: "خدمة نقل للنفايات"
        },
        {
            id: 8,
            title: "مبلغ مالي"
        },
        {
            id: 9,
            title: "أخرى"
        }
    ])

    return (
    <div dir='rtl' className='pt-[6rem] pb-[8rem] bg-[#F6FFFA]'>

        <div className="container  max-w-[640px] px-[1.5rem] sm:mx-auto ">
        <div className="donor__title text-center">
            <h1 className='text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-[600]'>الرجاء ملىء المعلومات التالية</h1>
        </div>

        <div className=''>
        <form className='w-full'>
            <div className='mt-[1rem] px-2 py-4 bg-white rounded-[6px] shadow-md flex flex-col items-start' >
                <h1 className='mb-[.8rem] text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem]'>بشنو تحب تتبرع</h1>
                {
                    options.map(option => (
                        <div key={option.id}>
                            <div className='py-[.2rem] flex items-center'>
                                <Checkbox color="teal" id={option.title} name='option' />

                                <label htmlFor={option.title} className='text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] mx-2'>
                                    {option.title}
                                </label>
                            </div>
                        </div>
                    ))
                }

                <div className='mt-[1rem] px-2 py-4 rounded-[6px] w-full'>
                    <div className="field-control">
                        <Input className="bg-[#F6F6F6] pt-2" id="name" name="name" variant="standard" color="blue"  label="أخرى..." />
                    </div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-x-2'>
                <div className='mt-[1rem] px-2 py-4 bg-white rounded-[6px] w-full shadow-sm border border-gray-100'>
                    <div className="field-control">
                        <label className="" htmlFor="suggestion">الأسم:</label>
                        <br />
                        <br />
                        <Input multiple={true} className="bg-[#F6F6F6] pt-2" id="suggestion" name="suggestion" variant="standard" color="blue"  label="الأسم" type="text"/>
                    </div>
                </div>

                <div className='mt-[1rem] px-2 py-4 bg-white rounded-[6px] w-full shadow-sm border border-gray-100'>
                    <div className="field-control">
                        <label className="" htmlFor="suggestion">رقم الهاتف:</label>
                        <br />
                        <br />
                        <Input multiple={true} className="bg-[#F6F6F6] pt-2" id="suggestion" name="suggestion" variant="standard" color="blue"  label="رقم الهاتف" type="text"/>
                    </div>
                </div>
            </div>

            <div className='mt-[1rem] px-2 py-4 bg-white rounded-[6px] w-full shadow-sm border border-gray-100'>
                <div className="field-control">
                    <label className="" htmlFor="suggestion">السكن:</label>
                    <br />
                    <br />
                    <Input multiple={true} className="bg-[#F6F6F6] pt-2" id="suggestion" name="suggestion" variant="standard" color="blue"  label="السكن" type="text"/>
                </div>
            </div>

            <div className="btn">
                <button className='rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] text-[#000] hover:bg-opacity-90 transition'>شارك</button>
            </div>
            <p className='note text-[#595959] mt-2 '>بعد الضفط على الزر اعلاه سيتواصل معك الفريق خلال مده قصيرة ليتم تأكيد واكمال عملية التبرع</p>
        </form>



        </div>

        </div>
    </div>
    )
}







