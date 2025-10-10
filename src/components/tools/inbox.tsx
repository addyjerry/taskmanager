import { Chats } from "@/constants/messages";
import { useMediaQuery } from "@/hooks/use-media-query";

import {
  ArrowRight,
  Ellipsis,
  EllipsisVertical,
  Flag,
  Notebook,
  Send,
  Star,
  Timer,
} from "lucide-react";
import Image from "next/image";

import React, { useState } from "react";

const Messages = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isChat, setIsChat] = useState(0);
  const isDesktop = useMediaQuery("(min-width:768px)");
  if (isDesktop) {
    return (
      <section className="bg-white rounded-xl m-2 overflow-y-hidden h-[48%] flex flex-row">
        {/* contacts */}
        <span className="flex flex-col border-r-1 w-1/3 overflow-y-auto ">
          <div>
            <menu className="flex flex-row justify-between p-3">
              <EllipsisVertical
                onClick={() => setIsMenu(!isMenu)}
                className="hover:cursor-pointer"
              />
              <p>Received</p>
              <p>Sent</p>
            </menu>
            {isMenu && (
              <menu className="flex flex-col bg-blue-100 rounded-xl z-9 fixed top-39 left-72 justify-center">
                <span className="bg-white rounded-xl flex flex-row gap-5 m-2 py-2 px-5">
                  <Flag /> <p>flag</p>
                </span>
                <span className="bg-white rounded-xl flex flex-row gap-5 m-2 py-2 px-5">
                  <Timer /> <p>Reminder</p>
                </span>
                <span className="bg-white rounded-xl flex flex-row gap-5 m-2 py-2 px-5">
                  <Star /> <p>favorites</p>
                </span>
                <span className="bg-white rounded-xl flex flex-row gap-5 m-2 py-2 px-5">
                  <Notebook /> <p>draft</p>
                </span>
              </menu>
            )}
          </div>
          <span>
            {/* today's messages */}
            <div>
              <h2 className="bg-blue-100 text-center p-2">Today</h2>

              {Chats.map((chat) => (
                <div
                  key={chat.id}
                  className="border-t-1 py-2 pl-3 flex flex-row hover:cursor-pointer overflow-y-hidden h-25"
                >
                  <Image
                    src={chat.avatar}
                    width={50}
                    height={50}
                    alt={chat.name}
                    className="m-3"
                  />
                  <span
                    className="flex flex-col"
                    onClick={() => setIsChat(chat.id)}
                  >
                    <span className="flex flex-row justify-between">
                      <p className="font-bold">{chat.name}</p>
                      <p>{chat.time}</p>
                    </span>
                    <p className="py-5">{chat.text}</p>
                  </span>
                </div>
              ))}
            </div>
            {/* yesterday */}
            <div>
              <h2 className="bg-blue-100 text-center p-2">Yesterday</h2>

              {Chats.map((chat) => (
                <div
                  key={chat.id}
                  className="border-t-1 py-2 pl-3 flex flex-row hover:cursor-pointer h-25 overflow-y-hidden"
                >
                  <Image
                    src={chat.avatar}
                    width={50}
                    height={50}
                    alt={chat.name}
                    className="m-3"
                  />
                  <span
                    className="flex flex-col "
                    onClick={() => setIsChat(chat.id)}
                  >
                    <span className="flex flex-row justify-between">
                      <p className="font-bold">{chat.name}</p>
                      <p>{chat.time}</p>
                    </span>
                    <p className="py-5">{chat.text}</p>
                  </span>
                </div>
              ))}
            </div>
          </span>
        </span>
        {/* chat open */}
        <span className="w-full ">
          {Chats.find((person) => person.id === isChat) ? (
            <>
              <span className="flex flex-row justify-between p-5 bg-primary text-white w-full">
                <p className="w-xs">{Chats[isChat].time}</p>
                <span className="flex gap-1 justify-center w-full -ml-55">
                  <Image
                    src={Chats[isChat].avatar}
                    width={50}
                    height={50}
                    alt={Chats[isChat].name}
                  />
                  <h1 className="font-bold pt-3">{Chats[isChat].name}</h1>
                </span>
                <Ellipsis />
              </span>
              {/* body */}

              <span className=" my-5">
                <p className="bg-blue-100 rounded-xl p-3 max-w-lg  mx-2 mt-5">
                  {Chats[isChat].text}
                </p>
              </span>
            </>
          ) : (
            <p className="text-center py-100 px-110">No messages</p>
          )}
          <span className="p-5 w-full -bottom-105 relative flex flex-row justify-between">
            <input
              type="text"
              className=" bg-gray-200 p-2 rounded-2xl w-[95%]"
            />
            <p className="rounded-full bg-blue-300 p-3">
              <Send />
            </p>
          </span>
        </span>
      </section>
    );
  }
  return (
    <section className="bg-white rounded-xl w-full  overflow-hidden h-screen">
      {isChat ? (
        <span className="w-full ">
          {Chats.find((person) => person.id === isChat) ? (
            <>
              <span className="flex flex-row justify-between p-5 bg-primary text-white w-full">
                <p className="w-xs">{Chats[isChat].time}</p>
                <span className="flex gap-1 justify-center w-full -ml-55">
                  <Image
                    src={Chats[isChat].avatar}
                    width={50}
                    height={50}
                    alt={Chats[isChat].name}
                  />
                  <h1 className="font-bold pt-3">{Chats[isChat].name}</h1>
                </span>
                <ArrowRight onClick={() => setIsChat(0)} />
              </span>
              {/* body */}

              <span className="">
                <p className="bg-blue-100 rounded-xl p-3 max-w-lg  mx-2 mt-5">
                  {Chats[isChat].text}
                </p>
              </span>
            </>
          ) : (
            <p className="text-center py-100 px-110">No messages</p>
          )}
          <span className="p-2 w-full -bottom-138 relative flex flex-row justify-between">
            <input
              type="text"
              className=" bg-gray-200 p-1 rounded-2xl w-full"
            />
            <p className="rounded-full bg-blue-300 p-3">
              <Send />
            </p>
          </span>
        </span>
      ) : (
        <span className="flex flex-col w-full overflow-y-scroll ">
          <div>
            <menu className="flex flex-row justify-between p-3">
              <EllipsisVertical
                onClick={() => setIsMenu(!isMenu)}
                className="hover:cursor-pointer"
              />
              <p>Received</p>
              <p>Sent</p>
            </menu>
            {isMenu && (
              <menu className="flex flex-col bg-blue-100 rounded-xl z-9 fixed top-29 left-15 justify-center">
                <span className="bg-white rounded-xl flex flex-row gap-5 m-2 py-2 px-5">
                  <Flag /> <p>flag</p>
                </span>
                <span className="bg-white rounded-xl flex flex-row gap-5 m-2 py-2 px-5">
                  <Timer /> <p>Reminder</p>
                </span>
                <span className="bg-white rounded-xl flex flex-row gap-5 m-2 py-2 px-5">
                  <Star /> <p>favorites</p>
                </span>
                <span className="bg-white rounded-xl flex flex-row gap-5 m-2 py-2 px-5">
                  <Notebook /> <p>draft</p>
                </span>
              </menu>
            )}
          </div>
          <span>
            {/* today's messages */}
            <div>
              <h2 className="bg-blue-100 text-center p-2">Today</h2>

              {Chats.map((chat) => (
                <div
                  key={chat.id}
                  className="border-t-1 py-2 px-1 flex flex-row hover:cursor-pointer overflow-y-hidden h-25"
                >
                  <Image
                    src={chat.avatar}
                    width={50}
                    height={50}
                    alt={chat.name}
                    className="my-3"
                  />
                  <span
                    className="flex flex-col px-3"
                    onClick={() => setIsChat(chat.id)}
                  >
                    <span className="flex flex-row justify-between">
                      <p className="font-bold">{chat.name}</p>
                      <p>{chat.time}</p>
                    </span>
                    <p className="py-5">{chat.text}</p>
                  </span>
                </div>
              ))}
            </div>
            {/* yesterday */}
            <div>
              <h2 className="bg-blue-100 text-center p-2">Yesterday</h2>

              {Chats.map((chat) => (
                <div
                  key={chat.id}
                  className="border-t-1 py-2 px-1 flex flex-row hover:cursor-pointer h-25 overflow-y-hidden"
                >
                  <Image
                    src={chat.avatar}
                    width={50}
                    height={50}
                    alt={chat.name}
                    className="m-"
                  />
                  <span
                    className="flex flex-col "
                    onClick={() => setIsChat(chat.id)}
                  >
                    <span className="flex flex-row justify-between">
                      <p className="font-bold">{chat.name}</p>
                      <p>{chat.time}</p>
                    </span>
                    <p className="py-5">{chat.text}</p>
                  </span>
                </div>
              ))}
            </div>
          </span>
        </span>
      )}
    </section>
  );
};

export default Messages;
