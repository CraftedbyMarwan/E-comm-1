import React from 'react';

const ContactUs = () => {
  // Contact details
  const phoneNumber = "+1 (234) 567-890";
  const email = "info@ShopEase.com";

  // Map embed URL (Times Square, NYC)
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412634965966!2d-73.98785468459375!3d40.75889697932624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635789213456!5m2!1sen!2sus";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-2 text-lg text-gray-600">
            We’d love to hear from you! Reach out with any questions or concerns.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Phone</h3>
                <p className="text-gray-600">{phoneNumber}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Email</h3>
                <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
                  {email}
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9 AM - 5 PM EST</p>
              </div>
            </div>
          </div>

          {/* Improved Map Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Location</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Find us in the heart of New York City at Times Square. Stop by to say hello!
              </p>
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-inner">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ShopEase Location - Times Square, NYC"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 2a8 8 0 00-5.66 13.66L10 21l5.66-5.34A8 8 0 0010 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-gray-500">
                  1500 Broadway, New York, NY 10036
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Need more help? Call us at{' '}
            <span className="font-medium">{phoneNumber}</span> or email{' '}
            <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
              {email}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;