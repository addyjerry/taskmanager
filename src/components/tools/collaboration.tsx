import { Plus, ToggleRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Collaboration = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-2">
      <div className="flex flex-col w-full">
        <Image
          src="/collaboration/meeting.png"
          width={300}
          height={300}
          alt="meeting"
          className="w-full m-2 h-80"
        />
        <div className="flex flex-col lg:flex-row gap-2">
          {/* direct message */}
          <div className="bg-white w-full rounded-xl p-3 m-3">
            <h1 className="rounded-xl text-white bg-primary text-center py-2">
              Direct message
            </h1>
            <div className="flex flex-row justify-center gap-5 py-5">
              <span className="flex flex-col">
                <Image
                  src="/avatars/boy.png"
                  width={50}
                  height={50}
                  alt="avatar"
                />
                <h2 className="bg-primary rounded-lg text-white my-5 p-2">
                  Kevin
                </h2>
              </span>
              <span className="flex flex-col">
                <Image
                  src="/avatars/cap.png"
                  width={50}
                  height={50}
                  alt="avatar"
                />
                <h2 className="bg-primary rounded-lg text-white my-5 p-2">
                  Kevin
                </h2>
              </span>
            </div>
          </div>
          {/* Indirect message */}
          <div className="bg-white w-full rounded-xl p-3">
            <h1 className="rounded-xl text-white bg-primary text-center p-2">
              Indirect message
            </h1>
            <div className="flex flex-row justify-center gap-5 py-5">
              <span className="flex flex-col">
                <Image
                  src="/avatars/boy.png"
                  width={50}
                  height={50}
                  alt="avatar"
                />
                <h2 className="bg-primary rounded-lg text-white my-5 p-2">
                  Kevin
                </h2>
              </span>
              <span className="flex flex-col">
                <Image
                  src="/avatars/girl.png"
                  width={50}
                  height={50}
                  alt="avatar"
                />
                <h2 className="bg-primary rounded-lg text-white my-5 p-2">
                  Kevin
                </h2>
              </span>
              <span className="flex flex-col">
                <Image
                  src="/avatars/cap.png"
                  width={50}
                  height={50}
                  alt="avatar"
                />
                <h2 className="bg-primary rounded-lg text-white my-5 p-2">
                  Kevin
                </h2>
              </span>
            </div>
          </div>
        </div>
        {/* conference translate */}
        <div className="bg-white rounded-xl p-3 m-2">
          <span className="bg-primary  text-white flex flex-row rounded-xl justify-between  p-3">
            <h1 className="">Translate conference</h1>
            <ToggleRight />
          </span>

          <p className="text-center py-15">Switch on to translate</p>
        </div>
      </div>
      {/* second divs */}
      <div className="flex flex-col w-full lg:w-1/3 m-2">
        {/* people */}
        <div className="bg-white rounded-xl p-3 m-2">
          <span className="justify-between flex flex-row py-5 text-xl font-bold">
            <p>People</p>
            <Plus />
          </span>
          <span className="flex flex-row justify-center gap-5">
            <Image
              src="/avatars/boy.png"
              width={50}
              height={50}
              alt="meeting"
            />
            <Image
              src="/avatars/boy.png"
              width={50}
              height={50}
              alt="meeting"
            />
            <Image
              src="/avatars/boy.png"
              width={50}
              height={50}
              alt="meeting"
            />
            <Image
              src="/avatars/boy.png"
              width={50}
              height={50}
              alt="meeting"
            />
          </span>
        </div>
        {/* messages */}
        <div className="bg-white rounded-xl p-3 flex flex-col m-2">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <span className="flex flex-row justify-between">
                <span className="flex flex-row gap-2 pb-10">
                  <Image
                    src="/avatars/cap.png"
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                  <h2 className="font-bold pt-5">Kevin</h2>
                </span>
                <p>12/02/2025</p>
              </span>
              <p>About customer request and main product</p>
            </div>
            <div className="flex flex-col">
              <span className="flex flex-row justify-between py-5">
                <span className="flex flex-row gap-2 pb-10">
                  <Image
                    src="/avatars/boy.png"
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                  <h2 className="font-bold pt-5">Kevin</h2>
                </span>
                <p>12/02/2025</p>
              </span>
              <p>About customer request and main product</p>
            </div>
            <p className="text-center">View All</p>
          </div>
        </div>
        <div className="bg-blue-200 rounded-xl p-3 flex flex-col">
          {/* Third notes */}
          <div className="flex flex-col">
            <span className="flex flex-col lg:flex-row p-3 justify-between">
              <span className=" bg-white rounded-xl p-3 flex flex-col justify-between m-2">
                <p>1. Third Party</p>
                <p>Integrations</p>
                <p>I will allow them</p>
              </span>
              <span className=" bg-white rounded-xl p-3 flex flex-col justify-between">
                <p>2. Webhooks and API</p>
                <p>Access</p>
                <p>I will create features</p>
              </span>
            </span>

            <span className="flex flex-row justify-between bg-white p-3 rounded-xl">
              <p>Add notes</p>
              <Plus />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
