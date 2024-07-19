import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import phonecall from "../../assets/svg/ic_round-local-phone.svg";
import googlemeet from "../../assets/svg/flat-color-icons_google.svg";
import phone2 from "../../assets/svg/phone2.svg";
import deleteIcon from "../../assets/svg/delete.svg";
import exportIcon from "../../assets/svg/export.svg";
import profileIcon from "../../assets/svg/profileIcon.svg";
import { useProspects } from "../../services/prospects";

const CustomDropdown = ({ options, placeholder, onChange, value }) => {
  return (
    <select
      onChange={onChange}
      value={value}
      className="border-blue-500 border-2 ml-4 px-2 py-0 rounded"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const CreateProspectScreen = () => {
  const [scheduledDate, setScheduledDate] = useState(new Date());
  const [formData, setFormData] = useState({
    prospect_phone: "",
    prospect_email: "",
    prospect_source: "",
    interest: "",
    status: "",
    closingstatus: "",
  });

  const closingStatusOptions = [
    "New Prospect",
    "First Call",
    "First Call Scheduled",
    "First Meeting Scheduled",
    "No Show (Follow Up)",
    "No Show (Dead Lead)",
    "Call Scheduled",
    "Meeting Scheduled",
    "Closing Call Scheduled",
    "Closing Meeting Scheduled",
    "Interested (No Commitment)",
    "Interested (Commitment)",
    "Dead",
    "Closed",
  ];

  const prospectStatusOptions = ["Unassigned Prospect", "Assigned To You"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const { mutate, isLoading } = useProspects();
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = JSON.parse(sessionStorage.getItem("token"));
    // Validate form data
    if (
      formData.prospect_phone &&
      formData.prospect_email &&
      formData.prospect_source &&
      formData.interest &&
      formData.status &&
      formData.closingstatus
    ) {
      mutate({ values: formData, token });
      console.log({
        ...formData,
      });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl font-semibold text-[#0250E6]">Tommy Fury</h1>
        <div className="flex">
          <button className="text-black px-4 py-2 rounded-lg  flex items-center justify-center">
            Mark as Closed
            <input
              type="radio"
              name="radio"
              className="w-[18px] h-[18px] ml-2 items-center justify-center"
            />
            <img src={exportIcon} alt="Export" className="ml-2 w-4 h-4" />
            <img src={deleteIcon} alt="Delete" className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Prospect Details */}
        <div className="col-span-2 pr-4 border-r-2">
          <form className="space-y-6 mb-5" onSubmit={handleSubmit}>
            <div className="flex items-center">
              <label className="w-40">PROSPECT PHONE:</label>
              <input
                type="tel"
                name="prospect_phone"
                value={formData.prospect_phone}
                onChange={handleChange}
                placeholder="ENTER PHONE NUMBER"
                className="border-blue-500 border-2 ml-4 px-2 py-0 rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="w-40">PROSPECT EMAIL:</label>
              <input
                type="email"
                name="prospect_email"
                value={formData.prospect_email}
                onChange={handleChange}
                placeholder="ENTER EMAIL"
                className="border-blue-500 border-2 ml-4 px-2 py-0 rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="w-40">PROSPECT SOURCE:</label>
              <input
                type="text"
                name="prospect_source"
                value={formData.prospect_source}
                onChange={handleChange}
                placeholder="ENTER YOUR NAME"
                className="border-blue-500 border-2 ml-4 px-2 py-0 rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="w-40">INTERESTED IN:</label>
              <input
                type="text"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                placeholder="ENTER CLIENT INTEREST"
                className="border-blue-500 border-2 ml-4 px-2 py-0 rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="w-40">ASSIGN TO:</label>
              <input
                type="text"
                name="assignTo"
                value={formData.assignTo}
                onChange={handleChange}
                placeholder="ASSIGN TO AGENT"
                className="border-blue-500 border-2 ml-4 px-2 py-0 rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="w-40">PAYMENT AMOUNT:</label>
              <input
                type="text"
                name="paymentAmount"
                value={formData.paymentAmount}
                onChange={handleChange}
                placeholder="ENTER AMOUNT"
                className="border-blue-500 border-2 ml-4 px-2 py-0 rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="w-40">PROSPECT STATUS:</label>
              <CustomDropdown
                options={prospectStatusOptions}
                placeholder="SELECT STATUS"
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                value={formData.status}
              />
            </div>
            <div className="flex items-center">
              <label className="w-40">CLOSING STATUS:</label>
              <CustomDropdown
                options={closingStatusOptions}
                placeholder="SELECT STATUS"
                onChange={(e) =>
                  setFormData({ ...formData, closingstatus: e.target.value })
                }
                value={formData.closingstatus}
              />
            </div>
            <div className="flex items-center">
              <label className="w-40">SCHEDULED TASKS:</label>
              <DatePicker
                selected={scheduledDate}
                onChange={(date) => setScheduledDate(date)}
                dateFormat="dd/MM/yy"
                className="border-blue-500 border-2 ml-4 px-2 py-0 rounded"
              />
            </div>
            <div className="flex justify-center">
            <button
                type="submit"
                disabled={isLoading}
                className="text-white flex justify-center px-4 py-2 gap-0.5 rounded-lg mt-2 text-center items-center"
                style={{
                  background:
                    "linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)",
                }}
              >
                {isLoading ? (
                  <span className="border-2 border-red-500 animate-spin w-[14px] h-[14px] rounded-[50%]"></span>
                ) : <p>Submit</p> }
                
              </button>
            </div>
          </form>

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
            <div className="border-b py-2">
              <span className="font-semibold flex">
                Me:
                <img src={profileIcon} alt="profileIcon" className="ml-2" />
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                euismod, nisi nec suscipit fermentum.
              </p>
            </div>
            <div className="border-b py-2">
              <span className="font-semibold flex">
                Me:
                <img src={profileIcon} alt="profileIcon" className="ml-2" />
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                euismod, nisi nec suscipit fermentum.
              </p>
            </div>
            <textarea
              placeholder="Add Notes Here"
              className="w-full p-2 mt-4 border rounded-lg"
            ></textarea>
            <div className="flex justify-center">
              <button
                className="text-white px-4 py-2 rounded-lg mt-2 text-center flex"
                style={{
                  background:
                    "linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)",
                }}
              >
                ADD NOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProspectScreen;
