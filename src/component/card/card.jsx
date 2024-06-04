import React from "react";
import P1 from "../../assets/img/p1.png";
import star from "../../assets/svg/star.svg";
import aeroplan from "../../assets/svg/aeroplan.svg";
export default function Card() {
  return (
    <div className="w-[396.6px] h-[247.26px] rounded-[22.39px] relative">
      <img src={P1} alt="picture" />
      <div className="absolute right-6 top-5 flex gap-x-[8.95px] justify-center items-center w-[63.8px] h-[35.82px] rounded-[8.95px] p-[8.95px] bg-[#00000080]">
        <img src={star} alt="star" />
        <p className="text-[13.43px] text-[#E5E5E5] font-bold">4.8</p>
      </div>

      <div className="flex justify-between items-center mt-3">
        <div>
          <span className="text-[17.91px] font-normal">Umrah Group, </span>
          <span className="text-[26.86px] font-semibold text-[#BC9543]">
            Makkah
          </span>
          <p>Rs. 24,000 onwards</p>
        </div>
        <img src={aeroplan} alt="aeroplan" />
      </div>
    </div>
  );
}
