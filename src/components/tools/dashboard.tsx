import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  Expand,
  Menu,
  Timer,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  const numbersArray = Array.from({ length: 28 }, (_, i) => i + 1);
  return (
    <div className="flex flex-col w-full text-lg ">
      {/* headder */}
      <div className="p-2 bg-white rounded-2xl ">
        <ul className="flex flex-row justify-between">
          <li className="flex flex-row gap-2">
            <p
              className="bg-primary  rounded text-white h-full
            p-3"
            >
              <Menu />
            </p>

            <span className="flex flex-col">
              <p>Total task</p>
              <h2 className="font-bold">268</h2>
            </span>
          </li>
          <li className="flex flex-row gap-2">
            <p
              className="bg-primary  rounded text-white h-full
            p-3"
            >
              <Check />
            </p>
            <span className="flex flex-col">
              <p>Completed</p>
              <h2 className="font-bold">268</h2>
            </span>
          </li>
          <li className="flex flex-row gap-2">
            <p
              className="bg-primary  rounded text-white h-full
            p-3"
            >
              <Timer />
            </p>
            <span className="flex flex-col">
              <p>In Process</p>
              <h2 className="font-bold">268</h2>
            </span>
          </li>
          <li className="flex flex-row gap-2">
            <p
              className="bg-primary  rounded text-white h-full
            p-3"
            >
              <AlertCircle />
            </p>
            <span className="flex flex-col">
              <p>Over due</p>
              <h2 className="font-bold">268</h2>
            </span>
          </li>
        </ul>
      </div>
      {/* body */}
      <div className="flex flex-col">
        {/* first batch */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Recent tasks */}
          <div className="p-2 bg-white w-full rounded-lg my-7 ">
            <h1 className="bg-primary text-white rounded-lg -mt-5 px-2 py-2 text-center">
              Recent task
            </h1>
            <div className="flex flex-col">
              <span className="flex flex-row gap-2 pt-3">
                <input type="checkbox" className="rounded shadow size-8 mt-4" />
                <p className="bg-gray-100 rounded-lg  py-3 px-2 justify-center w-full">
                  Design Login Page
                </p>
                <span className="bg-gray-100 rounded-lg text-center p-3 text-sm">
                  <p>Due</p>
                  <h1 className="font-bold">Today</h1>
                </span>
              </span>
              <span className="flex flex-row gap-2 py-3">
                <input type="checkbox" className="rounded shadow size-8 mt-4" />
                <p className="bg-gray-100 rounded-lg  py-3 px-2 justify-center w-full">
                  Develop Dashboard
                </p>
                <span className="bg-gray-100 rounded-lg text-center p-3 text-sm">
                  <p>Due</p>
                  <h1 className="font-bold">10/10/25</h1>
                </span>
              </span>
              <span className="flex flex-row gap-2">
                <input type="checkbox" className="rounded shadow size-8 mt-4" />
                <p className="bg-gray-100 rounded-lg  py-3 px-2 justify-center w-full">
                  Prepare project sheet
                </p>
                <span className="bg-gray-100 rounded-lg text-center p-3 text-sm">
                  <p>Due</p>
                  <h1 className="font-bold">19/10/25</h1>
                </span>
              </span>
              <span className="flex flex-row gap-2 py-3">
                <input type="checkbox" className="rounded shadow size-8 mt-4" />
                <p className="bg-gray-100 rounded-lg  py-3 px-2 justify-center w-full">
                  Design Outlet
                </p>
                <span className="bg-gray-100 rounded-lg text-center p-3 text-sm">
                  <p>Due</p>
                  <h1 className="font-bold">21/10/25</h1>
                </span>
              </span>
            </div>
          </div>
          {/* Calendar */}
          <div className="p-2 bg-white w-full rounded-lg my-7 ">
            <h1 className="bg-primary text-white rounded-lg -mt-5 px-2 py-2 text-center flex justify-between">
              Calendar <Expand />
            </h1>
            <div>
              <span className="flex flex-row justify-between">
                <p className="p-4 bg-gray-100 rounded-lg text-sm my-2"> Day</p>
                <p className="p-4 bg-gray-100 rounded-lg text-sm my-2"> Week</p>
                <p className="p-4 bg-gray-100 rounded-lg text-sm my-2">
                  {" "}
                  Month
                </p>
              </span>
              <span className="flex flex-row border-y-1 my-2 justify-between py-4">
                <p>February</p>
                <div className="flex gap-3">
                  <ArrowLeft className="bg-secondary text-white rounded p-1" />
                  <ArrowRight className="bg-secondary text-white rounded p-1" />
                </div>
              </span>
              <span className="flex flex-row justify-between">
                {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map(
                  (day, index) => (
                    <p
                      key={index}
                      className="p-2 rounded-xl text-center bg-gray-100 m-2"
                    >
                      {day}
                    </p>
                  )
                )}
              </span>
            </div>
          </div>
        </div>
        {/* second batch */}
        <div className="flex flex-row gap-5 ">
          {/* meeting */}
          <div className="bg-white px-5 w-full rounded-lg">
            <span>
              <span className="flex flex-row justify-between border-b-1">
                <p className="text-xl font-bold py-12">Todays meetings</p>
                <span className="flex flex-col gap-1 py-2 ">
                  <p className="bg-primary p-2 rounded-lg text-white text-xl font-bold my-3">
                    10 : 45
                  </p>
                  <p className="bg-primary p-2 rounded-lg text-white text-xl ">
                    20 mins to go
                  </p>
                </span>
              </span>
              <span className="">
                <p className="text-xl font-bold py-5">Meeting people</p>
                <div className="flex justify-between">
                  <Image
                    src="/avatars/boy.png"
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                  <Image
                    src="/avatars/boy.png"
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                  <Image
                    src="/avatars/girl.png"
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                  <Image
                    src="/avatars/cap.png"
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                  <Image
                    src="/avatars/girl.png"
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                  <Image
                    src="/avatars/cap.png"
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                </div>
              </span>
            </span>
          </div>
          {/* notepad */}
          <div className="p-10 w-full rounded-lg bg-white justify-center">
            <p className="text-primary justify-self-center py-20 text-center">
              Notepad <b> +</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
