import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-12">
          Have a project in mind? Reach out to us for a quote or to learn more about our services.
        </p>

        {/* Contact Form Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <form>
            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-left mb-2 text-gray-600" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-left mb-2 text-gray-600" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-6">
              <label className="block text-left mb-2 text-gray-600" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="mt-12 text-left">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-700">
            <strong>Phone:</strong> (507) 313-8317
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> weidemann.kyle@icloud.com
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong>  La Crosse, WI 54601
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
