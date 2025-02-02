import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Footer = () => {
  return (
    <div>
      <div className="justify-between items-center md:w-full lg:h-[380px] h-full md:py-8 py-0 bg-[#FFFFFF] flex text-center">
        <div className="h-full md:w-full md:h-[138px] items-start py-12 px-14 justify-between gap-0 flex flex-col md:flex-row space-y-3 ">
          <div>
            <h2
              className={`${montserrat.className}"font-bold text-[#252B42] font-3xl hover:text-blue-500 md:text-[24px] text-[14px]`}
            >
              Bandage
            </h2>
          </div>
          <div className="px-0 md:px-4 flex justify-between space-x-3 ">
            <Image
              src="/images/facebook1.png"
              alt="Logo"
              width={24}
              height={24}
              className="w-[23px] h-[20px] md:w-[24px] md:h-[24px]"
            />
            <Image
              src="/images/instagram1.png"
              alt="Logo"
              width={24}
              height={24}
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            />

            <Image
              src="/images/twitter1.png"
              alt="Logo"
              width={24}
              height={24}
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            />
          </div>
        </div>
      </div>

      <div className="px-14 py-5 sm:flex flex-col md:flex-row lg:flex-row sm:space-x-10">
        <div>
          <h5 className="text-[#252B42] hover:text-blue-700 space-y-4 w-full pr-11 font-bold space-x-3">
            CompanyInfo
          </h5>
          <nav className="w-[152px]">
            <ul
              className={`${montserrat.className} text-[#737373] hover:text-blue-400 mt-4 font-bold top-10 gap-5 space-y-4`}
            >
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>

        <div className="w-[152px]">
          <h5 className="text-[#252B42] font-bold hover:text-blue-700 pr-11 space-x-3">
            Legal
          </h5>
          <nav>
            <ul
              className={`${montserrat.className} text-[#737373] font-bold hover:text-blue-400 mt-4 top-10 gap-5 space-y-4`}
            >
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>

        <div className="w-[148px]">
          <h5 className="text-[#252B42] hover:text-blue-700 font-bold pr-11 space-x-3">
            Features
          </h5>
          <nav>
            <ul
              className={`${montserrat.className} text-[#737373] hover:text-blue-400 mt-4 font-bold top-10 gap-5 space-y-4`}
            >
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </nav>
        </div>

        <div className="w-[152px]">
          <h5 className="text-[#252B42]  hover:text-blue-700 font-bold pr-11 space-x-3">
            Resources
          </h5>
          <nav>
            <ul
              className={`${montserrat.className} text-[#737373] hover:text-blue-400 mt-4 font-bold top-10 gap-5 space-y-4`}
            >
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col space-y-4 w-full sm:w-[509px]">
          <h5
            className={`${montserrat.className} font-bold text-[16px] text-[#252B42]  hover:text-blue-500`}
          >
            Get In Touch
          </h5>
          <div className="flex items-center lg:w-[321px] h-[85px] lg-h-[58] w-[250px] border border-[#E6E6E6] rounded-l-[5px] overflow-hidden">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#E6E6E6] text-white px-3 py-3 lg:px-4 lg:py-3 focus:outline-none w-full"
            />
            <div className="flex-shrink-0">
              <button className="text-white bg-blue-500 hover:text-black h-[58px] text-center pr-6 mt-3 flex rounded-r-[5px] px-3 py-3 lg:px-6 lg:py-3 lg:w-full  lg-[58] font-normal text-[14px]">
                Subscribe
              </button>
            </div>
          </div>
          <p
            className={`${montserrat.className} p-4 mx-auto items-center w-[80%] h-full lg:w-full lg:h-full font-medium text-[12px] lg:text-[14px] text-center gap-0 text-[#737373] hover:text-blue-400 mt-10 px-3 py-3`}
          >
            Lore imp sum dolor Amit
          </p>
        </div>
      </div>

      <div className="w-[80%] h-[74px] left-[195px] pt-[25px] pb-[30px] text-center mb-7 gap-0 lg:w-full lg:h-full lg:text-[14px]">
        <h5
          className={`${montserrat.className} font-bold text-[#737373] hover:text-blue-400 mt-12 mx-auto py-5`}
        >
          Made With Love By Finland All Right Reserved{" "}
        </h5>
      </div>
    </div>
  );
};

export default Footer;
