import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import App1 from "../assets/app1.png";
import App2 from "../assets/app2.png";
import App3 from "../assets/app3.png";

const rotatingWords = ["Experience", "Journey"];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-4 pt-52 pb-24">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900">
        Improve your Reading{" "}
        <span className="text-indigo-600 transition-all duration-500 ease-in-out">
          {rotatingWords[index]}
        </span>
      </h1>

      <p className="mt-8 text-2xl text-gray-600 max-w-3xl leading-relaxed">
        The simpler way to store, organize, and share your files. Use AI assistant to summarize and help you understand documents in seconds.
      </p>

      <div className="mt-10 flex gap-6">
        <button className="px-6 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-800 font-medium hover:bg-gray-200">
          Get Started
        </button>
        <button className="px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800">
          Download Rima Mobile
        </button>
      </div>

      <div className="mt-20 flex items-center justify-center gap-6">
        <img
          src={App1}
          alt="App 1"
          className="w-40 sm:w-48 md:w-56 rounded-2xl shadow-xl transform translate-y-6"
        />
        <img
          src={App2}
          alt="App 2"
          className="w-52 sm:w-64 md:w-72 rounded-2xl shadow-2xl z-10"
        />
        <img
          src={App3}
          alt="App 3"
          className="w-40 sm:w-48 md:w-56 rounded-2xl shadow-xl transform translate-y-6"
        />
      </div>
    </section>
  );
};

export default Hero;
