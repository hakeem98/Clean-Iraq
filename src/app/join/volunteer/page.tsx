"use client"
import React from 'react'
import { Input, Radio, Textarea} from "../../material-tailwind"


type Props = {}

export default function page({}: Props) {
  return (
    <div dir='rtl' className='pt-[6rem] pb-[8rem] bg-[#F6FFFA]'>

        <div className="container  max-w-[640px] px-[1.5rem] sm:mx-auto ">
        <div className="donor__title text-center">
            <h1 className='text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-[600]'>الرجاء ملىء المعلومات التالية</h1>
        </div>

        <div className=''>

        <form className='w-full'>
            <h3 className='mt-4 text-[1.1rem] sm:text-[1.3rem]'>نشكرك على اهتمامك, حتى تكون جزء من التغيير راجاءاً قم بملىء المعلومات التالية</h3>

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
                    <label className="" htmlFor="suggestion">العمر:</label>
                    <br />
                    <br />
                    <Input multiple={true} className="bg-[#F6F6F6] pt-2" id="suggestion" name="suggestion" variant="standard" color="blue"  label="العمر" type="text"/>
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

            <div className='mt-[1rem] px-2 py-4 bg-white rounded-[6px] w-full shadow-sm border border-gray-100'>
                <div className="field-control">
                  <label className="" htmlFor="sex">الجنس</label>
                  <div className="flex flex-col gap-2">
                    <Radio
                      name="sex"
                      label="ذكر"
                    />
                    <Radio
                      name="sex"
                      label="انثى"
                    />
                </div>
              </div>
            </div>

            <div className='mt-[1rem] px-2 py-4 bg-white rounded-[6px] w-full shadow-sm border border-gray-100'>
                <div className="field-control">
                  <label className="" htmlFor="job">هل انت/ي</label>
                  <div className="flex flex-col gap-2">
                    <Radio
                      name="job"
                      label="طالب/ة"
                    />
                    <Radio
                      name="job"
                      label="موظف/ة"
                    />
                </div>
              </div>
            </div>

            <div className='mt-[1rem] px-2 py-4 bg-white rounded-[6px] w-full shadow-sm border border-gray-100'>
                <div className="field-control">
                  <label className="" htmlFor="prevExp">هل شاركت في حملات تطوعية سابقة</label>
                  <div className="flex flex-col gap-2">
                    <Radio
                      name="prevExp"
                      label="نعم"
                    />
                    <Radio
                      name="prevExp"
                      label="لا"
                    />
                </div>
              </div>
            </div>

            <div className='mt-[1rem] px-2 py-4 bg-white rounded-[6px] w-full shadow-sm border border-gray-100'>
                <div className="field-control">
                  <label className="" htmlFor="prevExp">هل لديك اي تعليق</label>
                  <br />
                  <br />
                  <Textarea variant="standard" color="blue" label="اكتب تعليقك هنا..." className="bg-[#F6F6F6] pt-2" id="suggestion" name="suggestion"/>

              </div>
            </div>

            <div className="btn">
                <button className='rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] text-[#000] hover:bg-opacity-90 transition'>شارك</button>
            </div>
            <p className='note text-[#595959] mt-2 '>بعد الضفط على الزر اعلاه سيتواصل معك الفريق خلال مده قصيرة ليتم تأكيد طلبك للمشاركة في الحملة</p>
        </form>

        </div>

        </div>
    </div>
  )
}