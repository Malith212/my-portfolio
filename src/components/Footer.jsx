import React from 'react';
import { FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#141E30] to-[#243B55] py-10 text-white" id="contact">
      <div className="text-center px-4">
        <p className="text-gray-300 mb-4">Let’s connect and collaborate.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-gray-300 hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://behance.net/" target="_blank" rel="noopener noreferrer">
            <FaBehance className="text-2xl text-gray-300 hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-300 hover:text-blue-400 transition duration-300" />
          </a>
        </div>
        <p className="text-gray-400 mt-6 text-sm md:text-base">&copy; 2024 Malith Weerarathne. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
