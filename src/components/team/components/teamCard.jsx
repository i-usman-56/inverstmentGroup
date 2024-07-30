import React from "react";
import { ActivityData } from "../../../data/data";
import px from "../../../assets/svg/pc.svg";
import px1 from "../../../assets/svg/complete.svg";
import DataTeam from "./dataTeam";
import { useTeamProspects } from "../../../services/prospects";
import { FadeLoader } from "react-spinners";

export default function TeamCard({ViewDetail}) {
  const token = JSON.parse(sessionStorage.getItem("token"));

  const {isLoading,data,error,isError}=useTeamProspects(token)

  if (isLoading) {
    return <FadeLoader />
  }
  if (isError) {
    return <div><h1>Error Occures {error.message}</h1></div>
  }
  const sortedData = data.sort((a, b) => a.userName.localeCompare(b.userName));
  return (
    <div  className="lg:grid  lg:grid-rows-1 lg:grid-cols-2 lg:gap-6 xl:gap-12">
      {sortedData.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => ViewDetail(item)}
            style={{ boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.25)" }}
            className="h-[120px] cursor-pointer xl:h-[135px]  mt-[35px] rounded-[5px] flex flex-col justify-center"
          >
            <div className="pl-[25px] py-2">
              <h1 className="text-[14px] md:text-[18px] lg:text-[20px] font-semibold leading-5  tracking-[-1.7%]">
                {item.userName}
              </h1>
            </div>

            <div className="flex justify-center items-center gap-7">
              <DataTeam
                name="Active prospects"
                value={item?.activeProspects?.length}
                img={px}
              />
              <DataTeam
                name="Closed Clients"
                value={item?.closedProspects?.length}
                img={px1}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
