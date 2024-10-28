import React from 'react';

const About = () => {
  const goldColor = '#FFEB9C'; // Brighter gold color
  const blackColor = '#000000'; // Black background color

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
        >
          About Us
        </h2>

        {/* Description */}
        <p
          className="text-lg md:text-xl mb-8"
          style={{ fontFamily: 'Merriweather, serif', color: 'white' }}
        >
          At Weidemann Construction, we are dedicated to building high-quality, sustainable structures that meet the needs of our clients. With years of experience in the construction industry, our team is committed to delivering exceptional results on every project.
        </p>
        <p
          className="text-lg md:text-xl mb-8"
          style={{ fontFamily: 'Merriweather, serif', color: 'white' }}
        >
          Our mission is to provide innovative construction solutions while maintaining integrity, quality, and safety. We believe that communication and collaboration with our clients are key to achieving successful outcomes.
        </p>

        {/* Images */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <img
            src="photos/Aboutimage1.jpg"
            alt="Construction site view 1"
            className="w-full md:w-1/3 rounded-lg shadow-lg object-contain h-auto max-h-96"
          />
          <img
            src="photos/Aboutimage2.png"
            alt="Construction site view 2"
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
