// src/galleries/ProjectManagementGallery.js

import React from 'react';

const ProjectManagementGallery = () => {
  const goldColor = '#FFEB9C'; // Brighter gold color

  // Array of images for the project management gallery
  const images = [
    '/photos/ProjectManagement/image1.jpg',
    '/photos/ProjectManagement/image2.jpg',
    '/photos/ProjectManagement/image3.jpg',
    // Add more image paths here
  ];

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Gallery Title */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
        >
          Project Management Gallery
        </h2>
        <p
          className="text-lg mb-8"
          style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
        >
          Discover our project management expertise, ensuring timely and budget-friendly results.
        </p>

        {/* Grid Layout for Images */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={src}
                alt={`Project management example ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectManagementGallery;
