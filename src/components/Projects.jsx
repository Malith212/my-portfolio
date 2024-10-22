import React from "react";
import project1Image from "../assets/Beatflow.png"; // Add project image assets here
import project2Image from "../assets/Burger app.png";

const Projects = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#141E30] to-[#243B55] text-white py-20"
      id="projects"
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-tight">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Project Card 1 */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105">
            <div className="relative h-80">
              <img
                src={project1Image}
                alt="Project 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#2D3436] mb-3">
                  NTT TownPage Mobile App
                </h3>
                <p className="text-gray-700 text-sm md:text-base mb-4">
                  A mobile app for seamless website management.
                </p>
              </div>
              <a
                href="https://github.com/Malith212"  // Replace with a valid link
                className="inline-block bg-gradient-to-r from-[#141E30] to-[#243B55] text-white py-2 px-4 rounded hover:bg-[#2D3436] transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105">
            <div className="relative h-80">
              <img
                src={project2Image}
                alt="Project 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#2D3436] mb-3">
                  Burger App
                </h3>
                <p className="text-gray-700 text-sm md:text-base mb-4">
                  A fun app to build and customize burgers.
                </p>
              </div>
              <a
                href="https://github.com/Malith212"  // Replace with a valid link
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
