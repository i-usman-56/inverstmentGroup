import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
import RoundedTopBg from "../../../components/Rounded/rounded";
import MessaageChat from "./messaageChat";
import LoginButton from "../../../components/auth/signup/components/LoginButton";
import MessagechatLg from "./messagechatLg";
import ChatBar from "./chatBar";
import { useNavigate } from "react-router-dom";
import { chatBardata, dataChat } from "../../../data/data";
import AddnewChat from "./addnewChat";
import Chatting from "./chatting";
import { socket } from "../../../services/socket";
import { useGetChatRooms } from "../../../services/chat";
// const socket = io('http://localhost:5001', {
//   transports: ['websocket', 'polling'], // Specify the transport methods
// });

export default function MessagingPart() {
    
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [selectedChat, setSelectedChat] = useState(null);
  const [newChat, SetNewChat] = useState(false);
  const [newChatting, SetNewChatting] = useState(false);
  const {data,isSuccess}=useGetChatRooms(token);
  // console.log(isSuccess)
  // console.log(data)
  // const navigate = useNavigate();

  const handleBackClick = () => {
    // navigate(-1);
    SetNewChat(false);
  };
  const handlechattingBackClick = () => {
    // navigate(-1);
    SetNewChatting(false);
  };
  const handlechattingClick = (item) => {
    console.log("Selected item:", item); // Log the selected item data
    setSelectedChat(item?._id); // Update the selected chat state
    SetNewChatting(true); // Update state to show the new chatting view
  };

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
          <div className="mt-[45px] h-[620px] xl:h-[750px] overflowContainerY">
            <MessagechatLg data={data} />
          </div>
        </div>
        {newChat ? (
          <div className=" lg:w-[70%] xl:w-[75%]">
            <AddnewChat backClick={handleBackClick} />
          </div>
        ) : newChatting ?(
          <div className="w-[75%]" >
              <Chatting chat={selectedChat} backClick={handlechattingBackClick}/>
          </div>
        ) : (
          <div className="w-[75%]">
            <div className="flex justify-end mt-[35px] mr-5">
              <button
                className="text-sm  lg:text-base lg:w-auto  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => SetNewChat(true)}
                //   onClick={() => navigate("/newuser")}
                style={{
                  background:
                    "linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)",
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
                <ChatBar data={data} click={handlechattingClick} />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Mobile Section  */}
      <div className="block lg:hidden">
        {newChat ? (
          <RoundedTopBg>
            <AddnewChat backClick={handleBackClick} />
          </RoundedTopBg>
        ) : newChatting ? (
          <>
           <Chatting chat={selectedChat} backClick={handlechattingBackClick}/>
          </>
        ) : (
          <RoundedTopBg>
            <div>
              <div>
                <div className="flex content-center items-center  justify-between pt-9 md:pt-14">
                  <h1 className="text-[16px] md:text-[18px] font-bold text-[#0250E6]">
                    Messaging
                  </h1>
                  <div>
                    <LoginButton
                      title="ADD Message Group +"
                      onClick={() => SetNewChat(true)}
                    />
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
                        {dataChat?.map((option) => (
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
                <MessaageChat
                  data={data}
                  click={handlechattingClick}
                  backClick={handlechattingBackClick}
                />
              </div>
            </div>
          </RoundedTopBg>
        )}
      </div>
    </>
  );
}
