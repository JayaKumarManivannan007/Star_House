// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <section className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Shop Name */}
        <h1 className="font-bold text-3xl sm:text-4xl text-center sm:text-left">Star House</h1>

        {/* Description */}
        <p className="text-center sm:text-left text-sm sm:text-lg mt-2 sm:mt-4">
          The Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center sm:justify-start space-x-4 mt-4">
          {/* Instagram */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </button>

          {/* Twitter */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </button>

          {/* Facebook */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center sm:text-left mt-4 text-sm">
          &copy; 2025 <span className="font-semibold">StarHouse.com</span>
        </div>
      </div>
    </section>
  );
}
