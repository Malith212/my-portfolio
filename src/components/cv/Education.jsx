import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    // Initialize AOS only if the screen width is 768px or less (mobile view)
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        AOS.init({ duration: 1000, once: true });
      }
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize); // Listen for screen resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const educationDetails = [
    {
      year: "2022 - Present",
      degree: "B.Sc. (Hons) in Information Technology and Management",
      institution: "Faculty of Information Technology, University of Moratuwa",
      details: "CGPA: 3.60 (up to L2S2)",
    },
    {
      year: "2021 - 2022",
      degree: "CMJD Professional | Comprehensive Master Java Developer",
      institution: "IJSE - Institute of Software Engineering",
    },
    {
      year: "2018 - 2020",
      degree: "G.C.E. Advanced Level Examination",
      institution: "Sri Sumangala College, Panadura",
      details: "3A’s | Z-Score 1.8086",
    },
    {
      year: "2018 - 2021",
      degree: "AAT Passed Finalist",
      institution: "",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationDetails.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white p-6 rounded-lg shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105"
              data-aos={window.innerWidth <= 768 ? "fade-up" : ""}
              data-aos-delay={window.innerWidth <= 768 ? index * 100 : 0} // Staggered delay only on mobile
            >
              <p className="text-sm font-semibold text-white mb-2">
                {item.year}
              </p>
              <h3 className="text-lg font-bold mb-1">{item.degree}</h3>
              <p className="text-sm text-white mb-1">{item.institution}</p>
              {item.details && (
                <p className="text-sm text-white">{item.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
