import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();
  const goldColor = '#FFD700'; // Bright gold color

  return (
    <nav className="bg-black border-b border-gray-200 dark:bg-black">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/Weidmann Yellow Logo.svg" className="h-16" alt="Weidmann Yellow Logo" />
          <span className="text-2xl font-semibold" style={{ fontFamily: 'Cinzel, serif', color: goldColor }}>
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
                className={`py-2 px-4 rounded-md transition-colors 
                ${location.pathname === path ? 'text-blue-500' : 'text-white hover:text-blue-500'}`}
                style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
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
