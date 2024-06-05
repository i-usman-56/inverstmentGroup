import React from 'react'

export default function Checkbox({handleCheckboxChange,isChecked}) {
  return (
    <div>
        <div className="flex justify-center items-center pt-[36px] lg:pt-[24px] gap-1.5">
                <input
                  type="checkbox"
                  id="rememberDevice"
                  className="hidden"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="rememberDevice"
                  className="relative flex items-center cursor-pointer"
                >
                  <span
                    className={`w-4 h-4 inline-block rounded-sm ${
                      isChecked
                        ? "bg-blue-500 border-blue-500"
                        : "bg-[#D9D9D9] border-gray-300"
                    }`}
                  ></span>
                  <span className="text-[10px] md:text-[13px] text-[#3C3C3C] font-bold leading-4 tracking-[-1.7%] ml-2">
                    Remember This device For Future Sessions in CRM
                  </span>
                </label>
              </div>
    </div>
  )
}
