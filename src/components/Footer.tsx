import React from "react";
import Logo from "../assets/rima_logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-inner">
      <div className="w-full px-0 sm:px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left relative">

        <div className="flex items-center space-x-2 mb-4 sm:mb-0 absolute left-10 top-1/2 -translate-y-1/2">
          <img src={Logo} alt="Rima Logo" className="h-8 w-8" />
          <span className="text-lg font-serif">RiMa</span>
        </div>

        <div className="w-full text-sm text-gray-600 flex justify-center">
          Rima ©2025. All rights reversed.
        </div>

        <div className="hidden sm:block w-8"></div>
      </div>
    </footer>
  );
};

export default Footer;
