import React from 'react';

const ContactSectionNoHeader = () => {
  // Contact details (kept as they might be used internally by the form or for reference, although not displayed directly)
  const phoneNumber = "+1 (234) 567-890";
  const email = "info@ShopEase.com";

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 flex justify-center"> {/* Added flex justify-center to center the form container */}
      {/* The original header section is removed from here */}

      <main className="max-w-lg mx-auto w-full"> {/* Adjusted max-width and ensured full width on smaller screens */}
        <div className="px-4 py-6 sm:px-0">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden"> {/* Added background, shadow, and rounded corners to the form container */}
            <div className="px-6 py-8 space-y-6"> {/* Increased padding and space-y */}
              <h3 className="text-3xl font-bold text-gray-900 text-center"> {/* Increased heading size and boldness */}
                Send us a Message
              </h3>
              <form action="#" method="POST" className="space-y-6"> {/* Added space-y to the form for consistent vertical spacing */}
                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> {/* Changed to 2 columns on small screens and above, adjusted gap */}
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 text-base focus:ring-blue-500 focus:border-blue-500" // Increased padding and text size
                    />
                  </div>

                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 text-base focus:ring-blue-500 focus:border-blue-500" // Increased padding and text size
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email_address"
                    id="email_address"
                    autoComplete="email"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 text-base focus:ring-blue-500 focus:border-blue-500" // Increased padding and text size
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4} // Increased rows for better textarea size
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md py-3 px-4 text-base" // Increased padding and text size
                      placeholder="Your message here"
                      defaultValue={''}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-right"> {/* Placed button in a div for alignment */}
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" // Increased padding and text size
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* The original footer section is also removed as it's part of the main layout */}

    </div>
  );
};

export default ContactSectionNoHeader;