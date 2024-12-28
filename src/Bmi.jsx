import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [gender, setGender] = useState('male');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (!weight || !feet || !inches) {
      alert("Please enter all fields.");
      return;
    }

    // Convert height from feet and inches to meters
    const heightInMeters = (parseFloat(feet) * 0.3048) + (parseFloat(inches) * 0.0254);
    
    // Calculate BMI
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    // Determine the BMI category
    let categoryValue = '';
    if (bmiValue < 18.5) {
      categoryValue = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      categoryValue = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      categoryValue = 'Overweight';
    } else {
      categoryValue = 'Obesity';
    }
    setCategory(categoryValue);
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
          Height (Feet and Inches)
        </label>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <input
              type="number"
              id="feet"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg text-xl"
              placeholder="Feet"
            />
          </div>
          <div className="w-1/2">
            <input
              type="number"
              id="inches"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg text-xl"
              placeholder="Inches"
            />
          </div>
        </div>
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



