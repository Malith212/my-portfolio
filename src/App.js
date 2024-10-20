import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="font-sans bg-[#EDF3F6]">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
