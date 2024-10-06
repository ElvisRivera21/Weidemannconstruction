// src/components/Navbar.js
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

        {/* Mobile Menu Button */}
        <button
          className="text-gray-900 dark:text-white md:hidden"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {navbarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

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

            {/* Get Started Button */}
            <Link
              to="/get-started"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 mt-2 md:mt-0 md:ml-4"
            >
              Get Started
            </Link>

            <Link to="/services" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 py-2 md:py-0">
  Services
</Link>

            <Link to="/portfolio" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 py-2 md:py-0">
  Portfolio
</Link>

            

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
