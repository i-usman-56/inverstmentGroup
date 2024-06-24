import React, { useRef, useState } from "react";
import Logo from "../../assets/svg/logo.svg";
import "../../components/task/Task.css";
import Hamburger from "../shapes/hamburger";
import ProfileIcon from "../shapes/Profile";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaRegBell } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import icon from "../../assets/svg/Vector (1).svg";
import icon1 from "../../assets/svg/Vector (2).svg";
import icon2 from "../../assets/svg/clarity_administrator-line.svg";
import icon3 from "../../assets/svg/fluent-mdl2_teamwork.svg";
import icon4 from "../../assets/svg/solar_money-bag-broken.svg";
import { IoIosSearch } from "react-icons/io";
import DatePicker from "react-datepicker"; // import react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // import react-datepicker styl

export default function Navbar() {
  const navigate = useNavigate();
  const dateInputRef = useRef(null); // Ref for the DatePicker component
  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.setOpen(true); // Open the DatePicker component
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const openSidebar = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent body scroll when sidebar is open
  };
  const handleLogout = () => {
    navigate(`/login`);
    // Prevent body scroll when sidebar is open
  };

  const closeSidebar = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Restore body scroll when sidebar is closed
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const sidebarMenu = [
    { value: "Dashboard", img: icon, dropDownList: [], path: "admin" },
    {
      value: "Prospect Lists",
      img: icon1,
      path: "project-list",
      dropDownList: ["Dashboard", "Dashboard", "Dashboard", "Dashboard"],
    },
    { value: "Admin Panel", img: icon2, dropDownList: [], path: "user-access" },
    { value: "Finances", img: icon4, dropDownList: [], path: "" },
    {
      value: "Team Activity",
      img: icon3,
      dropDownList: [],
      path: "team-activity",
    },
  ];

  return (
    <>
      <div className="px-[35px] pt-[16px] hidden lg:block">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="" className="w-[97px] h-[83px]" />
          <div className="relative w-[200px] lg:w-[375px]">
            <input
              type="search"
              id="search"
              placeholder="Search Prospects"
              className="w-full px-8 py-2 border border-gray-300 placeholder-[#3C3C3C] text-[#3C3C3C] font-bold rounded-md focus:outline-none focus:border-blue-500"
            />
            <div className="absolute inset-y-0 right-0  flex items-center pr-3 pointer-events-none">
              <IoIosSearch className="text-[#3C3C3C]" />
            </div>
          </div>
          <div className="flex items-center gap-[18px]">
            <SlCalender
              onClick={handleIconClick}
              className="w-[24px] h-[24px] text-[#FFFFFF]"
            />
            <Link to={`/notification`}>
              <div className="relative">
                <FaRegBell className="w-[24px] h-[24px] text-[#FFFFFF]" />
                <div className="w-[14px] absolute -top-0  bg-green-500 h-[14px] flex justify-center text-[11px] items-center text-white font-semibold rounded-b-[50%] rounded-r-[50%]">
                  2
                </div>
              </div>
            </Link>
            <IoSettingsOutline className="w-[24px] h-[24px] text-[#FFFFFF]" />
            <ProfileIcon />
          </div>
          <div className="absolute top-10  right-[190px]">
            <DatePicker ref={dateInputRef} className="hidden" />
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <div className="border-2 lg:py-3 xl:py-5 flex px-6 gap-12 rounded-lg border-[#FFFFFF]">
            {sidebarMenu.map((menuItem, index) => (
              <div key={index} className="relative items-center">
                <div className="flex justify-center  space-y-2.5 flex-col items-center">
                  {/* Display the icon based on the `img` property */}
                  <img src={menuItem.img} alt="" className="cursor-pointer" />
                  {/* Display the value of the menu item */}
                  <Link to={`/${menuItem.path}`}>
                    <p className="text-[#FFFFFF] flex items-center cursor-pointer text-[14px] xl:text-[16px] font-bold leading-5 tracking-[-1.8%] ">
                      {menuItem.value}{" "}
                      {menuItem.dropDownList.length > 0 && (
                        <span className=" right-0 transform translate-x-[10px]">
                          <FaAngleDown className="text-[#FFFFFF]" />
                        </span>
                      )}
                    </p>
                  </Link>
                  {/* Show dropdown arrow if there are dropdown values */}
                </div>
                {/* Show dropdown list if there are dropdown values */}
                {menuItem.dropDownList.length > 0 && (
                  <div className="dropdown space-y-3 pl-6">
                    {menuItem.dropDownList.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="text-[#000000] text-[14px] font-semibold leading-5 tracking-[-1.7%] hover:text-[#0250E6] mt-2"
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Section */}
      <div className="pt-[24px] relative lg:hidden">
        <div className="marginContainerX mx-5 flex justify-between items-center">
          <img src={Logo} alt="" className="w-[50px] h-[44px]" />
          <div className="flex items-center gap-[12px]">
            <div onClick={openSidebar}>
              <Hamburger />
            </div>
            <ProfileIcon />
          </div>
        </div>

        <div className={`sidebar ${isOpen ? "fade-in-left" : "fade-out-left"}`}>
          <div className="sidebar-content">
            <div className="flex items-end justify-end">
              <button
                className="text-black cursor-pointer font-semibold text-end"
                onClick={closeSidebar}
              >
                Close
              </button>
            </div>
            <div className="flex flex-col pt-3 justify-center">
              <div className="space-y-6">
                {sidebarMenu.map((item, index) => (
                  <div key={index}>
                    <Link to={`/${item.path}`}>
                      <div
                        className={`text-[#000000] w-full text-[16px] font-bold leading-5 tracking-[-1.7%] hover:text-[#0250E6] cursor-pointer flex justify-between items-center ${
                          openDropdown === index ? "active-item" : ""
                        }`}
                        onClick={() => toggleDropdown(index)}
                      >
                        {item.value}
                        {item.dropDownList.length > 0 && (
                          <span className="ml-2">
                            {openDropdown === index ? (
                              <FaAngleUp />
                            ) : (
                              <FaAngleDown />
                            )}
                          </span>
                        )}
                      </div>
                    </Link>

                    <div
                      className={`dropdown space-y-3 pl-6 ${
                        openDropdown === index ? "open" : ""
                      }`}
                    >
                      {item.dropDownList.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="text-[#000000] text-[14px] font-semibold leading-5 tracking-[-1.7%] hover:text-[#0250E6] mt-2"
                        >
                          {subItem}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div
                  onClick={handleLogout}
                  className="text-[#000000] flex items-center w-full text-[16px] font-bold leading-5 tracking-[-1.7%] hover:text-[#0250E6]"
                >
                  <MdLogout />
                  <p>Logout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
      </div>
    </>
  );
}
