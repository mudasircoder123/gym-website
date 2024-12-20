import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const bmiValue = (weight / (height * height)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-black from-blue-900 via-teal-800 to-green-700 rounded-lg shadow-xl p-6">
      <h2 className="text-3xl font-extrabold text-center text-white mb-4 tracking-wide">
        Fitness BMI Calculator
      </h2>

      <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="weight">
          Weight (kg)
        </label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-4 border-2 border-gray-300 rounded-lg text-xl"
          placeholder="Enter your weight"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="height">
          Height (meters)
        </label>
        <input
          type="number"
          step="0.01"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-4 border-2 border-gray-300 rounded-lg text-xl"
          placeholder="Enter your height"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="gender">
          Gender
        </label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-4 border-2 border-gray-300 rounded-lg text-xl"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        onClick={calculateBMI}
        className="w-full py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white font-bold rounded-lg hover:scale-105 transition duration-300"
      >
        <i className="fas fa-weight-hanging mr-2"></i> Calculate BMI
      </button>

      {bmi && (
        <div className="mt-6 text-center">
          <p className="text-4xl font-semibold text-white mb-2">
            Your BMI: <span className="text-yellow-400">{bmi}</span>
          </p>
          <p className="text-2xl text-white">{category}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;


