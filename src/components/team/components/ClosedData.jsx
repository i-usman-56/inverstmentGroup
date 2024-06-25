import React from 'react'
import ClientData from './clientData'
import Table from './table'
import { ClosedProspectsData } from '../../../data/data'

export default function ClosedData({team}) {
    const columns = [
        {
          title: "Prospect Name",
          dataIndex: "name",
          key: "name",
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
          dataIndex: "Closingstatus",
          key: "Closingstatus",
          render: (Closingstatus) => (
            <div className="bg-[#00FF85] px-3 rounded-md">
              <span className="text-white whitespace-nowrap lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
                {Closingstatus}
              </span>
            </div>
          ),
        },
        {
          title: "Payment Amount",
          dataIndex: "paymenyAmount",
          key: "paymenyAmount",
          render: (paymenyAmount) => (
            <div className="bg-[#39AB74] px-3 rounded-md">
              <span className="text-white whitespace-nowrap lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
                ${paymenyAmount}
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
          render: (status) => (
            <div className="">
              <span className="text-[#00B860] whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
                {status}
              </span>
            </div>
          ),
        },
    
      ];
  return (
    <div>
       <ClientData name="Closed Clients" value={team.closedClient} />
       <Table columns={columns} data={ClosedProspectsData} />
    </div>
  )
}
