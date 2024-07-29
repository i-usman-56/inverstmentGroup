import React from "react";
import RoundedTopBg from "../Rounded/rounded";
import icon from "../../assets/svg/stripe.svg";
import Table from "../team/components/table";
import {  RecentPayoutData } from "../../data/data";

export default function FinanceManagement() {
  const option = [
    { id: 1, value: "Jeff French", title: "Robert Patterson" },
    { id: 2, value: "Lena Dixon", title: "Ralph Perez" },
    { id: 3, value: "Chase Yates", title: "Melvin Watts" },
    { id: 4, value: "Josephine Mann", title: "Isabella Boone" },
  ];
  const columns1 = [
    {
      title: "Agent name",
      dataIndex: "agentName",
      key: "agentName"
    },
    {
      title: "Client Closed",
      dataIndex: "clientClosed",
      key: "clientClosed",
      render: (clientClosed) => (
        <div className="">
          <span className="text-black uppercase whitespace-nowrap  lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-bold leading-5">
            {clientClosed}
          </span>
        </div>
      ),
    },
    {
      title: "Service Sold",
      dataIndex: "serviceSold",
      key: "serviceSold"
    },
    {
      title: "Payment Amount",
      dataIndex: "payment",
      key: "payment",
      render: (payment) => (
        <div className="">
          <span className=" whitespace-nowrap uppercase text-[#00B860] lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
            $ {payment}
          </span>
        </div>
      ),
    },
    {
      title: "Payment Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div>
          <p>
            <span
              className={`text-[#00B860] ${
                status === "Pending"
                  ? "text-[#D7DB00]"
                  : status === "Failed"
                  ? "text-[#E60202]"
                  : status === "Successful"
                  ? "text-[#00B860]"
                  : ""
              } text-start whitespace-nowrap uppercase lg:text-[14px] xl:text-[16px] tracking-[-1.7%] font-medium leading-5`}
            >
              {status}
            </span>
          </p>
        </div>
      ),
    },
  ];
  const columns = [
    {
      title: "Agent name",
      dataIndex: "agentName",
      key: "agentName",
    },
    {
      title: "Client Closed",
      dataIndex: "clientClosed",
      key: "clientClosed",
      render: (clientClosed) => (
        <div className="">
          <span className="text-black whitespace-nowrap uppercase  lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-bold leading-5">
            {clientClosed}
          </span>
        </div>
      ),
    },
    {
      title: "Service Sold",
      dataIndex: "serviceSold",
      key: "serviceSold",
    },
    {
      title: "Payment Amount",
      dataIndex: "payment",
      key: "payment",
      render: (payment) => (
        <div className="">
          <span className=" whitespace-nowrap uppercase  text-[#00B860] lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
            $ {payment}
          </span>
        </div>
      ),
    },
    {
      title: "Initiate Payment",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div className="bg-[#3C3C3C] rounded-md px-[20px]">
          <div className="py-[6px] flex items-center">
            <p
              className={`text-[#FFFFFF]   text-start uppercase whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%] font-semibold leading-5`}
            >
                Pay Now 
            </p>
            <img src={icon} alt="" className="pl-1 w-[40px] h-[15px]"  />
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <RoundedTopBg>
        <div className="pb-[55px]  md:pb-[60px] lg:pb-0 md:pt-[60px] w-full  pt-[50px] lg:pt-[30px]">
        <div className="flex justify-between lg:items-center ">
          <div
            // style={{ boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.05)" }}
            className="lg:w-[250px] lg:py-5 lg:pl-6 lg:shadow-sm lg:rounded-md"
          >
            <img src={icon} alt="" />
            <div className="pt-[7px]">
              <p className="text-[15px] md:text-[17px] lg:text-[19px] font-medium tracking-[-1.8%] leading-5 ">
                Total Paid To{" "}
                <span className="text-[15px] md:text-[17px] lg:text-[19px] font-bold tracking-[-1.8%] leading-5 ">
                  Sam Jay:
                </span>{" "}
              </p>
              <p className="text-[15px] md:text-[17px] lg:text-[19px] font-bold tracking-[-1.8%] leading-5 ">
                {" "}
                $600.00
              </p>
            </div>
          </div>

          <div>
            <div className=" flex">
              <div className="w-[120px] lg:w-[175px] ">
                <select
                  id="search"
                  className="w-full px-2 text-[12px] py-1.5 bg-[#F3F3F3] placeholder-[#3C3C3C] text-[#3C3C3C] font-bold rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="" selected>
                    Sally Sutton
                  </option>
                  {option.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[40px] lg:mt-[69px]">
            <Table
              columns={columns}
              data={RecentPayoutData}
              margin="lg:mt-[75px]"
              title="Sales AGent Payout"
            />
          </div>
        </div>
        <div>
          <div className="mt-[40px] lg:mt-[75px]">
            <Table
              columns={columns1}
              data={RecentPayoutData}
              margin="lg:mt-[75px]"
              classes="lg:h-[220px]"
              title="Recent payouts"
            />
          </div>
        </div>
        </div>

      </RoundedTopBg>
    </>
  );
}
