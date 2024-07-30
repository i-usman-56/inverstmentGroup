import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import phonecall from "../../assets/svg/ic_round-local-phone.svg";
import googlemeet from "../../assets/svg/flat-color-icons_google.svg";
import phone2 from "../../assets/svg/phone2.svg";
import avatar from "../../assets/img/avatar.png";
import "./style.css";
import { useProspects } from "../../services/prospects";
import { IoIosArrowBack } from "react-icons/io";
import { useGetAllUsers } from "../../services/auth";

const CreateProspectScreen = () => {
  const [formData, setFormData] = useState({
    client_name: "",
    prospect_phone: "",
    prospect_email: "",
    prospect_source: "",
    interest: "",
    assignedTo: "",
    scheduleTaskDate: "",
    status: "",
    closingstatus: "",
    paymentAmmount: 0,
  });
  const [errors, setErrors] = useState({
    client_name: "",
    prospect_phone: "",
    prospect_email: "",
    prospect_source: "",
    interest: "",
    status: "",
    closingstatus: "",
    paymentAmmount: 0,
  });
  const token = JSON.parse(sessionStorage.getItem("token"));

  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const { data: alluserData } = useGetAllUsers(token);
  const transformedData = [{ _id: "", title: "Assign to Agent" }].concat(
    Array.isArray(alluserData?.users)
      ? alluserData?.users.map((user) => ({
          _id: user._id,
          title: `${user.firstName} ${user.lastName}`,
        }))
      : []
  );

  const handleAddNote = () => {
    if (currentNote.trim() !== "") {
      setNotes([...notes, currentNote]);
      setCurrentNote("");
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

  const prospectStatusOptions = [
    { title: "Select Status", value: "" },
    { title: "Unassigned Prospect", value: "unassigned Prospect" },
    { title: "Assigned To You", value: "Assigned To You" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Prevent payment amount from being negative
    if (name === "paymentAmmount" && value < 0) {
      setErrors({
        ...errors,
        paymentAmmount: "Payment amount cannot be negative."
      });
      return;
    }
  
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' });
  };
  
  const { mutate, isLoading, isSuccess, status } = useProspects();
  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (formData.prospect_email === "") {
      valid = false;
      newErrors.prospect_email = "Email is required.";
    }
    if (formData.prospect_phone === "") {
      valid = false;
      newErrors.prospect_phone = "Phone  is required.";
    }
    if (formData.prospect_source === "") {
      valid = false;
      newErrors.prospect_source = "source is required.";
    }
    if (formData.interest === "") {
      valid = false;
      newErrors.interest = "interest is required.";
    }
    if (formData.paymentAmmount === 0) {
      valid = false;
      newErrors.paymentAmmount = "Amount is required.";
    }
    if (formData.status === "") {
      valid = false;
      newErrors.status = "status is required.";
    }
    if (formData.closingstatus === "") {
      valid = false;
      newErrors.closingstatus = "closingstatus is required.";
    }

    if (formData.client_name === "") {
      valid = false;
      newErrors.client_name = "client_name is required.";
    }

    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    const token = JSON.parse(sessionStorage.getItem("token"));
    // Validate form data
    if (validateForm()) {
      if (typeof formData.paymentAmmount === 'string') {
        formData.paymentAmmount = Number(formData.paymentAmmount);
      }
      if (!formData.assignedTo || formData.assignedTo === '') {
        delete formData.assignedTo;
      }
      const no1tes = notes.map(note => ({ text: note }));
      const updatedFormData = { ...formData, notes:no1tes };
      console.log(updatedFormData)
      mutate(
        { values: updatedFormData, token },
        {
          onSuccess: () => {
            setFormData({
              client_name: "",
              prospect_phone: "",
              prospect_email: "",
              prospect_source: "",
              interest: "",
              assignedTo: "",
              scheduleTaskDate: "",
              status: "",
              closingstatus: "",
              paymentAmmount: 0,
            });
            setCurrentNote('')
            setNotes([])
          }
        }
      );
      // console.log({
      //   ...formData,
      // });
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
              name="client_name"
              value={formData.client_name}
              onChange={handleChange}
              className={`  bg-[#FFFFFF] border-2  rounded-sm outline-none focus:outline-none h-[40px] w-[150px] md:w-[350px] pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
                errors.client_name
                  ? "border-red-500 focus:border-red-500"
                  : "border-[2px] border-[#0250E6] "
              }`}
              placeholder="Enter Full Name"
              style={{ color: "#3C3C3C" }}
            />
            {errors && (
                  <p className="text-[16px] font-semibold text-[#a10d0d]">
                    {errors.client_name}
                  </p>
                )}
          </div>
          <div>
            <button
              className={`bg-gradient-to-r uppercase h-[40px] px-8 text-[14px] text-white  rounded  tracking-[-1.2%] font-bold leading-[14.3px] ${status === "pending"?"bg-black cursor-not-allowed" : "from-[#02A1E6] via-[#0250E6] to-[#0250E6]"}`}
              onClick={handleSubmit}
              disabled={status === "pending"}
            >
              {status === "pending" ? "Saving...." : "Save Prospect"}
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
                  className={`  bg-[#FFFFFF] border-2  rounded-sm outline-none focus:outline-none h-[40px] w-[350px] pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
                    errors.prospect_phone
                      ? "border-red-500 focus:border-red-500"
                      : "border-[2px] border-[#0250E6] "
                  }`}
                  placeholder="Enter Phone Number"
                  style={{ color: "#3C3C3C" }}
                />
                {errors && (
                  <p className="text-[16px] font-semibold text-[#a10d0d]">
                    {errors.prospect_phone}
                  </p>
                )}
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
                  className={`  bg-[#FFFFFF] border-2  rounded-sm outline-none focus:outline-none h-[40px] w-[350px] pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
                    errors.prospect_email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[2px] border-[#0250E6] "
                  }`}
                  placeholder="Enter Email"
                  style={{ color: "#3C3C3C" }}
                />
                {errors && (
                  <p className="text-[16px] font-semibold text-[#a10d0d]">
                    {errors.prospect_email}
                  </p>
                )}
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
                  className={`  bg-[#FFFFFF] border-2  rounded-sm outline-none focus:outline-none h-[40px] w-[350px] pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
                    errors.prospect_source
                      ? "border-red-500 focus:border-red-500"
                      : "border-[2px] border-[#0250E6] "
                  }`}
                  placeholder="Enter Source"
                  style={{ color: "#3C3C3C" }}
                />
                 {errors && (
                  <p className="text-[16px] font-semibold text-[#a10d0d]">
                    {errors.prospect_source}
                  </p>
                )}
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
                  className={`  bg-[#FFFFFF] border-2  rounded-sm outline-none focus:outline-none h-[40px] w-[350px] pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
                    errors.interest
                      ? "border-red-500 focus:border-red-500"
                      : "border-[2px] border-[#0250E6] "
                  }`}
                  placeholder="Enter Client Interest"
                  style={{ color: "#3C3C3C" }}
                />
                  {errors && (
                  <p className="text-[16px] font-semibold text-[#a10d0d]">
                    {errors.interest}
                  </p>
                )}
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 lg:space-y-0 mb-4  lg:gap-4 lg:mb-5">
                <label
                  className="text-[#0250E6] w-[200px] text-[18px] uppercase font-semibold"
                  htmlFor=""
                >
                  Assign to:
                </label>
                <select
                  className={`custom-select border-[2px] border-[#0250E6]`}
                  name="assignedTo"
                  id="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleChange}
                >
                  {transformedData?.map((option) => (
                    <option key={option._id} value={option._id}>
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
                  PAYMENT AMOUNT:
                </label>
                <input
                  type="number"
                  name="paymentAmmount"
                  value={
                    formData.paymentAmmount
                  }
                  onChange={handleChange}
                  className={`  bg-[#FFFFFF] border-2  rounded-sm outline-none focus:outline-none h-[40px] w-[350px] pl-5 text-[#3C3C3C] text-[14px] leading-[16.7px] tracking-[-1.7%] font-bold ${
                    errors.paymentAmmount
                      ? "border-red-500 focus:border-red-500"
                      : "border-[2px] border-[#0250E6]"
                  }`}
                  placeholder="Enter Payment Amount"
                  style={{ color: "#3C3C3C" }}
                />
                  {errors && (
                  <p className="text-[16px] w-[200px] font-semibold text-[#a10d0d]">
                    {errors.paymentAmmount == 0 ? null : errors.paymentAmmount}
                  </p>
                )}
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 lg:space-y-0 mb-4  lg:gap-4 lg:mb-5">
                <label
                  className="text-[#0250E6] w-[200px] text-[18px] uppercase font-semibold"
                  htmlFor="paymentAmmount"
                >
                  prospect status:
                </label>
                <select
                  className={`custom-select  border-2 ${
                    errors.status
                      ? "border-red-500 focus:border-red-500"
                      : "border-[2px] border-[#0250E6] "
                  }`}
                  name="status"
                  id="paymentAmmount"
                  value={formData.status}
                  onChange={handleChange}
                >
                  {prospectStatusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.title}
                    </option>
                  ))}
                </select>
                {errors && (
                  <p className="text-[16px] font-semibold text-[#a10d0d]">
                    {errors.status}
                  </p>
                )}
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 lg:space-y-0 mb-4  lg:gap-4 lg:mb-5">
                <label
                  className="text-[#0250E6] w-[200px] text-[18px] uppercase font-semibold"
                  htmlFor="paymentAmmount"
                >
                  closing status:
                </label>
                <select
                  className={`custom-select  border-2 ${
                    errors.closingstatus
                      ? "border-red-500 focus:border-red-500"
                      : "border-[2px] border-[#0250E6] "
                  } `}
                  name="closingstatus"
                  id="paymentAmmount"
                  value={formData.closingstatus}
                  onChange={handleChange}
                >
                  {closingStatusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.title}
                    </option>
                  ))}
                </select>
                {errors && (
                  <p className="text-[16px] font-semibold text-[#a10d0d]">
                    {errors.closingstatus}
                  </p>
                )}
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
                    <p className="text-[14px] w-[100%] leading-4 break-words font-normal">
                      {note}
                    </p>
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
