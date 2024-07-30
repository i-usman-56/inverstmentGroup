import React from "react";
import ClientData from "./clientData";
import Table from "./table";
import { ActiveProspectsData } from "../../../data/data";
import FillCircle from "../../notification/components/fillCircle";
import EmptyCircle from "../../notification/components/emptyCircle";

export default function ActiveData({ team }) {
  const columns1 = [
    {
      title: "Prospect Name",
      dataIndex: "client_name",
      key: "client_name",
      render: (text) => (
        <div className="">
          <span className="text-black uppercase whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
            {text}
          </span>
        </div>
      ),
    },
    {
      title: "Closing status",
      dataIndex: "closingstatus",
      key: "closingstatus",
      render: (closingstatus) => (
        <div className="bg-[#4AE49A] px-3 rounded-md">
          <span className="text-white uppercase whitespace-nowrap lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
            {closingstatus}
          </span>
        </div>
      ),
    },
    {
      title: "Ineterest",
      dataIndex: "interest",
      key: "interest",
      render: (interest) => (
        <div className="">
          <span className="text-black uppercase whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
            {interest}
          </span>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status, row) => (
        <div className="">
          <span className="text-[#00B860] uppercase whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
            Assigned to {row.assignedTo.firstName} {row.assignedTo.lastName}
          </span>
        </div>
      ),
    },
    {
      title: "Unassign lead",
      dataIndex: "assignedTo",
      key: "clientstatus",
      render: (assignedTo) => (
        <div>
          <p>{assignedTo ? <FillCircle /> : <EmptyCircle />}</p>
        </div>
      ),
    },
  ];

  const length = team.activeProspects.length;
  return (
    <div>
      {length > 0 && (
        <>
          {" "}
          <ClientData name="Active prospects" value={length} />
          <Table columns={columns1} data={team.activeProspects} />
        </>
      )}
    </div>
  );
}
