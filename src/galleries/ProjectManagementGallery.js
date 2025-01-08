// src/galleries/ExteriorFinishesGallery.js

import React from 'react';
import '../styles/gallery.css';


const ExteriorFinishesGallery = () => {
  const goldColor = '#FFEB9C'; // Brighter gold color

  // Array of images for the exterior finishes gallery
  const images = [
    { src: '/photos/ExteriorFinishes/Curved.png', caption: 'Unique LP SmartSide Design' },
    { src: '/photos/ExteriorFinishes/door1.png', caption: 'Quality Door Installations' },
    { src: '/photos/ExteriorFinishes/ExteriorGarage.png', caption: 'Steel Board and Batten Siding' },
    { src: '/photos/ExteriorFinishes/Outside1.png', caption: 'Outside Leisure Area' },
    { src: '/photos/ExteriorFinishes/Overhang.png', caption: 'Cedar Log Siding' },
    //{ src: '/photos/ExteriorFinishes/image6.jpg', caption: 'Rustic Timber Charm' },
  ];

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Gallery Title */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
        >
          Exterior Finishes Gallery
        </h2>
        <p
          className="text-lg mb-8"
          style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
        >
          Explore our variety of exterior finishes designed to impress and last.
        </p>

        {/* Grid Layout for Images */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-48 object-cover"
              />
              <p
                className="mt-2 text-sm"
                style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExteriorFinishesGallery;
