import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Make your reading <br />
        experience better with <span className="text-indigo-600">RiMa</span>
      </h1>
      <p className="max-w-2xl text-gray-700 mb-8">
        The simpler way to store, organize, and share your files. With an AI
        assistant to summarize and help you understand documents in seconds.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold">
          Try Now
        </button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          className="h-12"
        />
      </div>
    </section>
  );
};

export default Hero;
