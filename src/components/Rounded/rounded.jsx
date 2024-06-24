import React from 'react'

export default function RoundedTopBg({children}) {
  return (
    <div
    style={{ boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.05)" }}
    className="bg-[#FFFFFF] px-5 md:px-8 lg:px-10 lg:mb-[120px] xl:px-[70px] lg:mx-[55px] xl:mx-[75px]   rounded-t-md mt-[64px] lg:mt-[78px] lg:pb-24 lg:rounded-md">
      {children}
    </div>
  )
}
