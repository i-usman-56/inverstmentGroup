import React from "react";

export default function MessagechatLg({ data }) {
  return (
    <div>
      {data?.map((item, index) => (
        <div key={index} className="pt-[8px] px-6 ">
          <div className="border-b pb-2 border-b-[#00000034]">
            <div className="flex justify-between ">
              <div className="flex gap-3 items-center ">
                <div
                  className="w-[16px] h-[16px] rounded-md"
                  style={{ backgroundColor: `#0250E6` }}
                />
                <h1 className="text-[14px] font-bold leading-6 tracking-[-1.8%]">
                  {item.name}
                </h1>
              </div>
           
                <div className="w-[18px] h-[18px] flex justify-center items-center mr-2 rounded-[50%] bg-[#0250E6]">
                  <p className="text-[14px] text-white font-medium">5</p>
                </div>
       
            </div>
            <div className="ml-[32px] mt-1 text-[#777777]">
              <p className="text-[12px] font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
