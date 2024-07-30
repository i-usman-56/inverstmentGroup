import React from "react";
import LoginButton from "../../components/auth/signup/components/LoginButton";
import UserCard from "./components/userCard";
import { renderCardData } from "../../data/data";
import UserAccessCard from "./components/useraccessCard";
import RoundedTopBg from "../../components/Rounded/rounded";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetAllUsers } from "../../services/auth";
import { FadeLoader } from "react-spinners";

export default function UserAccess() {
  const navigate = useNavigate();
  const token = JSON.parse(sessionStorage.getItem("token"));
  const { data: alluserData, status, isLoading } = useGetAllUsers(token);
  // if (isLoading) {
  //   return <FadeLoader />
  // }

  return (
    <div>
      <RoundedTopBg>
        <div className="flex items-center lg:pt-0 xl:pt-8 justify-between  pt-[30px] ">
          <h1
            className={`text-[16px] md:text-[20px] lg:text-[26px] xl:text-[30px] font-bold leading-5 tracking-[-1.7%] text-[#0250E6]`}
          >
            Admin Panel
          </h1>
          <UserAccessCard />
          <div className="hidden lg:block">
            <LoginButton
              title="Add New User + "
              onClick={() => navigate("/newuser")}
            />
          </div>
        </div>
        <div>
          {isLoading ? (
            <div className="flex h-[450px] items-center justify-center content-center">
              <FadeLoader color="blue" />
            </div>
          ) : (
            <UserCard data={alluserData} />
          )}
        </div>
      </RoundedTopBg>
    </div>
  );
}
