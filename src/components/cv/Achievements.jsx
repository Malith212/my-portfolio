import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Achievements = () => {
  useEffect(() => {
    // Initialize AOS only if screen width is 768px or less (mobile view)
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        AOS.init({ duration: 1000, once: true });
      }
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize); // Listen for screen resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const achievementsData = [
    {
      id: 1,
      title: "Best Volunteer of the Media Committee 2022/23",
      organization: "IEEE Student Branch, University of Moratuwa"
    },
    {
      id: 2,
      title: "Code Rush 2023 Participant",
      organization: "INTECS"
    },
    {
      id: 3,
      title: "Code Rush 2024 Participant",
      organization: "INTECS"
    },
    {
      id: 4,
      title: "Duothan 3.0 2023 Participant",
      organization: "NSBM"
    }
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((achievement, index) => (
            <div
              key={achievement.id}
              className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white p-6 rounded-lg shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105"
              data-aos={window.innerWidth <= 768 ? "fade-up" : ""}
              data-aos-delay={window.innerWidth <= 768 ? index * 100 : 0} // Staggered delay only on mobile
            >
              <h3 className="text-lg font-normal">{achievement.title}</h3>
              <p className="text-white text-sm font-light">{achievement.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
