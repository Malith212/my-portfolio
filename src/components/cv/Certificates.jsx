import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Certifications = () => {
  const [openCert, setOpenCert] = useState(null);

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

  const toggleCert = (index) => {
    setOpenCert(openCert === index ? null : index);
  };

  const certifications = [
    {
      title: "Google UX Design",
      link: "https://coursera.org/share/87ea0d2dec882291f5f42886deeda46c", 
    },
    {
      title: "Programming with JavaScript - Meta",
      link: "https://coursera.org/share/ea702b01245c4a96f6f45413c9757e1a", 
    },
    {
      title: "Version Control - Meta",
      link: "https://coursera.org/share/eaa181d3fecc3d2e01cbfc2ecf93121b", 
    },
    {
      title: "Introduction to Front-End Development - Meta",
      link: "https://coursera.org/share/8de2d9a3593d19ba48e0d74aaf40f761", 
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Certifications</h2>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border bg-gradient-to-r from-[#141E30] to-[#243B55] text-white rounded-lg shadow-sm"
              data-aos={window.innerWidth <= 768 ? "fade-up" : ""}
              data-aos-delay={window.innerWidth <= 768 ? index * 100 : 0} 
            >
              <button
                onClick={() => toggleCert(index)}
                className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none"
              >
                <span className="text-sm font-light text-white">
                  {cert.title}
                </span>
                <span>{openCert === index ? '-' : '+'}</span>
              </button>
              {openCert === index && (
                <div className="px-6 pb-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 bg-white text-gray-800 font-light text-sm rounded-md hover:text-blue-400 transition-colors duration-300"
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
