import React from "react";
import Hero from "../components/Hero";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import ReaderReviews from "../components/ReaderReviews";
import FAQSection from "../components/FAQSection";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <SectionOne />
      <SectionTwo />

      <ReaderReviews />
      <FAQSection />
    </main>
  );
};

export default Home;
