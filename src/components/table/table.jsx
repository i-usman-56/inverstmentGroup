import React from "react";
import "../../components/table/Table.css";
export default function Table({tableData }) {
  const { columns, rows } = tableData;
  const RenderData = () => {
    return rows.map((rowData, index) => (
      <div
        key={index}
        className="bg-white mt-[5px]  flex h-[45px] lg:h-[50px]  items-center  border border-[#D9D9D9] rounded-md"
      >
        {rowData.map((data, dataIndex) => (
          <div
            className={`w-[33%]   ${
              data.isbutton
                ? "flex justify-center"
                : ""
            }`}
          >
            {data.isRadio ? (
              <div className="w-full flex justify-center">
                <input
                  type="radio"
                  name={`radio_${index}`}
                  id={`radio_${index}`}
                  className="w-[15px] h-[15px]"
                />
              </div>
            ) : (
              <p
                key={dataIndex}
                className={`text-center ${
                  data.isbutton ? "w-fit" : "w-full"
                }   text-[${data.color}]  text-[14px] lg:text-[16px] whitespace-nowrap lg:whitespace-normal leading-[14px] lg:leading-5 tracking-[-1.7%] font-medium ${
                  data.isbutton
                    ? "text-[#FFFFFF] uppercase px-3 py-[0.6px] rounded-sm"
                    : ""
                }  `}
                style={{
                  backgroundColor: data.isbutton
                    ? data.bgColor
                    : "", 
                  color: data.isActive ? data.color : "",
                }}
              >
                {data.value}
              </p>
            )}
          </div>
        ))}
      </div>
    ));
  };
  return (
    <>
      <div className="lg:px-[85px]">
        <div className="flex justify-between w-full items-center pl-[37px] pr-[24px] lg:pl-0 lg:pr-0 mt-[20px]">
          <h1 className="text-[17px] lg:text-[28px] font-[700] leading-[17.64px] tracking-[-1.7%] text-[#0250E6]">
            My Prospects
          </h1>
          <button className="bg-gradient-to-r capitalize h-[35px] lg:h-[45px] px-8 text-[14px] text-white  rounded  tracking-[-1.2%] font-bold leading-[14.3px] from-[#02A1E6] via-[#0250E6] to-[#0250E6]">
            View All
          </button>
        </div>
        {/* Table Component */}
        <div className="overflowContainer mx-[22px] lg:mx-0  mt-[32px]">
          <div className="w-[725px] lg:w-full lg:pl-24 xl:pl-20">
            <div className="flex w-full mb-[20px] lg:mb-[16px]">
              {columns.map((columnName, index) => (
                <p
                  key={index}
                  className="text-[17px] w-[20%] text-center font-[700] leading-[17.64px] tracking-[-1.7%] text-[#0250E6] p-2"
                >
                  {columnName}
                </p>
              ))}
            </div>
            <div className="lg:h-[170px] h-[100px] overflowContainerY">
              <RenderData />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
