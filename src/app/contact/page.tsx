import React from 'react'
import "tailwindcss/tailwind.css"
//contact us page
const Contact = () => {
  return (
    <div className='p-10 max-w-3xl mx-auto mt-10 w-auto text-center'>
      <h1 className='text-3xl font-bold font-sans underline decoration-green-300 decoration-8  underline-offset-8 '>تواصل معنا</h1>
        <form className='  py-4 mt-4 border-t flex flex-col gap-5  w-auto text-right '>
          <div className='flex flex-col gap-1'>
            <label htmlFor='fullname '> الاسم</label>
            <input className=' text-right  px-3 py-2   border border-solid bg-red-50 rounded-md' type='text' id='fullname'></input>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>البريد الالكتروني</label>
            <input className=' text-right  px-3 py-2  border border-solid bg-red-50 rounded-md' type='text' id='email' ></input>
          </div>
           <div className='flex flex-col gap-1'>
            <label htmlFor='message'>ماهي رسالتك</label>
            <textarea className=' text-right h-36  px-3 py-2   border border-solid bg-red-50 rounded-md' id='message' ></textarea>
           </div>
           <button  className='bg-secondary w-24 place-self-center px-6  rounded-md ' type='submit'>ارسال</button>
        </form>
    </div>
  )
}

export default Contact
