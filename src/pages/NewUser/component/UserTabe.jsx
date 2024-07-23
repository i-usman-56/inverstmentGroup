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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (userId) {
      if (userData) {
        setFormData({
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          email: userData.email || "",
          phone: userData.phone || "",
        });
      }
    } else {
      // Reset form data if not editing
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    }
  }, [userId, userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveUser(formData);
    } catch (error) {
      console.error("Error saving user data:", error);
      alert("Failed to save user data. Please try again.");
    }
  };
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
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4 xl:gap-20 mb-4 lg:mb-10">
          <div className="w-full lg:w-1/2">
            <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>Access Level</option>
              <option>Admin</option>
              <option>User</option>
            </select>
          </div>
          <div className="w-full lg:w-1/2">
            <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>Live Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
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
