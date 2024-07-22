import React from "react";

export default function LoginButton({title, onClick}) {
  return (
    <div className="w-full flex justify-center">
      <button className="bg-gradient-to-r cursor-pointer capitalize h-[35px] px-8 text-[14px] text-white  rounded  tracking-[-1.2%] font-bold leading-[14.3px] from-[#02A1E6] via-[#0250E6] to-[#0250E6]"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}
