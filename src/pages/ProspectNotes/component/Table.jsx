import "./Table.css";
import { useState } from "react";
import profileIcon from "../../../assets/svg/profileIcon.svg"


export default function Table({ tableData }) {
  const { columns, rows } = tableData;
  const [expandedRows, setExpandedRows] = useState([]);

  const handleExpandClick = (index) => {
    const isExpanded = expandedRows.includes(index);
    const newExpandedRows = isExpanded
      ? expandedRows.filter((rowIndex) => rowIndex !== index)
      : [...expandedRows, index];
    setExpandedRows(newExpandedRows);
  };

  const wrapText = (text, wordsPerLine) => {
    if (!text) return '';

    const words = text.split(' ') || undefined;
    let result = '';
    for (let i = 0; i < words.length; i++) {
      result += words[i] + ' ';
      if ((i + 1) % wordsPerLine === 0) {
        result += '\n';
      }
    }
    return result;
  };

  const RenderData = () => {
    return rows.map((rowData, index) => (
      <div key={index}>
        <div className="bg-white mt-[5px] flex lg:flex-row items-start lg:items-center border border-[#D9D9D9] rounded-md">
          {rowData.map((data, dataIndex) => (
            <div
              key={dataIndex}
              className={`w-full lg:w-[20%] p-2 ${data.isbutton ? "flex justify-center" : ""}`}
              onClick={() => dataIndex === 3 && handleExpandClick(index)} // Handle click on "NOTES" cell
            >
              {data.isRadio ? (
                <div className="w-full flex justify-center text-center items-center">
                  <p>MARK AS CLOSED</p>
                  <input
                    type="radio"
                    name={`radio_${index}`}
                    id={`radio_${index}`}
                    className="w-[15px] h-[15px] ml-2"
                    checked={data.isActive}
                  />
                </div>
              ) : (
                <p
                  className={`text-center ${data.isbutton ? "w-fit" : "w-full"} text-[14px] lg:text-[16px] whitespace-nowrap lg:whitespace-normal leading-[14px] lg:leading-5 tracking-[-1.7%] font-medium ${data.isbutton ? "text-[#FFFFFF] uppercase px-3 py-[0.6px] rounded-sm" : ""}`}
                  style={{
                    backgroundColor: data.isbutton ? data.bgColor : "",
                    color: data.isActive ? data.color : "",
                  }}
                >
                  {data.value} {dataIndex === 3 && (expandedRows.includes(index) ? "▲" : "▼")} {/* Arrow for expansion */}
                </p>
              )}
            </div>
          ))}
        </div>
        {expandedRows.includes(index) && (
          <div className=" mt-[5px] p-7 border border-[#D9D9D9] rounded-md">
            <span className="font-semibold flex">Me:
              <img src={profileIcon} alt="profileIcon" className="ml-2" />
            </span>
            <p className="text-sm whitespace-pre-wrap">{wrapText(rowData[3].notesContent, 8)}</p>
          </div>
        )}
      </div>
    ));
  };

  return (
    <>
      <div className="relative">
        <img src="../../src/assets/img/startCalling.png" alt="Top Right Image" className="absolute -top-3 -right-3 w-[50px] h-[50px]" />
        <div className="lg:px-[0px] md:px-8 bg-white p-5 rounded-lg">
          <div className="flex justify-between w-full items-center pl-[37px] pr-[24px] md:pl-0 md:pr-0 lg:pl-0 lg:pr-0 mt-[20px]">
            <h1 className="text-[17px] lg:text-[28px] font-[700] leading-[17.64px] tracking-[-1.7%] text-[#0250E6] ml-5">
              My Prospects
            </h1>
          </div>
          <div className="overflowContainer lg:mx-0 mt-[24px] lg:mt-[30px]">
            <div className="w-[725px] lg:w-full lg:pl-16 xl:pl-20">
              <div className="flex w-full mb-[12px] lg:mb-[16px]">
                {columns.map((columnName, index) => (
                  <p
                    key={index}
                    className="text-[17px] w-[20%] text-center font-[700] leading-[17.64px] tracking-[-1.7%] text-[#0250E6] p-2"
                  >
                    {columnName}
                  </p>
                ))}
              </div>
              <div className="lg:h-full h-full overflowContainerY">
                <RenderData />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
