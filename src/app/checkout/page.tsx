"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems } from "../actions/action";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.stock,
    0
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceHolder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href={"/cart"}
              className="text-gray-500 hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight />
            <span>CheckOut</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border rounded lg:p-6 space-y-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.productImage && (
                      <Image
                        src={urlFor(item.productImage).url()}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-gray-500 text-xs">
                      Quantity: {item.stock}
                    </p>
                  </div>
                  <p>${item.price * item.stock}</p>
                </div>
              ))
            ) : (
              <p className="text-sm font-medium">Your cart is empty.</p> // Optionally, add a fallback if no items are in the cart
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                SubTotal: <span>${subTotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span>${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${subTotal.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border lg:p-6 p-4 space-y-6">
            <h2 className="text-2xl font-semibold text-center">
              Billing Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="font-medium">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first Name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="border rounded-sm p-2 mt-1"
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-600 mt-1">
                    First Name is Required
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastName" className="font-medium">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your Last Name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className="border rounded-sm p-2 mt-1"
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-600 mt-1">
                    Last Name is Required
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="border rounded-sm p-2 mt-1"
                />
                {formErrors.email && (
                  <p className="text-sm text-red-600 mt-1">Email is Required</p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="address" className="font-medium">
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your Address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className="border rounded-sm p-2 mt-1"
                />
                {formErrors.address && (
                  <p className="text-sm text-red-600 mt-1">
                    Address is Required
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="font-medium">
                  Phone:
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your Phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className="border rounded-sm p-2 mt-1"
                />
                {formErrors.phone && (
                  <p className="text-sm text-red-600 mt-1">Phone is Required</p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="city" className="font-medium">
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your City"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className="border rounded-sm p-2 mt-1"
                />
                {formErrors.city && (
                  <p className="text-sm text-red-600 mt-1">City is Required</p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="zipCode" className="font-medium">
                  ZipCode:
                </label>
                <input
                  type="text"
                  id="zipCode"
                  placeholder="Enter your Zip Code"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  className="border rounded-sm p-2 mt-1"
                />
                {formErrors.zipCode && (
                  <p className="text-sm text-red-600 mt-1">
                    ZipCode is Required
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={handlePlaceHolder}
              className="w-full h-12 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600 transition-all duration-300"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
