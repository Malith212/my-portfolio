import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Malith Weerarathne</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="text-gray-700 hover:text-black">About</a></li>
          <li><a href="#projects" className="text-gray-700 hover:text-black">Projects</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-black">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
