import React from "react";

export default function InputFeilds({type, title}) {
  return (
    <div>
      <input
        type={type}
        className="bg-[#F3F3F3] rounded-sm outline-none focus:outline-black h-[40px] w-full pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold"
        placeholder={title}
        style={{color: "#3C3C3C"}}
      />
    </div>
  );
}
