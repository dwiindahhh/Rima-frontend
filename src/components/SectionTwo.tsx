import React from "react";

const SectionTwo: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-indigo-100 py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Features at a Glance</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ AI-powered document summarization</li>
            <li>✅ Easy file organization and sharing</li>
            <li>✅ Cross-platform sync with mobile app</li>
            <li>✅ Secure cloud storage</li>
          </ul>
        </div>
        {/* Image / Illustration */}
        <div className="flex justify-center">
          <img
            src="https://undraw.co/api/illustrations/reading"
            alt="Illustration"
            className="w-72 h-72 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
