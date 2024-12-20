import React from "react";
import Cards from "./Cards";
import img3 from './Assets/hijama.jpg';
import img2 from './Assets/Strength.jpg';
import img1 from './Assets/girI.jpg';
import Program from "./Program";
import HeroSection from "./Hero";
import Contact from "./Cntact";
import Nav from "./Nav";
const About = () => {
  
  return (
    <>
  <Nav/>
      <div className="bg-gradient-to-br from-gray-900 to-indigo-800 text-gray-50">
        {/* Hero Section */}
        <section className="text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-400 mb-4">About Us</h1>
            <p className="mt-4 text-lg md:text-xl font-semibold text-yellow-300">
              Empowering fitness enthusiasts since 2018.
            </p>
          </div>
        </section>

        {/* Blogs Section */}
        <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
          <div className="container">
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full px-4">
                <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                  <h2 className="font-extrabold text-3xl sm:text-4xl md:text-[40px] text-white mb-4 underline underline-offset-4">
                    Our Blogs
                  </h2>
                  <p className="text-4xl text-body-color font-sans text-white">
                    "Stay Inspired: Insights, Tips, and Stories to Elevate Your Fitness Journey"
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              {[{
                  title: 'Fat burning cardio workout to keep yourself in shape',
                  description:
                    'Discover the ultimate cardio routines that help you burn fat effectively and maintain a healthier lifestyle.',
                  imgSrc: img1,
                },
                {
                  title: 'Build yourself in hours of exercise everyday for 6 months',
                  description:
                    'Experience the healing benefits of Hijama therapy. Our certified professionals offer safe and effective cupping therapy to enhance blood circulation, detoxify your body, and promote overall well-being.',
                  imgSrc: img2,
                },
                {
                  title: 'Revitalize Your Body with Expert Hijama Therapy',
                  description:
                    'Learn the fundamentals of Crossfit with our beginner’s guide, designed to set you on a path to success.',
                  imgSrc: img3,
                },
              ].map((blog, index) => (
                <div className="w-full md:w-1/2 lg:w-1/3 px-4" key={index}>
                  <div className="max-w-[370px] mx-auto mb-10">
                    <div className="rounded overflow-hidden mb-8 shadow-lg hover:scale-105 transition-all duration-300">
                      <img
                        src={blog.imgSrc}
                        alt="blog"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-yellow-400 hover:text-yellow-300"
                        >
                          {blog.title}
                        </a>
                      </h3>
                      <p className="text-base text-body-color font-mono text-white">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <h1 className="text-4xl font-extrabold text-center text-white mt-8">
        Meet Our Expert Coaches
      </h1>
      <Cards />
      
    </>
  );
};

export default About;
