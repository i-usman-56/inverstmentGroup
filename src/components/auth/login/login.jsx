import React, { useState } from "react";
import Logo from "../../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import SidePic from "../signup/components/SidePic";
import LoginHeader from "../signup/components/LoginHeader";
import InputFields from "../signup/components/InputFeilds";
import Checkbox from "./components/checkbox";
import LoginButton from "../signup/components/LoginButton";
import FooterMobile from "../signup/components/footer/Footer";
import {  useLogin } from "../../../services/auth";

export default function Login() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [form, setForm] = useState({
    email: "iamusmanmunawar@gmail.com",
    password: "123qwe",
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

  const { mutate, isLoading } = useLogin();
  if (isLoading) {
    console.log(`Loading`)
  }
  const handleSubmit = async (event) => {
    debugger;
    event.preventDefault();
    if (validateForm()) {
      mutate(form)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <>
      <section className="lg:flex hidden">
        <div className="flex-1">
          <SidePic />
        </div>
        <div className="flex-1 flex flex-col  justify-center">
          <LoginHeader
            img={Logo}
            title="Sign In Here"
            desc="Use your email and password to sign in"
          />
          <form onSubmit={handleSubmit} className="md:px-12 lg:px-20 ">
            <div className="gap-8 space-y-[22px] pt-[25px] w-full">
              <div className="w-full">
                <InputFields
                  type="email"
                  name="email"
                  title="Email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>
              <InputFields
                type="password"
                name="password"
                title="Password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />
            </div>
            <div className="flex justify-end">
              <Link to="/signup">
                <button className="capitalize text-[12px] leading-5 tracking-[-1.7%] text-[#012b80e4] font-bold text-clip ">
                  New Here,Signup Here
                </button>
              </Link>
            </div>

            <Checkbox
              isChecked={isChecked}
              handleCheckboxChange={handleCheckboxChange}
            />
            <div className="mt-[40px]">
              <LoginButton title="Confirm Sign In" />
            </div>
            <div className="flex flex-col items-center justify-center mt-[24px]">
              <Link to="/forget-password">
                <button className="capitalize text-[12px] leading-5 tracking-[-1.7%] text-[#012C80] font-bold text-clip ">
                  Forgot Password, Click Here.
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
      {/* Mobile Section */}
      <div className="w-full lg:hidden">
        <div className="flex px-5  w-full min-h-[80vh] justify-center flex-col">
          <div>
            <LoginHeader
              img={Logo}
              title="Sign In Here"
              desc="Use your email and password to sign in"
            />
            <form onSubmit={handleSubmit} className="md:px-12">
              <div className="gap-8 space-y-[16px] pt-[25px] w-full">
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
                </div>
                <InputFields
                  type="password"
                  name="password"
                  title="Password"
                  value={form.password}
                  onChange={handleChange}
                  error={errors.password}
                />
              </div>
              <div className="flex justify-end">
                <Link to="/signup">
                  <button className="capitalize text-[12px] leading-5 tracking-[-1.7%] text-[#012b80e4] font-bold text-clip ">
                    New Here,Signup Here
                  </button>
                </Link>
              </div>

              <Checkbox
                isChecked={isChecked}
                handleCheckboxChange={handleCheckboxChange}
              />

              <div className="mt-[22px]">
                <LoginButton title="Confirm Sign In" />
              </div>
              <div className="flex justify-center mt-[16px]">
                <Link to="/forget-password">
                  <button className="capitalize text-[12px] leading-5 tracking-[-1.7%] text-[#012C80] font-bold text-clip ">
                    Forgot Password, Click Here.
                  </button>
                </Link>
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
