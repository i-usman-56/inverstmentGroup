import React from "react";
import ClientData from "./clientData";
import Table from "./table";
import { ClosedProspectsData } from "../../../data/data";

export default function ClosedData({ team }) {
  const columns = [
    {
      title: "Prospect Name",
      dataIndex: "client_name",
      key: "client_name",
      render: (text) => (
        <div className="">
          <span className="text-black whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
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
        <div className="bg-[#00FF85] px-3 rounded-md">
          <span className="text-white whitespace-nowrap lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
            {closingstatus}
          </span>
        </div>
      ),
    },
    {
      title: "Payment Amount",
      dataIndex: "paymentAmmount",
      key: "paymentAmmount",
      render: (paymentAmmount) => (
        <div className="bg-[#39AB74] px-3 rounded-md">
          <span className="text-white whitespace-nowrap lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
            ${paymentAmmount}
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
          <span className="text-black whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
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
          <span className="text-[#00B860] whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
            Closed By {row.assignedTo.firstName} {row.assignedTo.lastName}
          </span>
        </div>
      ),
    },
  ];
  const length = team.closedProspects.length;
  return (
    <div>
      {length>0 && (
        <>
          {" "}
          <ClientData name="Closed Clients" value={length} />
          <Table columns={columns} data={team.closedProspects} />
        </>
      )}
    </div>
  );
}
