import React from 'react';
import '../styles/gallery.css';

const HeroSection = () => {
    const brightGoldColor = '#FFEB9C'; // Updated brighter gold color
    const emailAddress = 'mailto:kyle@weidemannconstruction.com'; // Correct email format with mailto: prefix

    return (
        <div 
            className="relative bg-black min-h-screen flex flex-col items-center justify-center"
            style={{ 
                height: "100vh",
                overflow: "hidden"
            }}
        >
            {/* New container for the image, resized and positioned */}
            <div className="relative w-full h-80 mb-8"> {/* Adjust the height as needed */}
                <img 
                    src="/landinglogo%201.0.png" // Ensure image path is correct
                    alt="Landing Page Image"
                    className="w-full h-full object-contain"  // 'object-contain' ensures the whole image fits
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4"
                    style={{ fontFamily: 'Cinzel, serif', color: brightGoldColor }}
                >
                    Build Your Dreams with Us
                </h1>
                <p className="text-lg md:text-xl mb-8"
                   style={{ fontFamily: 'Merriweather, serif', color: brightGoldColor }}
                >
                    Quality construction services tailored to your needs.
                </p>

                {/* New tagline for serving areas */}
                <p className="text-md md:text-lg mb-8"
                   style={{ fontFamily: 'Merriweather, serif', color: brightGoldColor }}
                >
                    Proudly Serving La Crosse, Onalaska, Holmen, Winona and surrounding areas
                </p>

                {/* Updated "Get a Quote" Button to Send an Email */}
                <a 
                    href={emailAddress} 
                    className="py-3 px-6 rounded-lg font-semibold transition-all duration-300 mb-8"
                    style={{
                        background: 'linear-gradient(90deg, rgba(92,82,3,1) 0%, rgba(235,201,117,1) 100%)',
                        color: '#000', // Set text color to black
                        fontFamily: 'Merriweather, serif',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'rgba(255, 215, 0, 0.8)'}
                    onMouseLeave={(e) => e.target.style.background = 'linear-gradient(90deg, rgba(92,82,3,1) 0%, rgba(235,201,117,1) 100%)'}
                >
                    Get a Quote
                </a>

                {/* Logo image */}
                <div className="w-2/3 md:w-1/3 mb-8">
                    <img 
                        src="photos/Weidemann Construction2.0-2.png" 
                        alt="Weidemann Construction Logo"
                        className="mx-auto"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>

                {/* Autoplay Video */}
                <div className="w-full flex justify-center">
                    <video width="560" height="314" controls autoPlay muted loop>
                        <source src="/landingpagevideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
