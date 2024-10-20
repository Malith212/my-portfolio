import React from 'react';
import { FaEnvelope, FaLink } from 'react-icons/fa'; // Add icons for buttons
import profileImage from '../assets/45443D1A-2C07-4112-ABF3-1D8A8A46C0F9.jpeg';

const Hero = () => {
  return (
    <section className="flex justify-center items-center py-16 ">
      <div className="bg-white  p-6 flex flex-col items-center max-w-lg">
        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Malith Weerarathne"
          className="w-16 h-16 rounded-full mb-4"
        />
        
        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Malith Weerarathne.</h2>

        {/* Introduction Text */}
        <p className="text-center text-gray-600 text-sm mb-4">
          Hi! I’m Malith 👋 A product designer focused on building seamless design systems and intuitive mobile experiences.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-white text-gray-800 py-2 px-4 flex items-center space-x-2 rounded shadow hover:bg-gray-100">
            <FaLink className="text-gray-600" />
            <span>CV</span>
          </button>
          <button className="bg-white text-gray-800 py-2 px-4 flex items-center space-x-2 rounded shadow hover:bg-gray-100">
            <FaEnvelope className="text-gray-600" />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
