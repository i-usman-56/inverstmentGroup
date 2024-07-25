import Graph from "../../components/Graph/graph";
import Tasks from "../../components/task/tasks";
import Table from "../../components/team/components/table";
import "../../components/task/Task.css";
import { useGetCardData, useGetProspects } from "../../services/prospects";
// import { useQuery } from "@tanstack/react-query";
import FillCircle from "../../components/notification/components/fillCircle";
import EmptyCircle from "../../components/notification/components/emptyCircle";
// import { NewProspectHomeScreen } from "../../data/data";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  const socialMediaColors = {
    Instagram: "#A500B3",
    Facebook: "#1877F2",
    Pinterest: "#E60023",
    Twitter: "#1DA1F2",
    LinkedIn: "#0077B5",
    Snapchat: "#FFFC00",
    YouTube: "#FF0000",
    WhatsApp: "#25D366",
    TikTok: "#000000",
    Reddit: "#FF4500",
    Tumblr: "#34526F",
    Flickr: "#0063DC",
    Medium: "#00AB6C",
    Vimeo: "#1AB7EA",
    Slack: "#4A154B",
    Skype: "#00AFF0",
    Discord: "#7289DA",
    Dribbble: "#EA4C89",
    Twitch: "#9146FF",
    WeChat: "#1AAD19",
    Quora: "#B92B27",
    Behance: "#1769FF",
    TypeFormA: "#A500B3",
  };
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
    { title: "interested commitment", color: "#FFC300" },
    { title: "dead", color: "#FF5733" },
    { title: "closed", color: "#33FF57" },
  ];
  const getClosingStatusColor = (title) => {
    debugger
    const status = closingStatusOptionsColors?.find(option => option.title === title);
    return status ? status.color : "#FFFFFF"; // Default to white if not found
  };
  // useEffect(()=>{})
  const token = JSON.parse(sessionStorage.getItem("token"));
  const userID = JSON.parse(sessionStorage.getItem("userData"));
  const { data } = useGetProspects(token, userID?._id);
  const _data = data && data.length > 0 ? data : null;
  const { data: NewProspectData } = useGetCardData(token);
  // console.log(NewProspectData)

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
      render: (closingstatus) => {
        const bgColor = getClosingStatusColor(closingstatus).toUpperCase();
        return (
          <div className={`px-3 rounded-md`} style={{ backgroundColor: bgColor }}>
            <span className="text-white whitespace-nowrap capitalize lg:text-[12px] xl:text-[14px] tracking-[-1.7%] font-medium leading-5">
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
          <span
            className={` capitalize  ${
              status === "unassigned Prospect"
                ? "text-[#E60202]"
                : "text-[#00B860]"
            } whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5`}
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

  const columns = [
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
      title: "Source",
      dataIndex: "prospect_source",
      key: "prospect_source",
      render: (prospect_source) => (
        <div
          className={`px-3 rounded-md`}
          style={{
            backgroundColor: socialMediaColors[prospect_source] || "#479090",
          }}
        >
          <span className="text-white whitespace-nowrap lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
            {prospect_source}
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
          <span
            className={` ${
              status === "unassigned Prospect"
                ? "text-[#E60202]"
                : "text-[#00B860]"
            } capitalize  whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5`}
          >
            {status}
          </span>
        </div>
      ),
    },
    {
      title: "Taking lead",
      dataIndex: "assignedTo",
      key: "assignedTo",
      render: (assignedTo) => (
        <div>
          <p>{assignedTo ? <FillCircle /> : <EmptyCircle />}</p>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="lg:my-[35px] xl:my-[60px] my-[64px]">
        <div className="lg:flex md:px-8 mx-[20px] graph-margin md:mx-0 marginContainer lg:gap-[25px] xl:gap-[50px] lg:px-10 xl:px-20">
          <div
            style={{ boxShadow: "0 1px 5px 0 rgba(5, 5, 5, 0.1)" }}
            className="xl:w-[60%] bg-[#FFFFFF] rounded-md lg:w-[60%] lg:h-[520px] "
          >
            <Graph />
          </div>
          <div
            style={{ boxShadow: "0 1px 5px 0 rgba(5, 5, 5, 0.1)" }}
            className="xl:w-[40%] bg-[#FFFFFF] rounded-md mt-[35px] lg:mt-0 lg:w-[40%] lg:h-[520px]"
          >
            <Tasks />
          </div>
        </div>
        <div className="xl:px-20 lg:px-10 lg:pt-[45px] lg:space-y-10 ">
          <Table
            columns={columns}
            data={NewProspectData}
            title="New Prospects"
            buttonLabel="View All"
          />
          {_data && (
            <div>
              <div className="flex justify-between w-full items-center pl-[37px] pr-[24px] md:pl-0 md:pr-0 lg:pl-0 lg:pr-0 mt-[20px]">
                <div className="flex justify-center items-center gap-4">
                  <h1 className="text-[17px] lg:text-[28px] font-[700] leading-[17.64px] tracking-[-1.7%] text-[#0250E6]">
                    My Prospects
                  </h1>
                </div>
                <Link to={`/project-list`}>
                  <button className="bg-gradient-to-r cursor-pointer capitalize h-[35px] lg:h-[45px] px-8 text-[14px] text-white rounded tracking-[-1.2%] font-bold leading-[14.3px] from-[#02A1E6] via-[#0250E6] to-[#0250E6]">
                    View All
                  </button>
                </Link>
              </div>
            </div>
          )}
          {_data && <Table columns={columns1} data={_data} />}
        </div>
      </div>
    </div>
  );
}
