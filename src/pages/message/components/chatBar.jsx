import React from 'react'
import image1 from "../../../assets/img/Vector (2).svg";
import image2 from "../../../assets/img/Vector (1).svg";
export default function ChatBar() {
  return (
    <div>
      <div className="h-[91px] rounded-md border border-[#D9D9D9] px-7 flex justify-between items-center">
                <div className="flex items-center gap-4 xl:gap-[28px]">
                  <div className="w-[20px] h-[20px] rounded-md bg-[cyan]" />
                  <h1 className="text-[16px] font-bold uppercase leading-6 tracking-[-1.8%]">
                    Phase 1 : LLC + Funding
                  </h1>
                </div>
                <div className="flex items-center gap-4 xl:gap-[28px]">
                  <h1 className="text-[16px] uppercase font-bold  leading-6 tracking-[-1.8%]">
                    Active Members :
                  </h1>
                  <p className="text-[16px] uppercase font-bold  leading-6 tracking-[-1.8%]">20</p>
                </div>
                <div className="flex items-center gap-4 xl:gap-7">
                  <div>
                    <img src={image2} alt="" srcset="" />
                  </div>
                  <div>
                    <img src={image1} alt="" srcset="" />
                  </div>
                </div>
              </div>
    </div>
  )
}
