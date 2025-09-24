import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import App1 from "../assets/src1.jpg";
import App2 from "../assets/scr2.jpg";
import App3 from "../assets/src3.jpg";

const rotatingWords = ["Experience", "Journey"];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % rotatingWords.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  const longestWord = rotatingWords.reduce((a, b) =>
    a.length > b.length ? a : b
  );

  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-4 pt-52 pb-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900">
        Improve your Reading{" "}
        <span className="relative inline-block ml-2">
          <span className="invisible block">{longestWord}</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={rotatingWords[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 top-0 text-indigo-600">
              {rotatingWords[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
        The simpler way to store, organize, and share your files. Use AI
        assistant to summarize and help you understand documents in seconds.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-800 font-medium hover:bg-gray-200 transition">
          Get Started
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition">
          Download Rima Mobile
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="mt-20 w-full overflow-hidden">
        <div className="flex justify-center items-end space-x-1 px-2 sm:px-0">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            src={App1}
            alt="App preview 1"
            className="w-44 sm:w-52 md:w-60 rounded-2xl shadow-xl flex-shrink-0"
          />
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -10 }}
            src={App2}
            alt="App preview 2"
            className="w-60 sm:w-72 md:w-80 rounded-2xl shadow-2xl z-10 flex-shrink-0"
          />
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotateY: -5 }}
            src={App3}
            alt="App preview 3"
            className="w-44 sm:w-52 md:w-60 rounded-2xl shadow-xl flex-shrink-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
