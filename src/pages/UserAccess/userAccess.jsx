import React from "react";
import icons1 from "../../assets/svg/arcticons_adobe-account-access.svg";
import icons2 from "../../assets/svg/formkit_people.svg";
import LoginButton from "../../components/auth/signup/components/LoginButton";
import UserCard from "./components/userCard";

export default function UserAccess() {
  const renderData = [
    { id: 1, title: "User Access", img: icons1 },
    { id: 2, title: "CUrrentClents", img: icons2 },
  ];
  const renderCardData = [
    {
      id: 1,
      name: "User Access",
      status: true,
      phone: "+1 (333)-234-5068",
      email: "Jamesgun@example.com",
      acceslvl: "Sales Agent",
    },
    {
      id: 2,
      name: "User Access",
      status: false,
      phone: "+1 (444)-123-7890",
      email: "annsmith@example.com",
      acceslvl: "Manager",
    },
    {
      id: 3,
      name: "User Access",
      status: true,
      phone: "+1 (555)-456-7890",
      email: "john.doe@example.com",
      acceslvl: "Technician",
    },
    {
      id: 4,
      name: "User Access",
      status: false,
      phone: "+1 (666)-789-0123",
      email: "clairejones@example.com",
      acceslvl: "Administrator",
    },
    {
      id: 5,
      name: "User Access",
      status: true,
      phone: "+1 (777)-890-1234",
      email: "michael.brown@example.com",
      acceslvl: "Support Staff",
    },
    {
      id: 6,
      name: "User Access",
      status: true,
      phone: "+1 (888)-901-2345",
      email: "emily.white@example.com",
      acceslvl: "Sales Agent",
    },
    {
      id: 7,
      name: "User Access",
      status: false,
      phone: "+1 (999)-012-3456",
      email: "william.green@example.com",
      acceslvl: "HR",
    },
    {
      id: 8,
      name: "User Access",
      status: true,
      phone: "+1 (111)-234-5678",
      email: "oliver.black@example.com",
      acceslvl: "Engineer",
    },
    {
      id: 9,
      name: "User Access",
      status: false,
      phone: "+1 (222)-345-6789",
      email: "sophia.clark@example.com",
      acceslvl: "Technician",
    },
    {
      id: 10,
      name: "User Access",
      status: true,
      phone: "+1 (333)-456-7890",
      email: "liam.martin@example.com",
      acceslvl: "Manager",
    },
    {
      id: 11,
      name: "User Access",
      status: false,
      phone: "+1 (444)-567-8901",
      email: "isabella.jones@example.com",
      acceslvl: "Sales Agent",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] px-5 md:px-8 lg:px-10 lg:mb-[120px] xl:px-[70px] lg:mx-[85px] drop-shadow-md   rounded-t-md mt-[64px] lg:mt-[78px] lg:pb-24 lg:rounded-md">
      <div className="flex items-center lg:pt-0 xl:pt-8 justify-between  pt-[30px] ">
        <h1
          className={`text-[16px] md:text-[20px] lg:text-[26px] xl:text-[30px] font-bold leading-5 tracking-[-1.7%] text-[#0250E6]`}
        >
          Admin Panel
        </h1>
        <div className="flex gap-3  lg:pt-[45px] xl:pt-16 ">
          {" "}
          {renderData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center"
            >
              <img src={item.img} alt="" className="w-[25px] h-[22px]" />
              <h1 className="text-[12px] md:text-[13px] lg:text-[16px] uppercase font-semibold leading-5 tracking-[-1.7%] text-[#0250E6]">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <LoginButton title="Add New User + " />
        </div>
      </div>
      <div>
        <UserCard data={renderCardData} />
      </div>
    </div>
  );
}
