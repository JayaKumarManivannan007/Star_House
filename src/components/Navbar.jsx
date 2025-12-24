import { useState } from "react";
import { Link } from "react-router-dom";
import DeerLogo from "../assets/DeerLogo.png";
import MenuIcon from "../assets/menu.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 px-4 py-2 bg-white shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={DeerLogo} alt="Star House Logo" className="w-10 h-10" />
          <h1 className="font-bold text-2xl">Star House</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <img src={MenuIcon} alt="Menu" className="w-8 h-8" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-end space-x-6 text-gray-700">
          <li><a href="/" className="hover:text-black font-semibold">Home</a></li>
          <li><a href="#new" className="hover:text-black font-semibold">New Arrival</a></li>
          <li><a href="#most" className="hover:text-black font-semibold">Most Wanted</a></li>
          <li><Link to="/contact" className="hover:text-black font-semibold">
    Contact Us
  </Link></li>
        </ul>

        {/* Mobile Side Menu */}
        {open && (
          <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-900 text-white shadow-lg p-5 transition-transform duration-300">
            <button
              className="text-white font-bold text-lg mb-10"
              onClick={() => setOpen(false)}
            >
              X
            </button>
            <ul className="flex flex-col gap-6">
              <li>
  <a href="/" className="hover:underline">
    Home
  </a>
</li>

<li>
  <Link to="/contact" className="hover:underline">
    Contact Us
  </Link>
</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
