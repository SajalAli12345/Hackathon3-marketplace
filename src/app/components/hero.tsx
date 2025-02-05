'use client';
import React from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FaAngleRight, FaClock } from "react-icons/fa";
import OurProducts from "../furniture-products/page";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Hero = () => {
  return (
    <div> 
      <div
        className="w-full h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-image.jpg')", 
        }}   
      >
        {/* Main container */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-6xl px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-16 md:py-20 lg:py-24">
            {/* Placeholder Divs */}
            <div className="flex flex-col items-start space-y-6 sm:space-y-8 md:space-y-10">
              <h5
                className={`${montserrat.className} font-bold text-sm sm:text-base md:text-lg lg:text-xl text-white`}
              >
                SUMMER 2020
              </h5>
              <h1
                className={`${montserrat.className} font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white`}
              >
                NEW COLLECTION
              </h1>
              <h4
                className={`${montserrat.className} w-full lg:w-[60%] font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-white`}
              >
                We know how large objects will act, but things on a small scale.
              </h4>

              <div className="w-full sm:w-auto">
                <Link href="/Shop" className="">
                  <button className="w-full sm:w-auto text-white bg-[#2DC071] font-bold py-3 px-6 rounded-lg sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 text-sm sm:text-base md:text-lg lg:text-xl hover:text-black">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center mx-auto my-14">
        {/* h2 #feature-Fsection.1 */}
        <h2
          className={`${montserrat.className} items-center text-center font-bold text-[24px] text-[#252B42] hover:text-blue-500`}
        >
          EDITORS PICK
        </h2>
        <p
          className={`${montserrat.className} font-normal text-[14px] text-center text-[#252B42] hover:text-blue-500`}
        >
          Problems trying to resolve the conflict between
        </p>
        {/* row */}
        <div className="flex flex-wrap gap-2 items-center justify-center mt-8">
          {/* Image 1 */}
          <div className="relative">
            <Image
              src="/images/card-image-1.png"
              alt="card-image-1"
              className="object-cover w-full h-auto md:w-[510px] md:h-[500px] px-8 md:px-0 transform transition duration-500 hover:scale-110"
              width={510}
              height={500}
            />
            <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white text-center px-4 py-3 shadow-lg">
              <p
                className={`${montserrat.className} items-center text-center font-bold text-[16px] text-[#252B42] hover:text-blue-500`}
              >
                MEN
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative">
            <Image
              src="/images/card-image-2.png"
              alt="card-image-2"
              className="w-[255px] h-[500px] md:w-[240px] md:h-[500px] transform transition duration-500 hover:scale-110"
              width={240}
              height={500}
            />
            <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
              <h5
                className={`${montserrat.className} items-center text-center font-bold text-[16px] text-[#252B42] hover:text-blue-500`}
              >
                WOMEN
              </h5>
            </div>
          </div>

          {/* Nested grid */}
          <div className="flex flex-row lg:flex-col gap-4 flex-wrap">
            {/* Image 3 */}
            <div className="relative mx-auto items-center">
              <Image
                src="/images/card-image-4.png"
                alt="card-image-3"
                className="w-[240px] h-[242px] transform transition duration-500 hover:scale-110"
                width={240}
                height={242}
              />
              <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
                <h5
                  className={`${montserrat.className} items-center text-center font-bold text-[16px] text-[#252B42] hover:text-blue-500`}
                >
                  ACCESSORIES
                </h5>
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative mx-auto items-center">
              <Image
                src="/images/card-image-5.png"
                alt="card-image-4"
                className="w-[240px] h-[242px] object-cover transform transition duration-500 hover:scale-110"
                width={240}
                height={242}
              />
              <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
                <h5
                  className={`${montserrat.className} items-center text-center font-bold text-[16px] text-[#252B42] hover:text-blue-500`}
                >
                  KIDS
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p
            className={`${montserrat.className} font-normal text-base sm:text-sm md:text-base text-[#252B42] mt-6`}
          >
            Featured Products
          </p>

          <h3
            className={`${montserrat.className} font-normal text-3xl sm:text-3xl md:text-4xl text-[#252B42] mt-2 hover:text-blue-600`}
          >
            BESTSELLER PRODUCTS
          </h3>
          <p
            className={`${montserrat.className} font-normal text-xs sm:text-sm md:text-base mt-4 text-[#252B42] hover:text-blue-500`}
          >
            Problems trying to resolve the conflict between
          </p>
        </div>

   
        < OurProducts/>
      </div>



      <div className="w-full h-auto flex items-center bg-[#23856D] bg-right px-4 sm:px-8 lg:px-16 py-10 lg:py-20">
        {/* Main Container */}
        <div className="flex lg:flex-nowrap items-center w-full max-w-7xl mx-auto">
          {/* Content Section */}
          <div className="w-full lg:w-[509px] h-auto space-y-6 lg:space-y-8">
            <h5
              className={`${montserrat.className} font-bold text-sm sm:text-base lg:text-lg text-white`}
            >
              SUMMER 2020
            </h5>
            <h1
              className={`${montserrat.className} font-bold text-2xl sm:text-3xl lg:text-4xl text-white`}
            >
              Vita Classic Product
            </h1>
            <p
              className={`${montserrat.className} font-normal text-sm sm:text-base lg:text-lg text-white`}
            >
              We know how large objects will act, We know how are objects will act, We know
            </p>
            <div className="flex items-center space-x-4">
              <h3
                className={`${montserrat.className} font-bold text-lg sm:text-xl lg:text-2xl text-white`}
              >
                $16.48
              </h3>
              <button className="w-full sm:w-auto px-6 py-3 font-semibold text-sm sm:text-base lg:text-lg bg-[#2DC071] text-white rounded-lg hover:text-blue-500">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[510px] lg:h-[685px] mt-10 lg:mt-0">
            <Image
              src="/images/shop-hero-2-png-picture-1.png"
              alt="Product"
              width={510}
              height={500}
              className="w-full h-full object-contain transform transition duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>   

      <div className="flex flex-col lg:flex-row items-center w-full h-auto lg:px-16 py-10 lg:py-20 gap-8 lg:gap-16">
        {/* Image Section */}
        <div className="w-full h-auto lg:w-[725px] mx-auto items-center pl-5 md:lg:pl-0">
          <Image
            src="/images/hero-cover-1.png" 
            alt="Hero Image 2"
            width={725}
            height={774}
            className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[573px] flex flex-col justify-center px-8 lg:p-4 lg:px-0 lg:gap-0 lg:space-y-8">
          <h5
            className={`${montserrat.className} font-bold text-sm sm:text-base lg:text-lg text-[#737373] hover:text-blue-500`}
          >
            SUMMER 2020
          </h5>

          <h1
            className={`${montserrat.className} font-bold text-2xl sm:text-3xl lg:text-4xl hover:text-blue-500`}
          >
            Part of the Neural Universe
          </h1>

          <p
            className={`${montserrat.className} font-normal text-sm sm:text-base lg:text-lg text-[#737373] hover:text-blue-500`}
          >
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="w-full sm:w-[156px] px-6 py-3 text-sm font-bold lg:text-base bg-[#2DC071] text-white rounded-lg text-center hover:text-blue-500">
              BUY NOW
            </button>
            <button className="w-full sm:w-[156px] px-6 py-3 font-bold text-sm lg:text-base bg-white text-[#2DC071] border border-[#2DC071] rounded-lg text-center hover:text-blue-500">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      <div className="flex md:space-x-2 lg:space-x-2 sm:flex flex-col md:flex-row lg:flex-row ">
        <div className="w-full max-w-[348px] mx-auto relative shadow-md rounded-lg overflow-hidden xl:left-28 space-x-0 md:flex-row lg:flex-row md:space-x-2 lg:space-x-2">
          {/* Image Section */}
          <div className="relative">
            <Image
              src="/images/featureCard-1.png"
              alt="feature-card-image"
              className="object-cover w-full h-[200px]  transform transition duration-500 hover:scale-110 "
              width={348}
              height={200}
            />
            <div className="absolute top-4 left-4 bg-[#E74040] text-white px-3 py-1 text-sm rounded">
              <h6
                className={`${montserrat.className}items-center text-center font-bold text-[14px] text-white hover:text-blue-500`}
              >
                NEW
              </h6>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4">
            <div className="flex gap-3 text-xs text-[#737373] mb-3">
              <h5
                className={`${montserrat.className}items-center text-center font-normal text-[12px] text-blue-200 hover:text-blue-500`}
              >
                Google
              </h5>
              <h5
                className={`${montserrat.className}items-center text-center font-normal text-[12px] text-[#737373] hover:text-blue-500`}
              >
                Trending
              </h5>

              <h5
                className={`${montserrat.className}items-center text-center font-normal text-[12px] text-[#737373] hover:text-blue-500`}
              >
                New
              </h5>
            </div>

            <h4
              className={`${montserrat.className}items-center text-start mb-3  font-normal text-[20px] text-[#252B42] my-3 hover:text-blue-500`}
            >
              Loudest a la Madison #1 (L integral)
            </h4>
            <h4
              className={`${montserrat.className}items-center text-start font-normal text-sm lg:text-[14px] text-[#737373] mb-4 hover:text-blue-500`}
            >
              We focus on ergonomics and meeting you where you work. Its only a keystroke away.
            </h4>
            <div className="flex justify-between text-xs text-[#737373]">
              <div className="flex items-center gap-2">
                <FaClock className="text-blue-500" />
                <h4
                  className={`${montserrat.className}items-center text-center font-normal text-[12px]  text-[#737373] hover:text-blue-500`}
                >
                  22 April 2021
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/chart.png"
                  alt="chart-icon"
                  width={13}
                  height={13}
                />
                <h4
                  className={`${montserrat.className}items-center text-center font-normal text-[12px] text-[#737373] hover:text-blue-500`}
                >
                  10 comments
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-myBlue">
              <h6
                className={`${montserrat.className}items-center text-center font-bold text-[14px] text-[#737373] hover:text-blue-500`}
              >
                LEARN MORE
              </h6>
              <FaAngleRight />
            </div>
          </div>


        </div>


        <div className="w-full max-w-[348px] mx-auto shadow-md justify-center rounded-lg overflow-hidden md:flex-row lg:flex-row xl:right-3 lg:right-10 2xl:right-7 relative space-x-0 md:space-x-2 lg:space-x-2">
          {/* Image Section */}
          <div className="relative">
            <Image
              src="/images/featureCard-2.png"
              alt="feature-card-image"
              className="object-cover w-full h-[200px] transform transition duration-500 hover:scale-110"
              width={348}
              height={200}
            />
            <div className="absolute top-4 left-4 bg-[#E74040] text-white px-3 py-1 text-sm rounded">
              <h6
                className={`${montserrat.className}items-center text-center font-bold text-[14px] text-white hover:text-blue-500`}
              >
                NEW
              </h6>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4">
            <div className="flex gap-3 text-xs text-[#737373] mb-3">
              <h5
                className={`${montserrat.className}items-center text-center font-normal text-[12px] text-blue-200 hover:text-blue-500`}
              >
                Google
              </h5>
              <h5
                className={`${montserrat.className}items-center text-center font-normal text-[12px] text-[#737373] hover:text-blue-500`}
              >
                Trending
              </h5>

              <h5
                className={`${montserrat.className}items-center text-center font-normal text-[12px] text-[#737373] hover:text-blue-500`}
              >
                New
              </h5>
            </div>

            <h4
              className={`${montserrat.className}items-center text-start mb-3  font-normal text-[20px]  text-[#252B42]  my-3 hover:text-blue-500`}
            >
              Loudest a la Madison #1 (L integral)
            </h4>
            <h4
              className={`${montserrat.className}items-center text-start font-normal text-sm lg:text-[14px] text-[#737373] mb-4 hover:text-blue-500`}
            >
              We focus on ergonomics and meeting you where you work. It's only a keystroke away.
            </h4>
            <div className="flex justify-between text-xs text-[#737373]">
              <div className="flex items-center gap-2">
                <FaClock className="text-blue-500" />
                <h4
                  className={`${montserrat.className}items-center text-center font-normal text-[12px]  text-[#737373] hover:text-blue-500`}
                >
                  22 April 2021
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/chart.png"
                  alt="chart-icon"
                  width={13}
                  height={13}
                />
                <h4
                  className={`${montserrat.className}items-center text-center font-normal text-[12px] text-[#737373] hover:text-blue-500`}
                >
                  10 comments
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-blue-200">
              <h6
                className={`${montserrat.className}items-center text-center font-bold text-[14px] text-[#737373] hover:text-blue-500`}
              >
                LEARN MORE
              </h6>
              <FaAngleRight />
            </div>
          </div>

        </div>

        <div className="w-full max-w-[348px] mx-auto shadow-md rounded-lg overflow-hidden space-x-0 ">
          {/* Image Section */}
          <div className="relative">
            <Image
              src="/images/featureCard-3.png"
              alt="feature-card-image"
              className="object-cover w-full h-[200px] transform transition duration-500 hover:scale-110"
              width={348}
              height={200}
            />
            <div className="absolute top-4 left-4 bg-[#E74040] text-white px-3 py-1 text-sm rounded">
              <h6
                className={`${montserrat.className}items-center text-center font-bold text-[14px] text-white hover:text-blue-500`}
              >
                NEW
              </h6>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4">
            <div className="flex gap-3 text-xs text-[#737373] mb-3">
              <h5
                className={`${montserrat.className}items-center text-center font-normal text-[12px] text-blue-200 hover:text-blue-500`}
              >
                Google
              </h5>
              <h5
                className={`${montserrat.className}items-center text-center font-normal text-[12px] text-[#737373] hover:text-blue-500`}
              >
                Trending
              </h5>

              <h5
                className={`${montserrat.className}items-center text-center font-normal text-[12px] text-[#737373] hover:text-blue-500`}
              >
                New
              </h5>
            </div>

            <h4
              className={`${montserrat.className}items-center text-start mb-3  font-normal text-[20px]  text-[#252B42] my-3 hover:text-blue-500`}
            >
              Loudest a la Madison #1 (L integral)
            </h4>
            <h4
              className={`${montserrat.className}items-center text-start font-normal text-sm lg:text-[14px] text-[#737373] mb-4 hover:text-blue-500`}
            >
              We focus on ergonomics and meeting you where you work. It's only a keystroke away.
            </h4>
            <div className="flex justify-between text-xs text-myGrey">
              <div className="flex items-center gap-2">
                <FaClock className="text-blue-200" />
                <h4
                  className={`${montserrat.className}items-center text-center font-normal text-[12px]  text-[#737373] hover:text-blue-500`}
                >
                  22 April 2021
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/chart.png"
                  alt="chart-icon"
                  width={13}
                  height={13}
                />
                <h4
                  className={`${montserrat.className}items-center text-center font-normal text-[12px] text-[#737373] hover:text-blue-500`}
                >
                  10 comments
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-blue-500">
              <h6
                className={`${montserrat.className}items-center text-center font-bold text-[14px] text-[#737373] hover:text-blue-500`}
              >
                LEARN MORE
              </h6>
              <FaAngleRight />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;
