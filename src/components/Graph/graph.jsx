import React from "react";
import InputDate from "../task/components/inputData";
import './graph.css'
import LineChart from "./components/linechart";
import ApexChart from "./components/linechart";

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
      <div className="  ">
        <div
          className="w-full rounded  px-[15px] md:px-[80px] lg:px-[20px] xl:px-[50px]  pt-[20px] pb-[60px] lg:pb-5"
          // style={{ boxShadow: "0 1px 5px 0 rgba(5, 5, 5, 0.1)" }}
        >
          <div className=" flex justify-between pb-[30px] lg:pb-0 lg:pt-7">
            <h1 className="text-[15px] uppercase lg:text-[20px] text-[#0250E6] font-bold tracking-[-1.7%] leading-5">
              SOURCING CHANNELs
            </h1>
            <InputDate  title="05/20/24 - 05/27/24"/>
          </div>
          <div className="pt-[26px]">
            <ApexChart/>
          </div>
          {/* <div className="flex justify-between ">
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
          </div> */}
          <div className="mt-[25px] lg:mt-0.5 lg:flex lg:justify-between lg:px-0 md:mt-8 space-y-4 lg:space-y-0">
          {divCardDEtail.map((item) => (
               <div className="flex  justify-center   items-start gap-5 lg:gap-2" key={item.id}>
               <div
                style={{ backgroundColor: item.color }}
               className={`w-[30px] h-[24px] lg:w-[20px] lg:h-[18px] rounded-sm`}/>
               <div>
                   <p className="text-[16px] lg:text-[14px] lg:leading-4 leading-5 xl:whitespace-nowrap tracking-[-1.7%] font-medium">
                   Instagram Sourced Leads
                   </p>
                   <p className="text-[20px] lg:text-[17px] leading-6 tracking-[-1.7%] font-bold">
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
