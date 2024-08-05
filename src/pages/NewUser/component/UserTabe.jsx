import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetEditUsers, useUserMutation } from "../../../services/auth";
import { useEffect, useState } from "react";

const NewUser = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");
  const token = JSON.parse(sessionStorage.getItem("token"));
  const { data: userData } = useGetEditUsers(token, userId);
  const navigate = useNavigate();
  const { mutate: saveUser } = useUserMutation(userId);
  const handleBackClick = () => {
    navigate(-1);
  };
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    status: "",
  });
  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (formData.firstName === "") {
      valid = false;
      newErrors.firstName = "First Name Required.";
    }
    if (formData.lastName === "") {
      valid = false;
      newErrors.lastName = "Last Name Required.";
    }
    if (formData.email === "") {
      valid = false;
      newErrors.email = "Email is required.";
    }

    if (formData.phone === "") {
      valid = false;
      newErrors.phone = "Phone is required.";
    }

    setErrors(newErrors);
    return valid;
  };
  useEffect(() => {
    if (userId) {
      if (userData) {
        setFormData({
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          email: userData.email || "",
          phone: userData.phone || "",
          role: userData.role || "",
          status: userData.status || "",
        });
        setErrors({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        });
      }
    } else {
      // Reset form data if not editing
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        // status: "",
      });
    }
  }, [userId, userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };
  const handleSubmit = async (e) => {
    debugger
    e.preventDefault();
    try {
      if (userId) {
        await saveUser(formData);
      } else {
        if (validateForm()) {
          await saveUser(formData);
        }
      }
    } catch (error) {
      console.error("Error saving user data:", error);
      alert("Failed to save user data. Please try again.");
    }
  };
  const userRoleOptions = [
    { title: "Access Level", value: "" },
    { title: "Admin", value: "admin" },
    { title: "sales agent", value: "user" },
  ];
  const userStatusOptions = [
    { title: "Live Status", value: "" },
    { title: "Active", value: "active" },
    { title: "Disabled", value: "non-active" },
  ];
  return (
    <div className="w-full lg:w-10/12 p-5 bg-white rounded-lg shadow">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold  lg:text-left text-left text-blue-700">
          <span
            className="mr-2 text-2xl cursor-pointer text-center"
            onClick={handleBackClick}
          >
            &lt;
          </span>
          {userId ? "EDIT NEW USER" : "CREATE NEW USER"}
        </h1>
        {userId && (
          <button
            className="text-sm  lg:text-base lg:w-auto mb-4 lg:mb-0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => navigate("/newuser")}
            style={{
              background: "linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)",
            }}
          >
            ADD NEW USER +
            
          </button>
        )}
      </div>
      <form className="mt-4 p-4 lg:p-20 xl:mx-40" onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row justify-between gap-4 xl:gap-20 mb-4 lg:mb-10">
          <div className="w-full lg:w-1/2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            />
            {errors && (
              <p className="text-[16px] font-semibold text-[#a10d0d]">
                {errors.firstName}
              </p>
            )}
          </div>
          <div className="w-full lg:w-1/2">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            />
            {errors && (
              <p className="text-[16px] font-semibold text-[#a10d0d]">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4 xl:gap-20 mb-4 lg:mb-10">
          <div className="w-full lg:w-1/2">
            <input
              type="email"
              placeholder="User Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            />
            {errors && (
              <p className="text-[16px] font-semibold text-[#a10d0d]">
                {errors.email}
              </p>
            )}
          </div>
          <div className="w-full lg:w-1/2">
            <input
              type="tel"
              placeholder="User Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            />
            {errors && (
              <p className="text-[16px] font-semibold text-[#a10d0d]">
                {errors.phone}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4 xl:gap-20 mb-4 lg:mb-10">
          <div className="w-full lg:w-1/2">
            <select
              className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={handleChange}
              id="role"
              name="role"
              value={formData.role}
            >
              {userRoleOptions?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.title}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={handleChange}
                id="status"
                name="status"
                value={formData.status}
              >
                {userStatusOptions?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.title}
                  </option>
                ))}
              </select>
              {formData.status && (
                <div
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-[10px] h-[10px] rounded-[50%] ${
                    formData.status === "active" ? "bg-[#00FF85]" : "bg-[red]"
                  }`}
                />
              )}
            </div>
          </div>
        </div>
        <div className="mb-4 lg:mb-10">
          <textarea
            placeholder="Notes"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
          ></textarea>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-6">
          <button
            className="text-sm w-7/12 lg:text-base lg:w-auto mb-4 lg:mb-0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
            style={{
              background: "linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)",
            }}
          >
            {userId ? " SAVE DETAILS" : "ADD USER "} &#10004;
          </button>
          <button
            className="text-sm w-7/12 lg:text-base lg:w-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            style={{
              background: "linear-gradient(90deg, #02A1E6 0%, #0250E6 100%)",
            }}
          >
            RE-SEND ACCESS EMAIL
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
