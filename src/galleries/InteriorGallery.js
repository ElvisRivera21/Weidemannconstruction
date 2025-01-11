import React, { useState } from 'react';
import '../styles/gallery.css';

const InteriorGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null); // State for the modal
    const goldColor = '#FDB927'; // Updated yellow color
    const modalGoldColor = '#FDB927'; // Consistent yellow for readability

    const images = [
        { src: '/photos/InteriorGallery/LivingRoom1.png', text: 'Modern Living Room' },
        { src: '/photos/InteriorGallery/Kitchen1.png', text: 'Elegant Kitchen Design' },
        { src: '/photos/InteriorGallery/Bedroom1.png', text: 'Cozy Bedroom' },
        { src: '/photos/InteriorGallery/Bathroom1.png', text: 'Luxurious Bathroom' },
        { src: '/photos/InteriorGallery/DiningRoom1.png', text: 'Spacious Dining Area' },
        { src: '/photos/InteriorGallery/Office1.png', text: 'Functional Home Office' },
        { src: '/photos/InteriorGallery/LivingRoom2.png', text: 'Stylish Living Space' },
        { src: '/photos/InteriorGallery/Kitchen2.png', text: 'Contemporary Kitchen' },
        { src: '/photos/InteriorGallery/Bathroom2.png', text: 'Modern Bathroom' },
    ];

    return (
        <div className="bg-black py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2
                    className="text-3xl md:text-4xl font-bold mb-8"
                    style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
                >
                    Interior Gallery
                </h2>
                <p
                    className="text-lg mb-8"
                    style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
                >
                    Explore our stunning interior designs, crafted for beauty and functionality.
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

export default InteriorGallery;
