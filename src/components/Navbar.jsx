import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-lg font-bold mb-4 md:mb-0">Malith Weerarathne.</h1>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <li><a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
