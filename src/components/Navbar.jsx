import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [section, setSection] = useState(''); 
  const location = useLocation(); 

  useEffect(() => {
    
    if (location.pathname === '/cv') {
      setSection('Resume');
    } else if (location.pathname === '/profile') {
      setSection('Profile');
    } else {
      setSection(''); 
    }
  }, [location.pathname]); 

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
              to="/profile"
              className="text-gray-700 hover:text-blue-600"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
