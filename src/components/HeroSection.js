import React from 'react';
import '../styles/gallery.css';

const HeroSection = () => {
    const goldColor = '#FDB927'; // New yellow color

    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center text-center"
            style={{
                height: '100vh',
                overflow: 'hidden',
            }}
        >
            {/* Fullscreen Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/videos/LandingPageUpdate.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content Overlay with Background */}
            <div
                className="relative z-10 flex flex-col items-center justify-center px-4"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    padding: '20px',
                    borderRadius: '10px',
                }}
            >
                <h1
                    className="text-5xl md:text-7xl font-extrabold mb-6"
                    style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
                >
                    Build Your Dreams with Us
                </h1>
                <p
                    className="text-xl md:text-2xl font-bold mb-8"
                    style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
                >
                    Quality construction services tailored to your needs.
                </p>

                <p
                    className="text-lg md:text-xl mb-8 font-semibold"
                    style={{ fontFamily: 'Merriweather, serif', color: goldColor }}
                >
                    Proudly Serving La Crosse, Onalaska, Holmen, Winona, and surrounding areas
                </p>

                {/* Updated "Get a Quote" Button */}
                <a
                    href="/contact" // Updated to direct to the contact page
                    className="py-4 px-8 rounded-lg font-semibold transition-all duration-300 mb-8"
                    style={{
                        background: 'linear-gradient(90deg, rgba(92,82,3,1) 0%, rgba(253,185,39,1) 100%)',
                        color: '#000', // Text color black
                        fontFamily: 'Merriweather, serif',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    }}
                    onMouseEnter={(e) =>
                        (e.target.style.background = 'rgba(255, 220, 90, 0.8)')
                    }
                    onMouseLeave={(e) =>
                    (e.target.style.background =
                        'linear-gradient(90deg, rgba(92,82,3,1) 0%, rgba(253,185,39,1) 100%)')
                    }
                >
                    Get a Quote
                </a>

                {/* Logo Image */}
                <div className="w-2/3 md:w-1/3 mb-8">
                    <img
                        src="/photos/Logo/WLogo.png"
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
