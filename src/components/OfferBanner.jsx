import React, { useState } from "react";

export default function OfferBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Hide banner when closed

  return (
    <div className="bg-gray-900 text-white text-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-center py-2 relative">
        <span>
          Sign Up and <span className="font-bold">GET 20% OFF</span> for your first Order
        </span>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 font-bold hover:text-red-400"
        >
          X
        </button>
      </div>
    </div>
  );
}
