import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import OurProducts from "../furniture-products/page";



const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const Product = () => {
    return(
        <div>
            <div className="flex justify-between flex-col sm:lg:flex-col md:flex-row lg:flex-row px-1 mt-10  md:px-10 lg:px-16 lg:mt-5 space-y-6 sm:space-y-6 lg:space-y-0 md:space-y-0">

      <div className="flex justify-center sm:justify-center md:justify-evenly lg:justify-evenly space-x-3">
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

    <div className="mt-16">
      <div className="flex items-center flex-wrap justify-center space-x-2  md:space-x-20 lg:space-x-20  mb-8">
        <Link href="">
          <h6
            className={`${montserrat.className} text-start font-semibold text-[12px] md:lg:text-[14px] text-[#737373] mb-5 hover:text-blue-500`}
          >
            Description
          </h6>
        </Link>
        <Link href="">
          <h6
            className={`${montserrat.className} text-start font-bold text-[12px] md:lg:text-[14px] text-[#737373] mb-5 hover:text-blue-500`}
          >
            Additional Information
          </h6>
        </Link>

        <Link href="">
          <h6
            className={`${montserrat.className} text-start font-bold text-[12px] md:lg:text-[14px] text-[#737373] mb-5 hover:text-blue-500`}
          >
            Reviews
            <span
              className={`${montserrat.className} text-start font-bold text-[12px] md:lg:text-[14px] text-[#737373] mb-5 ml-2 hover:text-blue-500`}
            >
              (0)
            </span>
          </h6>
        </Link>
      </div>
      <div className="flex flex-col md:lg:flex-row justify-center md:lg:justify-evenly flex-wrap mx-5 md:lg:mx-0">
        <Image
          src="/product/single-product-3.png" // Corrected image path
          alt="card.imagePath"
          className="object-cover w-full h-auto md:lg:w-[316px] md:lg:h-[372px] transform transition duration-500 hover:scale-110"
          width={316}
          height={372}
        />

        <div className="flex flex-col justify-between w-full md:lg:w-[332px]">
          <h3
            className={`${montserrat.className} text-start font-bold text-[20px] md:lg:text-[24px] text-[#252B42] mb-5 mt-8 md:lg:mt-0 hover:text-blue-500`}
          >
            the quick fox jumps over
          </h3>
          <p
            className={`${montserrat.className} text-start font-normal text-[14px] text-[#737373]`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p
            className={`${montserrat.className} text-start font-normal text-[14px] text-[#737373] mt-5`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p
            className={`${montserrat.className} text-start font-normal text-[14px] text-[#737373] mt-5`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="flex flex-col justify-between w-full md:lg:w-[332px]">
          <h3
            className={`${montserrat.className} text-start font-bold text-[20px] md:lg:text-[24px] text-[#252B42] mb-5 mt-8 md:lg:mt-0 hover:text-blue-500`}
          >
            the quick fox jumps over
          </h3>
          <p
            className={`${montserrat.className} text-start font-normal text-[14px] text-[#737373]`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p
            className={`${montserrat.className} text-start font-normal text-[14px] text-[#737373] mt-5`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p
            className={`${montserrat.className} text-start font-normal text-[14px] text-[#737373] mt-5`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
      </div>
    </div>

    < OurProducts/>

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
        </div>
    );
}

export default Product;