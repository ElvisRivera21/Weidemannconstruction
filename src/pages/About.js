import React from 'react';
import '../styles/gallery.css';

const About = () => {
  const goldColor = '#FDB927'; // Yellow color for text
  const blackShadow = 'rgba(0, 0, 0, 0.6)'; // Black shadow box background

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
        <source src="/videos/Good Trailer  Shot.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay with Background */}
      <div
        className="relative z-10 flex flex-col items-center justify-center px-4"
        style={{
          backgroundColor: blackShadow,
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '80%',
        }}
      >
        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
        >
          About Us
        </h2>

        {/* Description */}
        <p
          className="text-lg md:text-xl mb-4"
          style={{ fontFamily: 'Merriweather, serif', color: 'white' }}
        >
          At Weidemann Construction, we are dedicated to building high-quality, sustainable
          structures that meet the needs of our clients. With years of experience in the
          construction industry, our team is committed to delivering exceptional results on every project.
        </p>
        <p
          className="text-lg md:text-xl mb-8"
          style={{ fontFamily: 'Merriweather, serif', color: 'white' }}
        >
          Our mission is to provide innovative construction solutions while maintaining integrity,
          quality, and safety. We believe that communication and collaboration with our clients are
          key to achieving successful outcomes.
        </p>

        {/* Images */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <img
            src="photos/Tough Nails.png"
            alt="Construction site view 1"
            className="w-full md:w-1/3 rounded-lg shadow-lg object-contain h-auto max-h-96"
          />
          <img
            src="photos/Aboutimage2.png"
            alt="Construction site view 2"
            className="w-full md:w-1/3 rounded-lg shadow-lg object-contain h-auto max-h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
