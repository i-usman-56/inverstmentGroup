import React from "react";
import Navbar from "../../components/Navbar/navbar";
import FooterMobile from "../../components/auth/signup/components/footer/Footer";
import Notification from "../../components/notification/notification";

export default function NotificationScreen() {
  return (
    <>
      <div className="from-[#0250E6] h-[80vh] to-[#FFFFFF] bg-gradient-to-b">
        <Navbar />
        <Notification/>
        <div className="w-full pb-[15px] pt-[50px] md:pt-0">
          <FooterMobile />
        </div>
      </div>
    </>
  );
}
