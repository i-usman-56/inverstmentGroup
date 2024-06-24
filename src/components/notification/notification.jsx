import React from "react";
import RoundedTopBg from "../Rounded/rounded";
import NotificationCard from "./components/notificationCard";

export default function Notification() {
  return (
    <>
      <RoundedTopBg>
        <div className=" px-1 pt-[45px] md:pt-[52px] lg:pt-[60px] xl:pt-[70px]">
          <p className="text-[15px] md:text-[20px] lg:text-[28px] xl:text-[32px] leading-5 font-bold text-[#0250E6] tracking-[-1.7%] ">
            Notifications
          </p>
        </div>
        <div className="pt-[30px] lg:pt-[75px] xl:pt-[120px] pb-[65px] lg:pb-0 lg:px-[60px] xl-px-[180px]">
          <NotificationCard />
        </div>
      </RoundedTopBg>
    </>
  );
}
