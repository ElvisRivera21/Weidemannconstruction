import React, { useState, useEffect } from 'react';
import '../styles/gallery.css';

const GarageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const goldColor = '#FDB927'; // Matching gold for text and buttons

  // Array of images (for both slideshow & gallery)
  const images = [
    { src: '/photos/AdditionsPorches/covered1.png', text: 'Three Season Porch' },
    { src: '/photos/AdditionsPorches/covered2.png', text: 'Three Season Porch' },
    { src: '/photos/AdditionsPorches/brownCovered1.png', text: 'Covered Deck With Screened In Porch' },
    { src: '/photos/AdditionsPorches/brownCovered2.png', text: 'Covered Deck With A Curved Overhang' },
    { src: '/photos/AdditionsPorches/greaterRoomAddition.png', text: 'Great Room Addition Mid-Construction' },
    { src: '/photos/AdditionsPorches/greaterRoomAddition1.png', text: 'Great Room Addition Before/After' },
    { src: '/photos/AdditionsPorches/LeanRoof.png', text: 'Lean-To Roof With Speakers & Lights' },
    { src: '/photos/AdditionsPorches/maintenancePatio.png', text: 'Covered Deck Mid-Construction' },
    { src: '/photos/AdditionsPorches/threeSeason.png', text: 'Three Season Room Mid-Construction' },
    { src: '/photos/AdditionsPorches/ThreeSeasonPorches.png', text: 'Three Season Porches' },
    { src: '/photos/AdditionsPorches/CeaderFinish.png', text: 'Cedar Finish' },
  ];

  return (
    <div className="bg-black py-16 px-4">
      {/* Full-width Scrolling Slideshow */}
      <div className="slideshow-container overflow-hidden relative w-full h-[400px] mb-12">
        <div className="slideshow-track">
          {images.concat(images).map((image, index) => ( // Doubled for smooth infinite scrolling
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
        {/* Gallery Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Cinzel, serif', color: goldColor }}>
          Additions & Porches Gallery
        </h2>
        <p className="text-lg mb-8" style={{ fontFamily: 'Merriweather, serif', color: goldColor }}>
          Expand your living space with Weidemann Construction. From cozy three-season porches to additional rooms, we bring your vision to life while adding value to your home.
        </p>

        {/* Grid Layout for Images */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => setSelectedImage(image)}>
              <img src={image.src} alt={image.text} className="w-full h-48 object-cover rounded-lg" />
              <p className="mt-2 text-sm" style={{ fontFamily: 'Merriweather, serif', color: goldColor }}>
                {image.text}
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

export default GarageGallery;
