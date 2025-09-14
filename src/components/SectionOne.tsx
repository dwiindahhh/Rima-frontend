import React from "react";

const SectionOne: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose RiMa?</h2>
        <p className="text-gray-700 mb-6">
          RiMa makes it easy to store, search, and share your important files
          with AI-powered summarization tools. Save your time and boost your
          productivity.
        </p>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default SectionOne;
