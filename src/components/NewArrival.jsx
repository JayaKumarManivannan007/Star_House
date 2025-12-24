// src/components/NewArrival.jsx
import React from "react";
import arr1 from "../assets/arr1.jpg";
import arr2 from "../assets/arr2.jpg";
import arr3 from "../assets/arr3.jpg";
import arr4 from "../assets/arr4.jpg";

export default function NewArrival() {
  const arrivals = [arr1, arr2, arr3, arr4, arr1, arr1];

  return (
    <section className="bg-gray-100 py-6" id="new">
      <h1 className="font-bold text-3xl p-1 text-center">New Arrival</h1>
      <p className="text-gray-600 text-base md:text-lg text-center mb-3">Check for the New Collections as per the Consumer Requirement</p>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide px-4">
        <div className="inline-flex gap-6">
          {arrivals.map((img, idx) => (
            <div key={idx} className="relative inline-block border-2 rounded-2xl">
              <div className="inline-block p-1 rounded-2xl h-80 w-60">
                <img src={img} alt="New Arrival" className="h-80 w-60 rounded-2xl" />
              </div>
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-28 bg-white text-black font-bold px-4 py-2 border-2 border-gray-400 rounded-lg hover:bg-gray-300">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
