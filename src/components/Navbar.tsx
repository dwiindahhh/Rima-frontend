import React from "react";
import Logo from "../assets/rima_logo.png"; // pastikan path sesuai dengan struktur project kamu

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <span className="font-semibold text-2xl text-gray-800 tracking-wide">
              RiMa
            </span>
          </div>
          

          {/* Menu Tengah */}
          <div className="hidden md:flex space-x-10">
            <a href="#" className="text-gray-700 hover:text-blue-500 text-lg font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 text-lg font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 text-lg font-medium">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 text-lg font-medium">
              Review
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="px-5 py-2 border border-gray-400 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition">
              Login
            </button>
            <button className="px-5 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
