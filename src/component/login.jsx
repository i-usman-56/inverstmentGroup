import React, { useState } from "react";
import Picture from "../assets/img/loginSreenMainPicture.png";
import Logo from "../assets/svg/logo.svg";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    terms: false,
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    terms: false,
  });

  const [isChecked, setIsChecked] = useState(false);
  const validateForm = () => {
    let valid = true;
    let errors = { username: "", password: "" };

    if (form.username === "") {
      valid = false;
      errors.username = "Username is required.";
    }

    if (form.password === "") {
      valid = false;
      errors.password = "Password is required.";
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form data: ", form);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleChangeCheck = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <section className="flex">
      <div className="w-[55%]">
        <img src={Picture} alt="jet" className="h-screen" />
      </div>
      <div className="w-[45%] ">
        <div className="flex flex-col items-center h-screen">
          <img src={Logo} alt="logo" className="mt-40" />

          <div className="text-[#222222] font-bold h-[20px] text-[17.19px] mt-[6px]">
            Atlus Travels
          </div>

          <div className="text-left">
            <div className="h-[37px] text-[#222222] font-bold mt-14 text-[27px]">
              Login to your Account
            </div>
            <div className="font-normal text-[12px] text-[#585858] text-left mt-1">
              See what is going on with your business
            </div>

            <form onSubmit={handleSubmit} className="mt-5">
              <div className="flex flex-col mb-2">
                <label className="text-[#828282]  text-[12px] mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="mail@abc.com"
                  className="outline-none border-[0.75px] border-[#BC9543] h-[33.5px] w-[315px] rounded-[3.7px] pl-2"
                />
              </div>
              {errors.username && <p>{errors.username}</p>}

              <div className="flex flex-col">
                <label className="text-[#828282] w-[27px] text-[12px] mb-2 font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="password"
                  className="outline-none border-[0.75px] border-[#BC9543] h-[33.5px] w-[315px] rounded-[3.7px] pl-2"
                />
              </div>

              {errors.password && <p>{errors.password}</p>}

              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={isChecked}
                    onChange={handleChangeCheck}
                    className="form-checkbox  h-4 w-4"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 font-normal text-[12px] text-[#A1A1A1]"
                  >
                    Remember Me
                  </label>
                </div>

                <div className="font-semibold text-[12px] text-[#BC9543]">
                  Forgot Password?
                </div>
              </div>

              <button
                type="submit"
                onClick={() => navigate("/landingPage")}
                className="w-[315px]  mt-4 p-[8px] bg-[#BC9543] rounded-[4.5px] font-bold text-[13.5px] text-white"
              >
                Login
              </button>
            </form>
          </div>

          <div className="mt-auto mb-20 flex gap-2">
            <spam className="text-[13.5px] font-normal text-[#828282]">
              Not Registered Yet?
            </spam>
            <spam className="text-[13.5px] font-normal text-[#BC9543]">
              Create an account
            </spam>
          </div>
        </div>
      </div>
    </section>
  );
}
