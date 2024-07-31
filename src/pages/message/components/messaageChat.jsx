import React from "react";

export default function MessaageChat({ data , click ,backClick}) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} onClick={click} className="border-b py-3 border-b-[#00000034]">
          <div className="flex justify-between ">
            <div className="flex gap-3 items-center ">
              <div className="w-[20px] h-[20px] rounded-md" 
              
              style={{ backgroundColor: `#${item.color}` }}/>
              <h1 className="text-[16px] font-bold leading-6 tracking-[-1.8%]">
                {item.title}
              </h1>
            </div>
           {item.notification&& <div className="w-[22px] h-[22px] flex justify-center items-center mr-2 rounded-[50%] bg-[#0250E6]">
              <p className="text-[14px] text-white font-medium">{item.notification}</p>
            </div>}
          </div>
          <div className="ml-[32px] mt-3">
            <p>
                {item.data}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
