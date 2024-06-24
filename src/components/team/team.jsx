import React from "react";
import RoundedTopBg from "../Rounded/rounded";
import px from "../../assets/svg/pc.svg";
import px1 from "../../assets/svg/complete.svg";
import { ActivityData } from "../../data/data";
import DataTeam from "./components/dataTeam";
import TeamCard from "./components/teamCard";

export default function TeamActivity() {
  return (
    <>
      <RoundedTopBg>
        <div className="pb-[68px] lg:pb-0 pt-[30px] md:pt-[45px] lg:pt-[65px] ">
          <div>
            <h1 className="text-[14px] md:text-[16px] lg:text-[26px] xl:text-[32px] font-bold leading-5 tracking-[-1.7%] text-[#0250E6] ">
              Team Activity
            </h1>
          </div>
          <div className="xl:pt-[65px] lg:pt-[35px]">
            <TeamCard />
          </div>
        </div>
      </RoundedTopBg>
    </>
  );
}
