import React from "react";
import { Testimony } from "@/constants/testimonials";
import Image from "next/image";
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
const Testimonials = () => {
  return (
    <div className="py-5 px-3 md:px-18 border-b-1">
      <div className="text-lg">
        <h1 className="md:text-5xl text-3xl font-bold py-5">
          User Testimonials
        </h1>
        <p>This tool has transformed our project management expericne!</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full ">
        {Testimony.map((testimonial) => (
          <CustomAnimatedSection
            variants={slideFromDown}
            key={testimonial.name}
            className="py-5 mx-5"
          >
            <>{testimonial.rating}</>
            <p className="font-bold text-xl py-10">{testimonial.quote}</p>
            <Image
              src={testimonial.avatar}
              width={50}
              height={50}
              alt={testimonial.name}
            />
            <h2 className="font-bold">{testimonial.name}</h2>
            <p>{testimonial.position}</p>
          </CustomAnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
