import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Contact = () => {
  return (
    <div>
      <div className="w-full h-full bg-white flex flex-col md:flex-row lg:flex-row  px-4 lg:px-16">
        {/* Left Content */}
        <div className="w-full flex flex-col mx-auto items-start mt-16 lg:mt-36 px-4 lg:px-0 space-y-10">
          <div>
            <h5
              className={`${montserrat.className} text-center font-bold text-[16px] hover:text-blue-500`}
            >
              CONTACT US
            </h5>
          </div>
          <div className="mt-4">
            <h1
              className={`${montserrat.className} text-start text-[#252B42] font-bold text-3xl lg:text-5xl hover:text-blue-500`}
            >
              Get in touch today!
            </h1>
          </div>
          <div className="mt-4">
            <h4
              className={`${montserrat.className} w-full lg:w-[360px] text-start text-[#737373] font-normal text-base lg:text-lg hover:text-yellow-500`}
            >
              We know how large objects will act, but things on a small scale
            </h4>
          </div>
          <div className="flex flex-col mt-6 mx-auto md:mx-0 lg:mx-0">
            <h4
              className={`${montserrat.className} text-start text-[#252B42] font-bold text-lg lg:text-xl hover:text-black`}
            >
              Phone : +451 215 215
            </h4>
            <h4
              className={`${montserrat.className} text-start text-[#252B42] font-bold text-lg lg:text-xl hover:text-black`}
            >
              Fax : +451 215 215
            </h4>
          </div>
          {/* Social Media */}
          <div className="flex gap-4 mt-6 mx-auto md:mx-0 lg:mx-0">
            {[
              "logo_twitter",
              "logo_facebook",
              "logo_instagram",
              "logo_linkedin",
            ].map((social) => (
              <Link href="" key={social}>
                <Image
                  src={`/images/${social}.png`}
                  alt={social}
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px]"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full mt-12 lg:mt-0">
          <Image
            src="/images/technology 1.png"
            alt="technology 1"
            className="relative lg:w-[450px] lg:h-[645px] object-cover hover:scale-110 transform transition duration-500"
            width={450}
            height={645}
          />
        </div>
      </div>

      <div className="w-full bg-myGreyBackground py-8 px-4 text-center">
        <h6
          className={`${montserrat.className} font-bold text-sm text-myDark hover:text-blue-500`}
        >
          VISIT OUR OFFICE
        </h6>
        <h2
          className={`${montserrat.className} font-normal text-2xl lg:text-4xl text-myDark mt-2 hover:text-blue-500`}
        >
          We help small businesses with big ideas
        </h2>
      </div>
      {/* Contact Boxes */}
      <div className="w-full flex flex-wrap justify-center bg-myGreyBackground py-8">
        {[
          {
            icon: "call",
            title: "Get Support",
            emails: ["georgia.young@example.com", "georgia.young@ple.com"],
          },
          {
            icon: "location",
            title: "Visit Us",
            emails: ["123 Street", "City, Country"],
            bg: "bg-myDark",
            text: "text-white",
          },
          {
            icon: "msg",
            title: "Send a Message",
            emails: ["contact@domain.com", "info@domain.com"],
          },
        ].map(
          ({ icon, title, emails, bg = "", text = "text-myDark" }, index) => (
            <div
              key={index}
              className={` w-[328px] sm:w-1/2 lg:w-[328px] lg:h-[403px] h-[403px] p-4 flex flex-col justify-center items-center ${bg} rounded-lg transform transition duration-500 hover:scale-110`}
            >
              <Image
                src={`/images/${icon}.png`}
                alt={icon}
                width={72}
                height={72}
              />
              <div className="mt-3">
                {emails.map((email, i) => (
                  <h6
                    key={i}
                    className={`${montserrat.className} text-center font-bold text-sm hover:text-blue-500 ${text}`}
                  >
                    {email}
                  </h6>
                ))}
              </div>
              <h5
                className={`${montserrat.className} text-center font-bold text-lg mt-3 hover:text-blue-500 ${text}`}
              >
                {title}
              </h5>
              <button className="w-[189px] mt-4 text-myBlue font-bold py-2 px-4 rounded-full outline outline-1 outline-myBlue hover:text-blue-500   ">
                Submit Request
              </button>
            </div>
          )
        )}
      </div>
      {/* Final Section */}
      <div className="w-full text-center py-8 ">
        <Image
          src={`/images/Arrow 2.png`}
          alt="Arrow 2"
          width={72}
          height={72}
          className="mx-auto"
        />
        <h5
          className={`${montserrat.className} font-bold text-base text- mt-5 hover:text-blue-500`}
        >
          WE CAN'T WAIT TO MEET YOU
        </h5>
        <h2
          className={`${montserrat.className} font-normal text-3xl lg:text-5xl text-black mt-4 hover:text-blue-500`}
        >
          Lets Talk
        </h2>
        <button className="w-48 mt-4 text- font-bold bg-blue-500 py-2 px-4 rounded-md hover:text-white">
          Try it free now
        </button>
      </div>
    </div>
  );
};

export default Contact;
