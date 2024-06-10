import React from "react";
import InputDate from "../task/components/inputData";
import './graph.css'

export default function Graph() {
    const divCard = [
        {
          id: 1,
          name: "Facebook",
          color: "#0250E6",
        },
        {
          id: 2,
          name: "Instagram",
          color: "#A500B3",
        },
        {
          id: 3,
          name: "TYPEFORM CAMAPIGN",
          color: "#479090",
        },
      ];
    const divCardDEtail = [
        {
          id: 1,
          name: "Facebook",
          detail:"Week Total: 110",
          color: "#0250E6",
        },
        {
          id: 2,
          name: "Instagram",
          detail:"Week Total: 110",
          
          color: "#A500B3",
        },
        {
          id: 3,
          name: "TYPEFORM CAMAPIGN",
          detail:"Week Total: 110",

          color: "#479090",
        },
      ];
  return (
    <div>
      <div className="mx-[20px] graph-margin md:mx-7 marginContainer   ">
        <div
          className="w-full lg:w-[50%] rounded  px-[15px] md:px-[80px] lg:px-[50px]  pt-[20px] pb-[60px]"
          style={{ boxShadow: "0 1px 5px 0 rgba(5, 5, 5, 0.1)" }}
        >
          <div className=" flex justify-between pb-[30px]">
            <h1 className="text-[15px] uppercase lg:text-[20px] text-[#0250E6] font-bold tracking-[-1.7%] leading-5">
              SOURCING CHANNELs
            </h1>
            <InputDate />
          </div>
          <div className="flex justify-between ">
            {divCard.map((item) => (
              <div className="flex items-center graph-text graph-gap  gap-1.5" key={item.id}>
                <div
                  className="w-[20px] h-[20px] rounded-sm"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-[10px] md:text-[14px] whitespace-nowrap graph-text uppercase font-semibold leading-[12px] tracking-[-1.7%] text-[#000000]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-[25px] md:mt-8 space-y-4">
          {divCardDEtail.map((item) => (
               <div className="flex justify-center items-start gap-5" key={item.id}>
               <div
                style={{ backgroundColor: item.color }}
               className={`w-[30px] h-[24px] rounded-sm`}/>
               <div>
                   <p className="text-[16px] leading-5 tracking-[-1.7%] font-medium">
                   Instagram Sourced Leads
                   </p>
                   <p className="text-[20px] leading-6 tracking-[-1.7%] font-bold">
                   {item.detail}
                   </p>
               </div>
             </div>
            ))}
         
          </div>
        
        </div>
      </div>
    </div>
  );
}
