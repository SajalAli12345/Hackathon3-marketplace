"use client";
import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "../actions/action";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { CiHeart } from "react-icons/ci";

const OurProducts = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  // Add a loading state
  const [error, setError] = useState<string | null>(null);  // Add an error state

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct: Product[] = await client.fetch(allProducts);
        setProduct(fetchedProduct);
        setLoading(false);  // Stop loading after data is fetched
      } catch (err) {
        setError("Failed to load products.");
        setLoading(false);  // Stop loading on error
      }
    }
    fetchProduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.title} added to Cart !!!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleAddToWish = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.title} added to WishList !!!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  if (loading) return <p>Loading...</p>;  // Show loading message if products are still being fetched
  if (error) return <p>{error}</p>;  // Show error message if there's a problem

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2
        className={`${montserrat.className} text-center font-bold text-2xl hover:text-blue-500 text-black mt-4 mb-4`}
      >
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {product.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-ld transition duration-200"
          >
            <Link href={`/product/${product.slug?.current || ''}`} passHref>
              {product.productImage ? (
                <Image
                  src={urlFor(product.productImage).url()}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-md hover:scale-110"
                />
              ) : (
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-md">No Image</div>
              )}

              <h1 className="text-lg font-semibold mt-4">{product.title}</h1>
              <p className="text-gray-500 mt-2">${product.price}</p>
              <button
                className={`${montserrat.className} bg-black text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200`}
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add To Cart
              </button>

              <button
                className={`${montserrat.className} text-3xl text-black py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200`}
                onClick={(e) => handleAddToWish(e, product)}
              >
                <CiHeart />
              </button>
            </Link>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default OurProducts;
