import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Features from "./components/sections/feature-section";
import CTASection from "./components/sections/cta-section";
import ReaderReviews from "./components/ReaderReviews";
import FAQSection from "./components/FAQSection";
import About from "./components/about-section";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="review">
        <ReaderReviews />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="cta">
        <CTASection />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
