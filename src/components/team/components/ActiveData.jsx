import React from 'react'
import ClientData from './clientData'
import Table from './table'
import { ActiveProspectsData } from '../../../data/data'
import FillCircle from '../../notification/components/fillCircle';
import EmptyCircle from '../../notification/components/emptyCircle';

export default function ActiveData({team}) {
    const columns1 = [
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
            <div className="bg-[#4AE49A] px-3 rounded-md">
              <span className="text-white whitespace-nowrap lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
                {Closingstatus}
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
        {
          title: "Unassign lead",
          dataIndex: "clientstatus",
          key: "clientstatus",
          render: (clientstatus) => (
            <div>
              <p>
                {clientstatus ? <FillCircle /> : <EmptyCircle />}
              </p>
            </div>
          ),
        },
      ];
  return (
    <div>
        <ClientData name="Active prospects" value={team.activeProposal} />
        <Table columns={columns1} data={ActiveProspectsData} />
    </div>
  )
}
