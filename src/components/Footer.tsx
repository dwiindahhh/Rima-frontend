import React from "react";
import Logo from "../assets/rima_logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between">
        {/* Logo kiri */}
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <img src={Logo} alt="Rima Logo" className="h-8 w-8" />
          <span className="text-lg font-serif">RiMa</span>
        </div>

        {/* Copyright tengah */}
        <div className="text-center text-sm text-gray-600">
          Rima ©2025. All rights reversed.
        </div>

        {/* Kolom kanan (kosong / placeholder) */}
        <div className="hidden sm:block w-8"></div>
      </div>
    </footer>
  );
};

export default Footer;
