import React, { useState, useEffect } from 'react';

const InteriorGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
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
        <div className="bg-black py-16 px-4 text-center">
            {/* Slideshow Section */}
            <div className="max-w-6xl mx-auto mb-12 relative">
                <div className="relative h-64">
                    <img
                        src={images[currentSlide].src}
                        alt={images[currentSlide].text}
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
                    {images[currentSlide].text}
                </p>
            </div>

            {/* Gallery Title */}
            <h2
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{
                    fontFamily: 'Cinzel, serif',
                    color: goldColor,
                }}
            >
                Interior Gallery
            </h2>

            {/* Subtitle */}
            <p
                className="text-lg mb-8"
                style={{
                    fontFamily: 'Merriweather, serif',
                    color: goldColor,
                }}
            >
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
                            <img
                                src={src}
                                alt={text}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                        <p
                            className="mt-2 text-sm font-semibold"
                            style={{
                                fontFamily: 'Merriweather, serif',
                                color: goldColor,
                            }}
                        >
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
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.text}
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
                            {selectedImage.text}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InteriorGallery;
