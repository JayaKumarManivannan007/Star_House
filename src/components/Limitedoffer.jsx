import React from "react";
import OfferImg from "../assets/offer2.jpg";

export default function LimitedOffer() {
  return (
    <section className="bg-gray-900 text-white rounded-2xl p-6 m-4 flex flex-col sm:flex-row items-center sm:items-center gap-6">
  {/* Image on the left */}
  <img
    src={OfferImg}
    alt="offer"
    className="h-48 sm:h-60 w-auto rounded-2xl"
  />

  {/* Text in the middle, vertically centered */}
  <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
    <h1 className="font-bold text-4xl sm:text-6xl">Limited Offer</h1>
    <p className="text-lg mt-2">35% OFF on this for the first 30 Customers</p>
    <button className="mt-3 bg-white text-black font-bold px-4 py-2 border-2 border-gray-400 rounded-lg hover:bg-gray-300">
      Shop Now
    </button>
  </div>
</section>

  );
}
