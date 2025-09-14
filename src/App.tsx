import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
