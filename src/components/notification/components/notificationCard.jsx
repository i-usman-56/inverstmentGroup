import React from "react";
import { NotificationData } from "../../../data/data";
import EmptyCircle from "./emptyCircle";
import FillCircle from "./fillCircle";

export default function NotificationCard() {
  return (
    <>
      {NotificationData.map((item, index) => {
        return (
          <div
            key={index}
            className="border-[1px] relative border-[#D9D9D9] flex items-center h-[65px] md:h-[75px] rounded-md">
            <div className="flex justify-between w-full  pl-3 md:px-9 gap-1.5 md:gap-0">
              <div className="w-[70%] ">
                <h1 className="text-[11px] md:text-[14px] lg:text-[16px] whitespace-normal uppercase font-[550] tracking-[-1.8%] leading-5 ">
                  {item.title}
                </h1>
              </div>

              <div className="flex items-center md:justify-end w-[35%] gap-2">
                <label
                  htmlFor=""
                  className="text-[12px]  md:text-[14px] lg:text-[16px] uppercase font-medium tracking-[-1.8%] leading-5 "
                >
                  mark ar read
                </label>
                {item.status ? <FillCircle /> : <EmptyCircle />}
              </div>
            </div>
            {!item.status && (
              <div className="absolute w-[15px] h-[15px] -top-[6px] -right-[6px] rounded-[50%] bg-[#00FF85]" />
            )}
          </div>
        );
      })}
    </>
  );
}
