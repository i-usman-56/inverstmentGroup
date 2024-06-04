import React from "react";

export default function NavBar() {
  return (
    <nav className="flex justify-between mx-[70px] !sticky h-[57px] items-center border-2  bg-[#EAF0F0] rounded-[5px] p-[10.5px]">
      <div className="text-[22.92px] font-bold text-[#222222]">
        Atlus Travels
      </div>
      <ul className="flex gap-x-7">
        <li className="active:text-[#283841] text-[14px] font-semibold cursor-pointer">
          Home
        </li>
        <li className="text-[#283841] text-[14px] font-medium cursor-pointer opacity-60">
          About
        </li>
        <li className="text-[#283841] text-[14px] font-medium cursor-pointer opacity-60">
          Hotels & Villas
        </li>
        <li className="text-[#283841] text-[14px] font-medium cursor-pointer opacity-60">
          Flights
        </li>
        <li className="text-[#283841] text-[14px] font-medium cursor-pointer opacity-60">
          Flights
        </li>
        <li className="text-[#283841] text-[14px] font-medium cursor-pointer opacity-60">
          blog
        </li>
      </ul>
      <div className="flex gap-x-4">
        <button className="h-[36px] text-[14px] font-semibold tracking-[6%] text-[#283841]">
          Login
        </button>
        <button className="h-[36px] rounded-[5px] bg-[#BC9543] py-2 px-2 flex justify-center items-center w-[99px] text-[14px] font-semibold text-[#FFFFFF] tracking-[6%]">
          sign up
        </button>
      </div>
    </nav>
  );
}
