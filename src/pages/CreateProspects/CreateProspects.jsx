import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import phonecall from "../../assets/svg/ic_round-local-phone.svg";
import googlemeet from "../../assets/svg/flat-color-icons_google.svg";
import phone2 from "../../assets/svg/phone2.svg";
import avatar from "../../assets/img/avatar.png";
import "./style.css";
import { useProspects } from "../../services/prospects";
import { IoIosArrowBack } from "react-icons/io";
import { Image } from "antd";

const paymentOptions = [
  { value: "", label: "Select Amount" }, // Placeholder option
  { value: "100", label: "$100" },
  { value: "200", label: "$200" },
  { value: "300", label: "$300" },
  // Add more options as needed
];

const CreateProspectScreen = () => {
  const [formData, setFormData] = useState({
    prospect_phone: "",
    prospect_email: "",
    prospect_source: "",
    interest: "",
    assignedTo: "",
    scheduleTaskDate: "",
    status: "",
    closingstatus: "",
    paymentAmount: 0,
  });
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  const handleAddNote = () => {
    if (currentNote.trim() !== '') {
      setNotes([...notes, currentNote]);
      setCurrentNote('');
    }
  };
  const [form, setForm] = useState({
    fullName: "",
    email: "john@example.com",
    password: "password123",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (form.email === "") {
      valid = false;
      newErrors.email = "Email is required.";
    }

    if (form.password === "") {
      valid = false;
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return valid;
  };
  const closingStatusOptions = [
    { title: "New Prospect", value: "new-prospect" },
    { title: "First Call", value: "first-call" },
    { title: "First Call Scheduled", value: "first-call-scheduled" },
    { title: "First Meeting Scheduled", value: "first-meeting-scheduled" },
    { title: "No Show (Follow Up)", value: "no-show-follow-up" },
    { title: "No Show (Dead Lead)", value: "no-show-dead-lead" },
    { title: "Call Scheduled", value: "call-scheduled" },
    { title: "Meeting Scheduled", value: "meeting-scheduled" },
    { title: "Closing Call Scheduled", value: "closing-call-scheduled" },
    { title: "Closing Meeting Scheduled", value: "closing-meeting-scheduled" },
    { title: "Interested (No Commitment)", value: "interested-no-commitment" },
    { title: "Interested (Commitment)", value: "interested-commitment" },
    { title: "Dead", value: "dead" },
    { title: "Closed", value: "closed" },
  ];

  const prospectStatusOptions = [
    { title: "Unassigned Prospect", value: "unassigned-prospect" },
    { title: "Assigned To You", value: "assigned-to-you" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChange1 = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const { mutate, isLoading, isSuccess } = useProspects();

  const handleSubmit = (e) => {
    debugger
    // if (validateForm()) {
    //   console.log(form);
    //   // mutate(form)
    // }
    e.preventDefault();
    const token = JSON.parse(sessionStorage.getItem("token"));
    // Validate form data
    if (
      formData.prospect_phone&&
      formData.prospect_email &&
      formData.prospect_source &&
      formData.interest &&
      formData.status &&
      formData.closingstatus&&
      formData.assignedTo&&
      formData.paymentAmount&&
      formData.scheduleTaskDate
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
    <>
      <div
        style={{ boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.05)" }}
        className="bg-[#FFFFFF]  lg:mb-[120px]  lg:mx-[55px] xl:mx-[75px]   rounded-t-md mt-[64px] lg:mt-[78px] lg:rounded-md"
      >
        <div className="flex  justify-between py-7 px-2 md:px-6  lg:p-10 lg:items-center">
          <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
            <button>
              <IoIosArrowBack className="text-[#0250E6] xl:text-[30px] text-[25px] md:text-[18px]  lg:text-[24px]" />
            </button>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange1}
              className={`  bg-[#FFFFFF]  rounded-sm outline-none focus:outline-none h-[40px] w-[150px] md:w-[350px] pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-[2px] border-[#0250E6] "
              }`}
              placeholder="Enter Full Name"
              style={{ color: "#3C3C3C" }}
            />
          </div>
          <div>
            <button
              className="bg-gradient-to-r uppercase h-[40px] px-8 text-[14px] text-white  rounded  tracking-[-1.2%] font-bold leading-[14.3px] from-[#02A1E6] via-[#0250E6] to-[#0250E6]"
              onClick={handleSubmit}
            >
              Save Prospect
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start items-center  border-t  lg:px-10 border-t-[#00000052] ">
          <div className="lg:w-[65%] lg:pl-0 xl:pl-12 pt-10 pb-20 lg:border-r lg:border-r-[#00000052] ">
            <form action="submit">
              <div className="flex flex-col md:flex-row md:items-center space-y-2 lg:space-y-0 mb-4 lg:gap-4 lg:mb-5">
                <label
                  className="text-[#0250E6] w-[200px] text-[18px] uppercase font-semibold"
                  htmlFor=""
                >
                  Prospects Phone:
                </label>
                <input
                  type="text"
                  name="prospect_phone"
                  value={formData.prospect_phone}
                  onChange={handleChange}
                  className={`  bg-[#FFFFFF]  rounded-sm outline-none focus:outline-none h-[40px] w-[350px] pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[2px] border-[#0250E6] "
                  }`}
                  placeholder="Enter Full Name"
                  style={{ color: "#3C3C3C" }}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 lg:space-y-0 mb-4 lg:gap-4 lg:mb-5">
                <label
                  className="text-[#0250E6]  w-[200px] text-[18px] uppercase font-semibold"
                  htmlFor=""
                >
                  Prospects Email:
                </label>
                <input
                  type="email"
                  name="prospect_email"
                  value={formData.prospect_email}
                  onChange={handleChange}
                  className={`  bg-[#FFFFFF]  border-[2px] border-[#0250E6] rounded-sm outline-none focus:outline-none h-[40px] w-[350px] pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold`}
                  placeholder="Enter Full Name"
                  style={{ color: "#3C3C3C" }}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 lg:space-y-0 mb-4  lg:gap-4 lg:mb-5">
                <label
                  className="text-[#0250E6]  w-[200px] text-[18px] uppercase font-semibold"
                  htmlFor=""
                >
                  Prospects source:
                </label>
                <input
                  type="text"
                  name="prospect_source"
                  value={formData.prospect_source}
                  onChange={handleChange}
                  className={`  bg-[#FFFFFF]  rounded-sm outline-none focus:outline-none h-[40px] w-[350px] pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[2px] border-[#0250E6] "
                  }`}
                  placeholder="Enter Full Name"
                  style={{ color: "#3C3C3C" }}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 lg:space-y-0 mb-4  lg:gap-4 lg:mb-5">
                <label
                  className="text-[#0250E6]  w-[200px] text-[18px] uppercase font-semibold"
                  htmlFor=""
                >
                  Interested in:
                </label>
                <input
                  type="text"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={`  bg-[#FFFFFF]  rounded-sm outline-none focus:outline-none h-[40px] w-[350px] pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[2px] border-[#0250E6] "
                  }`}
                  placeholder="Enter Full Name"
                  style={{ color: "#3C3C3C" }}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 lg:space-y-0 mb-4  lg:gap-4 lg:mb-5">
                <label
                  className="text-[#0250E6]  w-[200px] text-[18px] uppercase font-semibold"
                  htmlFor=""
                >
                  Assign to:
                </label>
                <input
                  type="text"
                  name="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleChange}
                  className={`  bg-[#FFFFFF]  rounded-sm outline-none focus:outline-none h-[40px] w-[350px] pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[2px] border-[#0250E6] "
                  }`}
                  placeholder="Enter Full Name"
                  style={{ color: "#3C3C3C" }}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 lg:space-y-0 mb-4  lg:gap-4 lg:mb-5">
                <label
                  className="text-[#0250E6]  w-[200px] text-[18px] uppercase font-semibold"
                  htmlFor=""
                >
                    PAYMENT AMOUNT:
                </label>
                <input
                  type="number"
                  name="paymentAmount"
                  value={formData.paymentAmount}
                  onChange={handleChange}
                  className={`  bg-[#FFFFFF]  rounded-sm outline-none focus:outline-none h-[40px] w-[350px] pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[2px] border-[#0250E6] "
                  }`}
                  placeholder="Enter Full Name"
                  style={{ color: "#3C3C3C" }}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 lg:space-y-0 mb-4  lg:gap-4 lg:mb-5">
                <label
                  className="text-[#0250E6] w-[200px] text-[18px] uppercase font-semibold"
                  htmlFor="paymentAmount"
                >
                  prospect status:
                </label>
                <select
                  className={`custom-select`}
                  name="status"
                  id="paymentAmount"
                  value={formData.status}
                  onChange={handleChange}
                >
                  {prospectStatusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 lg:space-y-0 mb-4  lg:gap-4 lg:mb-5">
                <label
                  className="text-[#0250E6] w-[200px] text-[18px] uppercase font-semibold"
                  htmlFor="paymentAmount"
                >
                  closing status:
                </label>
                <select
                  className={`custom-select `}
                  name="closingstatus"
                  id="paymentAmount"
                  value={formData.closingstatus}
                  onChange={handleChange}
                >
                  {closingStatusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 lg:space-y-0 mb-4  lg:gap-4 lg:mb-5">
                <label
                  className="text-[#0250E6]  w-[200px] text-[18px] uppercase font-semibold"
                  htmlFor=""
                >
                  scheduled tasks:
                </label>
                <input
                  type="date"
                  name="scheduleTaskDate"
                  value={formData.scheduleTaskDate}
                  onChange={handleChange}
                  className={`  bg-[#FFFFFF]  rounded-sm outline-none focus:outline-none h-[40px] w-[350px] pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[2px] border-[#0250E6] "
                  }`}
                  placeholder="Enter Full Name"
                  style={{ color: "#3C3C3C" }}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 lg:space-y-0 mb-4  lg:gap-4 lg:mb-5">
                <label
                  className="text-[#0250E6]  w-[200px] text-[18px] uppercase font-semibold"
                  htmlFor=""
                >
                  Create Action:
                </label>
              </div>
              <div className="flex flex-col lg:flex-row pt-6  items-center justify-center lg:space-y-0 space-y-3 gap-3">
                <button
                  className="text-white px-2 py-2 rounded items-center justify-center flex"
                  style={{
                    background:
                      "linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)",
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
                    background:
                      "linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)",
                  }}
                >
                  <span className="flex items-center font-semibold">
                    SCHEDULE CALL
                  </span>
                  <img
                    src={phonecall}
                    alt="Google Meet"
                    className="ml-2 h-5 w-5"
                  />
                </button>
                <button
                  className=" text-white lg:px-6 px-9 py-2 rounded  flex items-center"
                  style={{
                    background:
                      "linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)",
                  }}
                >
                  <span className="flex items-center font-semibold">
                    CALL NOW IN DIALER
                  </span>
                  <img
                    src={phone2}
                    alt="Google Meet"
                    className="ml-2 h-3 w-3"
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="hidden w-[35%] lg:pl-4 xl:pl-12 lg:flex flex-col pt-0">
      <div>
        <h1 className="text-[18px] text-[#0250E6] font-medium">Note</h1>
      </div>
      <div className="h-[500px] overflow-y-auto no-scrollbar">
        {notes.map((note, index) => (
          <div key={index} className="pt-[65px]">
            <div className="flex items-center gap-3">
              <h1>Me</h1>
              <img
                src={avatar}
                alt="avatar"
                className="w-[30px] flex justify-center items-center h-[30px] rounded-[50%]"
              />
            </div>
            <div className="mt-[12px]">
              <p className="text-[14px] w-[100%] leading-4 break-words font-normal">{note}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-4">
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
    </>
  );
};

export default CreateProspectScreen;
