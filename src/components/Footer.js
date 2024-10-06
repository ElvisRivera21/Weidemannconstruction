import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo & Description */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold">Weidmann Construction</h3>
            <p className="text-gray-400 mt-4">
              Building your dreams with integrity and quality craftsmanship. Reach out to us for your next project!
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-400 hover:text-blue-500 transition">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-gray-400 hover:text-blue-500 transition">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-gray-400 hover:text-blue-500 transition">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="text-gray-400 hover:text-blue-500 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com" // Replace with your Facebook profile URL
                className="text-gray-400 hover:text-blue-500 transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com" // Replace with your Twitter profile URL
                className="text-gray-400 hover:text-blue-500 transition"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/therealelvis/" // Replace with your LinkedIn profile URL
                className="text-gray-400 hover:text-blue-500 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://instagram.com" // Replace with your Instagram profile URL
                className="text-gray-400 hover:text-blue-500 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-6 text-gray-500">
          © {new Date().getFullYear()} Weidmann Construction. All rights reserved.
          <br />
          Need a website? Connect with me on 
          <a
            href="https://www.linkedin.com/in/therealelvis/" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center ml-1 text-blue-500 hover:underline"
          >
            LinkedIn
            <FaLinkedinIn size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
