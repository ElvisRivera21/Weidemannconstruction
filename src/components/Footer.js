import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const goldColor = '#FFD700'; // Brighter gold color

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo & Description */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-bold" style={{ fontFamily: 'Cinzel, serif', color: goldColor }}>
              Weidemann Construction
            </h3>
            <p className="mt-4" style={{ fontFamily: 'Merriweather, serif', color: goldColor }}>
              Building your dreams with integrity and quality craftsmanship. Reach out to us for your next project!
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Cinzel, serif', color: goldColor }}>Quick Links</h4>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-blue-500 transition" style={{ fontFamily: 'Merriweather, serif', color: goldColor }}>
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:text-blue-500 transition" style={{ fontFamily: 'Merriweather, serif', color: goldColor }}>
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="hover:text-blue-500 transition" style={{ fontFamily: 'Merriweather, serif', color: goldColor }}>
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="hover:text-blue-500 transition" style={{ fontFamily: 'Merriweather, serif', color: goldColor }}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition" style={{ fontFamily: 'Merriweather, serif', color: goldColor }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Cinzel, serif', color: goldColor }}>Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com"
                className="hover:text-blue-500 transition"
                aria-label="Facebook"
                style={{ color: goldColor }}
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-blue-500 transition"
                aria-label="Twitter"
                style={{ color: goldColor }}
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/therealelvis/"
                className="hover:text-blue-500 transition"
                aria-label="LinkedIn"
                style={{ color: goldColor }}
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-blue-500 transition"
                aria-label="Instagram"
                style={{ color: goldColor }}
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-6" style={{ color: goldColor, fontFamily: 'Merriweather, serif' }}>
          © {new Date().getFullYear()} Weidemann Construction. All rights reserved.
          <br />
          Need a website? Connect with me on 
          <a
            href="https://www.linkedin.com/in/therealelvis/"
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
