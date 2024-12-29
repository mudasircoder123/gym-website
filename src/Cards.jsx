import React from "react";
import imgFaizan from './Assets/faizan.jpg';
import imgArsalan from './Assets/ars.jpg';

const Cards = () => {
  const insta = "https://www.instagram.com/ars_lan_?igsh=eGs1MzR5aTVlOHZs";
  const fb = 'https://www.facebook.com/moninbutt.arsalanbutt?mibextid=ZbWKwL';
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 p-8 bg-gradient-to-br from-gray-800 to-gray-900 text-neutral-50">
      {/* Card for Faizan Fayaz */}
      <article className="group flex flex-col max-w-sm overflow-hidden rounded-lg shadow-lg bg-neutral-800 border border-neutral-700 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
        {/* Image Section */}
        <div className="overflow-hidden h-60">
          <img
            src={imgFaizan}
            alt="Faizan Fayaz - Gym Trainer"
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* Content Section */}
        <div className="p-6 flex flex-col gap-4">
          <h3
            className="text-2xl font-extrabold text-white tracking-wide"
            aria-describedby="faizanDescription"
          >
            Faizan Fayaz
          </h3>
          <p
            id="faizanDescription"
            className="text-lg leading-relaxed text-gray-400"
          >
            Owner, Co-founder, and Trainer at **The Fitness Connection Gym**. 
            Multi-gold medalist in fitness competitions, bringing passion and expertise to fitness training.
          </p>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-center gap-4 p-4">
          <a
            href="https://www.facebook.com/share/1DUDAzQRwe/"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-300"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/thefitnessconnection86?igsh=bm4yYmc4d2JoNGZ1"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 text-white rounded-full shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-300"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2.2c3.3 0 3.7 0 5.1.1 1.3.1 2.3.3 2.9 1.2.6.6 1 1.6 1.2 2.9.1 1.3.1 1.8.1 5.1s0 3.7-.1 5.1c-.1 1.3-.3 2.3-1.2 2.9-.6.6-1.6 1-2.9 1.2-1.3.1-1.8.1-5.1.1s-3.7 0-5.1-.1c-1.3-.1-2.3-.3-2.9-1.2-.6-.6-1-1.6-1.2-2.9-.1-1.3-.1-1.8-.1-5.1s0-3.7.1-5.1c.1-1.3.3-2.3 1.2-2.9.6-.6 1.6-1 2.9-1.2 1.3-.1 1.8-.1 5.1-.1zM12 0c-3.5 0-4 .1-5.4.1-1.3 0-2.5.3-3.4.9-1.2.7-2.1 1.7-2.8 2.8-.6.9-.9 2.1-.9 3.4-.1 1.3-.1 1.9-.1 5.4s0 4.1.1 5.4c0 1.3.3 2.5.9 3.4.7 1.2 1.7 2.1 2.8 2.8.9.6 2.1.9 3.4.9 1.3 0 1.9.1 5.4.1s4-.1 5.4-.1c1.3 0 2.5-.3 3.4-.9 1.2-.7 2.1-1.7 2.8-2.8.6-.9.9-2.1.9-3.4.1-1.3.1-1.9.1-5.4s0-4.1-.1-5.4c0-1.3-.3-2.5-.9-3.4-.7-1.2-1.7-2.1-2.8-2.8-1-.6-2.1-.9-3.4-.9-1.3-.1-1.9-.1-5.4-.1zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.4c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </article>

      {/* Card for Arsalan */}
      <article className="group flex flex-col max-w-sm overflow-hidden rounded-lg shadow-lg bg-neutral-800 border border-neutral-700 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
        {/* Image Section */}
        <div className="overflow-hidden h-60">
          <img
            src={imgArsalan}
            alt="Arsalan - Gym Enthusiast"
            className="object-cover w-full h-96 transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* Content Section */}
        <div className="p-6 flex flex-col gap-4">
          <h3
            className="text-2xl font-extrabold text-white tracking-wide"
            aria-describedby="arsalanDescription"
          >
            Arsalan
          </h3>
          <p
            id="arsalanDescription"
            className="text-lg leading-relaxed text-gray-400"
          >
            Dedicated gym enthusiast, passionate about strength training and a healthy lifestyle. Committed to pushing limits and inspiring others to achieve their fitness goals.
          </p>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-center gap-4 p-4">
        <a
            href={fb}
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-300"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href={insta}
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 text-white rounded-full shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-300"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2.2c3.3 0 3.7 0 5.1.1 1.3.1 2.3.3 2.9 1.2.6.6 1 1.6 1.2 2.9.1 1.3.1 1.8.1 5.1s0 3.7-.1 5.1c-.1 1.3-.3 2.3-1.2 2.9-.6.6-1.6 1-2.9 1.2-1.3.1-1.8.1-5.1.1s-3.7 0-5.1-.1c-1.3-.1-2.3-.3-2.9-1.2-.6-.6-1-1.6-1.2-2.9-.1-1.3-.1-1.8-.1-5.1s0-3.7.1-5.1c.1-1.3.3-2.3 1.2-2.9.6-.6 1.6-1 2.9-1.2 1.3-.1 1.8-.1 5.1-.1zM12 0c-3.5 0-4 .1-5.4.1-1.3 0-2.5.3-3.4.9-1.2.7-2.1 1.7-2.8 2.8-.6.9-.9 2.1-.9 3.4-.1 1.3-.1 1.9-.1 5.4s0 4.1.1 5.4c0 1.3.3 2.5.9 3.4.7 1.2 1.7 2.1 2.8 2.8.9.6 2.1.9 3.4.9 1.3 0 1.9.1 5.4.1s4-.1 5.4-.1c1.3 0 2.5-.3 3.4-.9 1.2-.7 2.1-1.7 2.8-2.8.6-.9.9-2.1.9-3.4.1-1.3.1-1.9.1-5.4s0-4.1-.1-5.4c0-1.3-.3-2.5-.9-3.4-.7-1.2-1.7-2.1-2.8-2.8-1-.6-2.1-.9-3.4-.9-1.3-.1-1.9-.1-5.4-.1zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.4c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Cards;

