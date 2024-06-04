import React, { useState } from "react";
import Picture from "../../assets/svg/Group 2.svg";
import Logo from "../../assets/svg/logo.svg";
import { useNavigate } from "react-router-dom";
import LoginHeader from "./components/LoginHeader";
import InputFeilds from "./components/InputFeilds";
import LoginButton from "./components/LoginButton";
import FooterMobile from "./components/footer/Footer";
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
    <>
      <section className="lg:flex hidden">
        <div className="w-[55%]">
          <img src={Picture} alt="jet" className="h-screen" />
        </div>
        <div className="w-[45%] flex flex-col items-center justify-center ">
        <LoginHeader
            img={Logo}
            title="Sign Up"
            desc="Enter Registered email & New Password"
          />
           <form action="submit">
            <div className="gap-8 space-y-[22px] pt-[25px]">
              <div className="flex gap-[22px]">
                <div className="flex-1">
                  <InputFeilds type="text" title="First Name" />
                </div>
                <div className="flex-1">
                  <InputFeilds type="text" title="Last Name" />
                </div>
              </div>
              <div className="flex gap-[22px]">
                <div className="flex-1">
                  <InputFeilds type="email" title="Email" />
                </div>
                <div className="flex-1">
                  <InputFeilds type="text" title="Phone" />
                </div>
              </div>

              <InputFeilds type="text" title="Password" />
              <InputFeilds type="text" title="Confirm Password" />
            </div>
            <div className="mt-[40px]">
              <LoginButton title="confirm sign up" />
            </div>
          </form>
        </div>
      </section>
      {/* Mobile Section */}


      <div className="mx-[12px] lg:hidden h-[100vh] overflow-hidden">
        <div className="h-[76vh] flex justify-center items-center flex-col">
          <LoginHeader
            img={Logo}
            title="Sign Up"
            desc="Enter Registered email & New Password"
          />
          <form action="submit">
            <div className="gap-8 space-y-[22px] pt-[25px]">
              <div className="flex gap-[22px]">
                <div className="flex-1">
                  <InputFeilds type="text" title="First Name" />
                </div>
                <div className="flex-1">
                  <InputFeilds type="text" title="Last Name" />
                </div>
              </div>
              <div className="flex gap-[22px]">
                <div className="flex-1">
                  <InputFeilds type="email" title="Email" />
                </div>
                <div className="flex-1">
                  <InputFeilds type="text" title="Phone" />
                </div>
              </div>

              <InputFeilds type="text" title="Password" />
              <InputFeilds type="text" title="Confirm Password" />
            </div>
            <div className="mt-[40px]">
              <LoginButton title="confirm sign up" />
            </div>
          </form>
        </div>
        <div className="h-[24vh]">
          <FooterMobile />
        </div>
      </div>

    </>
  );
}
