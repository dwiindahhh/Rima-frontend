import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "../common/card/feature-card";
import { BookOpen, BarChart3, MessageCircle, Bot } from "lucide-react";

import Feature1 from "../../assets/feature/feature1.png";
import Feature2 from "../../assets/feature/feature2.png";
import Feature3 from "../../assets/feature/feature3.png";
import Feature4 from "../../assets/feature/feature4.png";

const Features: React.FC = () => {
  const featuresData = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      featureName: "manage your files",
      tagline: "Your Digital Collection",
      description: "effortlessly import, organize, and manage all your digital books and documents. our clean interface allows you to search and sort your entire collection in seconds, ensuring your personal library is always tidy and accessible right at your fingertips.",
      imageSrc: Feature1, 
      imageAlt: "Digital collection interface",
      scrollSpeed: 2 as number,
      scrollDistance: "-50%" as string
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      featureName: "track your progress", 
      tagline: "Achieve Reading Goals",
      description: "stay motivated on your reading journey. the app automatically logs the pages you've read and calculates your completion percentage, giving you a clear view of your progress. set goals, monitor your stats, and make every page count.",
      imageSrc: Feature3, 
      imageAlt: "Reading progress interface",
      scrollSpeed: 2 as number,
      scrollDistance: "-50%" as string
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      featureName: "open From whatsapp",
      tagline: "Open Directly from Chat", 
      description: "received a book or document from a friend? open and save files directly from whatsapp and other apps with a single tap. no more complex downloading or searching—your next read is instantly added to your library.",
      imageSrc: Feature2,
      imageAlt: "File sharing interface",
      scrollSpeed: 2 as number,
      scrollDistance: "-50%" as string
    },
    {
      icon: <Bot className="w-8 h-8" />,
      featureName: "ask with chatbot",
      tagline: "Instant Answers with AI",
      description: "unlock a smarter reading experience with our integrated ai assistant. get quick summaries, define complex words, or ask questions about the content without ever leaving the page. it's the perfect companion for deeper understanding.",
      imageSrc: Feature4, 
      imageAlt: "AI chat interface",
      scrollSpeed: 2 as number,
      scrollDistance: "-50%" as string
    }
  ];

  return (
    <section className="w-full px-4 py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[42px] sm:text-[42px] md:text-[56px] font-bold text-gray-900 mb-4">
            Developed to match your
            <br />
            <span className="text-indigo-600"> reading needs</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              featureName={feature.featureName}
              tagline={feature.tagline}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              index={index}
              scrollSpeed={feature.scrollSpeed}
              scrollDistance={feature.scrollDistance}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;