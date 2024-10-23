import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom

const Navbar = () => {
  const [section, setSection] = useState(''); // State to track current section
  const location = useLocation(); // Hook to get the current location

  useEffect(() => {
    // Update section based on the current pathname
    if (location.pathname === '/cv') {
      setSection('Resume');
    } else {
      setSection(''); // Reset to root on page load or refresh
    }
  }, [location.pathname]); // Depend on location.pathname to trigger updates

  return (
    <nav className="fixed w-full bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Dynamically updating the heading as a link */}
        <h1 className="text-lg font-bold mb-4 md:mb-0">
          <Link to="/" className="text-gray-700 ">
            Malith Weerarathne{section && ` / ${section}`}
          </Link>
        </h1>
        <ul className="flex flex-col items-center md:flex-row md:space-y-0 space-y-4 md:space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cv"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setSection('Resume')} // Update the section when clicking Resume
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
