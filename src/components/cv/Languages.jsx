import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Languages = () => {
  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        AOS.init({ duration: 1000, once: true });
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  const languagesData = [
    { id: 1, language: "English", proficiency: "Proficient" },
    { id: 2, language: "Sinhala", proficiency: "Native" },
    { id: 3, language: "French", proficiency: "Average" },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languagesData.map((lang, index) => (
            <div
              key={lang.id}
              className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              data-aos={window.innerWidth <= 768 ? "fade-up" : ""}
              data-aos-delay={window.innerWidth <= 768 ? index * 100 : 0}
            >
              <h3 className="text-lg font-bold">{lang.language}</h3>
              <p className="text-white text-sm font-thin">{lang.proficiency}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
