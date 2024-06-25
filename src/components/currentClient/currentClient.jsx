import React from "react";
import RoundedTopBg from "../Rounded/rounded";
import UserAccessCard from "../../pages/UserAccess/components/useraccessCard";
import SearchBar from "../common/searchbar/searchbar";
import DropDown from "../common/dropdown/dropdown";
import Table from "../team/components/table";
import { CurrentClientsData } from "../../data/data";

export default function CurrentClient() {
  const columns1 = [
    {
      title: "Client",
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
      title: "Payment Amount",
      dataIndex: "payment",
      key: "payment",
      render: (payment) => (
        <div className="bg-[#39AB74] px-10 rounded-md">
          <span className="text-white whitespace-nowrap lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
            ${payment}
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
          {status == "Fully Paid" ? (
            <div className="bg-[#00FF85] w-[150px] rounded-md px-4 py-[1px]">
              <p className="text-white whitespace-nowrap text-center lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
                {status}
              </p>
            </div>
          ) : (
            <div className="bg-[#535874] rounded-md px-4 py-[1px]">
              <p className="text-white whitespace-nowrap text-center lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
                {status}
              </p>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Program",
      dataIndex: "program",
      key: "program",
      render: (program) => (
        <div className="">
          <span className=" whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
            {program}
          </span>
        </div>
      ),
    },
    {
      title: "Closing Agent",
      dataIndex: "Closingstatus",
      key: "Closingstatus",
      render: (Closingstatus) => (
        <div>
          <p>
            <span className="text-[#00B860] text-start whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
              {Closingstatus}
            </span>
          </p>
        </div>
      ),
    },
  ];
  return (
    <>
      <RoundedTopBg>
        <div className="pt-[40px] pb-[45px] md:pb-16  md:pt-14 lg:pt-[0px] lg:pb-0">
          <div className="flex items-center content-center justify-between">
            <h1 className="text-[15px] md:text-[17px] lg:text-[24px] xl:text-[32px] font-bold tracking-[-1.8%] text-[#0250E6]  ">
              Admin Panel
            </h1>
            {/* user card Navigation  */}
            <div className="lg:pt-[75px]  lg:pl-[100px] xl:pl-[150px] ">
              <UserAccessCard />
            </div>
            {/* Search Bar Laptop  */}
            <div className="md:px-11 lg:block hidden lg:px-0">
              <SearchBar placholder="Search Client" />
            </div>
          </div>
          {/* Search Bar Mobile */}
          <div className="md:px-11 lg:hidden block lg:px-0">
            <SearchBar placholder="Search Client" />
          </div>
          {/* DRopDown  */}
          <DropDown name="Filter Clients" />
          {/* Table  */}
          <div className="mt-[40px] lg:mt-[69px]">
            <Table
              columns={columns1}
              data={CurrentClientsData}
              classes="h-[200px]  md:h-[250px] lg:h-[400px] xl:h-[600px] "
            />
          </div>
        </div>
      </RoundedTopBg>
    </>
  );
}
