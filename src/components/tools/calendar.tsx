// components/Calendar.tsx
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default styles
import { format, isSameDay } from "date-fns";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

interface Event {
  date: Date;
  title: string;
}

interface CalendarProps {
  events?: Event[];
}

const Dates: React.FC<CalendarProps> = ({ events = [] }) => {
  const [date, setDate] = useState<Date>(new Date());

  // const handleDateChange = (newDate: Date | Date[]) => {
  //   if (!Array.isArray(newDate)) {
  //     setDate(newDate);
  //   }
  // };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const hasEvent = events.find((event) => isSameDay(event.date, date));
      return hasEvent ? (
        <p className="text-red-500 text-xs">{hasEvent.title}</p>
      ) : null;
    }
    return null;
  };

  return (
    <div className="flex flex-col px-2 ">
      <span className="flex lg:flex-row flex-col justify-between">
        <span className="bg-white p-2 rounded-xl w-full lg:mx-3 my-2 flex flex-row justify-between">
          <span className="flex-col">
            <p>Total task</p>
            <h1 className="bg-primary text-white p-1 text-center rounded-xl">
              121
            </h1>
          </span>
          <Image
            src="/collaboration/loading.png"
            width={100}
            height={100}
            alt="bar"
          />
        </span>
        <span className="bg-white p-2 rounded-xl w-full lg:mx-3 my-2 flex flex-row justify-between">
          <span className="flex-col">
            <p>Total task</p>
            <h1 className="bg-primary text-white p-1 text-center rounded-xl">
              121
            </h1>
          </span>
          <Image
            src="/collaboration/loading.png"
            width={100}
            height={100}
            alt="bar"
          />
        </span>
        <span className="bg-white p-2 rounded-xl w-full lg:mx-3 my-2 flex flex-row justify-between">
          <span className="flex-col">
            <p>Total task</p>
            <h1 className="bg-primary text-white p-1 text-center rounded-xl">
              121
            </h1>
          </span>
          <Image
            src="/collaboration/loading.png"
            width={100}
            height={100}
            alt="bar"
          />
        </span>
        <Image
          src="/collaboration/bar.png"
          width={200}
          height={200}
          alt="bar"
        />
      </span>
      <span className="flex lg:flex-row flex-col m-2">
        <Calendar
          value={date}
          className="w-full border rounded-lg shadow-lg -ml-2 "
          tileContent={tileContent}
        />
        <div className="flex flex-col">
          <h1 className="p-3 text-white text-center rounded-xl m-2 bg-blue-300">
            Add new task
          </h1>
          <div className="bg-white rounded-xl flex flex-col p-2 m-2">
            <span className="flex flex-row justify-between">
              <p className="p-2 rounded text-center bg-blue-50">Today</p>
              <p>10/12/2025</p>
            </span>
            <p className="bg-primary text-white  justify-center m-2 rounded-xl p-2">
              Over due- 10:30am
            </p>
            <span className="flex-col flex">
              <p className="text-xs">Description</p>
              <p>Convert graph point</p>
            </span>
            <p className="bg-blue-50 rounded justify-center m-2 p-2">
              Conference-2:00pm
            </p>
          </div>
          <div className="bg-white rounded-xl flex flex-col p-2 m-2">
            <p className="bg-blue-50 rounded justify-center m-2">Over dues</p>
            <p className="bg-primary rounded-xl text-white text-center p-1">
              09/12/2025 -11:40am
            </p>
            <span className="flex-col flex">
              <p className="text-xs">Description</p>
              <p>Convert graph point</p>
            </span>
            <p className="bg-primary rounded-xl text-white text-center p-1">
              13/12/2025 -11:40am
            </p>
            <span className="flex-col flex">
              <p className="text-xs">Description</p>
              <p>Convert graph point</p>
            </span>
            <p className="bg-primary rounded-xl text-white text-center p-1 justify-between flex">
              View all <ChevronRight />
            </p>
          </div>
        </div>
      </span>
      <span className="flex justfy-between">
        <span className="text-white text-center p-3 w-full bg-blue-200 rounded-xl m-2">
          <h1 className="text-xl">04</h1>
          <p>Future task assigned</p>
        </span>
        <span className="text-white  bg-primary rounded-xl w-full m-2 p-3 text-center">
          <h1 className="text-xl">265</h1>
          <p>Completed tasks</p>
        </span>
      </span>
    </div>
  );
};

export default Dates;
