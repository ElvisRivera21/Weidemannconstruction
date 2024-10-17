import React from 'react';

const HeroSection = () => {
    const goldColor = '#FFD700'; // Bright gold color

    return (
        <div 
            className="relative bg-black min-h-screen flex items-center justify-center"
            style={{ 
                height: "100vh",
                overflow: "hidden"
            }}
        >
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4"
                    style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
                >
                    Build Your Dreams with Us
                </h1>
                <p className="text-lg md:text-xl mb-8"
                   style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
                >
                    Quality construction services tailored to your needs.
                </p>
                <a 
                    href="#contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300 mb-8"
                    style={{ fontFamily: 'Merriweather, serif' }}
                >
                    Get a Quote
                </a>

                {/* Image container */}
                <div className="w-2/3 md:w-1/3">
                    <img 
                        src="/logo.png" 
                        alt="Weidemann Construction Logo"
                        className="mx-auto"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
