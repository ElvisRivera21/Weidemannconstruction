import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    startDate: '',
    city: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data using EmailJS
    emailjs.send(
      'YOUR_SERVICE_ID',   // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',  // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID'       // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.log('Email send error:', error.text);
      alert('Error sending message. Please try again later.');
    });

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      budget: '',
      startDate: '',
      city: '',
      message: '',
    });
  };

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Form Title */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          style={{ fontFamily: 'Cinzel, serif', color: '#FFEB9C' }}
        >
          Contact Us
        </h2>
        
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="6087991969"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Budget Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="budget">
              Estimated Budget
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Start Date Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="startDate">
              When are you looking to start the project?
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
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#FFEB9C] text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
