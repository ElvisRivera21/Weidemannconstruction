// src/galleries/GarageGallery.js

import React from 'react';

const GarageGallery = () => {
  const goldColor = '#FFEB9C'; // Brighter gold color

  // Array of images for the garage gallery
  const images = [
    { src: '/photos/AdditionsPorches/covered1.png', text: 'Covered Patios' },
    { src: '/photos/AdditionsPorches/covered2.png', text: 'Three-Season Porches' },
    //{ src: '/photos/ResidentialServices/GeneralContracting.png', text: 'Room Additions' },
    //{ src: '/photos/ResidentialServices/GreenOne.png', text: 'Custom Sunrooms' },
    //{ src: '/photos/ResidentialServices/GreenTwo.png', text: 'Covered Patios' },
    //{ src: '/photos/ResidentialServices/NewConstruction1.png', text: 'Garage Additions' },
    //{ src: '/photos/ResidentialServices/NewConstruction2.png', text: 'Custom Pergolas' },
    //{ src: '/photos/ResidentialServices/RedOne.png', text: 'Extended Decks' },
    //{ src: '/photos/ResidentialServices/RedTwo.png', text: 'Outdoor Living Spaces' },
    //{ src: '/photos/ResidentialServices/RedThree.png', text: 'Attached Porches' },
    //{ src: '/photos/ResidentialServices/SnowOne.png', text: 'Enclosed Patios' },
    //{ src: '/photos/ResidentialServices/StoneTwo.png', text: 'Multi-Season Rooms' }
  ];

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Gallery Title */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
        >
          Additions & Porches
        </h2>
        <p
          className="text-lg mb-8"
          style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
        >
          Expand your living space with Weidemann Construction. From cozy three-season porches to additional rooms, we bring your vision to life while adding value to your home.
        </p>

        {/* Grid Layout for Images */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={image.src}
                alt={image.text}
                className="w-full h-48 object-cover"
              />
              <p
                className="mt-2 text-sm"
                style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
              >
                {image.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GarageGallery;