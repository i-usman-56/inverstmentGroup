import React, { useState } from "react";
import RoundedTopBg from "../Rounded/rounded";
import TeamCard from "./components/teamCard";
import DetailTeam from "./components/detailteam";

export default function TeamActivity() {
  const [viewinfo, setViewInfo] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const viewDetail = (team) => {
    setSelectedTeam(team);
    setViewInfo(true);
  };
  const closeDetail = () => {
    setViewInfo(false);
    setSelectedTeam(null);
  };
  return (
    <>
      <RoundedTopBg>
        {!viewinfo && (
          <div className="pb-[68px] lg:pb-0 pt-[30px] md:pt-[45px] lg:pt-[65px] ">
            <div>
              <h1 className="text-[14px] md:text-[16px] lg:text-[26px] xl:text-[32px] font-bold leading-5 tracking-[-1.7%] text-[#0250E6] ">
                Team Activity
              </h1>
            </div>
            <div className="xl:pt-[65px] lg:pt-[35px]">
              <TeamCard ViewDetail={viewDetail} />
            </div>
          </div>
        )}
        {viewinfo && <DetailTeam close={closeDetail} team={selectedTeam} />}
      </RoundedTopBg>
    </>
  );
}
