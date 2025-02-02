import React from "react";
import Image from "next/image";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import OurProducts from "../furniture-products/page";

const Shop = () => {
  return (
    <div>
      <div className="flex justify-between flex-col sm:lg:flex-col  md:flex-row  lg:flex-row  flex-wrap px-1 mt-10  md:px-10 lg:px-16 lg:mt-5 space-y-6 sm:space-y-6 lg:space-y-0 md:space-y-0">
      <div>
        <h3 className="text-center font-bold text-[24px]  text-[#252B42] hover:text-blue-500">
          Shop
        </h3>
      </div>

      <div className="flex justify-center sm:justify-center md:justify-evenly lg:justify-evenly space-x-2">
        <Link href="/">
          <h3 className="font-bold text-sm text-[#252B42] hover:text-blue-500">
            Home
          </h3>
        </Link>
        <FaAngleRight className="text-[#737373]" />
        <Link href="/">
          <h3 className="font-bold text-sm text-[#737373] hover:text-blue-500">
            Shop
          </h3>
        </Link>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-0 md:px-0 lg:px-12 py-8  space-y-3 md:space-y-4 lg:space-y-0">
      <div className="relative mx-auto items-center">
        <Image
          className="mt-0 md:mt-4 lg:mt-0 transform transition duration-500 hover:scale-110"
          src={`/shop images/ssop-img-1.jpg`}
          alt={"images"}
          width={205}
          height={203}
        />
        <div className="absolute bottom-20 left-16 space-y-3">
          <h5 className="font-bold text-[16px] text-white hover:text-blue-500">
            CLOTHS
          </h5>

          <p className="font-normal text-sm text-white hover:text-blue-500">
            5 Items
          </p>
        </div>
      </div>

      <div className="relative mx-auto items-center">
        <Image
          className="transform transition duration-500 hover:scale-110"
          src={`/shop images/ssop-img-2.jpg`}
          alt={"images"}
          width={205}
          height={203}
        />
        <div className="absolute left-16 bottom-20 space-y-3">
          <h5 className="font-bold text-[16px] text-white hover:text-blue-500">
            CLOTHS
          </h5>

          <p className="font-normal text-sm text-white hover:text-blue-500">
            5 Items
          </p>
        </div>
      </div>

      <div className="relative mx-auto items-center">
        <Image
          src={`/shop images/ssop-img-3.jpg`}
          alt={"images"}
          width={205}
          height={203}
          className="transform transition duration-500 hover:scale-110"
        />
        <div className="absolute bottom-20 left-16 space-y-3">
          <h5 className="font-bold text-[16px] text-white hover:text-blue-500">
            CLOTHS
          </h5>

          <p className="font-normal text-sm text-white hover:text-blue-500">
            5 Items
          </p>
        </div>
      </div>

      <div className="relative mx-auto items-center">
        <Image
          src={`/shop images/ssop-img-4.jpg`}
          className="transform transition duration-500 hover:scale-110"
          alt={"images"}
          width={205}
          height={203}
        />
        <div className="absolute bottom-20 left-16 space-y-3">
          <h5 className="font-bold text-[16px] text-white hover:text-blue-500">
            CLOTHS
          </h5>

          <p className="font-normal text-sm text-white hover:text-blue-500">
            5 Items
          </p>
        </div>
      </div>

      <div className="relative mx-auto items-center">
        <Image
          src={`/shop images/ssop-img-5.jpg`}
          className="transform transition duration-500 hover:scale-110"
          alt={"images"}
          width={205}
          height={203}
        />
        <div className="absolute bottom-20 left-16 space-y-3">
          <h5 className="font-bold text-[16px] text-white hover:text-blue-500">
            CLOTHS
          </h5>

          <p className="font-normal text-sm text-white hover:text-blue-500">
            5 Items
          </p>
        </div>
      </div>
    </div>


    <div className="w-full h-[46px] flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between px-0 md:px-12 lg:px-24 items-center py-0 md:lg:my-10 lg:my-10 space-y-4 mb-24 md:mb-0 lg:mb-0">
        <div className="mt-0 md:pt-4 lg:pt-4">
          <h6 className="font-bold text-[14px] text-[#737373] hover:text-blue-500">
            Showing all 12 results
          </h6>
        </div>

        <div className="w-[177px] h-[46px] flex justify-evenly items-center space-x-5">
          <h6 className=" font-bold text-sm text-[#737373] hover:text-blue-500">
            Views:
          </h6>
          <div className=" w-[46px] h-[46px] outline outline-[#ECECEC]">
            <Image
              src={`/shop images/square.png`}
              alt={"images"}
              width={14}
              height={14}
              className="mx-auto pt-4"
            />
          </div>
          <div className="w-[46px] h-[46px] outline outline-[#ECECEC]">
            <Image
              src={`/shop images/bars.png`}
              alt={"images"}
              width={14}
              height={14}
              className="mx-auto pt-4"
            />
          </div>
        </div>

        <div className="flex justify-between w-[252px] h-[50px] space-x-6">
          <div className="flex justify-center items-center w-[141px] h-[50px] rounded-sm outline outline-[#ECECEC] space-x-2">
            <h6 className="font-normal text-sm text-[#737373] hover:text-blue-500">
              Popularity
            </h6>
            <FaAngleDown className="mt-1" />
          </div>
          <div className="flex justify-center items-center w-[141px] h-[50px] rounded-sm bg-blue-300 outline outline-blue-400 space-x-2">
            <h6 className="font-bold text-sm text-white hover:text-blue-500">
              Filter
            </h6>
          </div>
        </div>
      </div>


      <div className="hidden sm:grid mx-auto w-full lg:w-[1000] grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 items-start mt-16 px-8">
      {/* Image 1 */}
      <Image
        src="/company/img-1.png"
        alt="company-img-1"
        width={153}
        height={34}
        className="w-[153px] h-[34px] object-cover transform transition duration-500 hover:scale-110"
      />

      {/* Image 2 */}
      <Image
        src="/company/img-2.png"
        alt="company-img-2"
        width={146}
        height={59}
        className="w-[143px] h-[59px]  object-cover transform transition duration-500 hover:scale-110"
      />

      {/* Image 3 */}
      <Image
        src="/company/img-3.png"
        alt="company-img-3"
        width={152}
        height={15}
        className="w-[153px] h-[74px]  object-cover transform transition duration-500 hover:scale-110"
      />

      {/* Image 4 */}
      <Image
        src="/company/img-4.png"
        alt="company-img-4"
        width={151}
        height={42}
        className="w-[153px] h-[62px]  object-cover transform transition duration-500 hover:scale-110"
      />

      {/* Image 5 */}
      <Image
        src="/company/img-5.png"
        alt="company-img-5"
        width={151}
        height={62}
        className="w-[153px] h-[81px]  object-cover transform transition duration-500 hover:scale-110"
      />

      {/* Image 6 */}
      <Image
        src="/company/img-6.png"
        alt="company-img-6"
        width={151}
        height={72}
        className="w-full h-auto lg:w-[153px] lg:h-[72px]  object-cover transform transition duration-500 hover:scale-110"
      />
    </div>


    <div className="md:hidden grid grid-cols-1 items-center mt-16 px-20 space-y-10 my-10">
      {/* Image 1 */}
      <Image
        src="/company/img-1.png"
        alt="company-img-1"
        width={153}
        height={34}
        className="w-full h-auto object-cover"
      />

      {/* Image 2 */}
      <Image
        src="/company/img-2.png"
        alt="company-img-2"
        width={146}
        height={59}
        className="w-full h-auto object-contain"
      />

      {/* Image 3 */}
      <Image
        src="/company/img-3.png"
        alt="company-img-3"
        width={152}
        height={15}
        className="w-full h-auto object-cover"
      />

      {/* Image 4 */}
      <Image
        src="/company/img-4.png"
        alt="company-img-4"
        width={151}
        height={42}
        className="w-full h-auto object-cover"
      />

      {/* Image 6 */}
      <Image
        src="/company/img-6.png"
        alt="company-img-6"
        width={151}
        height={72}
        className="w-full h-auto object-cover"
      />

      {/* Image 5 */}

      <Image
        src="/company/img-5.png"
        alt="company-img-5"
        width={151}
        height={62}
        className="w-full h-auto object-cover"
      />
    </div>

    <OurProducts/>
    </div>
  );
};

export default Shop;