import React from "react";
import Logo from "../assets/rima_logo.png"; // pastikan path sesuai dengan struktur project kamu

const Navbar: React.FC = () => {
  return (
    // <nav className="bg-white shadow-md fixed w-full z-50">
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
          

          {/* Menu */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex space-x-10">
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
            <button className="px-6 py-2 border border-gray-200 rounded-lg text-gray-900 font-medium shadow-sm hover:bg-gray-50 transition">
              Login
            </button>
            <button className="px-6 py-2 bg-indigo-400 text-white font-medium rounded-lg shadow-sm hover:bg-indigo-500 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
