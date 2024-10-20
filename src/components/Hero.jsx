import React from 'react';
import profileImage from '../assets/45443D1A-2C07-4112-ABF3-1D8A8A46C0F9.jpeg'; // Import your image here

const Hero = () => {
  return (
    <section className="text-center py-12">
      <img src={profileImage} alt="Malith Weerarathne" className="w-28 h-28 rounded-full mx-auto mb-6"/>
      <h2 className="text-3xl font-semibold mb-2">Malith Weerarathne.</h2>
      <p className="text-gray-600 text-lg mb-6">
        Hi! I’m Malith 👋 A product designer focused on building seamless design systems and intuitive mobile experiences.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-[#2D3436] text-white py-2 px-4 rounded shadow-md">CV</button>
        <button className="bg-gray-200 text-black py-2 px-4 rounded shadow-md">Get in Touch</button>
      </div>
    </section>
  );
};

export default Hero;
