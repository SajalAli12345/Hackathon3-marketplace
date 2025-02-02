"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import { useState } from "react";

const Pricing = () => {
  const [isActive, setIsActive] = useState(false);

  const [visible, setVisible] = useState<boolean[]>(Array(6).fill(true));

  const toggleVisibility = (index: number) => {
    setVisible((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className="items-center space-y-6 mt-10">
        <h3
          className={`${montserrat.className} text-center font-bold text-[16px] text-[#737373] hover:text-blue-500`}
        >
          PRICING
        </h3>
        <h1
          className={`${montserrat.className} text-center font-bold text-[38px] text-[#252B42] md:text-[48px] lg:text-[58px] hover:text-blue-500`}
        >
          Simple Pricing
        </h1>
        <div className="flex justify-center sm:justify-center md:justify-center lg:justify-center space-x-4">
          <Link href="/">
            <h3
              className={`${montserrat.className}font-bold text-[14px]  text-[#737373] hover:text-blue-500`}
            >
              Home
            </h3>
          </Link>
          <RiArrowDropRightLine className="text-[#737373] text-2xl" />
          <Link href="/shop">
            <h3
              className={`${montserrat.className}font-bold text-[14px] text-[#737373] hover:text-blue-500`}
            >
              Shop
            </h3>
          </Link>
        </div>
      </div>

      <div className=" flex flex-col justify-center w-full h-full lg:w-[607px] lg:h-[100px] items-center text-center mx-auto mt-20">
        <h2 className={`${montserrat.className} font-bold text-[40px] hover:text-blue-500`}>
          Pricing
        </h2>

        <div className="w-full lg:w-[469px] h-[40px] items-center">
          <p
            className={`${montserrat.className}  font-normal text-sm text-[#737373] mt-4 px-6 lg:px-0`}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4 mx-auto mt-16 px-5 sm:px-5 md:px-2 lg:px-0">
        <h2
          className={`${montserrat.className} font-bold text-[16px] text-[#252B42]  hover:text-blue-500`}
        >
          Monthly
        </h2>
        <div className="flex items-center space-x-2">
          <h2
            className={`${montserrat.className} font-bold text-[16px] text-[#252B42] hover:text-blue-500`}
          >
            Yearly
          </h2>
          <div
            className={` w-[45px] h-[25px] rounded-full border ${
              isActive
                ? "bg-white border-blue-500"
                : "bg-white border-blue-500 "
            } flex items-center cursor-pointer`}
            onClick={toggleSwitch}
          >
            <div
              className={`ml-1 px-1 w-[19px] h-[19px] rounded-full ${
                isActive ? "bg-[#2DC071] " : "bg-[#737373]"
              }  shadow-md transform transition-transform duration-300 ${
                isActive ? "translate-x-[20px]" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>
        <div className="w-[109px] h-[30px] sm:h-[40px] md:h-[44px] lg:h-[44px] rounded-full flex items-center bg-[#B2E3FF] mx-auto">
          <h6
            className={`${montserrat.className} text-center font-bold text-[12px] md:text-[14px] lg:text-[14px] text-[#23A6F0] mx-auto hover:text-blue-500`}
          >
            Save 25%
          </h6>
        </div>
      </div>
      {/* Contact Boxes */}
      <div className="bg-[#FAFAFA] flex justify-center flex-wrap items-center pb-[-44] mt-16 px-3 sm:px-3 md:px-0 lg:px-0 space-y-3 sm:space-y-3  space-x-0 sm:space-x-0 md:space-x-4 lg:space-x-0 md:space-y-3 lg:space-y-0">
        <div className="bg-white flex flex-col justify-evenly w-[327px] h-[664px] border border-myBlue rounded-md transform transition duration-500 hover:scale-110">
          <h3
            className={`${montserrat.className} text-center font-bold text-[24px] text-black hover:text-blue-500 mx-auto`}
          >
            FREE
          </h3>
          <h5
            className={`${montserrat.className} text-center font-bold text-[14px] text-[#737373] mx-auto hover:text-blue-500`}
          >
            Organize across all apps by hand
          </h5>
          <div className="flex justify-center">
            <div>
              <h2
                className={`${montserrat.className} text-center font-bold text-[40px] hover:text-black text-blue-500 mx-auto`}
              >
                0
              </h2>
            </div>
            <div className="flex flex-col">
              <h3
                className={`${montserrat.className} text-center font-bold text-[24px] hover:text-black text-blue-500 mx-auto`}
              >
                $
              </h3>

              <h5
                className={`${montserrat.className} text-center font-bold text-[14px] hover:text-black text-blue-500 mx-auto`}
              >
                Per
              </h5>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mx-auto space-y-3">
            <div className="space-x-4 flex justify-center items-center">
              <IoIosCheckmark className="rounded-full bg-[#2DC071] text-white w-8 h-8 " />
              <h6
                className={`${montserrat.className} text-center font-bold text-[14px] text-[#252B42] mx-auto`}
              >
                Unlimited product updates
              </h6>
            </div>
          </div>
        </div>

        <div className="bg-black flex flex-col justify-evenly w-[327px] h-[699px] border border-blue-500 rounded-md transform transition duration-500 hover:scale-110">
          <h3
            className={`${montserrat.className} text-center font-bold text-[24px] text-white mx-auto hover:text-blue-500`}
          >
            STANDARD
          </h3>
          <h5
            className={`${montserrat.className} text-center font-bold text-[14px] text-white mx-auto hover:text-blue-500`}
          >
            Organize across all apps by hand
          </h5>
          <div className="flex justify-center">
            <div>
              <h2
                className={`${montserrat.className} text-center font-bold text-[40px] text-blue-500 mx-auto`}
              >
                9.99
              </h2>
            </div>
            <div className="flex flex-col">
              <h3
                className={`${montserrat.className} text-center font-bold text-[24px] text-blue-500 mx-auto`}
              >
                $
              </h3>

              <h5
                className={`${montserrat.className} text-center font-bold text-[14px] text-blue-500 mx-auto `}
              >
                Per
              </h5>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mx-auto space-y-3">
            <div className="space-x-4 flex justify-center items-center">
              <IoIosCheckmark className="rounded-full bg-[#2DC071] text-white w-8 h-8 " />
              <h6
                className={`${montserrat.className} text-center font-bold text-[14px] text-white mx-auto hover:text-blue-500`}
              >
                Unlimited product updates
              </h6>
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col justify-evenly w-[327px] h-[664px] border border-myBlue rounded-md transform transition duration-500 hover:scale-110">
          <h3
            className={`${montserrat.className} text-center font-bold text-[24px] text-[#252B42] mx-auto hover:text-blue-500`}
          >
            PREMIUM
          </h3>
          <h5
            className={`${montserrat.className} text-center font-bold text-[14px] text-[#737373] mx-auto hover:text-blue-500`}
          >
            Organize across all apps by hand
          </h5>
          <div className="flex justify-center">
            <div>
              <h2
                className={`${montserrat.className} text-center font-bold text-[40px] text-blue-500 mx-auto hover:text-black`}
              >
                19.99
              </h2>
            </div>
            <div className="flex flex-col">
              <h3
                className={`${montserrat.className} text-center font-bold text-[24px] text-blue-500 mx-auto hover:text-black`}
              >
                $
              </h3>

              <h5
                className={`${montserrat.className} text-center font-bold text-[14px] text-blue-500 mx-auto hover:text-black`}
              >
                Per
              </h5>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mx-auto space-y-3">
            <div className="space-x-4 flex justify-center items-center">
              <IoIosCheckmark className="rounded-full bg-[#2DC071] text-white w-8 h-8 " />
              <h6
                className={`${montserrat.className} text-center font-bold text-[14px] text-[#252B42]  mx-auto hover:text-blue-500`}
              >
                Unlimited product updates
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1
          className={`${montserrat.className} text-center font-normal text-[14px] text-[#252B42] mt-16 text-sm lg:text-[14px] hover:text-blue-500`}
        >
          Trusted By Over 4000 Big Companies
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center mt-16 px-20 space-y-10 my-10">
        {/* Image 1 */}
        <Image
          src="/company/img-1.png"
          alt="company-img-1"
          width={153}
          height={34}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 2 */}
        <Image
          src="/company/img-2.png"
          alt="company-img-2"
          width={146}
          height={59}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 3 */}
        <Image
          src="/company/img-3.png"
          alt="company-img-3"
          width={152}
          height={15}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 4 */}
        <Image
          src="/company/img-4.png"
          alt="company-img-4"
          width={151}
          height={42}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 6 */}
        <Image
          src="/company/img-6.png"
          alt="company-img-6"
          width={151}
          height={72}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 5 */}

        <Image
          src="/company/img-5.png"
          alt="company-img-5"
          width={151}
          height={62}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110 "
        />
      </div>

      <div className=" flex flex-col justify-center  w-full h-full lg:w-[607px] lg:h-[100px] items-center text-center mx-auto mt-20">
        <h2
          className={`${montserrat.className} font-bold text-[40px] text-[#252B42] hover:text-blue-500`}
        >
          Pricing FAQs
        </h2>

        <div className="w-full lg:w-[469px] h-[40px] items-center">
          <p
            className={`${montserrat.className}  font-normal text-sm text-[#737373] mt-4 px-6 lg:px-0 hover:text-blue-500`}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  justify-evenly items-center mt-14 mx-auto gap-y-8 px-4 space-y-10 md:space-y-0 lg:space-y-0">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex space-x-4 items-start justify-center"
          >
            <div
              onClick={() => toggleVisibility(index)}
              className="cursor-pointer"
            >
              <FaAngleRight className="text-blue-500 h-5 w-5" />
            </div>
            <div>
              <div className="flex flex-col justify-start w-full h-auto">
                <h5
                  className={`${montserrat.className} font-bold text-[16px] text-[#252B42] hover:text-blue-500`}
                >
                  the quick fox jumps over the lazy dog
                </h5>
                {visible[index] && (
                  <div className="w-full lg:w-[408px] h-[80px] items-center">
                    <p
                      className={`${montserrat.className} font-normal text-sm text-[#737373] hover:text-blue-500`}
                    >
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p
          className={`${montserrat.className} text-center font-normal text-[14px] text-[#737373] mt-16 text-sm lg:text-[14px] hover:text-blue-500`}
        >
          Haven’t got your answer? Contact our support
        </p>
      </div>

      <div>
        <div className="w-full h-[282px] flex flex-col justify-center items-center text-center space-y-12 mx-auto mt-36">
          <h2
            className={`${montserrat.className} w-full md:w-full lg:w-full text-center font-bold text-[32px] md:text-[40px] lg:text-[30px] text-myDark`}
          >
            <span className="block md:inline hover:text-blue-500">
              Start your 14 days free Trial
            </span>
          </h2>

          <div className=" items-center">
            <p
              className={`${montserrat.className} w-full md:w-[451px] lg:w-[451px] font-normal text-[8] md:text-sm  text-myGrey px-4 hover:text-blue-500`}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent.
            </p>
          </div>

          <div className="w-[186px] h-[52px] rounded-md  bg-blue-500 mx-auto py-4 mt-6">
            <h6
              className={`${montserrat.className}  text-center font-bold text-[14px] items-center text-white mx-auto hover:text-black`}
            >
              Try for free
            </h6>
          </div>
          {/* social icons */}
          <div className="w-[313px]  mx-auto flex justify-evenly pb-24 md:pb-0 lg:pb-0">
            {/* Twitter Icon */}
            <div>
              <Image
                src="/price/price-twt.png" // Small image
                alt="Twitter"
                width={30}
                height={30}
                className="object-cover w-[30px] h-[30px]"
              />
            </div>
            {/* Facebook Icon */}
            <div>
              <Image
                src="/price/price-fb.png" // Small image
                alt="Facebook"
                width={30}
                height={30}
                className="object-cover w-[30px] h-[30px]"
              />
            </div>
            {/* Instagram Icon */}
            <div>
              <Image
                src="/price/price-int.png" // Small image
                alt="Instagram"
                width={30}
                height={30}
                className="object-cover w-[30px] h-[30px]"
              />
            </div>
            {/* LinkedIn Icon */}

            <div>
              <Image
                src="/price/price-lnk.png" // Small image
                alt="LinkedIn"
                width={30}
                height={30}
                className="object-cover w-[30px] h-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
