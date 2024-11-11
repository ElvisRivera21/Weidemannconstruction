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

        <form
          action="https://formsubmit.co/kyle@weidemannconstruction.com"
          method="POST"
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
        >
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

          {/* Add other fields similarly */}

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
