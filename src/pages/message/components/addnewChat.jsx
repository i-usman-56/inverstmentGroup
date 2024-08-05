import React, { useState } from "react";
import RoundedTopBg from "../../../components/Rounded/rounded";
import img from "../../../assets/svg/emojiadd.svg";
import img1 from "../../../assets/svg/files.svg";
import { FaAngleDown, FaMicrophone } from "react-icons/fa";
import LoginButton from "../../../components/auth/signup/components/LoginButton";
import { useGetChatRooms } from "../../../services/chat";

export default function AddnewChat({ backClick }) {

  const [chatName, setChatName] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [prospects, setProspects] = useState([
    "Marion Carter",
    "John Doe",
    "Jane Smith",
    "Micheal Graves",
    "Ina Hall",
    "Abbie Gutierrez",
  ]);

  const [selectedProspects, setSelectedProspects] = useState([]);
  const [showProspectDropdown, setShowProspectDropdown] = useState(false);
  const [teamMembers, setTeamMembers] = useState([
    "Marion Carter",
    "John Doe",
    "Jane Smith",
  ]);
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]);
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Enter Welcome Message to Group"
  );
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect form data
    const formData = {
      chatName,
      selectedColor,
      selectedProspects,
      selectedTeamMembers,
      welcomeMessage,
    };
    console.log("Form Data:", formData);
    // Handle form data as needed (e.g., send to server)
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleProspectClick = (prospect) => {
    setSelectedProspects((prev) =>
      prev.includes(prospect) ? [...prev] : [...prev, prospect]
    );
    setShowProspectDropdown(false); // Hide dropdown after selection
  };

  const handleTeamMemberClick = (member) => {
    setSelectedTeamMembers((prev) =>
      prev.includes(member) ? [...prev] : [...prev, member]
    );
    setShowTeamDropdown(false); // Hide dropdown after selection
  };

  const handleArrowClick = () => {
    if (inputMessage.trim() !== "") {
      setWelcomeMessage(inputMessage);
      setInputMessage("");
    }
  };

  return (
    <div>
      <>
        <div className="pb-20 hidden lg:block">
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
          <div className="w-full px-10 xl:px-[150px] pt-[25px]">
            <form onSubmit={handleSubmit}>
              <div>
                <p className="text-[14px] font-bold cursor-pointer text-end pr-24">
                  search propects
                </p>
              </div>
              <div>
                <p className=" text-[16px] py-1 uppercase font-bold pl-5  text-[#000000] text-opacity-[0.36]">
                  choose chat color
                </p>
                <div className="gap-5 flex">
                  {[
                    "cyan-500",
                    "blue-500",
                    "blue-200",
                    "green-500",
                    "purple-500",
                  ].map((color) => (
                    <div
                      key={color}
                      className={`w-[20px] h-[20px] rounded-sm ${
                        selectedColor === color ? "border-2 border-black" : ""
                      }`}
                      onClick={() => handleColorClick(color)}
                    />
                  ))}
                  {/* <div className="w-[20px] h-[20px] rounded-sm bg-cyan-500" />     */}
                </div>
              </div>
              <div className="mt-[35px]">
                <input
                  type="text"
                  className="text-[14px] font-bold rounded-md px-4 focus:outline-none text-[#000000] text-opacity-60 w-full h-[60px] bg-[#D9D9D9] bg-opacity-[0.24]"
                  placeholder="Add Chat Name"
                  value={chatName}
                  onChange={(e) => setChatName(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor=""
                  className="text-[16px] uppercase font-bold pl-5 text-[#000000] text-opacity-[0.36]"
                >
                  Add prospect and client
                </label>
                <div className="relative">
                  <div className="text-[14px] font-bold gap-5 rounded-md px-4 flex flex-wrap justify-start items-center focus:outline-none text-[#000000] text-opacity-60 w-full h-[60px] bg-[#D9D9D9] bg-opacity-[0.24] pr-12">
                    {selectedProspects.map((prospect) => (
                      <div
                        key={prospect}
                        className="w-fit bg-[#D9D9D9] bg-opacity-100 flex items-center text-black h-[25px] px-5 rounded-sm"
                      >
                        {prospect}
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 right-0 h-full flex items-center">
                    <div
                      className="w-[32px] h-[32px] bg-[#0250E6] flex items-center justify-center text-white rounded-[2px] mr-2 cursor-pointer"
                      onClick={() =>
                        setShowProspectDropdown(!showProspectDropdown)
                      }
                    >
                      +
                    </div>
                    {showProspectDropdown && (
                      <div className="absolute right-0  z-[5000] top-[100%] max-h-[250px] overflowContainerY w-[200px] bg-white border border-gray-300 shadow-lg rounded-md">
                        {prospects.map((prospect) => (
                          <div
                            key={prospect}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleProspectClick(prospect)}
                          >
                            {prospect}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor=""
                  className="text-[16px] uppercase font-bold pl-5 text-[#000000] text-opacity-[0.36]"
                >
                  Add internal team member
                </label>
                <div className="relative">
                  <div className="text-[14px] font-bold gap-5 rounded-md px-4 flex flex-wrap justify-start items-center focus:outline-none text-[#000000] text-opacity-60 w-full h-[60px] bg-[#D9D9D9] bg-opacity-[0.24] pr-12">
                    {selectedTeamMembers.map((member) => (
                      <div
                        key={member}
                        className="w-fit bg-[#D9D9D9] bg-opacity-100 flex items-center text-black h-[25px] px-5 rounded-sm"
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 right-0 h-full flex items-center">
                    <div
                      className="w-[32px] h-[32px] bg-[#0250E6] flex items-center justify-center text-white rounded-[2px] mr-2 cursor-pointer"
                      onClick={() => setShowTeamDropdown(!showTeamDropdown)}
                    >
                      +
                    </div>
                    {showTeamDropdown && (
                      <div className="absolute right-0 max-h-[250px] overflowContainerY  top-[100%] w-[200px] bg-white border border-gray-300 shadow-lg rounded-md">
                        {teamMembers.map((member) => (
                          <div
                            key={member}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleTeamMemberClick(member)}
                          >
                            {member}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="text-[14px] font-bold rounded-t-md px-2 pt-4 focus:outline-none text-[#606060] text-opacity-60 w-full h-[180px] xl:h-[250px] bg-[#D9D9D9] bg-opacity-[0.24]">
                  <p>{welcomeMessage || "Enter Welcome Message to Group"}</p>
                </div>
                <div className="text-[14px] font-bold w-full rounded-md mt-0 flex justify-center items-center h-[100px] bg-[#DCDCDC]">
                  <div className="flex w-full justify-between items-center gap-3">
                    <div className="flex items-center justify-center w-[25%] gap-4">
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
                        className="h-[35px] xl:h-[60px] w-fit px-3 bg-[#0250E6]  flex items-center text-[16px] font-semibold justify-center text-white rounded-[5px] cursor-pointer"
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
            <form onSubmit={handleSubmit}>
            <select
      value={selectedColor}
      onChange={handleColorChange}
      className="text-[14px] font-bold rounded-md px-4 focus:outline-none text-[#000000] text-opacity-60 w-full h-10 bg-[#D9D9D9] bg-opacity-[0.24]"
    >
      <option value="">Choose Chat Color</option>
      <option value="#FF0000">Red</option>
      <option value="#0000FF">Blue</option>
      <option value="#FFC0CB">Strawberry</option>
      {/* Add more color options as needed */}
    </select>
              <div className="mt-4">
                <input
                  type="text"
                  className="text-[14px] font-bold rounded-md px-4 focus:outline-none text-[#000000] text-opacity-60 w-full h-[60px] bg-[#D9D9D9] bg-opacity-[0.24]"
                  placeholder="Add Chat Name"
                  value={chatName}
                  onChange={(e) => setChatName(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <div className="relative">
                  <div className="text-[14px] font-bold flex gap-5  items-center w-full overflow-x-scroll rounded-md px-4 focus:outline-none text-[#000000] text-opacity-60 h-10 bg-[#D9D9D9] bg-opacity-[0.24] pr-12">
                    {selectedTeamMembers.map((prospect) => (
                      <div
                        key={prospect}
                        className="bg-[#D9D9D9] bg-opacity-100  flex items-center  w-fit   text-black h-[25px] px-5 rounded-sm whitespace-nowrap"
                      >
                        {prospect}
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 right-0 h-full flex items-center">
                    <div
                      className="w-[32px] h-[32px] bg-[#0250E6] flex items-center justify-center text-white rounded-[2px] mr-2 cursor-pointer"
                      onClick={() =>
                        setShowTeamDropdown(!showTeamDropdown)
                      }
                    >
                      +
                    </div>
                    {showTeamDropdown && (
                      <div className="absolute right-0  z-[5000] top-[100%] max-h-[250px] overflowContainerY w-[200px] bg-white border border-gray-300 shadow-lg rounded-md">
                        {teamMembers.map((prospect) => (
                          <div
                            key={prospect}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleTeamMemberClick(prospect)}
                          >
                            {prospect}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="relative">
                  <div className="text-[14px] font-bold flex gap-5  items-center w-full overflow-x-scroll rounded-md px-4 focus:outline-none text-[#000000] text-opacity-60 h-10 bg-[#D9D9D9] bg-opacity-[0.24] pr-12">
                    {selectedProspects.map((prospect) => (
                      <div
                        key={prospect}
                        className="bg-[#D9D9D9] bg-opacity-100  flex items-center  w-fit   text-black h-[25px] px-5 rounded-sm whitespace-nowrap"
                      >
                        {prospect}
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 right-0 h-full flex items-center">
                    <div
                      className="w-[32px] h-[32px] bg-[#0250E6] flex items-center justify-center text-white rounded-[2px] mr-2 cursor-pointer"
                      onClick={() =>
                        setShowProspectDropdown(!showProspectDropdown)
                      }
                    >
                      +
                    </div>
                    {showProspectDropdown && (
                      <div className="absolute right-0  z-[5000] top-[100%] max-h-[250px] overflowContainerY w-[200px] bg-white border border-gray-300 shadow-lg rounded-md">
                        {prospects.map((prospect) => (
                          <div
                            key={prospect}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleProspectClick(prospect)}
                          >
                            {prospect}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-5">
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
