import React from 'react';
import project1Image from '../assets/Beatflow.png'; // Add project image assets here

const Projects = () => {
  return (
    <section className="bg-[#EDF3F6] py-20" id="projects">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white shadow-md rounded-lg">
            <img src={project1Image} alt="Project 1" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-bold mb-2">NTT TownPage Mobile App</h3>
              <p className="text-gray-600 text-sm md:text-base">A mobile app for seamless website management.</p>
            </div>
          </div>
          {/* Add more project cards here */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
