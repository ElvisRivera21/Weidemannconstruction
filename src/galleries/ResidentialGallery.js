import React, { useState } from 'react';

const ResidentialGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for the modal
  const goldColor = '#FFEB9C'; // Brighter gold color
  const modalGoldColor = '#FFC107'; // Slightly darker gold for readability

  // Array of images and their corresponding text for the residential gallery
  const images = [
    { src: '/photos/ResidentialServices/BrownOne.png', text: 'Decks and Covered Decks' },
    { src: '/photos/ResidentialServices/BrownTwo.png', text: 'Screened Porch' },
    { src: '/photos/ResidentialServices/GreenOne.png', text: 'Green Garage, General Contracting' },
    { src: '/photos/ResidentialServices/GreenTwo.png', text: 'Siding, Roofs, Doors, Electrical, Plumbing' },
    { src: '/photos/ResidentialServices/RedOne.png', text: 'Covered Porch' },
    { src: '/photos/ResidentialServices/RedTwo.png', text: 'Soffit and Fascia' },
    { src: '/photos/ResidentialServices/RedThree.png', text: 'Traditional Red Finish' },
    { src: '/photos/ResidentialServices/SnowOne.png', text: 'Framing in The Snow' },
    { src: '/photos/ResidentialServices/StoneTwo.png', text: 'Exterior Finishes' },
  ];

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
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
                className="w-full h-48 object-cover"
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
              className="w-full rounded-lg"
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
