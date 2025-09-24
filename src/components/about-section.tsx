import React from "react";
import bookAnimation from "../assets/animations/book-open.gif";

const About: React.FC = () => {
  return (
    <section id="about-section" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[42px] sm:text-[42px] md:text-[56px] font-bold text-gray-900 mb-6 leading-tight">
          Why Choose <span className="text-indigo-600">RiMa?</span>
        </h2>
        <br />
        <img
          src={bookAnimation}
          alt="Book animation"
          className="mx-auto w-56 sm:w-72 md:w-96 lg:w-[480px] my-6"
        />
        <br />
        <p className="text-lg sm:text-2xl md:text-[24px] text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto">
          RiMa makes it easy to store, search, and share your important files
          with AI-powered summarization tools. Save your time and boost your
          productivity.
        </p>
      </div>
    </section>
  );
};

export default About;
