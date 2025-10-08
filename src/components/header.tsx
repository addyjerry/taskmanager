"use client";
import React, { useState } from "react";
import Image from "next/image";
import { menulist } from "@/constants/navconst";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col w-full border-b-1">
      <div className="flex flex-row border-b-1 justify-between p-5">
        <span className="block text-center justify-center uppercase p-2">
          <Image src="/logos/logo3.png" width={300} height={300} alt="logo" />
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
        <div className="bg-white place-self-center flex flex-row">
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
};

export default Header;
