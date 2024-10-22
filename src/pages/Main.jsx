import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import ContactForm from '../components/ContactForm'
import KnowledgeSharing from '../components/KnowledgeSharing'

function Main() {
    return (
        <div className="font-sans">
          <Navbar />
          <Hero />
          <Projects />
          <Skills />
          <ContactForm />
          <KnowledgeSharing />
          <Footer />
        </div>
      );
}

export default Main