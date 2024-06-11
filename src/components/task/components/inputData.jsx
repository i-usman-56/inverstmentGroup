import React, { useRef } from "react";
import { FaCalendarAlt, FaCaretDown } from "react-icons/fa";

export default function InputDate({title}) {
  const dateInputRef = useRef(null);
  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
      dateInputRef.current.click();
    }
  };
  return (
    <div>
      <div
        onClick={handleIconClick}
        className="relative w-[59px] flex justify-around items-center h-[23px] lg:w-full lg:px-4 lg:gap-4 xl:px-6 xl:gap-6 border border-gray-300 rounded-md bg-white"
      >
        <FaCalendarAlt
          className="text-[#3C3C3C] cursor-pointer"
          onClick={handleIconClick}
        />
        <p className="text-center lg:w-auto lg:block hidden text-[14px] font-semibold  tracking-[-1.7%] lg:left-1/2 lg-transform lg-translate-x-[-50%]">
        {title}
        </p>
        <input
          type="date"
          ref={dateInputRef}
          className="w-full h-full border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-0 absolute"
        />
        <FaCaretDown className="cursor-pointer" onClick={handleIconClick} />
      </div>
    </div>
  );
}
