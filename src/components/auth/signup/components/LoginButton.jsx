import React from "react";

export default function LoginButton({title, onClick , pending,title_ar}) {
  return (
    <div className="w-full flex justify-center">
      
      <button disabled={pending === "pending"} className={`bg-gradient-to-r ${pending === "pending"?"bg-black cursor-not-allowed" : "from-[#02A1E6] via-[#0250E6] to-[#0250E6]"}  cursor-pointer capitalize h-[35px] px-8 text-[14px] text-white  rounded  tracking-[-1.2%] font-bold leading-[14.3px]`}
        onClick={onClick}
        
      >
        {`${pending === "pending"? title_ar : title}`}
      </button>
    </div>
  );
}
