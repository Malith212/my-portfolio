import React from 'react';
import project1Image from '../assets//Beatflow.png'; // Example project images
import project2Image from '../assets/Beatflow.png';

const Projects = () => {
  return (
    <section className="py-12">
      <h3 className="text-2xl font-bold text-center mb-10">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        
        {/* Project Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={project1Image} alt="Project 1" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h4 className="text-xl font-semibold mb-2">NTT TownPage Mobile App</h4>
            <p className="text-gray-600">Collaborating with NTT to design a mobile app for seamless website management, tailored to the unique needs of Japanese business owners.</p>
            <button className="mt-4 text-[#2D3436] underline">Read More</button>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={project2Image} alt="Project 2" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h4 className="text-xl font-semibold mb-2">Project Title 2</h4>
            <p className="text-gray-600">Description for Project 2.</p>
            <button className="mt-4 text-[#2D3436] underline">Read More</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
