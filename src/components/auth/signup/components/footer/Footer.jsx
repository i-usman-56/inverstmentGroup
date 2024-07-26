import Logo from "../../../../../assets/svg/logo.svg";
import icon1 from "../../../../../assets/footersvgs/majesticons_home-analytics.svg";
import icon2 from "../../../../../assets/footersvgs/fluent-mdl2_people-add.svg";
import icon3 from "../../../../../assets/footersvgs/clarity_administrator-line.svg";
import icon4 from "../../../../../assets/footersvgs/Finance.svg";
import icon5 from "../../../../../assets/footersvgs/fluent-mdl2_teamwork.svg";
import { Link } from "react-router-dom";

export default function FooterMobile() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-3 lg:hidden">
        <img src={Logo} alt="" className="w-[97px] h-[73px]" />
        <div className="pt-[28px] lg:pt-[45px]">
          <h1 className="text-center text-[12px] leading-[14px] font-normal tracking-[-1.3%] text-[#000000] ">
            Copyright MMM Investment Group 2024{" "}
          </h1>
          <p className="text-[#0250E6] text-center text-[12px] leading-[14px] font-normal tracking-[-1.3%]">
            Powered By AO GenTech
          </p>
          <p className="text-[#000000] text-center text-[12px] leading-[14px] font-normal tracking-[-1.3%]">
            Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-col items-center">
        <div className="flex justify-between items-center w-full px-16 py-8 border-t border-gray-200">
          <img src={Logo} alt="Logo" className="w-[97px] h-[73px]" />
          <div className="flex justify-center w-full space-x-20">
            <Link to={`/`}>
              <div className="flex flex-col items-center">
                <img src={icon1} className="w-10 h-10" alt="Dashboard Icon" />
                <p className="text-blue-600 text-sm font-semibold mt-2">
                  DASHBOARD
                </p>
              </div>
            </Link>
            <Link to={`/current-client`}>
              <div className="flex flex-col items-center">
                <img
                  src={icon2}
                  className="w-10 h-10"
                  alt="Client Lists Icon"
                />
                <p className="text-blue-600 text-sm font-semibold mt-2">
                  CLIENT LISTS
                </p>
              </div>
            </Link>
            <Link to={`/user-access`}>
              <div className="flex flex-col items-center cursor-pointer">
                <img src={icon3} className="w-10 h-10" alt="Admin Panel Icon" />
                <p className="text-blue-600 text-sm font-semibold mt-2">
                  ADMIN PANEL
                </p>
              </div>
            </Link>
            <Link to={`/finace`}>
            <div className="flex flex-col items-center">
              <img src={icon4} className="w-10 h-10" alt="Finances Icon" />
              <p className="text-blue-600 text-sm font-semibold mt-2">
                FINANCES
              </p>
            </div>
            </Link>
            <div className="flex flex-col items-center">
              <img src={icon5} className="w-10 h-10" alt="My Team Icon" />
              <p className="text-blue-600 text-sm font-semibold mt-2">
                MY TEAM
              </p>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="text-center py-4">
          <h1 className="text-[12px] leading-[14px] font-normal tracking-[-1.3%] text-[#000000]">
            Copyright MMM Investment Group 2024
          </h1>

          <p className="text-[#000000] text-[12px] leading-[14px] font-normal tracking-[-1.3%]">
            Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
