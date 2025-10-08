"use client";
import React, { useState } from "react";
import Image from "next/image";
import { menulist } from "@/constants/navconst";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Menu, SidebarCloseIcon } from "lucide-react";
import { Variants } from "framer-motion";
import CustomAnimatedSection from "./animatedSection";
const slideFromUp: Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};
const slideFromDown: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [isMenu, setIsMenu] = useState(false);
  const isDesktop = useMediaQuery("(min-width:768px)");
  if (isDesktop) {
    return (
      <div className="flex flex-col w-full border-b-1">
        <div className="flex flex-row border-b-1 justify-between p-5">
          <span className="block text-center justify-center uppercase p-2">
            <Image
              src="/logos/logo3.png"
              width={300}
              height={300}
              alt="logo"
              priority
            />
            <p className="font-bold">simplify,organize and achieve</p>
          </span>
          <div className="flex flex-row gap-10 py-7 px-2">
            {menulist.map((menu, index) => (
              <span
                className="font-bold flex"
                key={index}
                onClick={() => setIsOpen(!isOpen)}
              >
                {menu.title}
                {isOpen ? menu.icon2 : menu.icon1}
              </span>
            ))}
          </div>
          <div className="flex flex-row gap-5 p-3">
            <button className="bg-white border-1 p-3 border-third">
              Sign in
            </button>
            <button className="text-white bg-primary p-3">Sign Up</button>
          </div>
        </div>
        {isOpen && (
          <div className="bg-white justify-between flex flex-row w-full">
            <div className="">
              {menulist.map((bar) => (
                <div className="grid grid-cols-4" key={bar.title}>
                  {bar.suburls?.map((sub) => (
                    <div key={sub.title} className="block p-5">
                      <h2 className="font-bold text-2xl">{sub.title}</h2>
                      <p>{sub.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 bg-gray-200 p-5">
              <p>Feature to provide blog</p>
              <Image
                src="/photos/blogpost.png"
                width={100}
                height={100}
                alt="blog"
              />
              <h2 className="text-gray-600">Article title</h2>
              <p>I was here and I have always been here</p>
              <p>
                <u>Read more</u>
              </p>
              <button className="rounded text-white bg-primary">
                Click here
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="flex justify-between ">
      <span className=" uppercase p-2">
        <Image
          src="/logos/logo3.png"
          width={300}
          height={300}
          alt="logo"
          className="w-50"
        />
        <p className="font-bold hidden md:flex">
          simplify,organize and achieve
        </p>
      </span>
      <div>
        <Menu onClick={() => setIsMenu(!isMenu)} className="mt-3 z-20" />
      </div>
      {isMenu && (
        <CustomAnimatedSection
          variants={slideFromUp}
          className="fixed inset-0 w-full h-screen bg-gray-600 opacity-99 z-19 p-5 text-xl text-center"
        >
          <SidebarCloseIcon
            onClick={() => setIsMenu(!isMenu)}
            className="mt-3 "
          />

          <ul>
            <li className="py-5" onClick={() => setIsMenu(!isMenu)}>
              <Image
                src="/logos/logo3.png"
                width={300}
                height={300}
                alt="logo"
                className="w-50 justify-self-center"
              />
            </li>
            <li
              className="border-b-1 border-blue-200 py-5"
              onClick={() => setIsMenu(!isMenu)}
            >
              Home
            </li>
            <li
              className="border-b-1 border-blue-200 py-5"
              onClick={() => setIsMenu(!isMenu)}
            >
              Contact
            </li>
            <li
              className="border-b-1  border-blue-200 py-5"
              onClick={() => setIsMenu(!isMenu)}
            >
              About
            </li>
            <li
              className="border-b-1 border-logo py-5"
              onClick={() => setIsMenu(!isMenu)}
            >
              Products
            </li>
          </ul>
          <div className="flex flex-col gap-5 p-3">
            <button className="bg-white p-3 ">Sign in</button>
            <button className="text-white bg-primary p-3">Sign Up</button>
          </div>
        </CustomAnimatedSection>
      )}
    </div>
  );
}
