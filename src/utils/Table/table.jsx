// src/utils/withTable.js
import React from "react";
import PropTypes from "prop-types";

const withTable = (WrappedComponent) => {
  const TableComponent = ({ columns, data, title, buttonLabel,classes }) => {
    const RenderData = () => {
      return data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="bg-white mt-[5px] flex h-[45px] lg:h-[50px] items-center border border-[#D9D9D9] rounded-md"
        >
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              className={`w-[33%] ${col.render ? "flex justify-center" : ""}`}
            >
              {col.render ? (
                col.render(row[col.dataIndex])
              ) : (
                <p
                  className={`text-center text-[${
                    col.color || "black"
                  }] text-[14px] lg:text-[16px] whitespace-nowrap lg:whitespace-normal leading-[14px] lg:leading-5 tracking-[-1.7%] font-medium`}
                >
                  {row[col.dataIndex]}
                </p>
              )}
            </div>
          ))}
        </div>
      ));
    };

    return (
      <div className="lg:px-[2px] md:px-8">
        {buttonLabel || title && (
          <div className="flex justify-between w-full items-center pl-[37px] pr-[24px] md:pl-0 md:pr-0 lg:pl-0 lg:pr-0 mt-[20px]">
            {title && (
              <h1 className="text-[17px] lg:text-[28px] font-[700] leading-[17.64px] tracking-[-1.7%] text-[#0250E6]">
                {title}
              </h1>
            )}
            {buttonLabel && (
              <button className="bg-gradient-to-r capitalize h-[35px] lg:h-[45px] px-8 text-[14px] text-white rounded tracking-[-1.2%] font-bold leading-[14.3px] from-[#02A1E6] via-[#0250E6] to-[#0250E6]">
                {buttonLabel}
              </button>
            )}
          </div>
        )}
        <div className={`overflowContainer mx-[22px] lg:mx-0 mt-[24px]  lg:mt-[40px] xl:mt-[75px] `}>
          <div className="lg:w-full w-[925px] lg:pl-8 xl:pl-20" >
            <div className="flex w-full mb-[12px] lg:mb-[16px]">
              {columns.map((col, index) => (
                <p
                  key={index}
                  className="text-[17px] w-[250px] lg:w-[33%] text-center font-[700] leading-[17.64px] tracking-[-1.7%] text-[#0250E6] p-2"
                >
                  {col.title}
                </p>
              ))}
            </div>
            <div className={`lg:h-[170px] h-[100px] ${classes} overflowContainerY`}>
              <RenderData />
            </div>
          </div>
        </div>
      </div>
    );
  };

  TableComponent.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    title: PropTypes.string,
    buttonLabel: PropTypes.string,
  };

  TableComponent.defaultProps = {
    columns: [],
    data: [],
    title: "",
    buttonLabel: "",
  };

  return TableComponent;
};

export default withTable;
