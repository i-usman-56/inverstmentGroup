import React from "react";

export default function LoginHeader({ img, title, desc }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={img} alt="" />
        <h1 className="text-[20px] lg:text-[25px] xl:text-[35px] pt-[20px] leading-[22px] lg:leading-7 tracking-[-1.7%] font-bold text-[#3C3C3C]">
          {title}
        </h1>
        <p className="text-[14px] lg:text-[16px] pt-[22px] leading-[16.7px] tracking-[-1.7%] font-bold text-[#3C3C3C]">
          {desc}
        </p>
      </div>
    </div>
  );
}
