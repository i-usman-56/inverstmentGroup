import React from "react";
import Logo from "../../../../assets/svg/logo.svg";

export default function FooterMobile() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-3">
        <img src={Logo} alt="" className="w-[97px] h-[73px]" />
        <div className="pt-[28px] lg:pt-[45px]">
          <h1 className="text-center text-[12px] leading-[14px] font-normal tracking-[-1.3%] text-[#000000] ">
            Copyright MMM Investment Group 2024{" "}
          </h1>
          <p className="text-[#0250E6] text-center text-[12px] leading-[14px] font-normal tracking-[-1.3%]">
            Powered By AO GenTech
          </p>
          <p className="text-[#000000] text-center text-[12px] leading-[14px] font-normal tracking-[-1.3%]">
          Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
