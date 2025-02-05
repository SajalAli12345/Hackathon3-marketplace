import React from "react";
import { client } from "@/app/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/app/sanity/lib/image";
import { FaAngleRight, FaStar } from "react-icons/fa";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
        _id,
        title,
        _type,
        productImage,
        description,
        price,
        dicountPercentage,
        tags
        }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);


  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between flex-col sm:lg:flex-col  md:flex-row  lg:flex-row  flex-wrap px-1 mt-10  md:px-10 lg:px-16 lg:mt-5 space-y-6 sm:space-y-6 lg:space-y-0 md:space-y-0">
        <div>
          <h3 className="text-center font-bold text-[24px] relative bottom-4 text-[#252B42] hover:text-blue-500">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square w-full">
          {product.productImage && (
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8 ">
          <h1
            className={`${montserrat.className} text-4xl font-bold hover:text-blue-500`}
          >
            {product.title}
          </h1>

          <p className={`${montserrat.className}text-slate-600 mt-2 text-sm`}>
            {product.description}
          </p>

          <div className="flex items-center space-x-2">
            {[...Array(4)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
            <FaStar className="text-gray-300" />
            <span className="text-gray-500">(20 Reviews)</span>
          </div>

          <p className={`${montserrat.className} text-2xl font-normal`}>
            ${product.price}
          </p>
          {product.discountPercentage > 0 && (
            <p className="text-sm text-green-500">
              {product.discountPercentage}% OFF
            </p>
          )}

          <p className={`${montserrat.className}flex flex-wrap gap-2 mt-2`}>
            {product.tags.map((tags, index) => (
              <span key={index} className="text-lg text-black px-1 py-1">
                #{tags}
              </span>
            ))}
          </p>

          <div>
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
              {[
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
                    className="object-cover w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
