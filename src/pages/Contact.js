const Contact = () => {
  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          style={{ fontFamily: 'Cinzel, serif', color: '#FDB927' }}
        >
          Contact Us
        </h2>
        <p
          className="text-lg text-center mb-8"
          style={{ fontFamily: 'Merriweather, serif', color: '#FDB927' }}
        >
          Call us at{' '}
          <a href="tel:+16087991969" className="underline">
            608-799-1969
          </a>{' '}
          or email us at{' '}
          <a href="mailto:kyle@weidemannconstruction.com" className="underline">
            kyle@weidemannconstruction.com
          </a>
          .<br />
          Proudly serving La Crosse, Onalaska, Holmen, Winona, and surrounding areas.
        </p>
        <form
          action="https://formsubmit.co/kyle@weidemannconstruction.com"
          method="POST"
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Project Inquiry" />
          <input type="hidden" name="_template" value="table" />

          {/* Full Name Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
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
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Project Type Field (Optional) */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="projectType">
              Project Type (Optional)
            </label>
            <select
              id="projectType"
              name="projectType"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Project Type</option>
              <option value="New Construction">New Construction</option>
              <option value="Remodeling">Remodeling</option>
              <option value="Roofing">Roofing</option>
              <option value="Siding">Siding</option>
              <option value="Decks & Patios">Decks & Patios</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Budget Range Field (Optional) */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="budget">
              Estimated Budget (Optional)
            </label>
            <select
              id="budget"
              name="budget"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Budget Range</option>
              <option value="Under $10,000">Under $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000 - $50,000">$25,000 - $50,000</option>
              <option value="$50,000 - $100,000">$50,000 - $100,000</option>
              <option value="Over $100,000">Over $100,000</option>
            </select>
          </div>

          {/* Project Details Message Field (Optional) */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="message">
              Project Details (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Describe your project details..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#FDB927] text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
