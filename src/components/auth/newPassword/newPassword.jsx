import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Logo from "../../../assets/svg/logo.svg";
import SidePic from "../signup/components/SidePic";
import LoginHeader from "../signup/components/LoginHeader";
import InputFields from "../signup/components/InputFeilds";
import LoginButton from "../signup/components/LoginButton";
import FooterMobile from "../signup/components/footer/Footer";
import { useReNewPassword } from "../../../services/auth";

export default function NewPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tokenReset = searchParams.get("token");
  // console.log(userId)
  const { mutate, status } = useReNewPassword();

  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (form.newPassword === "") {
      valid = false;
      newErrors.newPassword = "Password is required.";
    }

    if (form.confirmPassword !== form.newPassword) {
      valid = false;
      newErrors.confirmPassword = "Confirm Password is required.";
    }

    //   if (form.password !== form.confirmPassword) {
    //     valid = false;
    //     newErrors.confirmPassword = "Passwords do not match.";
    //   }
    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
        mutate({...form,token:tokenReset})
      // console.log("Form data: ", form);
      // navigate("/login");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
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
            title="Enter New Password"
            desc="Enter New Password For future sessions"
          />
          <form onSubmit={handleSubmit} className="md:px-12">
            <div className="gap-8 space-y-[12px] lg:space-y-5 pt-[25px] w-full xl:px-14">
              <div className="flex gap-[22px]">
                <div className="flex-1">
                  <InputFields
                    type="password"
                    name="newPassword"
                    title="Password"
                    value={form.newPassword}
                    onChange={handleChange}
                    error={errors.newPassword}
                  />
                  {errors && <p className="text-[16px] font-semibold text-[#a10d0d]">{errors.newPassword}</p>}
                </div>
              </div>
              <InputFields
                type="password"
                name="confirmPassword"
                title="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
              />
              {errors && <p className="text-[16px] font-semibold text-[#a10d0d]">{errors.confirmPassword}</p>}
            </div>

            <div className="mt-[40px]">
              <LoginButton title="Confirm New Password" />
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
              title="Enter New Password"
              desc="Enter New Password For future sessions"
            />
            <form onSubmit={handleSubmit} className="md:px-12">
              <div className="gap-8 space-y-[16px] pt-[25px] w-full">
                <div className="flex gap-[22px]">
                  <div className="flex-1">
                    <InputFields
                      type="password"
                      name="newPassword"
                      title="Password"
                      value={form.newPassword}
                      onChange={handleChange}
                      error={errors.newPassword}
                    />
                    {errors && <p className="text-[16px] font-semibold text-[#a10d0d]">{errors.newPassword}</p>}
                  </div>
                </div>
                <InputFields
                  type="password"
                  name="confirmPassword"
                  title="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                />
                {errors && <p className="text-[16px] font-semibold text-[#a10d0d]">{errors.confirmPassword}</p>}
              </div>

              <div className="mt-[22px]">
                <LoginButton title="Confirm New Password" />
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
