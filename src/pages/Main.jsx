import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

function Main() {
    return (
        <div className="font-sans">
          <Navbar />
          <Hero />
          <Projects />
          <Footer />
        </div>
      );
}

export default Main