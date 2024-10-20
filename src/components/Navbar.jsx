import React from 'react';
import { FaLinkedin, FaBehance } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Malith Weerarathne.</h1>
      <div className="flex space-x-6">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl text-gray-600 hover:text-gray-800" />
        </a>
        <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
          <FaBehance className="text-2xl text-gray-600 hover:text-gray-800" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
