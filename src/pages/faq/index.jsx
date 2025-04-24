import { useState } from 'react';
import { Link } from 'react-router';

const FAQ = () => {
  // State to track which FAQ is expanded
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data (customize this as needed)
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy. Items must be unused, in their original packaging, and you’ll need to provide a receipt or proof of purchase. Contact us at support@yourwebsite.com to initiate a return."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 3-7 business days within the US. International shipping may take 7-14 days, depending on your location. You’ll receive a tracking number once your order ships."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! Our customer support team is available Monday to Friday, 9 AM - 5 PM EST. Reach us via email at info@ShopEase.com or call us at +1 (234) 567-890."
    },
    {
      question: "Can I change my order after placing it?",
      answer: "If your order hasn’t shipped yet, we can modify it. Please contact us as soon as possible with your order number and the changes you’d like to make."
    },
    {
      question: "Are your products eco-friendly?",
      answer: "We strive to source sustainable materials and work with suppliers who prioritize eco-friendly practices. Check individual product pages for specific details."
    }
  ];

  // Toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="mt-2 text-lg text-gray-600">Find answers to common questions below.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Question (Clickable) */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer (Collapsible) */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer (Optional) */}
      <footer className="bg-white py-6 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <Link to='/contact' className="text-blue-600 hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;