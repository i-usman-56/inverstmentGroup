import tableData from "../../data/projectTableData.json";
import "../../components/task/Task.css";
import Table from "../../components/team/components/table.jsx";
import { useQuery } from "@tanstack/react-query";
import { useGetProspects } from "../../services/prospects.js";

export default function ProjectList() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const userID = JSON.parse(localStorage.getItem("userData"));
  const { data, isLoading, isError, error } =useGetProspects(token, userID._id)
  // useQuery({
  //   queryKey: "prospects",
  //   queryFn: () => getProspects(token, userID._id),
  //   staleTime: Infinity,
  //   cacheTime: 0,
  //   enabled: !!token,
  // });
  const _data = data && data.length > 0 ? data : null;

  const columns1 = [
    {
      title: "Client",
      dataIndex: "client_name",
      key: "client_name",
      render: (text) => (
        <div className="">
          <span className="text-black whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
            {text}
          </span>
        </div>
      ),
    },
    {
      title: "Closing status",
      dataIndex: "closingstatus",
      key: "closingstatus",
      render: (closingstatus) => (
        <div className="bg-[#4AE49A] px-3 rounded-md">
          <span className="text-white whitespace-nowrap lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
            {closingstatus}
          </span>
        </div>
      ),
    },
    {
      title: "Interest",
      dataIndex: "interest",
      key: "interest",
      render: (interest) => (
        <div className="">
          <span className="text-black whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
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
          <span className="text-[#00B860] whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5">
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
          <div>
            <p
              className={`${
                scheduleTaskDate ? "text-[#0250E6]" : "text-[#E60202]"
              }`}
            >
              {scheduleTaskDate
                ? `Meeting Scheduled ${formattedDate}`
                : "No Task Scheduled"}
            </p>
          </div>
        );
      },
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

      <div className="w-64 bg-white p-4 ml-4 hidden lg:block mt-4 rounded-lg shadow-lg">
        <div className="font-bold text-lg mb-4 text-[#0250E6]">
          PROSPECTS BY FILTER
        </div>
        <div className="space-y-6">
          {[
            { color: "0250E6", text: "My Prospects ▼" },
            { color: "444444", text: "Closing Status ▼" },
            { color: "276666", text: "Interest ▼" },
            { color: "00FF85", text: "Open Prospects" },
            { color: "02A1E6", text: "New Prospects" },
            { color: "8B0297", text: "By Scheduled Event ▼" },
            { color: "00FFB2", text: "My Closes" },
            { color: "F5D29C", text: "Shared With Me" },
            { color: "BC0404", text: "Dead Leads" },
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <span
                className="inline-block rounded-sm w-4 h-4 mr-2"
                style={{ backgroundColor: `#${item.color}` }}
              ></span>
              <span className="text-black">{item.text}</span>
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
        className="flex-grow lg:mt-[14px] rounded-lg  bg-white overflow-auto p-4"
      >
        {/* <Table tableData={tableData} /> */}
        {_data && (
          <Table
            columns={columns1}
            shown={true}
            data={_data}
            title="My Prospects"
            classes="lg:h-[650px] h-[350px] xl:h-[550px] "
            width="lg:w-[1050px] xl:w-full "
          />
        )}
      </div>
    </div>
  );
}
