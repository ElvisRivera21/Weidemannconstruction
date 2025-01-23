import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'; // Importing both Facebook and LinkedIn
import '../styles/gallery.css';

const Footer = () => {
  const goldColor = '#FDB927'; // Updated to the new yellow color
  const blackColor = '#000000'; // Black for the red-circled area

  return (
    <footer
      style={{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 34%, rgba(92,82,3,1) 79%, rgba(235,201,117,1) 100%)',
      }}
      className="text-white py-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo & Description Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3
              className="text-3xl font-bold"
              style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
            >
              Weidemann Construction
            </h3>
            <p
              className="mt-4"
              style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
            >
              Building your dreams with integrity and quality craftsmanship. Reach out to us for your next project!
            </p>
          </div>

          {/* Quick Links & Follow Us */}
          <div
            className="text-center md:text-left mb-8 md:mb-0"
            style={{ backgroundColor: blackColor, padding: '1rem', borderRadius: '8px' }}
          >
            <h4
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
            >
              Quick Links
            </h4>
            <ul>
              <li className="mb-2">
                <Link
                  to="/"
                  className="hover:text-blue-500 transition"
                  style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="hover:text-blue-500 transition"
                  style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="hover:text-blue-500 transition"
                  style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-500 transition"
                  style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Media Links */}
            <h4
              className="text-xl font-semibold mb-4 mt-8"
              style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
            >
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/WeidemannConstruction"
                className="hover:text-blue-500 transition"
                aria-label="Facebook"
                style={{ color: goldColor }}
              >
                <FaFacebookF size={24} />
              </a>
            
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className="text-center border-t border-gray-700 pt-6"
          style={{ color: goldColor, fontFamily: 'Merriweather, serif' }}
        >
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
