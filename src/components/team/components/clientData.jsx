import React from "react";

export default function ClientData({ name, value }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <p className="text-[14px] md:text-[16px] xl:text-[30px] lg:text-[24px] leading-5 font-bold text-[#0250E6] uppercase tracking-[-1.8%] ">
          {name}
        </p>
        <div className="flex items-center gap-1">
          <div className="w-[10px] pl h-[10px] bg-[#00FF85] rounded-[50%]" />
          <p className="text-[15px] lg:text-[24px] xl:text-[30px] md:text-[16px] leading-5 font-bold text-[#0250E6] uppercase tracking-[-1.8%]">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
