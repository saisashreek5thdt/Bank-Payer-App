import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">PayerFinance</h2>
            <p className="text-gray-400 mb-4">
              Manage your finances with ease. A simple, secure, and effective way to track your spending, set goals, and get insights.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li><a href="mailto:support@payerfinance.com" className="text-gray-400 hover:text-white">support@payerfinance.com</a></li>
              <li><a href="tel:+1234567890" className="text-gray-400 hover:text-white">+91 111 222 333</a></li>
              <li className="text-gray-400">123 Delhi , India</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Get the latest updates and offers directly in your inbox.</p>
            <form className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 rounded-l-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 mb-4 md:mb-0"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} PayerFinance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
