import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [section, setSection] = useState(''); // State to track current section

  const handleScroll = (id, sectionName) => {
    const sectionElement = document.querySelector(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setSection(sectionName); // Update the section state
    }
  };

  // UseEffect to reset the section when the page is refreshed or loaded
  useEffect(() => {
    setSection(''); // Reset to root on page load or refresh
  }, []);

  return (
    <nav className="fixed w-full bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Dynamically updating the heading */}
        <h1 className="text-lg font-bold mb-4 md:mb-0">
          Malith Weerarathne{section && `/${section}`}
        </h1>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <li>
            <button
              onClick={() => handleScroll('#projects', 'projects')}
              className="text-gray-700 hover:text-blue-600"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll('#contact-form', 'contact')}
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
