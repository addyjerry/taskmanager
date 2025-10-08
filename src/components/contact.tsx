import { ContactDetails } from "@/constants/contact";
import Image from "next/image";
import React from "react";
import { Variants } from "framer-motion";
import CustomAnimatedSection from "./animatedSection";

const slideFromUp: Variants = {
  hidden: { opacity: 0, y: -50 },
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
const Contact = () => {
  return (
    <div className="md:px-18 px-3 text-lg py-25 border-b-1 justify-center lg:justify-between">
      <h1 className="text-5xl font-bold py-5">Contact us</h1>
      <p className="py-5">
        Have questions or need support? We are here to help!
      </p>
      <span className="flex flex-col lg:flex-row gap-5">
        {ContactDetails.map((contact) => (
          <CustomAnimatedSection variants={slideFromUp} key={contact.title}>
            <Image
              src={contact.icon}
              width={60}
              height={60}
              alt="logo"
              className="w-10"
            />
            <h2 className="text-3xl font-bold py-5">{contact.title}</h2>
            <p>{contact.description}</p>
            <p className="py-5">
              <u>{contact.link}</u>
            </p>
          </CustomAnimatedSection>
        ))}
      </span>
    </div>
  );
};

export default Contact;
