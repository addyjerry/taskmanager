"use client";
import { Toolpanel } from "@/constants/tools";
import { Power } from "lucide-react";
import React, { useState } from "react";

const Toolbox = () => {
  const [activeTab, setActiveTab] = useState(Toolpanel[0].id);
  return (
    <div className="flex flex-row">
      <div className="rounded-xl lg:p-2 m-1 bg-white text-sm lg:text-lg h-full">
        {Toolpanel.map((panel) => (
          <ul key={panel.id} className="flex flex-col py-3 lg:px-3 px-1 ">
            <li
              onClick={() => setActiveTab(panel.id)}
              className={`p-1 lg:pr-15 flex flex-row gap-3  hover:text-primary hover:cursor-pointer hover:border-b-1 rounded border-primary ${
                activeTab === panel.id && "bg-secondary text-primary"
              }`}
            >
              <>{panel.icon}</>
              <span className="hidden lg:flex">{panel.name}</span>
            </li>
          </ul>
        ))}
        <button className="flex gap border-1 rounded justify-center mx-auto lg:p-1 hover:bg-gray-100 hover:cursor-pointer mt-20 hover:text-red-500">
          <Power /> <span className="hidden lg:flex ">sign out</span>
        </button>
      </div>
      <div className="w-full">
        {Toolpanel.find((panel) => panel.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Toolbox;
