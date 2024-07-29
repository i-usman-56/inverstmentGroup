import React from "react";

export default function DataTeam({ name, value, img }) {
  console.log(value)
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-[20px] md:text-[24px] xl:text-[32px]  font-bold leading-5 text-[#0250E6] tracking-[-1.7%]">
          {value}
        </h1>
        <div className="flex items-center gap-2 md:pt-1 xl:pt-3">
          <img
            src={img}
            alt=""
            className="w-[12px] h-[12px] md:w-[20px] md:h-[20px]"
          />
          <p className="text-[13px] md:text-[18px] font-bold leading-5 text-[#0250E6] tracking-[-1.7%]">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}
