import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import Carousel from './Caras0I';
import Program from './Program';
import About from './About';
import Contact from './Cntact';


import TrainingCard from './Training';
const HeroSection = () => {
  return (
    <>
      <Helmet>
        <title>Fitness Revolution - Unleash Your Inner Strength</title>
        <meta
          name="description"
          content="Join our community of fitness enthusiasts. World-class facilities, expert trainers, and personalized programs designed to take your fitness journey to the next level."
        />
        <meta
          name="keywords"
          content="fitness, gym, workout, strength, health, fitness revolution, fitness programs"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 bg-black mt-12 h-[100vh] flex items-center">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-teal-500 leading-tight tracking-wider dark:text-white">
              Unleash Your Inner Strength
              <br />
              <span className="text-white text-2xl sm:text-3xl mt-3">Join the Fitness Revolution</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white dark:text-neutral-400">
              Join our community of fitness enthusiasts. World-class facilities, expert trainers, and personalized programs designed to take your fitness journey to the next level.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center sm:justify-start space-x-4">
              <a
                href="#"
                className="py-3 px-6 inline-flex items-center justify-center gap-x-2 text-lg font-semibold rounded-lg bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:bg-teal-700"
              >
                Start Your Transformation
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <Link 
                to="/contact" 
                className="py-3 px-6 inline-flex items-center justify-center gap-x-2 text-lg font-semibold rounded-lg bg-white text-gray-800 shadow-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                Contact Us
              </Link>
            </div>
            {/* End Buttons */}
          </div>

          {/* Image Section */}
          <div className="relative mt-8 lg:mt-0">
            <Carousel />
          </div>
        </div>
        {/* End Grid */}
      </div>
      <Program />
      <About />
   
      <TrainingCard/>
      <Contact />
    </>
  );
};

export default HeroSection;





