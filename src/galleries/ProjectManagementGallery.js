import React, { useState, useEffect } from 'react';
import '../styles/gallery.css';

const ExteriorFinishesGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const goldColor = '#FDB927';

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
    { src: '/photos/AdditionsPorches/alumDeck.png', caption: 'Deck With Aluminum Railings' },
    { src: '/photos/AdditionsPorches/overPatio.png', caption: 'Maintenance Free Decks/Railings' },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item)} // Open modal
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-48 object-cover rounded-lg"
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

      {/* Modal for Enlarged Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full px-4">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-8 bg-[#FDB927] text-black text-lg font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              ✕ Close
            </button>

            {/* Enlarged Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />

            {/* Image Description */}
            <p
              className="text-lg mt-4 text-center"
              style={{
                color: goldColor,
                fontFamily: 'Merriweather, serif',
              }}
            >
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExteriorFinishesGallery;
