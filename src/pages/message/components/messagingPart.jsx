import React from "react";
import RoundedTopBg from "../../../components/Rounded/rounded";
import image1 from "../../../assets/img/Vector (2).svg";
import image2 from "../../../assets/img/Vector (1).svg";
import DropDown from "../../../components/common/dropdown/dropdown";
import MessaageChat from "./messaageChat";
import LoginButton from "../../../components/auth/signup/components/LoginButton";
import MessagechatLg from "./messagechatLg";
import ChatBar from "./chatBar";

export default function MessagingPart() {
  const data = [
    { id: 1, value: "value", title: "Vlaue" },
    { id: 2, value: "value", title: "Value" },
    { id: 3, value: "value", title: "Value" },
    { id: 4, value: "value", title: "Value" },
  ];
  const chatBardata = [
    {
      id: 1,
      color: "0250E6",
      title: "Phase 1 : LLC + Funding",
      member: 21,
      notification: 4,
      data:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.",
    },
    {
      id: 3,
      color: "7D83BC",
      title: "Phase 3 : LLC + Funding",
      member: 17,
      data:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.",
    },
    {
      id: 2,
      color: "004E96",
      title: "Phase 2 : LLC + Funding",
      member: 11,
      data:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.",
    },
    {
      id: 4,
      color: "02CBE6",
      title: "Phase 4 : LLC + Funding",
      member: 19,
      data:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.",
    },
    {
      id: 5,
      color: "6602E6",
      notification: 3,
      title: "Phase 5 : LLC + Funding",
      member: 9,
      data:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.",
    },
    {
      id: 5,
      color: "30456C",
      title: "Phase 5 : LLC + Funding",
      member: 19,
      data:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.",
    },
    {
      id: 7,
      color: "060A10",
      title: "Phase 7 : LLC + Funding",
      member: 37,
      data:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.",
    },
    {
      id: 8,
      color: "1402E6",
      notification: 14,
      title: "Phase 8 : LLC + Funding",
      member: 26,
      data:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.",
    },
    {
      id: 9,
      color: "0250E6",
      title: "Phase 9 : LLC + Funding",
      member: 29,
      data:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.",
    },
    {
      id: 10,
      color: "02CBE6",
      title: "Phase 10 : LLC + Funding",
      member: 20,
      data:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.",
    },
    {
      id: 11,
      color: "6602E6",
      title: "Phase 11 : LLC + Funding",
      member: 13,
      data:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.",
    },
    {
      id: 12,
      color: "30456C",
      notification: 4,
      title: "Phase 12 : LLC + Funding",
      member: 12,
      data:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.",
    },
    {
      id: 13,
      color: "060A10",
      title: "Phase 13 : LLC + Funding",
      member: 15,
      data:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.",
    },
    {
      id: 14,
      color: "1402E6",
      member: 16,
      title: "Phase 14 : LLC + Funding",
      data:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat distinctio, vero veritatis autem dolorem adipisci earum non obcaecati odio.",
    },
  ];
  return (
    <>
      <div
        style={{ boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.05)" }}
        className="bg-[#FFFFFF] lg:flex hidden     lg:mb-[60px] lg:mx-[35px] xl:mx-[75px]   rounded-t-md mt-[64px] lg:mt-[78px]  lg:rounded-md"
      >
        <div className="border-r  border-r-[#BDBDBD] w-[35%] xl:w-[25%] py-[75px] ">
          <h1 className="text-[24px] font-bold leading-6 tracking-[-1.8%] pl-6 text-[#0250E6] uppercase">
            Chat Notification
          </h1>
          <div className="mt-[45px] h-[575px] xl:h-[750px] overflowContainerY">
            <MessagechatLg data={chatBardata} />
          </div>
        </div>
        <div className="w-[75%]">
          <div className="flex justify-end mt-[35px] mr-5">
            <button
              className="text-sm  lg:text-base lg:w-auto  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              //   onClick={() => navigate("/newuser")}
              style={{
                background: "linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)",
              }}
            >
              ADD Message Group +
            </button>
          </div>
          <div>
            <h1 className="text-[24px] font-bold leading-6 tracking-[-1.8%] pl-6 text-[#0250E6] uppercase">
              Ongoing chats
            </h1>
            <div className="xl:px-[74px] px-[25px] mt-[75px]  h-[546px] xl:h-[637px] overflowContainerY">
              <ChatBar data={chatBardata} />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Section  */}
      <div className="block lg:hidden">
        <RoundedTopBg>
          <div>
            <div>
              <div className="flex content-center items-center  justify-between pt-9 md:pt-14">
                <h1 className="text-[16px] md:text-[18px] font-bold text-[#0250E6]">
                  Messaging
                </h1>
                <div>
                  <LoginButton title="ADD Message Group +" />
                </div>
              </div>
              <div className="w-full">
                <div className="">
                  <div className="mx-10 mt-[35px] md:mt-[50px]">
                    <select
                      id="search"
                      //   value={value}
                      //   onChange={(e) => onChange(e.target.value)}
                      className="w-full px-4  py-2 border bg-[#F3F3F3] border-gray-300 placeholder-[#3C3C3C] text-[#3C3C3C] font-bold rounded-md focus:outline-none focus:border-blue-500"
                    >
                      <option value="" selected>
                        Ongoing Chats
                      </option>
                      {data?.map((option) => (
                        <option key={option.id} value={option._id}>
                          {option.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[50px] pb-[68px]">
              <MessaageChat data={chatBardata} />
            </div>
          </div>
        </RoundedTopBg>
      </div>
    </>
  );
}
