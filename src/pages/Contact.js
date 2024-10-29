import React, { useState } from 'react';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend via POST request
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Message sent successfully!');
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
      } else {
        alert('Error sending message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem submitting your request.');
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

        <p className="text-lg text-center mb-8" style={{ fontFamily: 'Merriweather, serif', color: '#FFEB9C' }}>
          Call us at <a href="tel:+16087991969" className="underline">608-799-1969</a> or email us at <a href="mailto:kyle@weidemannconstruction.com" className="underline">kyle@weidemannconstruction.com</a>.
          <br />
          Proudly serving La Crosse, Onalaska, Holmen, Winona, and surrounding areas.
        </p>

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
