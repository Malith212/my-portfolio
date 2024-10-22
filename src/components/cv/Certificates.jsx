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
            <div key={index} className="border rounded-lg shadow-sm">
              <button
                onClick={() => toggleCert(index)}
                className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-800">
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
                    className="block p-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded"
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
