<form
  action="https://formsubmit.co/kyle@weidemannconstruction.com"
  method="POST"
  className="bg-gray-800 p-8 rounded-lg shadow-lg"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_subject" value="New Project Inquiry" />
  <input type="hidden" name="_template" value="table" />

  <div className="mb-4">
    <label className="block text-white font-semibold mb-2" htmlFor="name">Full Name</label>
    <input
      type="text"
      id="name"
      name="name"
      required
      className="w-full p-2 border border-gray-300 rounded-md"
      placeholder="Enter your full name"
    />
  </div>

  <div className="mb-4">
    <label className="block text-white font-semibold mb-2" htmlFor="email">Email Address</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      className="w-full p-2 border border-gray-300 rounded-md"
      placeholder="Enter your email address"
    />
  </div>

  <div className="text-center">
    <button
      type="submit"
      className="bg-[#FDB927] text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition"
    >
      Submit
    </button>
  </div>
</form>
