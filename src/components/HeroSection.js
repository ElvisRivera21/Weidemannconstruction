// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative bg-black">
            <img 
                src="weidmann-construction/public/Weidmann Yellow Logo.svg" 
                alt="Construction background" 
                className="absolute inset-0 object-cover w-full h-full opacity-50" 
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Build Your Dreams with Us
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Quality construction services tailored to your needs.
                </p>
                <a 
                    href="#contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                    Get a Quote
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
