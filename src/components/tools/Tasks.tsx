import { Task_one, Task_three, Task_two } from "@/constants/tasks";
import { ChevronDownCircle } from "lucide-react";
import React, { useState } from "react";

const Tasks = () => {
  const [isTask, setIsTask] = useState(Task_one[0].id);
  return (
    <section className="flex flex-col p-2">
      <div className="flex flex-col lg:flex-row justify-between ">
        <div className="bg-white rounded-xl p-3 w-full items-center">
          <span className="flex flex-col border-6 rounded-full border-primary p-5 items-center">
            <p>Total task</p>
            <h2 className="font-bold">116</h2>
          </span>
          <span className="flex flex-col lg:flex-row justify-between">
            <span className="flex flex-col p-1">
              <span className="flex flex-col border-6 rounded-full border-primary p-5 items-center">
                <p>Completed</p>
                <h2 className="font-bold">86%</h2>
              </span>
              <p className=" text-center">Last week assignee</p>
              <h2 className="font-bold text-center">42</h2>
            </span>
            <span className="flex flex-col p-1">
              <span className="flex flex-col border-6 rounded-full border-primary p-5 items-center">
                <p>Completed</p>
                <h2 className="font-bold">64%</h2>
              </span>
              <p className="text-center">This week assignee</p>
              <h2 className="font-bold text-center">34</h2>
            </span>
          </span>
        </div>
        <div className="bg-white rounded-xl p-3 w-full lg:mx-2 mt-2 lg:mt-0 items-center">
          <span className="flex flex-col border-6 rounded-full border-primary p-5 items-center">
            <p>In Process</p>
            <h2 className="font-bold">17</h2>
          </span>
        </div>
        <div className="bg-white rounded-xl p-3 w-full lg:mx-2 mt-2 lg:mt-0 items-center">
          <span className="flex flex-col border-6 rounded-full border-primary p-5 items-center">
            <p>Over due</p>
            <h2 className="font-bold">11</h2>
          </span>
        </div>
        <div className="bg-white rounded-xl p-3 w-full lg:mx-2 mt-2 lg:mt-0 items-center">
          <span className="flex flex-col border-6 rounded-full border-primary p-5 items-center">
            <p>Completed</p>
            <h2 className="font-bold">68</h2>
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-5 py-5 ">
        <div className="flex flex-col w-full">
          <h2 className="font-bold text-white p-2 rounded m-2 bg-primary">
            Task assigned by team
          </h2>
          {Task_one.map((task) => (
            <div className="rounded bg-white p-2 my-2" key={task.id}>
              <div>
                <span
                  className="flex flex-row justify-between"
                  onClick={() => setIsTask(task.id)}
                >
                  <h1 className="text-blue-400">{task.team}</h1>
                  <p className="rounded-full p-1 border"> + 3</p>
                  <ChevronDownCircle className="text-blue-500" />
                </span>
                {isTask === task.id && (
                  <>
                    <div className="border-t-1">{task.first_task}</div>
                    <div className="border-t-1">{task.second_task}</div>
                    <div className="border-t-1">{task.third_task}</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full">
          <h2 className="font-bold text-white p-2 rounded m-2 bg-primary  ">
            Recent Tasks assigned by you
          </h2>
          {Task_two.map((task) => (
            <div className="rounded bg-white p-2 my-2" key={task.id}>
              <div>
                <span
                  className="flex flex-row justify-between"
                  onClick={() => setIsTask(task.id)}
                >
                  <h1 className="text-blue-400">{task.team}</h1>
                  <p className="rounded-full p-1 border"> + 3</p>
                  <ChevronDownCircle className="text-blue-500" />
                </span>
                {isTask === task.id && (
                  <>
                    <div className="border-t-1">{task.first_task}</div>
                    <div className="border-t-1">{task.second_task}</div>
                    <div className="border-t-1">{task.third_task}</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full">
          <h2 className="font-bold text-white p-2 rounded m-2 bg-primary  ">
            Over dues
          </h2>
          {Task_three.map((task) => (
            <div className="rounded bg-white p-2 my-2" key={task.id}>
              <div>
                <span
                  className="flex flex-row justify-between"
                  onClick={() => setIsTask(task.id)}
                >
                  <h1 className="text-blue-400">{task.team}</h1>
                  <p className="rounded-full p-1 border"> + 3</p>
                  <ChevronDownCircle className="text-blue-500" />
                </span>
                {isTask === task.id && (
                  <>
                    <div className="border-t-1">{task.first_task}</div>
                    <div className="border-t-1">{task.second_task}</div>
                    <div className="border-t-1">{task.third_task}</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tasks;
