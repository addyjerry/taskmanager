import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full h-screen relative">
      <Image
        src="/photos/heroback.png"
        fill
        alt="hero-background"
        className="absolute inset-0"
      />
      <div className="z-9 bg-gray-600 opacity-10 inset-0 relative w-full h-screen"></div>
    </div>
  );
};

export default HeroSection;
