import React, { useState } from 'react';

const Certifications = () => {
  const [openCert, setOpenCert] = useState(null);

  const toggleCert = (index) => {
    setOpenCert(openCert === index ? null : index);
  };

  const certifications = [
    {
      title: "Start the UX Design Process: Empathize, Define, and Ideate - Google",
      link: "https://www.certificate-link.com", // Replace with actual link
    },
    {
      title: "Programming with JavaScript - Meta",
      link: "https://www.certificate-link.com", // Replace with actual link
    },
    {
      title: "Build Wireframes and Low-Fidelity Prototypes - Google",
      link: "https://www.certificate-link.com", // Replace with actual link
    },
    {
      title: "Conduct UX Research and Test Early Concepts - Google",
      link: "https://www.certificate-link.com", // Replace with actual link
    },
    {
      title: "Foundations of User Experience (UX) Design - Google",
      link: "https://www.certificate-link.com", // Replace with actual link
    },
    {
      title: "Create High-Fidelity Designs and Prototypes in Figma - Google",
      link: "https://www.certificate-link.com", // Replace with actual link
    },
    {
      title: "Introduction to Front-End Development - Meta",
      link: "https://www.certificate-link.com", // Replace with actual link
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Certifications</h2>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="border bg-gradient-to-r from-[#141E30] to-[#243B55] text-white rounded-lg shadow-sm">
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
