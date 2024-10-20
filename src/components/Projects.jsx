import React from 'react';
import project1Image from '../assets/Beatflow.png'; 
import project2Image from '../assets/Beatflow.png';

const Projects = () => {
  return (
    <section className="py-16 bg-white">
      <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img src={project1Image} alt="NTT TownPage Mobile App" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h4 className="text-xl font-semibold mb-2">NTT TownPage Mobile App</h4>
            <p className="text-gray-600 mb-4">Collaborating with NTT to design a mobile app for seamless website management, tailored to the unique needs of Japanese business owners.</p>
            <button className="text-gray-800 underline">Read More</button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img src={project2Image} alt="Project 2" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h4 className="text-xl font-semibold mb-2">Project Title 2</h4>
            <p className="text-gray-600 mb-4">Description for Project 2.</p>
            <button className="text-gray-800 underline">Read More</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
