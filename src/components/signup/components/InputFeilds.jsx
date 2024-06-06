import React from "react";

export default function InputFields({ type, name, title, value, onChange, error, autocomplete }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`bg-[#F3F3F3] rounded-sm outline-none focus:outline-none h-[40px] w-full pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
          error ? "border-red-500 focus:border-red-500" : "border-transparent focus:border-black"
        } border-2`}
        placeholder={title}
        style={{ color: "#3C3C3C" }}
        autoComplete={autocomplete}
      />
      {/* {error && <span className="text-red-500 text-xs">{error}</span>} */}
    </div>
  );
}
