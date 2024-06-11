import React, { useRef } from "react";
import "./Task.css";
import MeetingCard from "../meetingcard/meetingCard";
import InputDate from "./components/inputData";
export default function Tasks() {
  return (
    <div className="">
      <div
        className="w-full  rounded  px-[15px] md:px-[80px] lg:px-[20px] lg:h-full xl:px-[50px]  pt-[20px] pb-[60px]"
        // style={{ boxShadow: "0 1px 5px 0 rgba(5, 5, 5, 0.1)" }}
      >
        <div className=" flex justify-between pb-[30px] lg:pt-7 lg:pb-0 ">
          <h1 className="text-[15px] lg:text-[20px] text-[#0250E6] font-bold tracking-[-1.7%] leading-5">
            TODAY’S TASKS
          </h1>
            <InputDate title="Today"/>
        </div>
        <div className="flex flex-col lg:pl-5 lg:mt-[48px] h-[218px] lg:h-[315px] overflowContainerY space-y-1">
          {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
            <MeetingCard
              key={index}
              date="Tues Mar 10"
              time="7:00 AM"
              title="Meeting with Tony & Tom"
              attendees="Attendees: Tony @example.com..."
            />
          ))}
        </div>
      </div>
    </div>
  );
}
