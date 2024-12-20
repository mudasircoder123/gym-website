import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter Section */}
          <div className="sm:col-span-2">
            <h1 className="text-center max-w-lg text-2xl font-extrabold text-yellow-400 xl:text-3xl">
              Stay Fit, Stay Updated! Join our Gym Community.
            </h1>
            <p className="text-center text-gray-300 mt-2">
              Subscribe to receive workout tips, fitness guides, and exclusive offers.
            </p>
            <div className="justify-center flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="email"
                className="px-4 py-2 text-gray-800 bg-gray-200 border border-yellow-400 rounded-md focus:border-yellow-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-40"
                placeholder="Email Address"
              />
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-yellow-400">Quick Links</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link to='/' className="text-gray-300 hover:text-yellow-500">Home</Link>
              <Link to='/about' className="text-gray-300 hover:text-yellow-500">About Us</Link>
              <Link to='/contact' className="text-gray-300 hover:text-yellow-500">Contact Us</Link>
              <Link to='/membership-plans' className="text-gray-300 hover:text-yellow-500">Membership Plans</Link>
            </div>
          </div>

          {/* Documentation Links */}
          <div>
            <p className="font-semibold text-yellow-400">Resources</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a href="#" className="text-gray-300 hover:text-yellow-500">Workout Guides</a>
              <a href="#" className="text-gray-300 hover:text-yellow-500">Nutrition Tips</a>
              <a href="#" className="text-gray-300 hover:text-yellow-500">FAQ</a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <hr className="mt-8 border-yellow-500" />

        {/* Footer Bottom */}
        <div className="mt-5 text-center">
          <p className="text-gray-400">
            <span className="font-bold text-yellow-500">GymFreaks</span>. Copyright {new Date().getFullYear()} Mudasir Rashid. All Rights Reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-yellow-500 hover:text-yellow-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-yellow-500 hover:text-yellow-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-yellow-500 hover:text-yellow-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-yellow-500 hover:text-yellow-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




