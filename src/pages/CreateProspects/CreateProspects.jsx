import { useState } from "react";
import DatePicker from "react-datepicker"; // You'll need to install this package
import "react-datepicker/dist/react-datepicker.css";

import phonecall from "../../assets/svg/ic_round-local-phone.svg";
import email from "../../assets/svg/carbon_email.svg"
import googlemeet from "../../assets/svg/flat-color-icons_google.svg"
import phone2 from "../../assets/svg/phone2.svg"
import deleteIcon from "../../assets/svg/delete.svg"
import exportIcon from "../../assets/svg/export.svg"
import profileIcon from "../../assets/svg/profileIcon.svg"


const CustomDropdown = ({ options, placeholder, onChange }) => {
  return (
    <select onChange={onChange} defaultValue="">
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

  return (
    <div className="container mx-auto my-8 p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl font-semibold text-[#0250E6]">Tommy Fury</h1>
        <div className="flex">
          <button className="text-black px-4 py-2 rounded-lg  flex items-center justify-center">Mark as Closed
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

          <form className="space-y-6 mb-5">
            <div className="flex items-center">
              <label className="w-40">PROSPECT PHONE:</label>
              <input type="tel" placeholder="ENTER PHONE NUMBER" className="border-blue-500 border-2 ml-4 px-2 py-0 rounded" />
            </div>
            <div className="flex items-center">
              <label className="w-40">PROSPECT EMAIL:</label>
              <input type="email" placeholder="ENTER EMAIL" className="border-blue-500 border-2 ml-4 px-2 py-0 rounded" />
            </div>
            <div className="flex items-center">
              <label className="w-40">PROSPECT SOURCE:</label>
              <input type="text" placeholder="ENTER YOUR NAME" className="border-blue-500 border-2 ml-4 px-2 py-0 rounded" />
            </div>
            <div className="flex items-center">
              <label className="w-40">INTERESTED IN:</label>
              <input type="text" placeholder="ENTER CLIENT INTEREST" className="border-blue-500 border-2 ml-4 px-2 py-0 rounded" />
            </div>
            <div className="flex items-center">
              <label className="w-40">ASSIGN TO:</label>
              <input type="text" placeholder="ASSIGN TO AGENT" className="border-blue-500 border-2 ml-4 px-2 py-0 rounded" />
            </div>
            <div className="flex items-center">
              <label className="w-40">PAYMENT AMOUNT:</label>
              <input type="text" placeholder="ENTER AMOUNT" className="border-blue-500 border-2 ml-4 px-2 py-0 rounded" />
            </div>
            <div className="flex items-center">
              <label className="w-40">PROSPECT STATUS:</label>
              <CustomDropdown
                options={prospectStatusOptions}
                placeholder="SELECT STATUS"
                onChange={(e) => console.log(e.target.value)}
                className="border-blue-500 border-2 ml-4 px-2 py-0 rounded"
              />
            </div>
            <div className="flex items-center">
              <label className="w-40">CLOSING STATUS:</label>
              <CustomDropdown
                options={closingStatusOptions}
                placeholder="SELECT STATUS"
                onChange={(e) => console.log(e.target.value)}
                className="border-blue-500 border-2 ml-4 px-2 py-0 rounded"
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
          </form>






          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-y-0 space-y-3 gap-3 mt-3">
            <button className="text-white px-2 py-2 rounded items-center justify-center flex" style={{ background: 'linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)' }}>
              <span className="flex items-center font-semibold">
                SCHEDULE GOOGLE MEETS
                <img src={googlemeet} alt="Google Meet" className="ml-2 h-5 w-5" />
              </span>
            </button>

            <button className=" text-white lg:px-6 px-12 py-2 rounded flex items-center" style={{ background: 'linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)' }}>

              <span className="flex items-center font-semibold">
                SCHEDULE CALL
              </span>
              <img src={phonecall} alt="Google Meet" className="ml-2 h-5 w-5" />

            </button>
            <button className=" text-white lg:px-6 px-9 py-2 rounded  flex items-center" style={{ background: 'linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)' }}>
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
              <span className="font-semibold flex">Me:
                <img src={profileIcon} alt="profileIcon" className="ml-2" />
              </span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisi nec suscipit fermentum.</p>
            </div>
            <div className="border-b py-2">
              <span className="font-semibold flex">Me:
                <img src={profileIcon} alt="profileIcon" className="ml-2" />
              </span>                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisi nec suscipit fermentum.</p>
            </div>
            <textarea placeholder="Add Notes Here" className="w-full p-2 mt-4 border rounded-lg"></textarea>
            <div className="flex justify-center">
              <button className="text-white px-4 py-2 rounded-lg mt-2 text-center flex"
                style={{ background: 'linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)' }}
              >ADD NOTE</button>

            </div>
          </div>
        </div>
      </div>
    </div >


  );
};

export default CreateProspectScreen;
