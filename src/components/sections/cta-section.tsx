import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import BgImage from "../../assets/background/cta-background.png"; 
import PlaystoreBadge from "../../assets/badges/playstore_badge.png";

const CTASection: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[80vh] bg-gray-900 text-white flex items-center"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

      <div className="relative max-w-3xl mx-auto px-6 py-24 text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[42px] sm:text-[42px] md:text-[56px] font-bold mb-6 leading-tight min-h-[120px] flex items-center justify-center"
        >
          <TypeAnimation
            sequence={[
              "Your Reading Companion", 
              6000,
              "Read More, Worry Less",             
              6000,
              "Smart Digital Library",         
              6000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-[24px] leading-relaxed mb-8"
        >
          Read, save, and enjoy thousands of books right at your fingertips.
          <br />
          Download Rima now on Play Store!
        </motion.p>

        <motion.a
          href="https://play.google.com/store/apps/details?id=com.bfour.rima_app&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-block"
        >
          <img
            src={PlaystoreBadge}
            alt="Get it on Google Play"
            className="h-14 sm:h-16 w-auto transition-transform duration-300 hover:scale-105"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
