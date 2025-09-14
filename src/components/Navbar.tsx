import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_owl.png"
          alt="RiMa"
          className="w-8 h-8"
        /> */}
        <span className="font-bold text-lg">RiMa</span>
      </div>

      {/* Links */}
      <ul className="flex items-center space-x-6 font-medium">
        <li className="text-indigo-600 cursor-pointer">Home</li>
        <li className="hover:text-indigo-600 cursor-pointer">Features</li>
        <li className="hover:text-indigo-600 cursor-pointer">Review</li>
      </ul>

      {/* Buttons */}
      <div className="space-x-3">
        <button className="px-4 py-2 border rounded-lg">Sign Up</button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
