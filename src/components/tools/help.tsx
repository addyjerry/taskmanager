import { DollarSign, Network, Settings2, TableRowsSplit } from "lucide-react";
import React from "react";

const Help = () => {
  return (
    <div className="place-self-center text-center px-5 max-w-3xl lg:h-screen">
      <h2 className="text-3xl p-5 font-bold">Help center</h2>
      <div className="py-2">
        <p className="font-bold p-5">What can we help you with today?</p>
        <input
          type="text"
          placeholder="Type your querry"
          className="p-2 rounded-xl bg-white w-full"
        />
      </div>

      <div className="py-7 text-center justify-center">
        <h2 className="font-bold border-b-1 lg:mx-55 p-3">Categories</h2>
        <span className="flex flex-col lg:flex-row gap-5 py-5 justify-center ">
          <span className="flex flex-row gap-2">
            <DollarSign />
            <p>Getting Started</p>
          </span>
          <span className="flex flex-row gap-2">
            <Settings2 />
            <p>Account Management</p>
          </span>
          <span className="flex flex-row gap-2">
            <Network />
            <p>Troubleshooting</p>
          </span>
        </span>
        <span className="flex flex-col lg:flex-row gap-5 py-5 justify-center">
          <span className="flex flex-row gap-2">
            <TableRowsSplit />
            <p>Task Management</p>
          </span>
          <span className="flex flex-row gap-2">
            <Settings2 />
            <p>Security</p>
          </span>
        </span>
        <div className="flex flex-col lg:flex-row bg-white p-3 rounded-xl gap-5">
          <span className="flex flex-col px-2">
            <h2 className="font-bold border-b-1">How to Get Started</h2>
            <p>
              Welcome to Tusk. This guide will help you get up and running
              quickly and confiden..
            </p>
          </span>
          <span className="flex flex-col px-2">
            <h2 className="font-bold border-b-1">Managing Your Account</h2>
            <p>
              Learn how to manage your account settings,including changing your
              password
            </p>
          </span>
          <span className="flex flex-col px-2">
            <h2 className="font-bold border-b-1">Task Management Tips</h2>
            <p>
              Optimize your productivity with these task management tips and
              eliminate time-wasti...
            </p>
          </span>
        </div>
      </div>
      <span className="py-5 flex flex-row gap-10 items-center justify-center">
        <p>Can not find what you are looking for?</p>
        <button className="bg-primary p-2 text-white rounded-xl">
          Contact
        </button>
      </span>
    </div>
  );
};

export default Help;
