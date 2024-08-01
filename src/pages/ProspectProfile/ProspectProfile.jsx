import phonecall from "../../assets/svg/ic_round-local-phone.svg";
import email from "../../assets/svg/carbon_email.svg";
import googlemeet from "../../assets/svg/flat-color-icons_google.svg";
import phone2 from "../../assets/svg/phone2.svg";
import deleteIcon from "../../assets/svg/delete.svg";
import exportIcon from "../../assets/svg/export.svg";
import profileIcon from "../../assets/svg/profileIcon.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  useDeleteProspects,
  useEditProspects,
  useGetProspectDetail,
} from "../../services/prospects";
import { useEffect, useState } from "react";
import { Modal } from "antd";

const ProspectProfile = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [showpaymentinput, setShowPaymentInput] = useState(false);
  const [showpaymentinputinterest, setShowPaymentInputInterest] = useState(
    false
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleSave, setIsModalVisibleSave] = useState(false);
  const [isModalVisibleDelete, setIsModalVisibleDelete] = useState(false);
  const [currentNote, setCurrentNote] = useState("");
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [closingStatus, setClosingStatus] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const prospectId = searchParams.get("id");
  const token = JSON.parse(sessionStorage.getItem("token"));
  // console.log(prospectId)
  const { data, status } = useGetProspectDetail(token, prospectId);
  useEffect(() => {
    if (data?.notes) {
      setNotes(data.notes);
    }
    if (data?.paymentAmmount) {
      setAmount(data.paymentAmmount);
    }
    if (data?.interest) {
      setInterest(data.interest);
    }
    if (data?.closingstatus) {
      setClosingStatus(data.closingstatus);
    }
  }, [data]);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModalSave = () => {
    setIsModalVisibleSave(true);
  };
  const showModalDelete = () => {
    setIsModalVisibleDelete(true);
  };
  // const handleOk = () => {
  //   const data = {
  //     closingstatus: "closed",
  //   };
  //   mutate({ token, id: row._id, data });
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCancelSave = () => {
    setIsModalVisibleSave(false);
  };
  const handleCancelDelete = () => {
    setIsModalVisibleDelete(false);
  };
  const { mutate } = useDeleteProspects();
  const { mutate: editProspect } = useEditProspects();
  // console.log(data);
  const handleBackClick = () => {
    navigate(-1);
  };
  const handleDelete = (id) => {
    // console.log(id); // for debugging purposes
    mutate({ token, id });
  };
  const handleAddNote = () => {
    if (currentNote.trim() !== "") {
      const newNote = { text: currentNote };
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      setCurrentNote("");
      // Update the prospect with the new notes in the backend
      // editProspect({ token, id: prospectId, data: { notes: updatedNotes } });
    }
  };
  const closingStatusOptions = [
    { title: "Select Status", value: "" },
    { title: "New Prospect", value: "new prospect" },
    { title: "First Call", value: "first call" },
    { title: "First Call Scheduled", value: "first call scheduled" },
    { title: "First Meeting Scheduled", value: "first meeting scheduled" },
    { title: "No Show (Follow Up)", value: "no show follow up" },
    { title: "No Show (Dead Lead)", value: "no show dead lead" },
    { title: "Call Scheduled", value: "call scheduled" },
    { title: "Meeting Scheduled", value: "meeting scheduled" },
    { title: "Closing Call Scheduled", value: "closing call scheduled" },
    { title: "Closing Meeting Scheduled", value: "closing meeting scheduled" },
    { title: "Interested (No Commitment)", value: "interested no commitment" },
    { title: "Interested (Commitment)", value: "interested commitment" },
    { title: "Dead", value: "dead" },
    { title: "Closed", value: "closed" },
  ];
  const handleAmountChange = () => {
    setShowPaymentInput(true);
    // const updatedData = { paymentAmmount: amount };
    // editProspect({ token, id: prospectId, data: updatedData });
  };
  const handleChange=(e)=>{
    const newStatus = e.target.value;
    setClosingStatus(newStatus);
  }

  const handleOk = () => {
    const updatedData = {
      closingstatus: "closed",
    };
    editProspect({ token, id: prospectId, data: updatedData });
    setIsModalVisible(false);
  };
  const handleOkSave = () => {
    editProspect({
      token,
      id: prospectId,
      data: { notes: notes, paymentAmmount: amount, interest: interest,closingstatus: closingStatus },
    });
    setShowPaymentInput(false);
    setShowPaymentInputInterest(false);
    setClosingStatus(null)
    setIsModalVisibleSave(false);
  };
  const handleOkDelete = () => {
    mutate({ token, id: prospectId });
    setIsModalVisibleDelete(false);
  };
  return (
    <div className="container mx-auto my-8 p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center border-b pb-4">
        <div className="flex items-center">
          <span
            className="mr-2 text-2xl text-[#0250E6] font-bold cursor-pointer text-center"
            onClick={handleBackClick}
          >
            &lt;
          </span>
          <h1 className="text-2xl font-semibold text-[#0250E6]">
            {data?.client_name}
          </h1>
        </div>

        <div className="flex">
          <div className="text-black px-4 py-2 rounded-lg  flex items-center justify-center">
            Mark as Closed
            {data?.closingstatus === "closed" ? (
              <input
                type="radio"
                name="radio"
                className="w-[18px] h-[18px] ml-2 items-center justify-center"
                checked
                readOnly
              />
            ) : (
              <p
                className="w-[18px] h-[18px] cursor-pointer ml-2 items-center border-gray-500 border rounded-[50%] justify-center"
                // onClick={() => handleOk(data?._id)}
                onClick={showModal}
              >
                {/* Add some content here if needed */}
              </p>
            )}
            <Modal
              title="Confirm Close"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Are you sure you want to close this prospect?</p>
            </Modal>
            <div
            // onClick={() => handleSave(data?._id)}
            >
              <img
                src={exportIcon}
                alt="Export"
                onClick={showModalSave}
                className="ml-2 cursor-pointer w-4 h-4"
              />
              <Modal
                title="Confirm Close"
                visible={isModalVisibleSave}
                onOk={handleOkSave}
                onCancel={handleCancelSave}
              >
                <p>Are you sure you want to Update this prospect?</p>
              </Modal>
            </div>
            <div
            //  onClick={() => handleDelete(data?._id)}
            >
              <img
                src={deleteIcon}
                onClick={showModalDelete}
                alt="Delete"
                className="ml-2 cursor-pointer w-4 h-4"
              />
              <Modal
                title="Confirm Close"
                visible={isModalVisibleDelete}
                onOk={handleOkDelete}
                onCancel={handleCancelDelete}
              >
                <p>Are you sure you want to Delete this prospect?</p>
              </Modal>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Prospect Details */}
        <div className="col-span-2 pr-4 border-r-2">
          <div className="flex justify-between border-b py-2">
            <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
              <span className="text-[#0250E6] font-bold">
                Prospect Phone:
                <br />
              </span>
              <span className="text-sm font-semibold">
                {data?.prospect_phone}
              </span>
            </div>
            <a
              href={`tel:${data?.prospect_phone}`}
              className="bg-[#00B860] text-white px-4 py rounded flex items-center "
            >
              CALL NOW <img src={phonecall} alt="phonecall" className="ml-2" />
            </a>
          </div>
          <div className="flex justify-between border-b py-2">
            <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
              <span className="text-[#0250E6] font-bold  whitespace-nowrap mr-2 	">
                Prospect Email:
                <br />
              </span>
              <span className="text-sm font-semibold">
                {data?.prospect_email}
              </span>
            </div>
            <a
              href={`mailto:${data?.prospect_email}`}
              className="bg-[#0250E6] text-white px-2 py rounded flex items-center"
            >
              EMAIL NOW <img src={email} alt="email" className="ml-4" />
            </a>
          </div>
          <div className="flex justify-between border-b py-2">
            <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
              <span className="text-[#0250E6] font-bold">
                Prospect Source:
                <br />
              </span>
              <span className="font-semibold bg-[#479090] py text-white rounded-sm px-2">
                {data?.prospect_source}
              </span>
            </div>
          </div>
          <div className="flex justify-between border-b py-2">
            <div className="lg:flex lg:items-center gap-5 lg:justify-between lg:w-4/12">
              <span className="text-[#0250E6]  whitespace-nowrap font-bold">
                Interested In:
                <br />
              </span>
              <span className="text-sm min-w-24 text-center  ml-20 font-semibold">
                {data?.interest}
              </span>
              {showpaymentinputinterest && (
                <input
                  type="text"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="text-sm ml-10 font-semibold h-[30px] border rounded-md px-3 border-[#0250E6]"
                />
              )}
            </div>
            <button
              onClick={() => setShowPaymentInputInterest(true)}
              className="flex items-center justify-center px-4 py border border-gray-400 rounded text-gray-800 hover:bg-gray-100"
            >
              ADD INTEREST
              <span className="ml-2">+</span>
            </button>
          </div>
          <div className="flex justify-between border-b py-2">
            <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
              <span className="text-[#0250E6] font-bold">
                Assigned To:<br></br>
              </span>
              <span className="font-semibold text-[#00B860]">
                {data?.prospect_phone}
              </span>
            </div>
          </div>
          <div className="flex justify-between border-b py-2">
            <div className="lg:flex lg:items-center gap-5 lg:justify-between lg:w-4/12">
              <span className="text-[#0250E6] font-bold whitespace-nowrap">
                Payment Amount:
                <br />
              </span>

              <span className="font-semibold !min-w-[100px] text-center bg-[#39AB74] px-2 py text-white rounded-sm">
                ${data?.paymentAmmount}
              </span>
              {showpaymentinput && (
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="font-semibold  bg-[#39AB74] px-2 py w-[150px] text-white rounded-sm"
                />
              )}
              {/* <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="font-semibold  bg-[#39AB74] px-2 py w-[150px] text-white rounded-sm"
              /> */}
            </div>
            <button
              onClick={handleAmountChange}
              className="flex items-center justify-center px-5 py border border-gray-400 rounded text-gray-800 hover:bg-gray-100"
            >
              ADD AMOUNT
              <span className="ml-2">+</span>
            </button>{" "}
          </div>
          <div className="flex justify-between border-b py-2">
            <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
              <span className="text-[#0250E6] font-bold">
                Prospect Status:
                <br />
              </span>
              <span className="font-semibold text-sm capitalize">
                {data?.status}
              </span>
            </div>
          </div>
          <div className="flex justify-between border-b py-2">
            <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
              <span className="text-[#0250E6] font-bold whitespace-nowrap mr-3">
                Closing Status:
                <br />
              </span>
              <span className="font-semibold whitespace-nowrap bg-[#F5D29C] px-2 py rounded-sm capitalize text-white">
                {data?.closingstatus}
              </span>
            </div>
            <select
                  className={` h-[35px] w-[170px] font-semibold border px-3 border-gray-400 `}
                  name="closingstatus"
                  id="paymentAmmount"
                  value={closingStatus}
                  onChange={handleChange}
                >
                  {closingStatusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.title}
                    </option>
                  ))}
                </select>
          </div>
          <div className="flex justify-between border-b py-2">
            <div className="lg:flex lg:items-center lg:justify-between lg:w-4/12">
              <span className="text-[#0250E6] font-bold">
                Scheduled Tasks:
                <br />
              </span>
              <span className="font-semibold">
                {data?.scheduleTaskDate ? data?.scheduleTaskDate : "N/A"}
              </span>
            </div>
          </div>
          <div className="flex justify-between border-b py-2">
            <div className="flex items-center justify-between w-4/12">
              <span className="text-[#0250E6] font-bold">Create Action:</span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-y-0 space-y-3 gap-3 mt-3">
            <button
              className="text-white px-2 py-2 rounded items-center justify-center flex"
              style={{
                background: "linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)",
              }}
            >
              <span className="flex items-center font-semibold">
                SCHEDULE GOOGLE MEETS
                <img
                  src={googlemeet}
                  alt="Google Meet"
                  className="ml-2 h-5 w-5"
                />
              </span>
            </button>

            <button
              className=" text-white lg:px-6 px-12 py-2 rounded flex items-center"
              style={{
                background: "linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)",
              }}
            >
              <span className="flex items-center font-semibold">
                SCHEDULE CALL
              </span>
              <img src={phonecall} alt="Google Meet" className="ml-2 h-5 w-5" />
            </button>
            <button
              className=" text-white lg:px-6 px-9 py-2 rounded  flex items-center"
              style={{
                background: "linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)",
              }}
            >
              <span className="flex items-center font-semibold">
                CALL NOW IN DIALER
              </span>

              <img src={phone2} alt="Google Meet" className="ml-2 h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Notes Section */}
        <div className="hidden lg:block col-span-1">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-[#0250E6]">NOTES</h2>
            {notes?.map((item, index) => (
              <div key={index} className="border-b py-2">
                <span className="font-semibold flex">
                  Me:
                  <img src={profileIcon} alt="profileIcon" className="ml-2" />
                </span>
                <p>{item.text}</p>
              </div>
            ))}
            <textarea
              name="note"
              id="note"
              placeholder="Add Note Here"
              value={currentNote}
              onChange={(e) => setCurrentNote(e.target.value)}
              className="bg-[#FFFFFF] w-full border-[1px] border-[#00000089] h-[79px] p-4 rounded-sm outline-none focus:outline-none text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold"
            ></textarea>
            <div className="flex justify-center">
              <button
                className="bg-gradient-to-r uppercase w-fit h-[35px] px-8 text-[14px] text-white rounded tracking-[-1.2%] font-bold leading-[14.3px] from-[#02A1E6] via-[#0250E6] to-[#0250E6]"
                onClick={handleAddNote}
              >
                Add Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProspectProfile;
