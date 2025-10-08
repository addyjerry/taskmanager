import React from "react";
import Image from "next/image";
import { Variants } from "framer-motion";
import CustomAnimatedSection from "./animatedSection";

const slideFromUp: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};
const HeroSection = () => {
  return (
    <CustomAnimatedSection
      variants={slideFromUp}
      className="w-full h-screen relative"
    >
      <Image
        src="/photos/heroback.png"
        fill
        alt="hero-background"
        className="absolute inset-0"
      />
      <div className="z-9 bg-gray-600 opacity-10 inset-0 relative w-full h-screen"></div>
    </CustomAnimatedSection>
  );
};

export default HeroSection;
