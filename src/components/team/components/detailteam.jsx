import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import ClientData from "./clientData";
import tableData from "../../../data/tableData1.json";
import Table from "../../table/table";

export default function DetailTeam({ close, team }) {
  return (
    <>
      <div className="pt-[40px] pb-9 md:pt-[55px] lg:pb-0 lg:pt-[65px]">
        <div className="flex items-center gap-2">
          <button onClick={close}>
            <IoIosArrowBack className="text-[#0250E6] xl:text-[30px] text-[15px] md:text-[18px]  lg:text-[24px]" />
          </button>
          <p className="text-[15px] lg:text-[24px] xl:text-[30px] md:text-[18px] leading-5 font-bold text-[#0250E6] uppercase tracking-[-1.8%] ">
            {team.name}
          </p>
        </div>
        <div>
          <div className="pt-[55px] lg:pt-[75px]">
            <ClientData name="Active prospects" value={team.activeProposal} />
            <Table tableData={tableData} />
          </div>
          <div className="pt-[55px] lg:pt-[75px]">
          <ClientData name="Closed Clients" value={team.closedClient} />
          <Table tableData={tableData} />
          </div>
       
        </div>
      </div>
    </>
  );
}