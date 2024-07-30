import React, { useEffect, useState } from "react";
import RoundedTopBg from "../Rounded/rounded";
import UserAccessCard from "../../pages/UserAccess/components/useraccessCard";
import SearchBar from "../common/searchbar/searchbar";
import DropDown from "../common/dropdown/dropdown";
import Table from "../team/components/table";
import { useGetCardData, useGetProspects } from "../../services/prospects";
import { useGetAllUsers } from "../../services/auth";
import { FadeLoader } from "react-spinners";

export default function CurrentClient() {
  const [selectedClient, setSelectedClient] = useState(null);
  const [prospectsData, setProspectsData] = useState([]);
  const token = JSON.parse(sessionStorage.getItem("token"));

  const { data: initialProspectData, isLoading } = useGetCardData(token);
  const { data: alluserData } = useGetAllUsers(token);
  const { data: prospectsDataForClient, refetch: refetchProspects ,isLoading:prospectLoading } = useGetProspects(
    token,
    selectedClient
  );

  const transformedData = alluserData?.users.map((user) => ({
    _id: user._id,
    title: `${user.firstName} ${user.lastName}`,
  }));

  useEffect(() => {
    if (initialProspectData) {
      setProspectsData(initialProspectData || []);
    }
  }, [initialProspectData]);
  useEffect(() => {
    if (selectedClient) {
      refetchProspects();
    }
  }, [selectedClient]);
  useEffect(() => {
    if (prospectsDataForClient) {
      setProspectsData(prospectsDataForClient || []);
    }
  }, [prospectsDataForClient, selectedClient]);

  const handleSelectClient = (id) => {
    console.log(id);
    setSelectedClient(id);
  };

  const columns1 = [
    {
      title: "Client",
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
      title: "Payment Amount",
      dataIndex: "paymentAmmount",
      key: "paymentAmmount",
      render: (paymentAmmount) => (
        <div className="bg-[#39AB74] px-10 rounded-md">
          <span className="text-white whitespace-nowrap uppercase lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
            ${paymentAmmount}
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
              <p className="text-white whitespace-nowrap uppercase text-center lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
                {status}
              </p>
            </div>
          ) : (
            <div className="bg-[#535874] rounded-md px-4 py-[1px]">
              <p className="text-white whitespace-nowrap uppercase text-center lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
                {status}
              </p>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Program",
      dataIndex: "interest",
      key: "interest",
      render: (interest) => (
        <div className="">
          <span className=" whitespace-nowrap lg:text-[14px] uppercase xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
            {interest}
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
            <span className="text-[#00B860] text-start uppercase whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
              {Closingstatus}Pending
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
          <DropDown
            name="Filter Clients"
            data={transformedData}
            value={selectedClient}
            onChange={handleSelectClient}
          />
          {/* Table  */}
          <div className="mt-[40px] lg:mt-[69px]">
            {isLoading ||prospectLoading ? (
              <div className="flex h-[300px] items-center justify-center content-center">
                <FadeLoader color="blue" />
              </div>
            ) : (
              <Table
                columns={columns1}
                data={prospectsData}
                classes="h-[200px]  md:h-[250px] lg:h-[400px] xl:h-[600px] "
              />
            )}
          </div>
        </div>
      </RoundedTopBg>
    </>
  );
}
