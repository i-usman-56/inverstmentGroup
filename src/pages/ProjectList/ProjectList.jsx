import Table from "./component/Table.jsx";
import tableData from "../../data/projectTableData.json";
import "../../components/task/Task.css";

export default function ProjectList() {
  return (
    <div className="flex items-start">

      {/*MOBILE FILTER */}
      <div className="bg-blue-500 p-4 text-white w-full md:hidden">
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

      <div className="w-64 bg-white p-4 ml-4 hidden md:block mt-4 rounded-lg">
        <div className="font-bold text-lg mb-4 text-[#0250E6]">PROSPECTS BY FILTER</div>
        <div className="space-y-6">
          {[
            { color: "blue-500", text: "My Prospects ▼" },
            { color: "gray-700", text: "Closing Status ▼" },
            { color: "green-500", text: "Interest ▼" },
            { color: "blue-300", text: "Open Prospects" },
            { color: "purple-500", text: "By Scheduled Event ▼" },
            { color: "green-300", text: "My Closes" },
            { color: "yellow-500", text: "Shared With Me" },
            { color: "red-500", text: "Dead Leads" },
          ].map((item, index) => (
            <div key={index}>
              <span className={`inline-block w-4 h-4 bg-${item.color} mr-2`}></span>
              <span className="text-black">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="font-bold text-lg mt-8 text-[#0250E6]">CURRENT CLIENTS</div>
        <div className="space-y-4">
          <div>
            <span className="inline-block w-4 h-4 bg-blue-500 mr-2"></span>
            <span className="text-black">Closed & Ongoing Clients</span>
          </div>
          <div>
            <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span>
            <span className="text-black">Assigned Leads</span>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-grow overflow-auto p-4">
        <Table tableData={tableData} />
      </div>
    </div>
  );
}
