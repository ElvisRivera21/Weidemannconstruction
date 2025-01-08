import React, { useState } from 'react';
import '../styles/gallery.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    startDate: '',
    city: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        startDate: '',
        city: '',
        message: '',
      });
    } else {
      alert('Failed to send the message. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error. Please try again later.');
  }
};


  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          style={{ fontFamily: 'Cinzel, serif', color: '#FFEB9C' }}
        >
          Contact Us
        </h2>
        <p
          className="text-lg text-center mb-8"
          style={{ fontFamily: 'Merriweather, serif', color: '#FFEB9C' }}
        >
          Call us at <a href="tel:+16087991969" className="underline">608-799-1969</a> or email us at <a href="mailto:kyle@weidemannconstruction.com" className="underline">kyle@weidemannconstruction.com</a>.
          <br />
          Proudly serving La Crosse, Onalaska, Holmen, Winona, and surrounding areas.
        </p>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Project Type Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="projectType">
              Type of Project
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="" disabled>Select a project type</option>
              <option value="new_construction">New Construction</option>
              <option value="renovation">Renovation</option>
              <option value="remodeling">Remodeling</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Budget Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="budget">
              Budget
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your budget (e.g., $50,000)"
            />
          </div>

          {/* Preferred Start Date Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="startDate">
              Preferred Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* City Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter the city for the project"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="message">
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Provide additional details about your project"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="bg-[#FFEB9C] text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
