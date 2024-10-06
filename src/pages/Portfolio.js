import React from 'react';

const projects = [
  {
    id: 1,
    image: "/Weidmann Yellow Logo.svg", // Replace with your project image URL
    title: "Modern Residential Home",
    description: "A modern two-story residential project completed in 2022.",
  },
  {
    id: 2,
    image: "/Weidmann Yellow Logo.svg", // Replace with your project image URL
    title: "Commercial Office Space",
    description: "Office space designed and constructed for a leading IT firm.",
  },
  {
    id: 3,
    image: "/Weidmann Yellow Logo.svg", // Replace with your project image URL
    title: "Luxury Villa",
    description: "Luxury villa with state-of-the-art amenities and stunning views.",
  },
];

const Portfolio = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Projects</h2>
        <p className="text-lg mb-12 text-gray-700">
          Explore some of our recent construction projects that showcase our commitment to quality and craftsmanship.
        </p>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              
              {/* Project Details */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
