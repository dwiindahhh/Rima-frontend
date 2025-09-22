import React from "react";
import Logo from "../assets/rima_logo.png"; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-inner">
      <div className="grid grid-cols-3 items-center px-10 py-4">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Rima Logo" className="h-8 w-8" />
          <span className="text-lg font-serif">RiMa</span>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Rima ©2025. All rights reserved.
          </p>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
