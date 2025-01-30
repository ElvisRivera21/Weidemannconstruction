import React, { useState, useEffect } from 'react';
import '../styles/gallery.css';

const InteriorGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const goldColor = '#F6B817'; // Matching gold for text and buttons

    const images = [
        { src: '/photos/ShadyPine/KitchenIsland.png', text: 'Kitchen Island' },
        { src: '/photos/ShadyPine/KitchenCabinetry.png', text: 'Kitchen Cabinetry' },
        { src: '/photos/ShadyPine/FullKitchenRemodel.png', text: 'Full Kitchen Remodel' },
        { src: '/photos/ShadyPine/BeautifulWindows.png', text: 'Beautiful Windows' },
        { src: '/photos/ShadyPine/LockerRoom.png', text: 'The Locker Room' },
        { src: '/photos/ShadyPine/EntertainmentRoom.png', text: 'Entertainment Room' },
        { src: '/photos/ShadyPine/DressingRoom.png', text: 'Dressing Room' },
        { src: '/photos/ShadyPine/KitchenClose.png', text: 'Kitchen' },
        { src: '/photos/ShadyPine/OakCab.png', text: 'Oak Cabinetry' },
        { src: '/photos/ShadyPine/CustomMarble.png', text: 'Custom Marble' },
        { src: '/photos/ShadyPine/FullBathroomRemodel.png', text: 'Full Bathroom Remodel' },
    ];

    return (
        <div className="bg-black py-16 px-4 text-center">
            {/* Full-Width Scrolling Slideshow */}
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

            {/* Gallery Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Cinzel, serif', color: goldColor }}>
                Interior Gallery
            </h2>

            {/* Subtitle */}
            <p className="text-lg mb-8" style={{ fontFamily: 'Merriweather, serif', color: goldColor }}>
                Explore our stunning interior designs, crafted for beauty and functionality.
            </p>

            {/* Gallery Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {images.map(({ src, text }, index) => (
                    <div key={index} className="text-center">
                        <div
                            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                            onClick={() => setSelectedImage({ src, text })}
                        >
                            <img src={src} alt={text} className="w-full h-48 object-cover rounded-lg" />
                        </div>
                        <p className="mt-2 text-sm font-semibold" style={{ fontFamily: 'Merriweather, serif', color: goldColor }}>
                            {text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Modal for Enlarged Image Preview */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="relative max-w-4xl w-full px-4">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-8 bg-[#F6B817] text-black text-lg font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
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

export default InteriorGallery;
