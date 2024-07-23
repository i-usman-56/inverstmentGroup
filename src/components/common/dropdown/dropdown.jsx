import React from "react";

export default function DropDown({ name }) {
    const option = [
        { id: 1, value: "Jeff French", title: "Robert Patterson" },
        { id: 2, value: "Lena Dixon", title: "Ralph Perez" },
        { id: 3, value: "Chase Yates", title: "Melvin Watts" },
        { id: 4, value: "Josephine Mann", title: "Isabella Boone" },
      ];
  return (
    <div>
      <div className=" flex justify-center items-center">
        <div className="w-[180px] mx-10 mt-[35px]">
          <select
            id="search"
            // defaultValue={}
            className="w-full px-4  py-2 border bg-[#F3F3F3] border-gray-300 placeholder-[#3C3C3C] text-[#3C3C3C] font-bold rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="" selected>
              {name}
            </option>
            {option.map((option) => (
              <option key={option.id} value={option.value}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
