import React, { useState } from 'react';
import '../styles/gallery.css';

const ResidentialGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for the modal
  const [currentSlide, setCurrentSlide] = useState(0); // State for the slideshow
  const goldColor = '#FDB927'; // Updated to the new yellow color
  const modalGoldColor = '#FDB927'; // Consistent yellow for readability

  const slideshowImages = [
    '/photos/ResidentialServices/CustomOne.png',
    '/photos/ResidentialServices/CustomTwo.png',
    '/photos/ResidentialServices/GreenOne.png',
    '/photos/ResidentialServices/GreenTwo.png',
    '/photos/Weedy.png',
    '/photos/ResidentialServices/RedThree.png',
    '/photos/ResidentialServices/Trusspic.png',
    '/photos/ResidentialServices/Generalcontracting.png',
    '/photos/ResidentialServices/NewConstruction1.png',
    '/photos/ResidentialServices/NewConstruction2.png',
    '/photos/ResidentialServices/NewConstruction3.png',
    '/photos/ResidentialServices/Framing.png',

  ];

  const images = [
    { src: '/photos/ResidentialServices/CustomOne.png', text: 'Custom Build' },
    { src: '/photos/ResidentialServices/CustomTwo.png', text: 'Custom Build' },
    { src: '/photos/ResidentialServices/GreenOne.png', text: 'Custom Garages' },
    { src: '/photos/ResidentialServices/GreenTwo.png', text: 'Custom Garages' },
    { src: '/photos/Weedy.png', text: 'Weedy' },
    { src: '/photos/ResidentialServices/RedThree.png', text: 'Traditional Red Chicken Coop' },
    { src: '/photos/ResidentialServices/Trusspic.png', text: 'Custom Home' },
    { src: '/photos/ResidentialServices/Generalcontracting.png', text: 'Custom Home' },
    { src: '/photos/ResidentialServices/NewConstruction1.png', text: 'Custom Home' },
    { src: '/photos/ResidentialServices/NewConstruction2.png', text: 'Custom Home' },
    { src: '/photos/ResidentialServices/NewConstruction3.png', text: 'Custom Home' },
    { src: '/photos/ResidentialServices/Framing.png', text: 'Framing' },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideshowImages.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="bg-black py-16 px-4">
      {/* Slideshow Section */}
      <div className="max-w-6xl mx-auto mb-12 relative">
        <div className="relative h-64">
          <img
            src={slideshowImages[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
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
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
        >
          New Construction Gallery
        </h2>
        <p
          className="text-lg mb-8"
          style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
        >
          Explore our residential construction projects, crafted with precision and quality.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map(({ src, text }, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage({ src, text })} // Open modal
            >
              <img
                src={src}
                alt={text}
                className="w-full h-48 object-contain" // Show entire image
              />
              <p className="text-sm mt-2" style={{ color: goldColor, fontFamily: 'Merriweather, serif' }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for larger image preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
            <img
              src={selectedImage.src}
              alt={selectedImage.text}
              className="w-full rounded-lg object-contain" // Show entire image
            />
            <p
              className="text-lg mt-4"
              style={{
                color: modalGoldColor,
                fontFamily: 'Merriweather, serif',
                textAlign: 'center',
              }}
            >
              {selectedImage.text}
            </p>
            <button
              onClick={() => setSelectedImage(null)} // Close modal
              className="mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResidentialGallery;
