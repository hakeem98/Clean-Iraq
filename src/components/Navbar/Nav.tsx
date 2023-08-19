"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "../../app/material-tailwind";
import Theme from "../theme/theme";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1100 && setOpenNav(false)
    );
  }, []);

  const links = [
    { href: "/", text: "الرئيسية" },
    { href: "/events", text: "الحملات" },
    { href: "/blogs", text: "مجتمعنا" },
    { href: "/contact", text: "تواصل معنا" },
    { href: "/about", text: "من نحن؟" },
    { href: "/events/new", text: "حملة جديدة (للأدمن فقط)" },
  ];
  const navList = (
    <ul
      className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
      dir="rtl"
    >
      {links.map((link, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
          <Link href={link.href} className="flex items-center font-bold">
            <span>{link.text}</span>
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <nav className="fixed w-full pt-1 z-[100]">
      <div className="w-full shadow-md container mx-auto">
        <Navbar className="bg-green-400 backdrop-blur-3xl sticky top-0 z-10 border-none h-max max-w-full rounded-md py-1 px-0 lg:px-8 lg:py-3">
          <div className="flex items-center justify-between px-[2rem] sm:px-[4rem] text-blue-gray-900 overflow-hidden">
          <Theme/>
            <Typography
              as="a"
              href="/"
              className="w-[60px] h-[60px] cursor-pointer font-extrabold"
            >
              <img
                src="/assets/logo.png"
                className="object-contain w-full h-full"
                alt="سفراء النظافة"
              />
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden xl:block">{navList}</div>
              <Link href={"/join"}>
                <Button
                  size="lg"
                  color="amber"
                  className="rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] font-light hidden lg:inline-block"
                  onClick={() => setOpenNav(false)}
                >
                  انضمام
                </Button>
              </Link>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav} className="m-0 p-0 px-4">
            {navList}
            <Link href={"/join"}>
              <Button
                size="lg"
                color="amber"
                className="rounded-[6px] bg-[#E3AB5D] px-8 py-[.5rem] mt-[1.5rem] font-light w-full"
                onClick={() => setOpenNav(false)}
              >
                انضمام
              </Button>
            </Link>
          </MobileNav>
        </Navbar>
      </div>
    </nav>
  );
};

export default Nav;
