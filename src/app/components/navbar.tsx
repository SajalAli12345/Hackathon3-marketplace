"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RiInstagramLine,
  RiYoutubeLine,
  RiArrowDropDownLine,
} from "react-icons/ri";
import { CiFacebook, CiHeart } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { BsCart } from "react-icons/bs";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="w-full h-[58px] items-center bg-[#252B42] px-6 sm:px-6 lg:px-8 lg:pt-5 hidden lg:block">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 ">
            {[
              { src: "/images/phone.png", text: "(225) 555-0118" },
              {
                src: "/images/message.png",
                text: "michelle.rivera@example.com",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Image src={item.src} alt="icon" width={16} height={16} />
                <h6 className="font-bold text-sm text-white hover:text-blue-500">
                  {item.text}
                </h6>
              </div>
            ))}
          </div>

          {/* Promo */}
          <h6 className="font-bold text-sm text-white text-center hover:text-blue-500">
            Follow Us and get a chance to win 80% off
          </h6>
          {/* Left Section */}
          {/* Social Media */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <h6 className="font-bold text-sm text-white hover:text-blue-500">
              Follow Us:
            </h6>
            <div className="flex gap-2">
              <RiInstagramLine className="text-3xl text-white" />
              <RiYoutubeLine className="text-3xl text-white" />
              <CiFacebook className="text-3xl text-white" />
              <SlSocialTwitter className="text-3xl text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* White navbar */}

      <div className="w-full h-20">
        <div className="w-full px-4 sm:px-8 py-4 bg-white ">
          <div className="flex items-center justify-between">
            <h3
              className={`${montserrat.className} font-bold text-xl lg:text-2xl text-[#252B42] hover:text-blue-500`}
            >
              Bandage
            </h3>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="sm:flex lg:hidden absolute top-[60px] left-0 w-full bg-white shadow-md">
                <nav className="grid grid-cols-1 gap-4 px-4 py-2">
                  <Link
                    href="/"
                    className="text-[#737373] hover:text-black font-bold"
                  >
                    Home
                  </Link>

                  <Link
                    href="/ProductList"
                    className="text-[#737373] hover:text-black font-bold"
                  >
                    Product
                  </Link>

                  <Link
                    href="/Shop"
                    className="text-[#252B42] font-semibold hover:text-black flex"
                  >
                    Shop
                    <RiArrowDropDownLine className="text-2xl text-[#252B42]" />
                  </Link>

                  <Link
                    href="/About"
                    className="text-[#737373] font-semibold hover:text-black"
                  >
                    About
                  </Link>

                  <Link
                    href="/Team"
                    className="text-[#737373] font-semibold hover:text-black"
                  >
                    Blog
                  </Link>

                  <Link
                    href="/Pricing"
                    className="text-[#737373] font-semibold hover:text-black"
                  >
                    Pricing
                  </Link>

                  <Link
                    href="/Contact"
                    className="text-[#737373] hover:text-black font-semibold"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            )}

            {/* Icons for Small Screens */}
            <div className="flex items-center sm:hidden md:hidden gap-4">
              <Link href="/cart">
                <BsCart />
              </Link>

              <Link href="/wishlist">
                <CiHeart />
              </Link>

              <button onClick={toggleMenu} className="focus:outline-none">
                {menuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#2eabe8]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#2eabe8]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link
                href="/"
                className="text-[#737373] font-semibold hover:text-black"
              >
                Home
              </Link>
              <Link
                href="/Shop"
                className="text-[#252B42] font-semibold hover:text-black flex"
              >
                Shop
                <RiArrowDropDownLine className="text-2xl text-[#252B42]" />
              </Link>

              <Link
                href="/ProductList"
                className="text-[#252B42] font-semibold hover:text-black"
              >
                Product
              </Link>

              <Link
                href="/Pricing"
                className="text-[#252B42] font-semibold hover:text-black"
              >
                Pricing
              </Link>

              <Link
                href="/About"
                className="text-[#737373] font-semibold hover:text-black"
              >
                About
              </Link>

              <Link
                href="/Team"
                className="text-[#737373] font-semibold hover:text-black"
              >
                Blog
              </Link>

              <Link
                href="/Contact"
                className="text-[#737373] font-semibold hover:text-black"
              >
                Contact
              </Link>
            </nav>

            {/* For Large screen Login and Icons */}
            <div className="hidden md:flex items-center md:space-x-2 lg:space-x-4">
              <Image
                src="/images/contact.png"
                alt="contact"
                className="w-5 h-5 md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px]"
                width={22}
                height={22}
              />
              <Link
                href=""
                className={`${montserrat.className} text-[12px] font-bold lg:text-sm text-blue-500 hover:text-[#252B42]`}
              >
                Login / Register
              </Link>
              <div className="flex md:space-x-2 lg:space-x-4 items-center">
                {[
                  { name: "search", link: "" },
                  { name: "cart", link: "/cart" },
                  { name: "heart", link: "/wishlist" },
                ].map((icon) => (
                  <Link
                    key={icon.name}
                    href={icon.link}
                    className="hover:opacity-80"
                  >
                    <Image
                      src={`/images/${icon.name}.png`}
                      alt={icon.name}
                      width={22}
                      height={22}
                      className="object-cover w-5 h-5 md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px]"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
