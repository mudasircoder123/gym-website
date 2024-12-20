import React from "react";
import img1 from './Assets/cardio.jpg';
import img2 from './Assets/gym.jpg';
import img3 from './Assets/weightLoss.jpg';
import BMICalculator from "./Bmi";
import Nav from "./Nav";
import Pricing from "./Subs";
const Program = () => {
  return (
    <>
  <Nav/>
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600 text-center mt-5 mb-12 animate__animated animate__fadeIn">
        Our Programs: Unlock Your Full Potential
      </h1>
      
      <div className="container flex flex-wrap gap-8 justify-center mt-8 px-4">

        {/* Cardio Program */}
        <div className="max-w-sm rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <img className="w-full h-60 object-cover rounded-t-xl" src={img1} alt="Cardio" />
          <div className="bg-gray-800 text-white p-6 rounded-b-xl">
            <div className="font-extrabold text-2xl mb-3 text-yellow-400">Cardio</div>
            <p className="text-xl">
              Push your limits with our heart-pumping, calorie-burning cardio sessions. Whether you're aiming for fat loss or boosting your stamina, our high-energy classes will have you sweating and smashing your goals. Let's get moving!
            </p>
          </div>
        </div>

        {/* Strength Training Program */}
        <div className="max-w-sm rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <img className="w-full h-60 object-cover rounded-t-xl" src={img2} alt="Strength Training" />
          <div className="bg-gray-800 text-white p-6 rounded-b-xl">
            <div className="font-extrabold text-2xl mb-3 text-red-500">Strength Training</div>
            <p className="text-xl">
              Ready to build muscle and power? Our strength training programs will help you pack on lean muscle, increase your strength, and take your workouts to the next level. Grab the weights and let’s crush it together!
            </p>
          </div>
        </div>

        {/* Functional Training Program */}
        <div className="max-w-sm rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <img className="w-full h-60 object-cover rounded-t-xl" src={img3} alt="Functional Training" />
          <div className="bg-gray-800 text-white p-6 rounded-b-xl">
            <div className="font-extrabold text-2xl mb-3 text-green-400">Functional Training</div>
            <p className="text-xl">
              Unlock the full potential of your body with functional training. Improve flexibility, balance, and core strength, so you can dominate not just in the gym but in everyday life. Get ready to move better, perform stronger, and feel unstoppable!
            </p>
          </div>
        </div>

      </div>

      {/* BMI Calculator Component */}
      <div className="mt-16 bg-gradient-to-r from-teal-500 to-indigo-500 p-8 rounded-xl shadow-lg">
        <h2 className="text-center text-3xl font-bold text-white mb-8">Track Your Progress with Our BMI Calculator</h2>
        <BMICalculator />
      </div>
      <Pricing/>
    </>
  );
};

export default Program;
