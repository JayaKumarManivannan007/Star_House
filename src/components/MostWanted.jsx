// src/components/MostWanted.jsx
import React, { useState } from "react";
import arr1 from "../assets/arr1.jpg";
import arr2 from "../assets/arr2.jpg";
import arr3 from "../assets/arr3.jpg";
import arr4 from "../assets/arr4.jpg";

export default function MostWanted() {
  const items = [arr1, arr2, arr3, arr4, arr3, arr4];
  // Track liked state for each item
  const [liked, setLiked] = useState(Array(items.length).fill(false));

  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <section className="bg-white py-6 px-6 text-center" id="most">
      <h1 className="font-bold text-3xl p-1 mb-5">Most Wanted</h1>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide px-4">
        <div className="inline-flex gap-5">
          {items.map((img, idx) => (
            <div
              key={idx}
              className="snap-start relative inline-block border-2 rounded-2xl w-60"
            >
              <div className="rounded-2xl h-80 w-60 overflow-hidden relative">
                <img
                  src={img}
                  alt="Most Wanted"
                  className="h-80 w-60 rounded-2xl object-cover"
                />
                <div className="sale absolute bg-red-500 text-white border-2 rounded-lg h-9 w-14 flex items-center justify-center top-2 left-2 font-bold cursor-pointer">
                  Sale
                </div>
                {/* Like button inside the image */}
                <button
                  onClick={() => toggleLike(idx)}
                  className="absolute bottom-2 right-2"
                >
                  {liked[idx] ? (
                    // Liked state: red heart SVG
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="heart h-10 w-10 hover:scale-110 transition-all duration-200 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                               2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                               4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                               19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
                               11.54L12 21.35z"></path>
                    </svg>
                  ) : (
                    // Unliked state: gray heart SVG
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="heart h-10 w-10 hover:scale-110 transition-all duration-200 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                               2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                               4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                               19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
                               11.54L12 21.35z"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
