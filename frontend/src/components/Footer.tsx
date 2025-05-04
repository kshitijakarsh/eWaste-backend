import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-sm mb-4">
              We are dedicated to providing the best service for your needs. Our goal is to ensure a smooth and efficient experience.
            </p>
            <a href="/" className="text-blue-400 hover:text-blue-600">Learn more</a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <a href="/" className="text-white hover:text-blue-400 mb-2 block">Home</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-blue-400 mb-2 block">Services</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-blue-400 mb-2 block">Contact</a>
              </li>
              <li>
                <a href="/" className="text-white hover:text-blue-400 mb-2 block">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-4">
              Email: <a href="mailto:support@example.com" className="text-blue-400">support@example.com</a>
            </p>
            <p className="text-sm">
              Phone: <a href="tel:+1234567890" className="text-blue-400">+1 234 567 890</a>
            </p>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="flex justify-between items-center">
          <p className="text-sm">© 2025 Your Company. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2a2 2 0 00-2 2v2h-2V4a2 2 0 00-4 0v2H8V7H6v3h2v7h3v-7h2.5l.5-3H13V4a1 1 0 011-1h2a2 2 0 012 2v2h2v-3h-2V4a4 4 0 00-4-4z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 002-2.48A10.9 10.9 0 0119 2a4.48 4.48 0 00-7.68 4.07A12.7 12.7 0 013 4.29 4.48 4.48 0 003.91 8.6a4.43 4.43 0 01-2-.55v.06a4.48 4.48 0 003.58 4.4 4.48 4.48 0 01-2 .07 4.48 4.48 0 004.2 3.11A9.03 9.03 0 013 18.75a9.11 9.11 0 005.01 1.48c6.01 0 9.31-4.99 9.31-9.31 0-.14-.01-.29-.02-.43A6.66 6.66 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
