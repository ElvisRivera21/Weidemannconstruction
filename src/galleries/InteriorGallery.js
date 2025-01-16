import React, { useState } from 'react';

const InteriorGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

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
            {/* Gallery Title */}
            <h2
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{
                    fontFamily: 'Cinzel, serif', // Elegant serif font for headings
                    color: '#F6B817', // Matching gold color for the theme
                }}
            >
                Interior Gallery
            </h2>

            {/* Subtitle */}
            <p
                className="text-lg mb-8"
                style={{
                    fontFamily: 'Merriweather, serif', // Serif font for subheading
                    color: '#F6B817', // Same gold color as the theme
                }}
            >
                Explore our stunning interior designs, crafted for beauty and functionality.
            </p>

            {/* Gallery Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {images.map(({ src, text }, index) => (
                    <div
                        key={index}
                        className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        onClick={() => setSelectedImage({ src, text })}
                    >
                        <img
                            src={src}
                            alt={text}
                            className="w-full h-48 object-cover"
                        />
                        <p
                            className="text-sm mt-2"
                            style={{
                                fontFamily: 'Merriweather, serif', // Consistent serif font for captions
                                color: '#F6B817', // Matching gold
                            }}
                        >
                            {text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Modal for Selected Image */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 shadow-lg max-w-lg mx-auto">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.text}
                            className="w-full rounded-lg"
                        />
                        <p
                            className="text-lg mt-4"
                            style={{
                                fontFamily: 'Cinzel, serif', // Elegant font for modal text
                                color: '#F6B817', // Matching gold for modal text
                                textAlign: 'center',
                            }}
                        >
                            {selectedImage.text}
                        </p>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition"
                            style={{
                                fontFamily: 'Merriweather, serif', // Consistent font for button text
                                backgroundColor: '#F6B817', // Match gold for button
                                color: 'black',
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InteriorGallery;
