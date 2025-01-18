// src/galleries/GarageGallery.js

import React, { useState } from 'react';
import '../styles/gallery.css';

const GarageGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State for the slideshow
  const goldColor = '#FDB927'; // Updated to the new yellow color

  // Array of images for the garage gallery
  const images = [
    { src: '/photos/AdditionsPorches/covered1.png', text: 'Three Season Porch' },
    { src: '/photos/AdditionsPorches/covered2.png', text: 'Three Season Porch' },
    { src: '/photos/AdditionsPorches/alumDeck.png', text: 'Deck With Aluminum Railings' },
    { src: '/photos/AdditionsPorches/brownCovered1.png', text: 'Covered Deck With Screened In Porch' },
    { src: '/photos/AdditionsPorches/brownCovered2.png', text: 'Covered Deck With A Curved Overhang' },
    { src: '/photos/AdditionsPorches/greaterRoomAddition.png', text: 'Great Room Addition Mid-Construction' },
    { src: '/photos/AdditionsPorches/greaterRoomAddition1.png', text: 'Great Room Addition Before/After ' },
    { src: '/photos/AdditionsPorches/LeanRoof.png', text: 'Lean-To Roof With Speakers & Lights' },
    { src: '/photos/AdditionsPorches/maintenancePatio.png', text: 'Covered Deck Mid-Construction' },
    { src: '/photos/AdditionsPorches/threeSeason.png', text: 'Three Season Room Mid-Construction' },
    { src: '/photos/AdditionsPorches/overPatio.png', text: 'Maintenance Free Decks/Railings' },
    { src: '/photos/AdditionsPorches/ThreeSeasonPorches.png', text: 'Three Season Porches' },
    { src: '/photos/AdditionsPorches/CeaderFinish.png', text: 'Ceader Finish' },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="bg-black py-16 px-4">
      {/* Slideshow Section */}
      <div className="max-w-6xl mx-auto mb-12 relative">
        <div className="relative h-64">
          <img
            src={images[currentSlide].src}
            alt={images[currentSlide].text}
            className="w-full h-full object-contain rounded-lg"
          />
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-75"
            onClick={handlePrevSlide}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-75"
            onClick={handleNextSlide}
          >
            &#10095;
          </button>
        </div>
        <p
          className="text-center mt-4"
          style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
        >
          {images[currentSlide].text}
        </p>
      </div>

      {/* Gallery Section */}
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
          Expand your living space with Weidemann Construction. From cozy three-season porches to
          additional rooms, we bring your vision to life while adding value to your home.
        </p>

        {/* Grid Layout for Images */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
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
