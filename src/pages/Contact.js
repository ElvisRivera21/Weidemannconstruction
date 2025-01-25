<form
  action="https://formsubmit.co/kyle@weidemannconstruction.com"
  method="POST"
  className="bg-gray-800 p-8 rounded-lg shadow-lg"
>
  {/* Hidden Fields */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_subject" value="New Project Inquiry from Weidemann Construction Website" />
  <input type="hidden" name="_template" value="table" />

  {/* Name Field */}
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

  {/* Phone Field */}
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

  {/* Project Type Field */}
  <div className="mb-4">
    <label className="block text-white font-semibold mb-2" htmlFor="projectType">
      Type of Project
    </label>
    <select
      id="projectType"
      name="projectType"
      required
      className="w-full p-2 border border-gray-300 rounded-md"
    >
      <option value="" disabled>
        Select a project type
      </option>
      <option value="new_construction">New Construction</option>
      <option value="additions">Additions</option>
      <option value="siding">Siding</option>
      <option value="porches_and_decks">Porches/Decks</option>
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
      rows="4"
      required
      className="w-full p-2 border border-gray-300 rounded-md"
      placeholder="Provide additional details about your project"
    ></textarea>
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