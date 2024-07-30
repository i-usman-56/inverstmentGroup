import React, { useState } from "react";
import RoundedTopBg from "../../../components/Rounded/rounded";
import img from "../../../assets/svg/emojiadd.svg";
import img1 from "../../../assets/svg/files.svg";
import { FaAngleDown, FaMicrophone } from "react-icons/fa";
import LoginButton from "../../../components/auth/signup/components/LoginButton";

export default function AddnewChat({ backClick }) {
  const [welcomeMessage, setWelcomeMessage] = useState(""); // Add this state
  const [inputMessage, setInputMessage] = useState(""); // State for the input field

  const handleArrowClick = () => {
    if (inputMessage.trim() !== "") {
      setWelcomeMessage(inputMessage);
      setInputMessage("");
    }
  };
  return (
    <div>
      <>
        <div className="pb-20">
          <div className="px-4">
            <div className="flex items-center pt-[75px] ">
              <span
                className="text-[24px] cursor-pointer font-bold leading-6 tracking-[-1.8%] pl-6 text-[#0250E6] uppercase"
                onClick={backClick}
              >
                &lt;
              </span>
              <h1 className="text-[24px] font-bold leading-6 tracking-[-1.8%] pl-6 text-[#0250E6] uppercase">
                Create New Chat
              </h1>
            </div>
          </div>
          <div className="w-full px-[150px] pt-[25px]">
            <form action="">
              <div>
                <p className="text-[14px] font-bold text-end pr-24">
                  search propects
                </p>
              </div>
              <div>
                <p className=" text-[16px] py-1 uppercase font-bold pl-5  text-[#000000] text-opacity-[0.36]">
                  choose chat color
                </p>
                <div className="gap-5 flex">
                  {[
                    1,
                    2,
                    3,
                    4,
                    56,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    12,
                    14,
                    15,
                    128,
                    1257.555,
                    5554,
                    7885,
                  ].map((item) => (
                    <div className="w-[20px] h-[20px] rounded-sm bg-cyan-500" />
                  ))}
                  {/* <div className="w-[20px] h-[20px] rounded-sm bg-cyan-500" />     */}
                </div>
              </div>
              <div className="mt-[35px]">
                <input
                  type="text"
                  className=" text-[14px] font-bold rounded-md px-4 focus:outline-none  text-[#000000] text-opacity-60 w-full h-[60px] bg-[#D9D9D9] bg-opacity-[0.24]"
                  placeholder="Add Chat Name"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor=""
                  className=" text-[16px]  uppercase font-bold pl-5  text-[#000000] text-opacity-[0.36]"
                >
                  Add prospect and client
                </label>
                <div className="relative">
                  <div className="text-[14px] font-bold gap-5 rounded-md px-4 flex justify-start items-center focus:outline-none text-[#000000] text-opacity-60 w-full h-[60px] bg-[#D9D9D9] bg-opacity-[0.24] pr-12">
                    {[1, 2, 3].map((item, index) => (
                      <div className="w-fit bg-[#D9D9D9] bg-opacity-100  flex items-center text-black h-[25px] px-5 rounded-sm">
                        Marion Carter
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 right-0 h-full flex items-center">
                    <div className="w-[32px] h-[32px] bg-[#0250E6] flex items-center justify-center text-white rounded-[2px] mr-2 cursor-pointer">
                      +
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor=""
                  className=" text-[16px] uppercase font-bold pl-5  text-[#000000] text-opacity-[0.36]"
                >
                  Add internal team member
                </label>
                <div className="relative">
                  <div className="text-[14px] font-bold gap-5 rounded-md px-4 flex justify-start items-center focus:outline-none text-[#000000] text-opacity-60 w-full h-[60px] bg-[#D9D9D9] bg-opacity-[0.24] pr-12">
                    {[1, 2, 3].map((item, index) => (
                      <div className="w-fit bg-[#D9D9D9] bg-opacity-100  flex items-center text-black h-[25px] px-5 rounded-sm">
                        Marion Carter
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 right-0 h-full flex items-center">
                    <div className="w-[32px] h-[32px] bg-[#0250E6] flex items-center justify-center text-white rounded-[2px] mr-2 cursor-pointer">
                      +
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="text-[14px] font-bold rounded-t-md px-2 pt-4 focus:outline-none text-[#606060] text-opacity-60 w-full h-[250px] bg-[#D9D9D9] bg-opacity-[0.24]">
                  <p>{welcomeMessage || "Enter Welcome Message to Group"}</p>
                </div>
                <div className="text-[14px] font-bold w-full rounded-md mt-0 flex justify-center items-center h-[100px] bg-[#DCDCDC]">
                  <div className="flex w-full justify-between items-center gap-3">
                    <div className="flex items-center justify-center w-[25%] gap-5">
                      <img src={img} alt="" />
                      <img src={img1} alt="" />
                      <FaMicrophone className="text-[18px] text-[#818181]" />
                    </div>
                    <div className="w-[50%]">
                      <input
                        type="text"
                        className="text-[14px] font-bold rounded-[4px] px-4 focus:outline-none text-[#929292] w-full h-10 bg-[#F7F7F7]"
                        placeholder="Type a Message or Add Voice note"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                      />
                    </div>
                    <div className="w-[25%]">
                      <div
                        className="h-[35px] w-[75%] bg-[#0250E6]  flex items-center text-[16px] font-semibold justify-center text-white rounded-[5px] cursor-pointer"
                        onClick={handleArrowClick}
                      >
                        Send Message
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uppercase mt-12">
                <LoginButton title="Create Chat +" />
              </div>
            </form>
          </div>
        </div>
      </>
      {/* Mobile Section  */}
      <>
        <div className="py-11 block lg:hidden">
          <div className="flex items-center ">
            <span
              className="mr-2 lg:text-xl text-[18px] text-blue-700 font-bold cursor-pointer text-center"
              onClick={backClick}
            >
              &lt;
            </span>
            <h1 className="lg:text-xl text-[18px] flex items-center font-semibold  lg:text-left text-left text-blue-700">
              Create New Chat
            </h1>
          </div>
          <div className="w-full mt-4">
            <form action="">
              <select
                name=""
                id=""
                className=" text-[14px] font-bold rounded-md px-4 focus:outline-none  text-[#000000] text-opacity-60 w-full h-10 bg-[#D9D9D9] bg-opacity-[0.24]"
              >
                <option value="">Choose Chat Color</option>
                <option value="">red</option>
                <option value="">Blue</option>
                <option value="">Strawberry</option>
              </select>
              <div className="mt-4">
                <input
                  type="text"
                  className=" text-[14px] font-bold rounded-md px-4 focus:outline-none  text-[#000000] text-opacity-60 w-full h-10 bg-[#D9D9D9] bg-opacity-[0.24]"
                  placeholder="Chat Name"
                />
              </div>
              <div className="mt-4 relative">
                <input
                  type="text"
                  className="text-[14px] font-bold rounded-md px-4 focus:outline-none text-[#000000] text-opacity-60 w-full h-10 bg-[#D9D9D9] bg-opacity-[0.24] pr-12"
                  placeholder="Add Internal Member"
                />
                <div className="absolute top-0 right-0 h-full flex items-center">
                  <div className="w-[35px] h-[35px] bg-[#0250E6] flex items-center justify-center text-white rounded-[2px] mr-2 cursor-pointer">
                    +
                  </div>
                </div>
              </div>
              <div className="my-4 relative">
                <input
                  type="text"
                  className="text-[14px] font-bold rounded-md px-4 focus:outline-none text-[#000000] text-opacity-60 w-full h-10 bg-[#D9D9D9] bg-opacity-[0.24] pr-12"
                  placeholder="add Client And Prospect"
                />
                <div className="absolute top-0 right-0 h-full flex items-center">
                  <div className="w-[35px] h-[35px] bg-[#0250E6] flex items-center justify-center text-white rounded-[2px] mr-2 cursor-pointer">
                    +
                  </div>
                </div>
              </div>
              <div className="">
                <div className="text-[14px] font-bold rounded-t-md px-2 pt-4 focus:outline-none text-[#606060] text-opacity-60 w-full h-[225px] bg-[#D9D9D9] bg-opacity-[0.24]">
                  <p>{welcomeMessage || "Enter Welcome Message to Group"}</p>
                </div>
                <div className="text-[14px] font-bold w-full rounded-b-md mt-0 flex justify-center items-center h-[100px] bg-[#DCDCDC]">
                  <div className="flex w-full justify-between items-center">
                    <div className="flex items-center justify-center w-[12%]">
                      <FaAngleDown className="text-[16px] font-bold" />
                    </div>
                    <div className="w-[75%] mr-3">
                      <input
                        type="text"
                        className="text-[14px] font-bold rounded-md px-4 focus:outline-none text-[#929292] w-full h-10 bg-[#F7F7F7]"
                        placeholder="Chat Name"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                      />
                    </div>
                    <div className="w-[13%]">
                      <div
                        className="h-[35px] w-[75%] bg-[#0250E6] flex items-center text-[29px] font-semibold justify-center text-white rounded-[2px] mr-2 cursor-pointer"
                        onClick={handleArrowClick}
                      >
                        &#x2191;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uppercase mt-12">
                <LoginButton title="Create Chat" />
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
}
