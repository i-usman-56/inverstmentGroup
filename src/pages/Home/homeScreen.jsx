import Graph from "../../components/Graph/graph";
import Tasks from "../../components/task/tasks";
import Table from '../../components/team/components/table';
import "../../components/task/Task.css";
import { getProspects } from "../../services/prospects";
import { useQuery } from "@tanstack/react-query";
import FillCircle from "../../components/notification/components/fillCircle";
import EmptyCircle from "../../components/notification/components/emptyCircle";
import { NewProspectHomeScreen } from "../../data/data";

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
    TypeFormA:"#A500B3"
  };
  const token = JSON.parse(sessionStorage.getItem('token'));
  const userID = JSON.parse(localStorage.getItem('userData'));
  const { data, isLoading, isError, error } = useQuery({
    queryKey: 'prospects',
    queryFn: () => getProspects(token, userID._id),
    
    enabled: !!token,
    retry: 3,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });

  const columns1 = [
    {
      title: "Client",
      dataIndex: "prospect_email",
      key: "Client",
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
      dataIndex: "clientstatus",
      key: "clientstatus",
      render: (clientstatus) => (
        <div>
          <p>
            {clientstatus ? <FillCircle /> : <EmptyCircle />}
          </p>
        </div>
      ),
    },
  ];

  const columns = [
    {
      title: "Client",
      dataIndex: "Client",
      key: "Client",
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
      dataIndex: "source",
      key: "source",
      render: (source) => (
        <div className={`px-3 rounded-md`} style={{ backgroundColor: socialMediaColors[source] || '#479090' }}>
          <span className="text-white whitespace-nowrap lg:text-[12px] xl:text-[14px] tracking-[-1.7%]  font-medium leading-5">
            {source}
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
          <span className={` ${status === 'Open' ? "text-[#00B860]" : "text-[#c63030]"}  whitespace-nowrap lg:text-[14px] xl:text-[16px] tracking-[-1.7%]  font-medium leading-5`}>
            {status}
          </span>
        </div>
      ),
    },
    {
      title: "Taking lead",
      dataIndex: "lead",
      key: "lead",
      render: (lead) => (
        <div>
          <p>
            {lead ? <FillCircle /> : <EmptyCircle />}
          </p>
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
          <Table columns={columns} data={NewProspectHomeScreen} title="New Prospects" buttonLabel="View All" />
          {data && <Table columns={columns1} data={data} title="My Prospects" buttonLabel="View All" />}
        </div>
      </div>
    </div>
  );
}
