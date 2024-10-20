import React from 'react';
import { FaLinkedin, FaBehance } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-lg font-bold">Malith Weerarathne.</h1>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl text-gray-600 hover:text-black" />
        </a>
        <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
          <FaBehance className="text-xl text-gray-600 hover:text-black" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
