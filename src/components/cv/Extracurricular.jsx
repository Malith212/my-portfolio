import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Extracurricular = () => {
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

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Extracurricular Activities
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {/* ITM Degree Batch Representative */}
          <div
            className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white p-4 border rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105"
            data-aos={window.innerWidth <= 768 ? "fade-up" : ""}
          >
            <h3 className="text-md font-normal text-white">
              Main Batch Representative of ITM Degree, Faculty of Information
              Technology, University of Moratuwa
            </h3>
            <p className="text-white text-sm">2024-2025</p>
          </div>

          {/* FIT Moments */}
          <div
            className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white p-4 border rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105"
            data-aos={window.innerWidth <= 768 ? "fade-up" : ""}
            data-aos-delay={window.innerWidth <= 768 ? "200" : "0"} // Staggered delay for mobile only
          >
            <h3 className="text-md font-normal text-white">FIT Moments</h3>
            <p className="text-white text-sm">2022 - Present</p>
            <ul className="list-disc pl-5 text-sm text-white mt-2">
              <li>Pillar Head of the Creative Design pillar (2024 - 2025)</li>
              <li>Assistant Lead of the Photography and Videography pillar (2023 - 2024)</li>
              <li>Photography and Videography Pillar member (2022 - 2023)</li>
            </ul>
          </div>

          {/* IEEE Student Branch */}
          <div
            className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white p-4 border rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105"
            data-aos={window.innerWidth <= 768 ? "fade-up" : ""}
            data-aos-delay={window.innerWidth <= 768 ? "400" : "0"} // Further delay for staggered effect on mobile
          >
            <h3 className="text-md font-normal text-white">
              IEEE Student Branch University of Moratuwa
            </h3>
            <p className="text-white text-sm">2022 - 2023</p>
            <ul className="list-disc pl-5 text-sm text-white mt-2">
              <li>Assistant Lead of the Media Committee (Jun 2022 - Jun 2023)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
