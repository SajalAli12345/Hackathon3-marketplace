"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import {
  getCartItems,
  removeItem,
  updateCartQuantity,
} from "../actions/action";
import { Montserrat } from "next/font/google";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!!!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.stock + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stock > 1)
      handleQuantityChange(id, product.stock - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.stock,
      0
    );
  };
  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please proceed your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!!!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "Your Order has been Successfully Processed!!!",
          "success"
        );
        router.push('/checkout')
        setCartItems([]);
      }
    });
  };

  return (
    <div>

      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>

        {/* Cart Items List */}
        {cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between p-4 border rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-4">
                  {item.productImage && (
                    <Image
                      src={urlFor(item.productImage).url()}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                      onClick={() => handleDecrement(item._id)}
                    >
                      -
                    </button>
                    <span>{item.stock}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                      onClick={() => handleIncrement(item._id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className={`${montserrat.className} text-red-500 hover:text-red-700 font-semibold`}
                    onClick={() => handleRemove(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className={`${montserrat.className} text-center text-xl font-semibold text-gray-500`}>
            Your cart is empty
          </p>
        )}

        {/* Total and Proceed Button */}
        {cartItems.length > 0 && (
          <div className="mt-8 flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">
              Total: ${calculatedTotal()}
            </h2>
            <button
              className={`${montserrat.className} px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700`}
              onClick={handleProceed}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
