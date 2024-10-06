// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>

        {/* Description */}
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          At Weidmann Construction, we are dedicated to building high-quality, sustainable structures that meet the needs of our clients. With years of experience in the construction industry, our team is committed to delivering exceptional results on every project.
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          Our mission is to provide innovative construction solutions while maintaining integrity, quality, and safety. We believe that communication and collaboration with our clients are key to achieving successful outcomes.
        </p>

        {/* Images */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <img 
            src="/Weidmann Yellow Logo.svg" 
            alt="Construction site view 1" 
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
          <img 
            src="/Weidmann Yellow Logo.svg" 
            alt="Construction site view 2" 
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
