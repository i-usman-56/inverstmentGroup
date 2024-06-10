import React, { useState } from "react";
import Logo from "../../../assets/svg/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import SidePic from "./components/SidePic";
import LoginHeader from "./components/LoginHeader";
import InputFields from "./components/InputFeilds";
import LoginButton from "./components/LoginButton";
import FooterMobile from "./components/footer/Footer";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (form.firstName === "") {
      valid = false;
      newErrors.firstName = "First Name is required.";
    }

    if (form.lastName === "") {
      valid = false;
      newErrors.lastName = "Last Name is required.";
    }

    if (form.email === "") {
      valid = false;
      newErrors.email = "Email is required.";
    }

    if (form.phone === "") {
      valid = false;
      newErrors.phone = "Phone is required.";
    }

    if (form.password === "") {
      valid = false;
      newErrors.password = "Password is required.";
    }

    if (form.confirmPassword === "") {
      valid = false;
      newErrors.confirmPassword = "Confirm Password is required.";
    }

    if (form.password !== form.confirmPassword) {
      valid = false;
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form data: ", form);
      navigate("/login")
      // proceed with form submission, e.g., call an API
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      {/* Descktop Section */}
      <section className="lg:flex hidden">
        <div className="flex-1">
          <SidePic />
        </div>
        <div className="flex-1 flex flex-col  justify-center">
          <LoginHeader
            img={Logo}
            title="Sign Up"
            desc="Enter Registered email & New Password"
          />
          <form onSubmit={handleSubmit} className="md:px-12 lg:px-20 ">
            <div className="gap-8 space-y-[22px] pt-[25px]">
              <div className="flex gap-[22px]">
                <div className="flex-1">
                  <InputFields
                    type="text"
                    name="firstName"
                    title="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                    autocomplete="new-password"
                  />
                </div>
                <div className="flex-1">
                  <InputFields
                    type="text"
                    name="lastName"
                    title="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                  />
                </div>
              </div>
              <div className="flex gap-[22px]">
                <div className="flex-1">
                  <InputFields
                    type="email"
                    name="email"
                    title="Email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>
                <div className="flex-1">
                  <InputFields
                    type="text"
                    name="phone"
                    title="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    error={errors.phone}
                  />
                </div>
              </div>
              <InputFields
                type="password"
                name="password"
                title="Password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />
              <InputFields
                type="password"
                name="confirmPassword"
                title="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
              />
            </div>
            <div className="flex justify-end">
                <Link to="/login">
                  <button className="capitalize text-[12px] leading-5 tracking-[-1.7%] text-[#012b80e4] font-bold text-clip ">
                    Already Have an Account, Login Here 
                  </button>
                </Link>
              </div>
            <div className="mt-[40px]">
              <LoginButton title="Confirm Sign Up" />
            </div>
          </form>
        </div>
      </section>
      {/* Mobile Section */}
      <div className="w-full lg:hidden">
        <div className="flex px-5 w-full min-h-[80vh] justify-center flex-col">
          <div>
            <LoginHeader
              img={Logo}
              title="Sign Up"
              desc="Enter Registered email & New Password"
            />
            <form onSubmit={handleSubmit} className="md:px-12">
              <div className="gap-8 space-y-[16px] pt-[25px] w-full">
                <div className="flex gap-[22px] w-full">
                  <div className="flex-1">
                    <InputFields
                      type="text"
                      name="firstName"
                      title="First Name"
                      value={form.firstName}
                      onChange={handleChange}
                      error={errors.firstName}
                    />
                  </div>
                  <div className="flex-1">
                    <InputFields
                      type="text"
                      name="lastName"
                      title="Last Name"
                      value={form.lastName}
                      onChange={handleChange}
                      error={errors.lastName}
                    />
                  </div>
                </div>
                <div className="flex gap-[22px]">
                  <div className="flex-1">
                    <InputFields
                      type="email"
                      name="email"
                      title="Email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                  </div>
                  <div className="flex-1">
                    <InputFields
                      type="text"
                      name="phone"
                      title="Phone"
                      value={form.phone}
                      onChange={handleChange}
                      error={errors.phone}
                    />
                  </div>
                </div>
                <InputFields
                  type="password"
                  name="password"
                  title="Password"
                  value={form.password}
                  onChange={handleChange}
                  error={errors.password}
                />
                <InputFields
                  type="password"
                  name="confirmPassword"
                  title="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                />
              </div>
              <div className="flex justify-end">
                <Link to="/login">
                  <button className="capitalize text-[12px] leading-5 tracking-[-1.7%] text-[#012b80e4] font-bold text-clip ">
                    Already Have an Account, Login Here 
                  </button>
                </Link>
              </div>
              <div className="mt-[22px]">
                <LoginButton title="Confirm Sign Up" />
              </div>
            </form>
          </div>
        </div>
        <div className="fixed bottom-0 w-full">
          <FooterMobile />
        </div>
      </div>
    </>
  );
}
