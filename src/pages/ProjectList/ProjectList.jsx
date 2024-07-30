import tableData from "../../data/projectTableData.json";
import "../../components/task/Task.css";
import Table from "../../components/team/components/table.jsx";
import { useQuery } from "@tanstack/react-query";
import { useEditProspects, useGetProspects } from "../../services/prospects.js";
import { useState } from "react";
import FillCircle from "../../components/notification/components/fillCircle.jsx";
import EmptyCircle from "../../components/notification/components/emptyCircle.jsx";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { FadeLoader } from "react-spinners";

export default function ProjectList() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };
  const items = [
    {
      color: "0250E6",
      text: "My Prospects ▼",
      value: [
        { value: "Assigned To Me", _id: "1478598566166164164648" },
        { value: "Closed Prospects", _id: "1478598516166164164648" },
      ],
    },
    { color: "444444", text: "Closing Status ▼" },
    { color: "276666", text: "Interest ▼" },
    { color: "00FF85", text: "Open Prospects" },
    { color: "02A1E6", text: "New Prospects" },
    {
      color: "8B0297",
      text: "By Scheduled Event ▼",
      value: [
        { value: "Scheduled Calls", _id: "7478598566166164164648" },
        { value: "Scheduled Meetings", _id: "6478598566166164164648" },
        { value: "Closing Calls Scheduled", _id: "9478598566166164164648" },
        { value: "Closing Meetings Scheduled", _id: "8478598516166164164648" },
      ],
    },
    { color: "00FFB2", text: "My Closes" },
    { color: "F5D29C", text: "Shared With Me" },
    { color: "BC0404", text: "Dead Leads" },
  ];
  const token = JSON.parse(sessionStorage.getItem("token"));
  const userID = JSON.parse(sessionStorage.getItem("userData"));
  const { data, isLoading, isError, error } = useGetProspects(
    token,
    userID?._id
  );
  const _data = data && data.length > 0 ? data : null;

  const closingStatusOptionsColors = [
    { title: "Select Status", color: "#FFFFFF" },
    { title: "new prospect", color: "#FF5733" },
    { title: "first call", color: "#E68B02" },
    { title: "first call scheduled", color: "#3357FF" },
    { title: "first meeting scheduled", color: "#FF33A8" },
    { title: "no show follow up", color: "#33FFD1" },
    { title: "no show dead lead", color: "#FFC300" },
    { title: "call scheduled", color: "#FF5733" },
    { title: "meeting scheduled", color: "#699CFF" },
    { title: "closing call scheduled", color: "#3357FF" },
    { title: "closing meeting scheduled", color: "#00D971" },
    { title: "interested no commitment", color: "#33FFD1" },
    { title: "interested commitment", color: "#FFC100" },
    { title: "dead", color: "#FF5733" },
    { title: "closed", color: "#33FF57" },
  ];
  const getClosingStatusColor = (title) => {
    // debugger;
    const status = closingStatusOptionsColors.find(
      (option) => option.title === title
    );
    return status ? status.color : "#FFFFFF"; // Default to white if not found
  };
  const renderMarkAsClosed = (scheduleTaskDate, row) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { mutate } = useEditProspects(token, row._id);
    const showModal = () => {
      setIsModalVisible(true);
    };
    const data = {
      closingstatus: "closed",
    };
    const handleOk = () => {
      const data = {
        closingstatus: "closed",
      };
      mutate({ token, id: row._id, data });
      setIsModalVisible(false);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
      <div className="flex items-center gap-3">
        <p className="text-[15px] uppercase leading-4 tracking-[-1.8%] font-semibold cursor-pointer">
          Mark As Closed
        </p>
        {scheduleTaskDate === "closed" ? (
          <FillCircle />
        ) : (
          <div onClick={showModal} className="cursor-pointer">
            <EmptyCircle />
          </div>
        )}
        <Modal
          title="Confirm Close"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Are you sure you want to close this prospect?</p>
        </Modal>
      </div>
    );
  };

  const columns1 = [
    {
      title: "Client",
      dataIndex: "client_name",
      key: "client_name",
      render: (text, row) => {
        const navigate = useNavigate();
        return (
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate(`/prospect-profile/?id=${row._id}`);
            }}
          >
            <span className="text-black uppercase whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
              {text}
            </span>
          </div>
        );
      },
    },
    {
      title: "Closing status",
      dataIndex: "closingstatus",
      key: "closingstatus",
      render: (closingstatus) => {
        const bgColor = getClosingStatusColor(closingstatus).toUpperCase();
        return (
          <div
            className={`px-3 rounded-md`}
            style={{ backgroundColor: bgColor }}
          >
            <span className="text-white uppercase whitespace-nowrap  lg:text-[12px] xl:text-[14px] tracking-[-1.7%] font-medium leading-5">
              {closingstatus}
            </span>
          </div>
        );
      },
    },
    {
      title: "Interest",
      dataIndex: "interest",
      key: "interest",
      render: (interest) => (
        <div className="">
          <span className="text-black uppercase whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
            {interest}
          </span>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div className="">
          <span
            className={` ${
              status === "unassigned Prospect"
                ? "text-[#E60202]"
                : "text-[#00B860]"
            } capitalize whitespace-nowrap uppercase lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5`}
          >
            {status}
          </span>
        </div>
      ),
    },
    {
      title: "Events/Tasks",
      dataIndex: "scheduleTaskDate",
      key: "scheduleTaskDate",
      render: (scheduleTaskDate) => {
        const date = new Date(scheduleTaskDate);
        const formattedDate = scheduleTaskDate
          ? `${("0" + (date.getMonth() + 1)).slice(
              -2
            )}/${date.getFullYear().toString().slice(-2)}`
          : "No Task Scheduled";

        return (
          <div className="w-full">
            <p
              className={`${
                scheduleTaskDate ? "text-[#0250E6]" : "text-[#E60202]"
              } text-start uppercase`}
            >
              {scheduleTaskDate
                ? `Meeting Scheduled ${formattedDate}`
                : "No Task Scheduled"}
            </p>
          </div>
        );
      },
    },
    {
      title: "Notes",
      dataIndex: "scheduleTaskDate",
      key: "scheduleTaskDate",
      render: (scheduleTaskDate, row, isOpen, setIsOpen) => (
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-[15px] leading-4 uppercase tracking-[-1.8%] font-semibold cursor-pointer">
            Notes
          </p>
          {isOpen ? <p>&#x25B2;</p> : <p>&#x25BC;</p>}
        </div>
      ),
    },
    {
      title: "Mark Close",
      dataIndex: "closingstatus",
      key: "closingstatus",
      render: renderMarkAsClosed,
    },
  ];
  return (
    <div className="lg:flex lg:items-start lg:gap-3 lg:pb-10">
      {/*MOBILE FILTER */}
      <div className="bg-blue-500 p-4 text-white w-full lg:hidden text-center">
        <select className="bg-white text-gray-800 p-2 rounded">
          <option>PROSPECTS BY FILTER</option>
          <option>My Prospects</option>
          <option>Closing Status</option>
          <option>Interest</option>
          <option>Open Prospects</option>
          <option>By Scheduled Event</option>
          <option>My Closes</option>
          <option>Shared With Me</option>
          <option>Dead Leads</option>
        </select>
      </div>

      <div className="!w-80 bg-white p-4 ml-4 hidden lg:block mt-4 rounded-lg shadow-lg">
        <div className="font-bold text-lg mb-4 text-[#0250E6]">
          PROSPECTS BY FILTER
        </div>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index}>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleDropdownClick(index)}
              >
                <span
                  className="inline-block rounded-sm w-4 h-4 mr-2"
                  style={{ backgroundColor: `#${item.color}` }}
                ></span>
                <span className="text-black font-bold text-[16px]">
                  {item.text}
                </span>
              </div>
              {item.value && openDropdown === index && (
                <div className="ml-5 mt-3 space-y-3 ">
                  {item.value.map((subItem) => (
                    <div
                      key={subItem._id}
                      className="text-black flex  items-center font-bold text-[16px] cursor-pointer"
                    >
                      <span
                        className="inline-block rounded-sm w-4 h-4 mr-2"
                        style={{ backgroundColor: `#${item.color}` }}
                      ></span>
                      <span className="whitespace-normal">{subItem.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="font-bold text-lg mt-8 text-[#0250E6]">
          CURRENT CLIENTS
        </div>
        <div className="space-y-4">
          <div>
            <span className="inline-block w-4 h-4 bg-blue-500 mr-2 mt-4"></span>
            <span className="text-black">Closed & Ongoing Clients</span>
          </div>
          <div>
            <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span>
            <span className="text-black">Assigned Leads</span>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div
        style={{ boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.05)" }}
        className="flex-grow lg:mt-[14px] rounded-lg w-full  bg-white overflow-auto p-4"
      >
        {/* <Table tableData={tableData} /> */}
        {isLoading ? (
          <div className="flex h-[450px] items-center justify-center content-center">
            <FadeLoader color="blue" />
          </div>
        ) : (
          _data && (
            <Table
              columns={columns1}
              shown={true}
              data={_data}
              title="My Prospects"
              classes="lg:h-[650px] mb-5 h-[350px] xl:h-[550px] "
              width="lg:w-[1050px] xl:w-[1650px] "
            />
          )
        )}
      </div>
    </div>
  );
}
