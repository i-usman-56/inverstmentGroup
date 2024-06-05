import React from "react";
import Logo from "../../../assets/svg/logo.svg";
import Picture from "../../../assets/svg/My password-amico 1.svg";

export default function SidePic() {
  return (
    <div>
      <div className="from-[#02A1E6] flex flex-col h-screen justify-center   to-[#0250E6] bg-gradient-to-b">
        <div className="pl-[12%]">
          <img
            src={Logo}
            alt=""
            className="w-[100px] h-[79px] xl:w-[115px] xl:h-[85px]"
          />
        </div>
        <div className="flex justify-center items-center">
          <img src={Picture} alt="" className="w-[450px] xl:w-[540px] " />
        </div>
      </div>
    </div>
  );
}
