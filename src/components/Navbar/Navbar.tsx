import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex px-10 justify-between py-4 bg-gray-300 backdrop-blur-md'>
      <div>
        <Link href='./'>
          Logo
        </Link>
      </div>
      <div className='flex justify-between'>
        <div>
          {/* the bg-secondary class is implemnted in tailwind.config.js and there we can create any desired colors with desired names */}
          <button className='mr-10 px-4 bg-secondary'>
            <Link href='./join'>انضمام</Link>
          </button>
        </div>
        <div className='flex gap-5'>
          <Link href="./about"> من نحن؟</Link>
          <Link href="./contact"> تواصل معنا</Link>
          <Link href="./blogs"> مجتمعنا</Link>
          <Link href="./events"> الحملات</Link>
          <Link href="./events/new"> حملة جديدة (للأدمن فقط)</Link>
          <Link href="./"> الرئيسية</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar