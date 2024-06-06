import React from "react";

export default function LoginButton({title}) {
  return (
    <div className="w-full flex justify-center">
      <button className="bg-gradient-to-r capitalize h-[35px] px-8 text-[14px] text-white  rounded  tracking-[-1.2%] font-bold leading-[14.3px] from-[#02A1E6] via-[#0250E6] to-[#0250E6]">
        {title}
      </button>
    </div>
  );
}
