import React from 'react';
import { FaHammer, FaHardHat, FaTruckMoving } from 'react-icons/fa'; // Import icons for services

const Services = () => {
  const goldColor = '#FFEB9C'; // Brighter gold color

  // Define service data with icons, titles, descriptions, and images
  const services = [
    {
      icon: <FaHammer size={40} className="text-[#FFEB9C] mb-4" />,
      title: 'Residential Construction',
      description: 'From custom homes to renovations, we provide quality residential construction services tailored to your needs.',
      image: '/photos/ResidentialServices/ResedentialServicesCover.png', // Add your image path here
    },
    {
      icon: <FaHardHat size={40} className="text-[#FFEB9C] mb-4" />,
      title: 'Garage Construction',
      description: 'Our garage services include detatched buildings, residential projects, and other business infrastructure projects.',
        image: '/photos/GarageServices/GarageServicesCover.png',
    },
    {
      icon: <FaTruckMoving size={40} className="text-[#FFEB9C] mb-4" />,
      title: 'Project Management',
      description: 'We offer comprehensive project management services to ensure your project is completed on time and on budget.',
     image: '/photos/ProjectMangement/ProjectManagementCover.png',
    },
  ];

  return (
    <div className="bg-black py-16 px-4">
      {/* Container for the content */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
        >
          Our Services
        </h2>

        {/* Grid Layout for Services */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                {/* Display Image for Residential Service */}
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                {/* Service Icon */}
                {service.icon}
                {/* Service Title */}
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ fontFamily: 'Cinzel, serif', color: goldColor }}
                >
                  {service.title}
                </h3>
                {/* Service Description */}
                <p
                  className="text-white"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
