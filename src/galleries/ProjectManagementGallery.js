import React, { useState } from 'react';
import '../styles/gallery.css';

const ExteriorFinishesGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State for the slideshow
  const goldColor = '#FDB927'; // Updated to the new yellow color

  // Array of images for the exterior finishes gallery
  const images = [
    { src: '/photos/ExteriorFinishes/Curved.png', caption: 'Unique LP SmartSide Design' },
    { src: '/photos/ExteriorFinishes/door1.png', caption: 'Quality Door Installations' },
    { src: '/photos/ExteriorFinishes/ExteriorGarage.png', caption: 'Steel Board and Batten Siding' },
    { src: '/photos/ExteriorFinishes/Outside1.png', caption: 'Outside Leisure Area' },
    { src: '/photos/ExteriorFinishes/Overhang.png', caption: 'Cedar Log Siding' },
    { src: '/photos/ExteriorFinishes/GreenHouseDog.png', caption: 'Vinyl Siding' },
    { src: '/photos/ExteriorFinishes/GreenExterior.png', caption: 'Cabin Fever' },
    { src: '/photos/ExteriorFinishes/BBQ.png', caption: 'Outdoor BBQ Pit' },
    { src: '/photos/ExteriorFinishes/CustomGarage.png', caption: 'Custom Garage' },
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
            alt={images[currentSlide].caption}
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
          {images[currentSlide].caption}
        </p>
      </div>

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
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
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
