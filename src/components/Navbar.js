import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/Weidmann Yellow Logo.svg" className="h-16" alt="Weidmann Yellow Logo" />
          <span className="text-2xl font-semibold dark:text-white">
            Weidmann Construction
          </span>
        </Link>

        {/* Navigation Links */}
        <div
          className={`${
            navbarOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto`}
        >
          <div className="flex flex-col md:flex-row md:space-x-4 mt-2 md:mt-0">
            {/* Link Items */}
            {['/', '/about', '/services', '/portfolio', '/contact'].map((path, index) => (
              <Link
                key={index}
                to={path}
                className={`text-gray-900 dark:text-white py-2 px-4 rounded-md md:hover:text-blue-700 dark:hover:text-blue-500 
                ${location.pathname === path ? 'text-blue-700' : ''}`}
              >
                {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
