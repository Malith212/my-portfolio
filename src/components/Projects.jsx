import React from "react";
import project1Image from "../assets/Beatflow.png"; // Add project image assets here
import project2Image from "../assets/Burger app.png";

const Projects = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white py-10 md:py-20"
      id="projects"
    >
      <div className="container mx-auto text-center px-4 md:px-0">
        {/* <h2 className="text-2xl md:text-4xl font-extrabold mb-8">My Projects</h2> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Project Card 1 */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105">
            <div className="relative h-64 md:h-80">
              <img
                src={project1Image}
                alt="Project 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#2D3436] mb-2 md:mb-3">
                  BeatFlow Music App UX Case Study
                </h3>
                <p className="text-gray-700 text-left text-sm md:text-base mb-3 md:mb-4">
                  As a passionate UX designer, I am excited to share the
                  transformation journey of BeatFlow, a mobile application
                  designed to deliver a seamless and enjoyable music discovery
                  and listening experience. With a focus on personalized
                  content, BeatFlow aims to differentiate itself in the
                  competitive music streaming industry.
                </p>
              </div>
              <a
                href="https://www.behance.net/gallery/198874923/BEATFLOW" // Replace with a valid link
                className="inline-block bg-gradient-to-r from-[#141E30] to-[#243B55] text-white py-2 px-4 rounded hover:bg-[#2D3436] transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105">
            <div className="relative h-64 md:h-80">
              <img
                src={project2Image}
                alt="Project 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#2D3436] mb-2 md:mb-3">
                  A Food Delivery App UX Case Study
                </h3>
                <p className="text-gray-700 text-left text-sm md:text-base mb-3 md:mb-4">
                  As an avid foodie and a dedicated UX designer, I am thrilled
                  to share my latest project - the redesign of Gourmet Grub, a
                  food delivery app that promises quick delivery and a
                  mouth-watering selection of dishes. With the aim to entice and
                  engage users at first glance, my goal was to deliver a visual
                  and interactive feast.
                </p>
              </div>
              <a
                href="https://www.behance.net/gallery/198840951/Burger-App" // Replace with a valid link
                className="inline-block bg-gradient-to-r from-[#141E30] to-[#243B55] text-white py-2 px-4 rounded hover:bg-[#2D3436] transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
