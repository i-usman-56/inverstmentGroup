import React from "react";
import Navbar from "../../components/Navbar/navbar";
import FooterMobile from "../../components/auth/signup/components/footer/Footer";
import TeamActivity from "../../components/team/team";

export default function TeamActivityScreen() {
  return (
    <div>
      <div className="from-[#0250E6] h-[80vh] to-[#FFFFFF] bg-gradient-to-b">
        <Navbar />
        <TeamActivity/>
        <div className="w-full pb-[15px] pt-[50px] md:pt-0">
          <FooterMobile />
        </div>
      </div>
    </div>
  );
}
