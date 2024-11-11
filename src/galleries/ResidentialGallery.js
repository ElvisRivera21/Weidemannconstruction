// src/galleries/ResidentialGallery.js

import React from 'react';

const ResidentialGallery = () => {
  const goldColor = '#FFEB9C'; // Brighter gold color

  // Array of images for the residential gallery
  const images = [
    '/photos/ResidentialServices/BrownOne.png',
    '/photos/ResidentialServices/BrownTwo.png',
    '/photos/ResidentialServices/GreenOne.png',
      '/photos/ResidentialServices/GreenTwo.png',
    '/photos/ResidentialServices/RedOne.png',
    '/photos/ResidentialServices/RedThree.png',
      '/photos/ResidentialServices/RedTwo.png',
    '/photos/ResidentialServices/SnowOne.png',
    '/photos/ResidentialServices/StoneTwo.png',
  ];

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Gallery Title */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
        >
          Residential Construction Gallery
        </h2>
        <p
          className="text-lg mb-8"
          style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
        >
          Explore our residential construction projects, crafted with precision and quality.
        </p>

        {/* Grid Layout for Images */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={src}
                alt={`Residential project ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResidentialGallery;
