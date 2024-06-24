import React from "react";

export default function UserCard({ data }) {
  return (
    <div>
      <div className="mt-[60px] pb-8 md:pb-[45px] lg:pb-0  lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-x-5 xl:gap-x-12  lg:gap-y-4 xl:gap-y-6   space-y-5 lg:space-y-0">
        {data.map((item) => (
          <div
            key={item.id}
            className="pt-[14px]  pb-5 md:pb-7 md:pt-6 pl-5 pr-[25px] rounded-[5px] flex flex-col justify-center  "
            style={{ boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex justify-between">
              <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold leading-5 tracking-[-1.7%]">
                {item.name}
              </h1>
              <p className="flex items-center lg:text-[16px]  text-[#000000] gap-1 text-[12px] md:text-[13.5px] font-bold leading-4 tracking-[-1.7%] ">
                Status: {item.status}
                {`${item.status == true ? "Active" : "Non-Active"}`}{" "}
                <div
                  className={`w-[10px] ${
                    item.status == true ? "bg-[#00FF85]" : " bg-red-500"
                  } bg-[#00FF85] h-[10px] rounded-[50%]`}
                />
              </p>
            </div>
            <p className="text-[15px] md:text-[17px] lg:text-[18px] w-fit pt-[14px] text-[#000000] font-[500] leading-[17px] tracking-[-1.7%] border-b">
              {item.phone}
            </p>
            <p className="text-[15px] md:text-[17px] lg:text-[18px] pt-[14px] text-[#000000] font-[500] leading-[17px] tracking-[-1.7%]">
              {item.email}
            </p>
            <div className="flex pt-[14px] justify-between">
              <p className="flex items-center gap-1 text-[#000000] text-[14px] md:text-[16px] lg:text-[18px] font-[700] leading-[17px] tracking-[-1.7%] ">
                Access Level:{" "}
                <span className="text-[14px] md:text-[16px] lg:text-[18px] font-[700] leading-[17px] tracking-[-1.7%] text-[#0250E6]">
                  {item.acceslvl}
                </span>
              </p>
              <button className="text-[12px] md:text-[14px] lg:text-[16px] font-[650] text-[#0250E6] leading-4 tracking-[-1.7%]">
                Edit User
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
