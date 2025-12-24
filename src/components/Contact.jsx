import React from "react";

export default function Contact() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            We’d love to hear from you. Reach out anytime!
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions about our products, orders, or offers?  
              Our team is here to help you.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">📍 Address</h3>
                <p className="text-gray-600">Star House, Chennai, India</p>
              </div>

              <div>
                <h3 className="font-semibold">📞 Phone</h3>
                <p className="text-gray-600">+91 9878*****0</p>
              </div>

              <div>
                <h3 className="font-semibold">✉️ Email</h3>
                <p className="text-gray-600">support@starhouse.com</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form className="space-y-5">
            <div>
              <label className="block font-medium mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
