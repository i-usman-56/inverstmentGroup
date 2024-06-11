import React from "react";
import Graph from "../../components/Graph/graph";
import Tasks from "../../components/task/tasks";
import Table from "../../components/table/table";
import tableData from "../../data/tableData1.json";
import tableData1 from "../../data/tableData2.json";
import "../../components/task/Task.css";

export default function HomeScreen() {
  return (
    <div>
      <div className="lg:my-[0px] my-[64px]">
        <div className="lg:flex md:px-8    mx-[20px] graph-margin md:mx-0 marginContainer  lg:gap-[25px] xl:gap-[50px] lg:px-10 xl:px-20">
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
          <Table tableData={tableData} />
          <Table tableData={tableData1} />
        </div>
        {/* <Table tableData={tableData} /> */}
      </div>
    </div>
  );
}
