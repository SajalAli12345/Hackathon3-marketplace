import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const About = () => {
    return(
        <div>             
            
            <div className="w-full h-full bg-white flex flex-col md:flex-row lg:flex-row px-4 md:px-0 lg:px-20">
      {/* about */}
      {/* Left Content */}
      <div className="w-full flex flex-col space-y-10 mx-auto items-center md:items-center lg:items-start mt-16 lg:mt-36 px-4 lg:px-0">
        <div>
          <h5
            className={`${montserrat.className} text-center font-bold text-[16px] text-[#252B42] hover:text-blue-500`}
          >
            ABOUT COMPANY
          </h5>
        </div>
        <div className="mt-4">
          <h1
            className={`${montserrat.className} text-start font-bold text-3xl lg:text-5xl text-[#252B42]   hover:text-blue-500`}
          >
            ABOUT US
          </h1>
        </div>

        <div className="mt-4 w-full lg:w-[376px]">
          <h4
            className={`${montserrat.className} text-center lg:text-start font-normal text-base lg:text-lg text-[#252B42]   hover:text-blue-500`}
          >
            We know how large objects will act, but things on a small scale
          </h4>
        </div>
        <div className="w-[195px] h-[52px] bg-blue-400 flex">
          <button className="w-[214px] h-[52px] bg-blue-700 text-white font-bold rounded-lg text-sm hover:text-blue-500">
            Get Quote Now
          </button>
        </div>
      </div>

      {/* Right Content Image*/}
      <div className="relative w-full mt-12 lg:mt-0">
        <Image
          src="/images/technology 2.png"
          alt="technology 2"
          className="relative lg:w-[450px] lg:h-[645px] object-cover transform transition duration-500 hover:scale-110"
          width={450}
          height={645}
        />
      </div>
    </div>


    {/* content */}
    <div className="w-full flex justify-evenly flex-wrap mt-8">
        <div className="w-[394px] h-[140px] flex flex-col justify-between ">
          <p
            className={`${montserrat.className} text-center lg:text-start font-normal text-sm text-red-500 hover:text-blue-500`}
          >
            Problems trying
          </p>
          <h3
            className={`${montserrat.className} text-center lg:text-start font-bold text-[24px] text-[#252B42] hover:text-blue-500`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div className="w-[529px] h-[40px]">
          <p
            className={`${montserrat.className} text-justify lg:text-start font-normal text-sm text-[#737373] lg:mt-0 px-8 lg:px-0 hover:text-blue-500`}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      {/* stats review customers */}
      <div className="w-full space-y-12 lg:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-32">
        <div className="space-y-4">
          <h1
            className={`${montserrat.className} text-center font-bold text-[58px] text-[#252B42] hover:text-blue-500`}
          >
            15K
          </h1>
          <h5
            className={`${montserrat.className} text-center text-[#252B42] font-bold text-[16px] hover:text-blue-500`}
          >
            Happy Customers
          </h5>
        </div>
        <div className="space-y-4">
          <h1
            className={`${montserrat.className} text-center font-bold text-[58px] text-[#252B42] hover:text-blue-500`}
          >
            150K
          </h1>
          <h5
            className={`${montserrat.className} text-center text-[#252B42] font-bold text-[16px] hover:text-blue-500`}
          >
            Monthly Visitors
          </h5>
        </div>
        <div className="space-y-4">
          <h1
            className={`${montserrat.className} text-center font-bold text-[58px] text-[#252B42] hover:text-blue-500`}
          >
            15
          </h1>
          <h5
            className={`${montserrat.className} text-center [#252B42] font-bold text-[16px] hover:text-blue-500`}
          >
            Countries Worldwide
          </h5>
        </div>
        <div className="space-y-4">
          <h1
            className={`${montserrat.className} text-center font-bold text-[58px] text-[#252B42] hover:text-blue-500`}
          >
            100+
          </h1>
          <h5
            className={`${montserrat.className} text-center [#252B42] font-bold text-[16px] hover:text-blue-500`}
          >
            Top Partners
          </h5>
        </div>
      </div>







    <div className="mx-auto items-center">
      {/* Meet Our Team */}
      <div className="flex flex-col justify-center w-full h-full lg:w-[607px] lg:h-[100px] items-center text-center mx-auto mt-28">
        <h2
          className={`${montserrat.className} font-bold text-[40px] text-[#252B42] hover:text-blue-500`}
        >
          Meet Our Team
        </h2>

        <div className="w-full lg:w-[469px] h-[40px] items-center">
          <p
            className={`${montserrat.className}  font-normal text-sm text-[#737373] mt-4 px-6 lg:px-0 hover:text-blue-500`}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      {/* user */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center space-y-11 md:space-y-0 lg:space-y-0 mx-auto mt-24 px-5 lg:px-24   md:space-x-3">
        <div className="items-center mx-auto space-y-3 transform transition duration-500 hover:scale-110">
          <Image
            src="/user/user-1.jpg"
            alt="user-1"
            width={316}
            height={231}
            className="lg:w-[316px] lg:h-[231px] object-cover "
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-[#252B42] hover:text-blue-500`}
          >
            User 1
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-[#737373] hover:text-blue-500`}
          >
            Profession
          </h6>

          {/* social icons */}
          <div className="px-0 flex space-x-5 justify-center ">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show only on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook1.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              {/* Large Device Image */}

              <Image
                src="/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              {/* Small Device Image */}

              <Image
                src="/images/instagram1.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              {/* Large Device Image */}
              <Image
                src="/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              {/* Small Device Image */}
              <Image
                src="/images/twitter1.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
        </div>
        <div className="items-center mx-auto space-y-3 transform transition duration-500 hover:scale-110">
          <Image
            src="/user/user-2.jpg"
            alt="user-2"
            width={316}
            height={231}
            className="lg:w-[316px] lg:h-[231px] object-cover "
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-[#252B42] hover:text-blue-500`}
          >
            User 2
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-[#737373] hover:text-blue-500`}
          >
            Profession
          </h6>

          {/* social icons */}
          <div className="px-0 flex space-x-5 justify-center">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook1.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              <Image
                src="/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/instagram1.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              <Image
                src="/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/twitter1.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
        </div>

        <div className="items-center mx-auto space-y-3 transform transition duration-500 hover:scale-110">
          <Image
            src="/user/user-3.jpg"
            alt="user-3"
            width={316}
            height={231}
            className="lg:w-[316px] lg:h-[231px] object-cover "
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-myDark hover:text-blue-500`}
          >
            User 3
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-[#737373] hover:text-blue-500`}
          >
            Profession
          </h6>
          {/* social icons */}
          <div className="px-0 flex space-x-5 justify-center">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show only on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook1.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              <Image
                src="/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/instagram1.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              <Image
                src="/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/twitter1.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="bg-black/[0.02] flex flex-col justify-center w-full h-auto items-center text-center mx-auto mt-40 px-6 lg:px-0">
      <h2
        className={`${montserrat.className} font-bold text-[40px] text-[#252B42] py-12 hover:text-blue-500`}
      >
        Big Companies Are Here
      </h2>

      <div className="w-full h-auto lg:w-[547px] lg:h-[40px] items-center mt-5">
        <p
          className={`${montserrat.className}  font-normal text-sm text-[#737373] mt-4 hover:text-blue-500`}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      {/* grid-cols-6 */}
      <div className="w-full lg:w-[900px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center mx-auto mt-12">
        {/* Image 1 */}
        <Image
          src="/company/img-1.png"
          alt="company-img-1"
          width={153}
          height={34}
          className=" items-center mx-auto transform transition duration-500 hover:scale-110"
        />

        {/* Image 2 */}
        <Image
          src="/company/img-2.png"
          alt="company-img-2"
          width={146}
          height={59}
          className="items-center mx-auto transform transition duration-500 hover:scale-110"
        />

        {/* Image 3 */}
        <Image
          src="/company/img-3.png"
          alt="company-img-3"
          width={152}
          height={15}
          className="items-center mx-auto transform transition duration-500 hover:scale-110"
        />

        {/* Image 4 */}
        <Image
          src="/company/img-4.png"
          alt="company-img-4"
          width={151}
          height={42}
          className="items-center mx-auto transform transition duration-500 hover:scale-110"
        />

        {/* Image 5 */}
        <Image
          src="/company/img-5.png"
          alt="company-img-5"
          width={151}
          height={62}
          className="items-center mx-auto transform transition duration-500 hover:scale-110"
        />

        {/* Image 6 */}
        <Image
          src="/company/img-6.png"
          alt="company-img-6"
          width={151}
          height={72}
          className="items-center mx-auto transform transition duration-500 hover:scale-110"
        />
      </div>
    </div>

    <div className="flex flex-col lg:flex-row items-stretch mt-28">
      {/* Content Section */}
      <div className="w-full lg:w-[70%] bg-[#2A7CC7] flex flex-col justify-center p-6 lg:p-12">
        <div className="max-w-md mx-auto space-y-6 text-center lg:text-left">
          <h5
            className={`${montserrat.className} font-bold text-sm sm:text-base lg:text-lg text-white`}
          >
            WORK WITH US
          </h5>
          <h1
            className={`${montserrat.className} font-bold text-2xl sm:text-3xl lg:text-4xl text-white`}
          >
            Now Let’s grow Yours
          </h1>
          <p
            className={`${montserrat.className} font-normal text-sm sm:text-base lg:text-lg text-white`}
          >
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th.
          </p>
          <div>
            <button className="w-[132px] h-[52px] text-white font-bold outline outline-white rounded-[5px] text-sm">
              Button
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#737373]/18 h-full">
        <Image
          src="/work/work-img.png"
          alt="work-img"
          width={510}
          height={500}
          className="w-full h-full bg-slate-200 object-cover transform transition duration-500 hover:scale-110"
        />
      </div>
    </div>
        </div>
    )
}

export default About;