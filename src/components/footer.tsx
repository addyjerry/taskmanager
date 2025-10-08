import { menulist } from "@/constants/navconst";
import React from "react";
import Image from "next/image";

const Footer = () => {
  const socials = [
    "/photos/youtube.png",
    "/photos/linkedin.png",
    "/photos/twitter.png",
    "/photos/instagram.png",
    "/photos/facebook.png",
  ];
  return (
    <div className="flex flex-col lg:flex-row border-b-1 justify-center lg:justify-between p-5">
      <span className="block text-center justify-center uppercase p-2">
        <Image src="/logos/logo3.png" width={300} height={300} alt="logo" />
        <p className="font-bold">simplify,organize and achieve</p>
      </span>
      <div className="flex flex-row justify-between py-7 px-2">
        {menulist.map((menu, index) => (
          <span className="font-bold flex md:px-3" key={index}>
            {menu.title}
          </span>
        ))}
      </div>
      <div className="flex justify-between md:px-3 py-6">
        {socials.map((social) => (
          <>
            <Image
              src={social}
              width={50}
              height={50}
              alt="socials"
              className="px-3 w-12 h-6"
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Footer;
