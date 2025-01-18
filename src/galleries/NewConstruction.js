import React, { useState } from 'react';
import '../styles/gallery.css';

const ResidentialGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for the modal
  const goldColor = '#FDB927'; // Updated to the new yellow color
  const modalGoldColor = '#FDB927'; // Consistent yellow for readability

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

  return (
    <div className="bg-black py-16 px-4">
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
