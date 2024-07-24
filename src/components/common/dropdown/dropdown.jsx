import React from "react";

export default function DropDown({ name ,data,onChange,value }) {

  return (
    <div>
      <div className=" flex justify-center items-center">
        <div className="w-[180px] xl:w-[250px] mx-10 mt-[35px]">
          <select
            id="search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-4  py-2 border bg-[#F3F3F3] border-gray-300 placeholder-[#3C3C3C] text-[#3C3C3C] font-bold rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="" selected>
              {name}
            </option>
            {data?.map((option) => (
              <option key={option.id} value={option._id}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
