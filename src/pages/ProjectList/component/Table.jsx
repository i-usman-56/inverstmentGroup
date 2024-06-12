import "./Table.css";

export default function Table({ tableData }) {
  const { columns, rows } = tableData;

  const RenderData = () => {
    return rows.map((rowData, index) => (
      <div
        key={index}
        className="bg-white mt-[5px] flex flex-col lg:flex-row items-start lg:items-center border border-[#D9D9D9] rounded-md"
      >
        {rowData.map((data, dataIndex) => (

          <div
            key={dataIndex}
            className={`w-full lg:w-[20%] p-2 ${data.isbutton ? "flex justify-center" : ""}`}
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
                className={`text-center ${data.isbutton ? "w-fit" : "w-full"} text-[14px] lg:text-[16px] whitespace-nowrap lg:whitespace-normal leading-[14px] lg:leading-5 tracking-[-1.7%] font-medium ${data.isbutton ? "text-[#FFFFFF] uppercase px-3 py-[0.6px] rounded-sm" : ""
                  }`}
                style={{
                  backgroundColor: data.isbutton ? data.bgColor : "",
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
      <div className="lg:px-[0px] md:px-8  bg-white p-5">
        <div className="flex justify-between w-full items-center pl-[37px] pr-[24px] md:pl-0 md:pr-0 lg:pl-0 lg:pr-0 mt-[20px]">
          <h1 className="text-[17px] lg:text-[28px] font-[700] leading-[17.64px] tracking-[-1.7%] text-[#0250E6] ml-5">
            My Prospects
          </h1>

        </div>
        <div className="overflowContainer mx-[22px] lg:mx-0 mt-[24px] lg:mt-[30px]">
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
            <div className="lg:h-full h-[100px] overflowContainerY">
              <RenderData />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
