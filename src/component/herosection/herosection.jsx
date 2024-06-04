import React from "react";
import "./herosection.css";
import NavBar from "../nav/navBar.jsx";
import plane1 from "../../assets/svg/plane1.svg";
import arrowDown from "../../assets/svg/arrow-down.svg";
import arrowRight from "../../assets/svg/arrow-right.svg";
import { DatePicker } from "antd";
export default function Herosection() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <section className="heroSectionBackgroundImage  flex flex-col">
      <NavBar />
      <div className="text-center">
        <div className="text-[54px] text-[#FFFFFF] font-bold tracking-[6%] mt-28">
          Begin your journey to find the <br /> perfect vacation.
        </div>
        <div className="text-[#FFFFFF] text-[13.5px] font-medium tracking-[6%] mt-14">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard <br /> dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it
        </div>
      </div>

      <div className="mx-[70px] mt-auto mb-12">
        <div className="rounded-tr-[10px] rounded-tl-[10px] flex justify-center items-center bg-[#EAF0F0]  p-[21px] gap-x-[15px] w-[174px]">
          <img src={plane1} alt="plane" />
          <p className="text-[14px] font-bold text-[#283841] tracking-[6%]">
            Flights
          </p>
        </div>
        <div className="flex justify-between items-center p-[21px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] bg-[#EAF0F0]">
          <div>
            <div className="flex gap-x-4">
              <p className="text-[14px] text-[#283841] font-bold">
                Destinations
              </p>
              <img src={arrowDown} alt="Arrow Down" />
            </div>
            <input
              type="text"
              placeholder="Where are you going?"
              className="bg-[#2838410F] sm:w-[150px]  xl:w-[210px] outline-none rounded-[4.5px] mt-1 pl-2 h-[34px] my-input"
            />
          </div>

          <div>
            <p className="text-[14px] text-[#283841] font-bold">Check In</p>
            <DatePicker
              onChange={onChange}
              placeholder="Choose Dates"
              className="xl:w-[210px] sm:w-[150px] rounded-[4.5px] bg-[#2838410F] text-[#283841] mt-1"
            />
          </div>

          <div>
            <p className="text-[14px] text-[#283841] font-bold">Check out</p>
            <DatePicker
              onChange={onChange}
              placeholder="Choose Dates"
              className="xl:w-[210px] sm:w-[150px] rounded-[4.5px] bg-[#2838410F]  mt-1"
            />
          </div>
          <div>
            <div className="flex gap-x-4">
              <p className="text-[14px] text-[#283841] font-bold">Gust</p>
              <img src={arrowDown} alt="Arrow Down" />
            </div>
            <input
              type="text"
              placeholder="Add gust"
              className="bg-[#2838410F] xl:w-[210px] sm:w-[150px] outline-none rounded-[4.5px] mt-1 pl-2 h-[34px] my-input"
            />
          </div>

          <button className="flex gap-x-3 items-center bg-[#BC9543] rounded-[6px] p-[9px] xl:h-[36px] sm:h-[32px] xl:mt-5 sm:mt-6 text-center">
            <div className="font-medium text-[14px] tracking-[6%] text-[#FFFFFF]">
              search flights
            </div>
            <img src={arrowRight} alt="arrowRight" />
          </button>
        </div>
      </div>
    </section>
  );
}
