// src/components/Newsletter.jsx
import React from "react";

export default function Newsletter() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="font-bold text-3xl sm:text-5xl mt-3 mb-3 text-center">Join Our Newsletter</h1>
      <p className="text-lg sm:text-2xl mb-4 text-center">
        Sign up for our Email Newspaper to get Exclusive Discounts, Updates, and More.
      </p>
      <input
        type="text"
        placeholder="Enter your email..."
        className="w-full max-w-xs sm:max-w-md px-4 py-2 font-sans border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
      />
      <button className="bg-gray-900 text-white mt-3 px-4 py-2 border-2 border-gray-400 rounded-2xl hover:bg-gray-300 hover:text-black transition-all">
        Subscribe Now →
      </button>
    </section>
  );
}