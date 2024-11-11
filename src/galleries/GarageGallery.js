// src/galleries/GarageGallery.js

import React from 'react';

const GarageGallery = () => {
  const goldColor = '#FFEB9C'; // Brighter gold color

  // Array of images for the garage gallery
  const images = [
    '/photos/GarageServices/image1.jpg',
    '/photos/GarageServices/image2.jpg',
    '/photos/GarageServices/image3.jpg',
    // Add more image paths here
  ];

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Gallery Title */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
        >
          Garage Construction Gallery
        </h2>
        <p
          className="text-lg mb-8"
          style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
        >
          View our portfolio of garage projects, built to provide quality and durability.
        </p>

        {/* Grid Layout for Images */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={src}
                alt={`Garage project ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GarageGallery;
