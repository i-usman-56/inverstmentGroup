import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/svg/logo.svg";
import "../../components/task/Task.css";
import Hamburger from "../shapes/hamburger";
import ProfileIcon from "../shapes/Profile";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaRegBell } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import icon from "../../assets/svg/Vector (1).svg";
import icon1 from "../../assets/img/Group 337.svg";
import icon2 from "../../assets/svg/clarity_administrator-line.svg";
import icon3 from "../../assets/svg/fluent-mdl2_teamwork.svg";
import icon4 from "../../assets/svg/Group 337.svg";
import icon5 from "../../assets/svg/projectList.svg";
import { IoIosSearch } from "react-icons/io";
import DatePicker from "react-datepicker"; // import react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // import react-datepicker styl
import useAdmin from "../../hooks/useRole";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const isAdmin = useAdmin();
  const isLoggedIn= useAuth();
  const navigate = useNavigate();
  const token = JSON.parse(sessionStorage.getItem("token"));
  useEffect(()=>{
    debugger
    if (!token) {
      navigate('/login')
    }
  },[])
  console.log(isLoggedIn)
  const [showLogout, setShowLogout] = useState(false);
  const logoutMenuRef = useRef(null);
  const dateInputRef = useRef(null); // Ref for the DatePicker component
  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.setOpen(true); // Open the DatePicker component
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (logoutMenuRef.current && !logoutMenuRef.current.contains(event.target)) {
        setShowLogout(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const openSidebar = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent body scroll when sidebar is open
  };
  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    sessionStorage.removeItem("token");
    navigate(`/login`);
  };

  const closeSidebar = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Restore body scroll when sidebar is closed
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  const handleIconClick1 = () => {
    setShowLogout((prevShowLogout) => !prevShowLogout);
  };

  const sidebarMenu = isAdmin
    ? [
        { value: "Dashboard", img: icon, dropDownList: [], path: "admin" },
        {
          value: "Prospect Lists",
          img: icon5,
          path: "project-list",
          dropDownList: ["Dashboard", "Dashboard", "Dashboard", "Dashboard"],
        },
        {
          value: "Admin Panel",
          img: icon2,
          dropDownList: [],
          path: "user-access",
        },
        { value: "Messaging", img: icon4, dropDownList: [], path: "messaging" },
        {
          value: "Team Activity",
          img: icon3,
          dropDownList: [],
          path: "team-activity",
        },
      ]
    : [
        { value: "Dashboard", img: icon, dropDownList: [], path: "admin" },
        {
          value: "Prospect Lists",
          img: icon5,
          path: "project-list",
          dropDownList: ["Dashboard", "Dashboard", "Dashboard", "Dashboard"],
        },
        {
          value: "Messaging",
          img: icon2,
          dropDownList: [],
          path: "messaging",
        },
      ];

  return (
    <>
      <div className="px-[35px] pt-[16px] hidden lg:block">
        <div className="flex justify-between items-center">
          <Link to={`/admin`}>
            <img src={Logo} alt="" className="w-[97px] h-[83px]" />
          </Link>
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
          <div className="flex relative items-center gap-[18px]">
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
            <div className="relative">
              <div onClick={handleIconClick1} className="cursor-pointer">
                <ProfileIcon />
              </div>
              {showLogout && (
                <div
                ref={logoutMenuRef}
                  onClick={handleLogout}
                  className="absolute cursor-pointer hover:text-[#0250E6] right-2 mt-2 px-3 w-[205px] h-[55px] bg-white rounded-md flex items-center justify-between"
                >
                  <button className=" rounded-md  text-[18px] font-semibold tracking-[-1.8%] ">
                    Logout
                  </button>
                  <MdLogout className="text-[20px]" />
                </div>
              )}
              <div className="absolute top-[10px]  right-[110px]">
                <DatePicker ref={dateInputRef} className="hidden" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-6 gap-6">
          <div className="border-2 lg:py-3 xl:py-5 flex px-6 gap-12 rounded-lg border-[#FFFFFF]">
            {sidebarMenu.map((menuItem, index) => (
              <div key={index} className="relative items-center">
                <Link to={`/${menuItem.path}`}>
                  <div className="flex justify-center  space-y-2.5 flex-col items-center">
                    <img
                      src={menuItem.img}
                      alt=""
                      className="cursor-pointer w-[25px] h-[25px]"
                    />

                    <div className="flex items-center">
                      <p className="text-[#FFFFFF] uppercase cursor-pointer text-[14px] xl:text-[16px] font-bold leading-5 tracking-[-1.8%] ">
                        {menuItem.value}{" "}
                      </p>
                      {menuItem.dropDownList.length > 0 && (
                        <span className=" right-0 transform translate-x-[10px]">
                          <FaAngleDown className="text-[#FFFFFF]" />
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
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
          <div className="border-2 lg:py-3 xl:py-5 flex px-6 gap-12 rounded-lg border-[#FFFFFF]">
            <div className="relative flex justify-center  items-center">
              <Link to="/createprospect">
                <div className="justify-center flex flex-row-reverse gap-2 space-y-2.5 items-center">
                  <img src={icon1} alt="" className="cursor-pointer" />

                  <p className="text-[#FFFFFF] uppercase flex items-center cursor-pointer text-[14px] xl:text-[16px] font-bold leading-5 tracking-[-1.8%] ">
                    Add Propects
                  </p>
                </div>
              </Link>
            </div>
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
