import React, { useState } from "react";
import Logo from "../../assets/svg/logo.svg";
import "../../components/task/Task.css";
import Hamburger from "../shapes/hamburger";
import ProfileIcon from "../shapes/Profile";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const openSidebar = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent body scroll when sidebar is open
  };

  const closeSidebar = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Restore body scroll when sidebar is closed
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const sidebarMenu = [
    { value: "Dashboard", dropDownList: [] },
    {
      value: "Prospect Lists",
      dropDownList: ["Dashboard", "Dashboard", "Dashboard", "Dashboard"],
    },
    { value: "Admin Panel", dropDownList: [] },
    { value: "Finances", dropDownList: [] },
    { value: "Team Activity", dropDownList: [] },
  ];

  return (
    <>
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
              </div>
            </div>
          </div>
        </div>
        {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
      </div>
    </>
  );
}
