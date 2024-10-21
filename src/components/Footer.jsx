import React from 'react';
import { FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-10" id="contact">
      <div className="text-center px-4">
        <p className="text-gray-600 mb-4">Let’s connect and collaborate.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-gray-600 hover:text-blue-600" />
          </a>
          <a href="https://behance.net/" target="_blank" rel="noopener noreferrer">
            <FaBehance className="text-2xl text-gray-600 hover:text-blue-600" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-600 hover:text-blue-600" />
          </a>
        </div>
        <p className="text-gray-400 mt-6 text-sm md:text-base">&copy; 2024 Malith Weerarathne. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
