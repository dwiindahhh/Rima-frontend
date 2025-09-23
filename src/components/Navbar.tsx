import React, { useState } from "react";
import Logo from "../assets/rima_logo.png";
import { Link } from "react-scroll";
import PlaystoreBadge from "../assets/badges/playstore_badge.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "About", "Features", "Review"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="w-full px-3 lg:px-5">
        <div className="flex justify-between items-center h-20 px-6 lg:px-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <span className="font-semibold text-2xl text-gray-800 tracking-wide">
              RiMa
            </span>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()} 
                smooth={true}
                duration={500}
                offset={-80} 
                className="cursor-pointer text-gray-700 hover:text-blue-500 text-lg font-medium"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex space-x-4">
            {/* <button className="px-6 py-2 border border-gray-200 rounded-lg text-gray-900 font-medium shadow-sm hover:bg-gray-50 transition">
              Login
            </button>
            <button className="px-6 py-2 bg-indigo-400 text-white font-medium rounded-lg shadow-sm hover:bg-indigo-500 transition">
              Sign Up
            </button> */}
            <a
              href="https://play.google.com/store/apps/details?id=com.bfour.rima_app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={PlaystoreBadge}
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>

          {/* Hamburger Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-center">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)} 
              className="block cursor-pointer text-gray-700 hover:text-blue-500 text-lg font-medium"
            >
              {item}
            </Link>
          ))}
          {/* <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
            <button className="px-6 py-2 border border-gray-200 rounded-lg text-gray-900 font-medium shadow-sm hover:bg-gray-50 transition">
              Login
            </button>
            <button className="px-6 py-2 bg-indigo-400 text-white font-medium rounded-lg shadow-sm hover:bg-indigo-500 transition">
              Sign Up
            </button>
          </div> */}
          <div className="flex flex-col items-center gap-3 pt-4 border-t border-gray-100">
            <a
              href="https://play.google.com/store/apps/details?id=com.bfour.rima_app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={PlaystoreBadge}
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
