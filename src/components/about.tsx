import { ArrowBigLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

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
    <div className="p-10 border-b-1 ">
      <h1 className="text-4xl/snug font-bold justify-center text-center p-5 py-10 mx-auto">
        Unlock Your Team&apos;s Potential With <br />
        Our Project Management Tool
      </h1>
      <div className="flex justify-between text-center">
        {tools.map((tool) => (
          <div key={tool.title} className="p-11">
            <Image
              src="/logos/logo3.png"
              width={200}
              height={200}
              alt="logo"
              className="justify-self-center py-5"
            />
            <h1 className="text-2xl/snug font-bold justify-center text-center">
              {tool.title}
            </h1>
            <p className="py-5">{tool.description}</p>
            <button className="py-5">{tool.buttontext}</button>
          </div>
        ))}
      </div>
      <section className="flex flex-row ">
        <div className="px-25 py-50">
          <Image
            src="/logos/logo2.png"
            width={200}
            height={200}
            alt="logo"
            className="justify-self-start py-5"
          />
          <h1 className="text-5xl/snug font-bold justify-center text-left  py-10 mx-auto">
            Unlock Your Team&apos;s Full Potential Today
          </h1>
          <p className="text-lg">
            Experience a significant boost in productivity with our intuitive
            project management tool. Enhance team coordination and streamline
            project tracking for successful outcomes.
          </p>

          <div className="flex flex-row gap-10 py-10 text-lg">
            <button className="border-1 p-2">Learn More </button>
            <button className="flex p-2">
              Get Started <ChevronRight />
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/photos/hero.png"
            width={500}
            height={500}
            alt="about"
            className="w-[60vw] h-screen"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
