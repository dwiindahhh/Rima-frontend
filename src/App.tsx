import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Features from "./components/sections/feature-section";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home />
      <Features />
      <Footer/>
    </div>
  );
};

export default App;
