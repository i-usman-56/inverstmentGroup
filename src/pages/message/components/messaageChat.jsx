import React from "react";

export default function MessaageChat({ data , click ,backClick}) {
  return (
    <div>
      {data?.map((item, index) => (
        <div key={index} onClick={()=>click(item)} className="border-b py-3 border-b-[#00000034]">
          <div className="flex justify-between ">
            <div className="flex gap-3 items-center ">
              <div className="w-[20px] h-[20px] rounded-md" 
              
              style={{ backgroundColor: `#457857` }}/>
              <h1 className="text-[16px] font-bold leading-6 tracking-[-1.8%]">
                {item.name}
              </h1>
            </div>
           <div className="w-[22px] h-[22px] flex justify-center items-center mr-2 rounded-[50%] bg-[#0250E6]">
              <p className="text-[14px] text-white font-medium">2</p>
            </div>
          </div>
          <div className="ml-[32px] mt-3">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
