import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import App1 from "../assets/src1.jpg";
import App2 from "../assets/scr2.jpg";
import App3 from "../assets/src3.jpg";


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
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 text-center">
        Improve your Reading{" "}
        <span className="relative inline-block align-baseline ml-2">
          <span className="invisible block">
            {rotatingWords.reduce((a, b) => (a.length > b.length ? a : b))}
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={rotatingWords[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 top-0 text-indigo-600"
            >
              {rotatingWords[index]}
            </motion.span>
          </AnimatePresence>
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

      <div className="mt-20 flex justify-center items-end space-x-1">
        <img
          src={App1}
          alt="src1"
          className="w-44 sm:w-52 md:w-60 rounded-2xl shadow-xl"
        />
        <img
          src={App2}
          alt="src2"
          className="w-60 sm:w-72 md:w-80 rounded-2xl shadow-2xl z-10"
        />
        <img
          src={App3}
          alt="src3"
          className="w-44 sm:w-52 md:w-60 rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
