import React, { useState } from 'react'
import LoginHeader from '../signup/components/LoginHeader'
import InputFields from '../signup/components/InputFeilds'
import Checkbox from '../login/components/checkbox'
import LoginButton from '../signup/components/LoginButton'
import FooterMobile from '../signup/components/footer/Footer'
import Logo from '../../assets/svg/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import SidePic from '../signup/components/SidePic'

export default function ForgetPAssword() {
    const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });
  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (form.email === "") {
      valid = false;
      newErrors.email = "Email is required.";
    }
    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form data: ", form);
      navigate('/new-password')
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
            title="Forgot Password?"
            desc="Enter email associated with your account"
          />
          <form onSubmit={handleSubmit} className="md:px-12 lg:px-20">
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
            </div>
            <div className="mt-[40px]">
              <LoginButton title="Send Email" />
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
              title="Forgot Password?"
              desc="Enter email associated with your account"
            />
            <form onSubmit={handleSubmit} className="md:px-12">
              <div className="gap-8 space-y-[22px] pt-[25px] w-full">
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
              </div>
              <div className="mt-[40px]">
                <LoginButton title="Send Email" />
              </div>
            </form>
          </div>
        </div>
        <div className="fixed bottom-0 w-full">
          <FooterMobile />
        </div>
      </div> 
    </>
  )
}
