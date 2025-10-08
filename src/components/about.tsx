import { ChevronRight } from "lucide-react";
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
const About = () => {
  const tools = [
    {
      title: "Streamline Collaboration and Boost Productivity Effortlessly",
      description:
        "Manage tasks efficiently with our intuitive task management system",
      buttontext: "Learn More >",
    },
    {
      title:
        "Enhance Team Collaboration and Real-Time Updates and Communication",
      description:
        "Foster Teamwork with seamless communication tools and shared project insights.",
      buttontext: "Sign Up >",
    },
    {
      title:
        "Gain insights with Comprehensive Reporting and Analytics Features",
      description:
        "Track progress and make informed decisions with our detailed reporting tools.",
      buttontext: "Explore >",
    },
  ];
  return (
    <div className="py-10 border-b-1 ">
      <h1 className=" text-3xl lg:text-4xl/snug font-bold justify-center px-2 md:px-5 text-center md:p-5 py-10 mx-auto">
        Unlock Your Team&apos;s Potential With <br />
        Our Project Management Tool
      </h1>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between text-center">
        {tools.map((tool) => (
          <div key={tool.title} className="md:p-11">
            <Image
              src="/logos/logo3.png"
              width={200}
              height={200}
              alt="logo"
              className="justify-self-center py-5"
            />
            <h1 className="text-2xl/snug font-bold justify-center md:text-center">
              {tool.title}
            </h1>
            <p className="py-5">{tool.description}</p>
            <button className="py-5">{tool.buttontext}</button>
          </div>
        ))}
      </div>
      <section className="flex flex-col lg:flex-row ">
        <CustomAnimatedSection
          variants={slideFromUp}
          className="lg:px-25 py-50 px-3"
        >
          <Image
            src="/logos/logo2.png"
            width={200}
            height={200}
            alt="logo"
            className="justify-center py-5 "
          />
          <h1 className="text-3xl md:text-5xl/snug font-bold justify-center text-left  py-10 ">
            Unlock Your Team&apos;s Full Potential Today
          </h1>
          <p className="text-lg">
            Experience a significant boost in productivity with our intuitive
            project management tool. Enhance team coordination and streamline
            project tracking for successful outcomes.
          </p>

          <div className="flex flex-col lg:flex-row gap-10 py-10 text-lg">
            <button className="border-1 p-2">Learn More </button>
            <button className="flex p-2">
              Get Started <ChevronRight />
            </button>
          </div>
        </CustomAnimatedSection>
        <CustomAnimatedSection variants={slideFromDown}>
          <Image
            src="/photos/hero.png"
            width={500}
            height={500}
            alt="about"
            className="w-full lg:w-[60vw] h-screen justify-self-center"
            loading="lazy"
          />
        </CustomAnimatedSection>
      </section>
    </div>
  );
};

export default About;
