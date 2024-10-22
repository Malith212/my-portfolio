import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import ContactForm from '../components/ContactForm'

function Main() {
    return (
        <div className="font-sans">
          <Navbar />
          <Hero />
          <Projects />
          <Skills />
          <ContactForm />
          <Footer />
        </div>
      );
}

export default Main