import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-sans bg-[white] min-h-screen">
      <Navbar />

      <div className="">
        <Hero />
        <Projects />
      </div>

      <Footer />

    </div>
  );
}

export default App;
