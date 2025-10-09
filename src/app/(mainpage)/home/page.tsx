import Toolbox from "@/components/tools/toolbox";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import * as React from "react";

const Home = () => {
  return (
    <div className="rounded  w-full p-5  bg-secondary place-self-center flex flex-col ">
      <section className="flex flex-row justify-between py-3">
        <Image
          src="/logos/logo3.png"
          width={300}
          height={300}
          alt="logo"
          priority
          className=" hidden lg:flex"
        />
        <span className="flex flex-row">
          <Image src="/avatars/boy.png" width={50} height={30} alt="avatar" />
          <p className="font-bold hidden lg:flex text-xl py-5">
            Hello, John Doe
          </p>
        </span>
        <span className="flex flex-row lg:gap-5 gap-1 pt-2 lg:pt-0">
          <Bell className="lg:m-5" />
          <div className="flex flex-row relative lg:gap-5 ">
            <Search className="text-logo absolute lg:top-4 w-5 " />
            <input
              type="search"
              className="rounded border p-2 w-full h-6 lg:h-10 lg:mt-2"
              placeholder="search"
            />
          </div>
          <button className="text-white bg-primary rounded shadow lg:px-5 px-1 h-6 lg:h-10 text-xs lg:text-lg w-15 lg:w-30 lg:mt-2 ">
            + Add
          </button>
        </span>
      </section>

      <Toolbox />
    </div>
  );
};
export default Home;
