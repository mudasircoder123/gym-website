import React from 'react';
import img1 from './Assets/f1.jpg';
import img2 from './Assets/f2.jpg';
import img3 from './Assets/f3.jpg';
import img4 from './Assets/f4.jpg';
import { useNavigate } from 'react-router-dom';

function GymDetailsPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');  // Navigate to a new route
  };
  return (
    <div className="min-h-screen bg-black text-white pb-10 pt-15 mt-14">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
        {/* Left Section (Text Content) */}
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
          <div className="text-left">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl mt-5">
              Start Your Training with 
              <span className="font-bold text-red-500">Shredded</span>
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Take your fitness to the next level. We offer personalized coaching plans for all types of fitness goals.
            </p>

            <div className="mt-5 sm:flex md:mt-8">
              {/* Button 1 (smaller and anchor tag) */}
              <div className="rounded-md shadow">
                <a href="https://www.instagram.com/thefitnessconnection86?igsh=bm4yYmc4d2JoNGZ1"
                  className="flex items-center justify-center w-full px-6 py-3 text-lg font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:px-10 text-center">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Sections (New Section with 2-3 images in the middle) */}
      <section className="my-16 max-w-screen-xl mx-auto px-4 sm:px-6">
        <h3 className="text-3xl font-semibold mb-8 text-red-500 text-center">Gallery</h3>

        {/* Image Section 1 (2 Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
            <img src={img1} alt="Gallery Image 1" className="w-full h-full object-cover" />
          </div>
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
            <img src={img2} alt="Gallery Image 2" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Image Section 2 (2 Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
            <img src={img3} alt="Gallery Image 3" className="w-full h-full object-cover" />
          </div>
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
            <img src={img4} alt="Gallery Image 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Training Details Section */}
      <section className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-red-500 text-center">Our Training Programs</h3>

        {/* Training For Section (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Contest Prep</h4>
            <p className="text-gray-600">Prepare for competitions with a structured plan designed to meet the specific needs of bodybuilders and athletes.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Lifestyle Coaching</h4>
            <p className="text-gray-600">Achieve long-term wellness and balance with a personalized fitness and nutrition plan that fits into your lifestyle.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Fat to Fit Transformation</h4>
            <p className="text-gray-600">Transform your body with a program tailored to help you burn fat, increase muscle, and build sustainable habits.</p>
          </div>
        </div>

        {/* Available Plans Section (Cards) */}
        <h3 className="text-3xl font-semibold mb-8 text-red-500 text-center">Available Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">3 Months Plan</h4>
            <p className="text-gray-600">A short-term plan for those looking to jumpstart their fitness journey.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">6 Months Plan</h4>
            <p className="text-gray-600">A comprehensive plan to build muscle, lose fat, and improve overall fitness.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">12 Months Plan</h4>
            <p className="text-gray-600">A long-term plan for those who want to completely transform their body and lifestyle.</p>
          </div>
        </div>

        {/* Coaching Plan Includes Section (Cards) */}
        <h3 className="text-3xl font-semibold mb-8 text-red-500 text-center">What’s Included in Our Coaching Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Workout Plan</h4>
            <p className="text-gray-600">A tailored workout plan to fit your goals, whether you're building muscle or losing fat.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Nutrition Plan</h4>
            <p className="text-gray-600">A customized nutrition plan that complements your fitness routine and supports your goals.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Supplementation</h4>
            <p className="text-gray-600">Personalized supplementation advice to boost performance and results.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Posing Session</h4>
            <p className="text-gray-600">Weekly posing sessions to perfect your presentation for competitions.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Weekly Check-ins</h4>
            <p className="text-gray-600">Regular check-ins to monitor progress, adjust plans, and ensure you're on track.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Blood Work Analysis</h4>
            <p className="text-gray-600">Optional blood work analysis to track your internal health and performance metrics.</p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-10">
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={handleClick}>
  Join Us
</button>

       
          
          <p className="mt-4 text-gray-300">Call Now for More Info: <span className="font-bold text-red-500">600583411</span></p>
        </div>
      </section>
    </div>
  );
}

export default GymDetailsPage;


