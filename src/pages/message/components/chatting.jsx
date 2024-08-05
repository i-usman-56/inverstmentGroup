import React, { useEffect, useRef, useState } from "react";
import LoginButton from "../../../components/auth/signup/components/LoginButton";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaAngleDown, FaMicrophone } from "react-icons/fa";
import img from "../../../assets/svg/emojiadd.svg";
import img1 from "../../../assets/svg/files.svg";
import image1 from "../../../assets/img/Vector (2).svg";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { useGetChatRoomsMessage } from "../../../services/chat";
import { socket } from "../../../services/socket";

export default function Chatting({ backClick, chat }) {

  // console.log(chat)
  const [initialID,setInitialID]=useState(chat)
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [userId, setUserId] = useState(null);
  const [inputMessage, setInputMessage] = useState("");
  const [active, setActive] = useState(false);
  const [newMember, setNewMember] = useState(false);
  const [messages, setMessages] = useState([]);

  const { data, isSuccess ,refetch } = useGetChatRoomsMessage(initialID);


  useEffect(() => {
    if (isSuccess) {
      setMessages(data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) {
      setUserId(userData._id);
      socket.emit('joinRoom', { roomId: chat, userId: userData._id });
    }

    return () => {
      if (userData) {
        socket.emit('leaveRoom', { roomId: chat, userId: userData._id });
      }
    };
  }, [chat]);
    useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    function onConnect() {
      console.log("Connected");
    }

    function onDisconnect() {
      console.log("Disconnected");
    }

    function onNewMessage(message) {
      // refetch()
      console.log(message)
      setMessages((prevMessages) => [...prevMessages, message]);
      if (endOfMessagesRef.current) {
        endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }

    socket.on('connection', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('newMessage', onNewMessage);

    return () => {
      socket.off('connection', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('newMessage', onNewMessage);
    };
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "" && userId) {
      socket.emit('sendMessage', {
        roomId: chat,
        userId,
        content: inputMessage,
      });
      setInputMessage("");
    }
  };

  const getInitials = (firstName, lastName) => {
    if (!firstName || !lastName) return '';
    return (firstName[0] || '') + (lastName ? lastName[lastName.length - 1] : '');
  };
  const handleArrowClick = () => {
    if (inputMessage.trim() !== "") {
      setWelcomeMessage(inputMessage);
      setInputMessage("");
    }
  };

  return (
    <>
      <div className="hidden lg:block">
        <div className="xl:flex xl:justify-between pt-[75px] lg:px-4 xl:px-10">
          <div className="flex items-center ">
            <span
              className="text-[24px] cursor-pointer font-bold leading-6 tracking-[-1.8%] pl-6 text-[#0250E6] uppercase"
              onClick={backClick}
            >
              &lt;
            </span>
            <h1 className="text-[24px] font-bold leading-6 tracking-[-1.8%] pl-6 text-[#0250E6] uppercase">
              Phase 1 : LLC + Funding
            </h1>
          </div>
          <div className="flex justify-between xl:justify-normal lg:w-full xl:w-fit mt-4 xl:mt-0 gap-20 w-full whitespace-nowrap items-center">
            <div
              className={`flex justify-center w-full relative ${
                active ? "bg-[#F1F1F1] " : ""
              } rounded-t-md `}
            >
              <div
                onClick={() => setActive(!active)}
                className="flex items-center cursor-pointer px-5  py-2 gap-3"
              >
                <h1 className="text-[16px] font-semibold tracking-[-1.8%]">
                  Active Member :
                </h1>
                <div className="flex items-center">
                  <div className="relative w-[30px] h-[30px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-white font-medium shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"></div>
                  <div className="relative w-[30px] h-[30px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-white font-medium -ml-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"></div>
                  <div className="relative w-[30px] h-[30px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-white font-medium -ml-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"></div>
                  <div className="relative w-[30px] h-[30px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-white font-medium -ml-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"></div>
                  <div className="relative w-[30px] h-[30px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-white font-medium -ml-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    TJ
                  </div>
                </div>
                <div>
                  <RiArrowDropDownLine
                    onClick={() => setActive(!active)}
                    className={`text-[20px] ${active ? "rotate-180" : ""}  `}
                    size={30}
                  />
                </div>
              </div>
              {active && (
                <div className="h-[350px] overflowContainerY rounded-b-md w-full pb-6 px-5 mt-[45px] bg-[#F1F1F1] absolute ">
                  {[1, 2, 3, 5, 6, 7, 8].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between w-full items-center border-b py-1.5 pt-8 border-b-[#C4C4C4]"
                    >
                      <h1 className="text-[16px] font-bold text-black tracking-[-1.8%]">
                        Daniel Patrick
                      </h1>
                      <img
                        src={image1}
                        alt=""
                        className="w-[20px] h-[20px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full relative">
              <LoginButton
                title="add member +"
                onClick={() => setNewMember(!newMember)}
              />
              {newMember && (
                <div className="w-[400px] p-5 shadow-lg absolute h-[500px] bg-white right-0 rounded-md ">
                  <div>
                    <div className="flex justify-end">
                      <IoMdClose
                        onClick={() => setNewMember(!newMember)}
                        className="text-[#FF0000] cursor-pointer text-end text-[20px]"
                      />
                    </div>
                    <div className="relative mt-[36px]">
                      <input
                        type="text"
                        className="w-full h-[41px] px-3 border border-[#0250E6] focus:outline-[#0250E6]  "
                      />
                      <div className="absolute right-3 text-[20px] top-[12px]">
                        <IoIosSearch />
                      </div>
                    </div>
                    <div className="h-[290px] mt-4 overflowContainerY">
                      {[1, 2, 3, 5, 6, 7, 8].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between w-full items-center border-b py-1.5 pt-8 border-b-[#C4C4C4]"
                        >
                          <h1 className="text-[14px] leading-5 font-bold text-black tracking-[-1.8%]">
                            Daniel Patrick
                          </h1>
                          <p className="text-[#00B860] text-[25px] lead font-bold cursor-pointer">
                            +
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="h-[2px] mt-10 w-full bg-[#BDBDBD]" />
        <div className="xl:h-[680px] h-[500px] px-4 overflowContainerY">
          <div>
          {messages?.map((item, index) => {
              const isUserMessage = item.sender._id ? item.sender._id === userId : item.sender === userId;
              const messageAlign = isUserMessage ? 'flex-row-reverse' : 'flex-row';
              const bgColor = isUserMessage ? '#647DFF' : '#D9D9D9';
              const textColor = isUserMessage ? '#FFFFFF' : '#343434';

              return (
                <div
                  key={item._id || index} // Use unique ID or index if necessary
                  className={`flex items-center gap-5 my-5 ${messageAlign}`}
                >
                  <div
                    className={`w-[35px] h-[34px] bg-[#D9D9D9] rounded-full flex justify-center items-center text-white font-semibold`}
                    style={{ backgroundColor: isUserMessage ? '#647DFF' : '#D9D9D9' }}
                  >
                    {getInitials(item.sender.firstName, item.sender.lastName)}
                  </div>
                  <div
                    className={`w-[250px] p-5 rounded-3xl`}
                    style={{ backgroundColor: bgColor }}
                  >
                    <p className={`text-[16px] whitespace-normal break-words`}  style={{ color: textColor }}>
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
            <div ref={endOfMessagesRef} /> {/* Scroll target */}
          </div>
        </div>
        <div className="text-[14px] mt-10 font-bold w-full rounded-b-md flex justify-center items-center h-[100px] bg-[#DCDCDC]">
          <div className="flex w-full justify-between items-center gap-3">
            <div className="flex items-center justify-center w-[25%] gap-4 xl:gap-9">
              <img src={img} alt="" />
              <img src={img1} alt="" />
              <FaMicrophone className="text-[18px] text-[#818181]" />
            </div>
            <div className="w-[50%]">
              <input
                type="text"
                className="text-[14px] font-bold rounded-[4px] px-4 focus:outline-none text-[#929292] w-full h-10 xl:h-[60px] bg-[#F7F7F7]"
                placeholder="Type a Message or Add Voice note"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
            </div>
            <div className="w-[25%]">
            <div
                className="w-fit bg-[#0250E6] px-4 flex items-center text-[16px] font-semibold h-10 xl:h-[60px] justify-center text-white rounded-[5px] cursor-pointer"
                onClick={handleSendMessage}
              >
                Send Message
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MObile Section   */}
      <div
        style={{ boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.05)" }}
        className="bg-[#FFFFFF]  lg:mb-[120px] lg:hidden block     rounded-t-md mt-[64px] lg:mt-[78px] lg:pb-24 lg:rounded-md"
      >
        <div className="flex items-center justify-between px-3 pt-[48px]">
          <div className="flex items-center ">
            <span
              className="mr-2 lg:text-xl text-[18px] text-blue-700 font-bold cursor-pointer text-center"
              onClick={backClick}
            >
              &lt;
            </span>
            <h1 className="lg:text-xl uppercase whitespace-nowrap text-[18px] flex items-center font-semibold  lg:text-left text-left text-blue-700">
              Phase 1 : LLC + Funding
            </h1>
          </div>
          <div>
            <LoginButton
              title="add member +"
              onClick={() => setNewMember(!newMember)}
            />
            {newMember && (
              <div className="w-[400px] z-[5000] p-5 shadow-lg absolute h-[500px] bg-white right-0 rounded-md ">
                <div>
                  <div className="flex justify-end">
                    <IoMdClose
                      onClick={() => setNewMember(!newMember)}
                      className="text-[#FF0000] cursor-pointer text-end text-[20px]"
                    />
                  </div>
                  <div className="relative mt-[36px]">
                    <input
                      type="text"
                      className="w-full h-[41px] px-3 border border-[#0250E6] focus:outline-[#0250E6]  "
                    />
                    <div className="absolute right-3 text-[20px] top-[12px]">
                      <IoIosSearch />
                    </div>
                  </div>
                  <div className="h-[290px] mt-4 overflowContainerY">
                    {[1, 2, 3, 5, 6, 7, 8].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between w-full items-center border-b py-1.5 pt-8 border-b-[#C4C4C4]"
                      >
                        <h1 className="text-[14px] leading-5 font-bold text-black tracking-[-1.8%]">
                          Daniel Patrick
                        </h1>
                        <p className="text-[#00B860] text-[25px] lead font-bold cursor-pointer">
                          +
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center w-full pt-[35px] pb-5">
          <div
            onClick={() => setActive(!active)}
            className={`flex items-center w-[300px] gap-3 ${
              active ? "bg-[#F1F1F1] " : ""
            } rounded-t-md py-2 px-5 `}
          >
            <h1 className="text-[16px] font-semibold tracking-[-1.8%]">
              Active Member :
            </h1>
            <div className="flex items-center">
              <div className="relative w-[30px] h-[30px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-white font-medium shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"></div>
              <div className="relative w-[30px] h-[30px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-white font-medium -ml-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"></div>
              <div className="relative w-[30px] h-[30px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-white font-medium -ml-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"></div>
              <div className="relative w-[30px] h-[30px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-white font-medium -ml-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"></div>
              <div className="relative w-[30px] h-[30px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-white font-medium -ml-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                TJ
              </div>
            </div>
            <div>
              <RiArrowDropDownLine
                onClick={() => setActive(!active)}
                className={`text-[20px] ${active ? "rotate-180" : ""} `}
                size={30}
              />
            </div>
          </div>
          {active && (
            <div className="h-[350px] w-[300px] overflowContainerY rounded-b-md  pb-6 px-5 mt-[45px] bg-[#F1F1F1] absolute ">
              {[1, 2, 3, 5, 6, 7, 8].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between w-full items-center border-b py-1.5 pt-8 border-b-[#C4C4C4]"
                >
                  <h1 className="text-[16px] font-bold text-black tracking-[-1.8%]">
                    Daniel Patrick
                  </h1>
                  <img
                    src={image1}
                    alt=""
                    className="w-[20px] h-[20px] object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="h-[2px] w-full bg-[#BDBDBD]" />
        <div className="h-[480px] px-4 overflow-y-scroll">
          <div className="flex items-center  gap-5 my-5">
            <div className="w-[35px] h-[34px] bg-[#D9D9D9] rounded-full flex justify-center items-center text-white font-semibold">
              TJ
            </div>
            <div className="w-[250px] bg-[#D9D9D9] p-5 rounded-3xl">
              <p className="text-[16px] text-[#343434]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <div className="flex items-center  gap-5 my-5">
            <div className="w-[35px] h-[34px] bg-[#D9D9D9] rounded-full flex justify-center items-center text-white font-semibold">
              TJ
            </div>
            <div className="w-[250px] bg-[#D9D9D9] p-5 rounded-3xl">
              <p className="text-[16px] text-[#343434]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <div className="flex justify-end my-5">
            <div className="w-[250px] bg-[#647DFF] p-5 rounded-3xl">
              <p className="text-[16px] text-[#FFFFFF]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <div className="flex items-center  gap-5 my-5">
            <div className="w-[35px] h-[34px] bg-[#D9D9D9] rounded-full flex justify-center items-center text-white font-semibold">
              TJ
            </div>
            <div className="w-[250px] bg-[#D9D9D9] p-5 rounded-3xl">
              <p className="text-[16px] text-[#343434]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <div className="flex items-center  gap-5 my-5">
            <div className="w-[35px] h-[34px] bg-[#D9D9D9] rounded-full flex justify-center items-center text-white font-semibold">
              TJ
            </div>
            <div className="w-[250px] bg-[#D9D9D9] p-5 rounded-3xl">
              <p className="text-[16px] text-[#343434]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <div className="flex items-center  gap-5 my-5">
            <div className="w-[35px] h-[34px] bg-[#D9D9D9] rounded-full flex justify-center items-center text-white font-semibold">
              TJ
            </div>
            <div className="w-[250px] bg-[#D9D9D9] p-5 rounded-3xl">
              <p className="text-[16px] text-[#343434]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <div className="flex items-center  gap-5 my-5">
            <div className="w-[35px] h-[34px] bg-[#D9D9D9] rounded-full flex justify-center items-center text-white font-semibold">
              TJ
            </div>
            <div className="w-[250px] bg-[#D9D9D9] p-5 rounded-3xl">
              <p className="text-[16px] text-[#343434]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <div className="flex justify-end my-5">
            <div className="w-[250px] bg-[#647DFF] p-5 rounded-3xl">
              <p className="text-[16px] text-[#FFFFFF]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
        </div>
        <div className="">
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
      </div>
    </>
  );
}
