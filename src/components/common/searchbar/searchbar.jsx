import React from 'react'
import { IoIosSearch } from 'react-icons/io'

export default function SearchBar({placholder}) {
  return (
    <>
         <div className="relative mx-10 lg:mx-0 mt-[35px] lg:mt-0 lg:w-[275px] xl:w-[350px]">
            <input
              type="search"
              id="search"
              placeholder={placholder}
              className="w-full pl-4 pr-8 py-2 border bg-[#F3F3F3] border-gray-300 placeholder-[#3C3C3C] text-[#3C3C3C] font-bold rounded-md focus:outline-none focus:border-blue-500"
            />
            <div className="absolute inset-y-0 right-0  flex items-center pr-3 pointer-events-none">
              <IoIosSearch className="text-[#3C3C3C]" />
            </div>
          </div>
    </>
  )
}
