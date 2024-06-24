import React from 'react'
import { renderData } from '../../../data/data'

export default function UserAccessCard() {
  return (
    <div>
         <div className="flex gap-3  lg:pt-[45px] xl:pt-16 ">
          {" "}
          {renderData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center"
            >
              <img src={item.img} alt="" className="w-[25px] h-[22px]" />
              <h1 className="text-[12px] md:text-[13px] lg:text-[16px] uppercase font-semibold leading-5 tracking-[-1.7%] text-[#0250E6]">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
    </div>
  )
}
