import React, { useState, useEffect } from 'react';
import '../styles/gallery.css';

const ResidentialGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const goldColor = '#FDB927';

  // Images for the scrolling slideshow (all images included)
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
    { src: '/photos/ResidentialServices/GreenHouse.png', text: 'Custom Home' },
  ];

  return (
    <div className="bg-black py-16 px-4">
      {/* Full-Width Scrolling Slideshow */}
      <div className="slideshow-container overflow-hidden relative w-full h-[400px] mb-12">
        <div className="slideshow-track">
          {images.concat(images).map((image, index) => ( // Doubling images for infinite scrolling
            <div key={index} className="slideshow-item">
              <img src={image.src} alt={image.text} className="w-full h-[400px] object-cover rounded-lg shadow-md" />
              <p className="text-center mt-2 text-sm" style={{ fontFamily: 'Merriweather, serif', color: goldColor }}>
                {image.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Cinzel, serif', color: goldColor }}>
          New Construction Gallery
        </h2>
        <p className="text-lg mb-8" style={{ fontFamily: 'Merriweather, serif', color: goldColor }}>
          Explore our residential construction projects, crafted with precision and quality.
        </p>

        {/* Grid Layout for Images */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map(({ src, text }, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage({ src, text })}
            >
              <img src={src} alt={text} className="w-full h-48 object-cover rounded-lg" />
              <p className="text-sm mt-2" style={{ color: goldColor, fontFamily: 'Merriweather, serif' }}>
                {text}
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
            <img src={selectedImage.src} alt={selectedImage.text} className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg" />

            {/* Image Description */}
            <p className="text-lg mt-4 text-center" style={{ color: goldColor, fontFamily: 'Merriweather, serif' }}>
              {selectedImage.text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResidentialGallery;
