import React from 'react';
import Nav from './Nav';

const Pricing = () => {
  return (
    <>
      
      <div className="pricing-section py-16">
        <div className="text-center ">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide">Unleash Your Power with Our Plans</h2>
          <p className="mt-4 text-xl sm:text-2xl font-semibold">
            Choose the best plan to fuel your fitness journey. Start for free and level up when you're ready!
          </p>
        </div>

        <div className="mt-16 container space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 mx-auto">
          {/* Free Plan */}
          <div className="relative p-8 border border-gray-300 rounded-2xl shadow-lg bg-gray-900 text-white">
            <h3 className="text-2xl font-semibold">Free</h3>
            <p className="mt-4 flex items-baseline text-5xl font-extrabold tracking-tight">
              ₹0 <span className="ml-1 text-lg font-medium">/month</span>
            </p>
            <p className="mt-6">Perfect for testing the waters</p>
            <ul className="mt-6 space-y-4 text-lg">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3">10 Credits</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3">Generate Video (2 credits)</span>
              </li>
            </ul>
            <a className="mt-8 block w-full py-3 bg-blue-500 text-white font-medium text-center rounded-lg hover:bg-blue-600 transition duration-300" href="/auth/login">
              Sign Up for Free
            </a>
          </div>

          {/* Pro Plan */}
          <div className="relative p-8 border border-gray-300 rounded-2xl shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <h3 className="text-2xl font-semibold">Pro</h3>
            <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
              Most Popular
            </p>
            <p className="mt-4 flex items-baseline text-5xl font-extrabold tracking-tight">
              ₹500 <span className="ml-1 text-lg font-medium">/month</span>
            </p>
            <p className="mt-6">Ideal for committed gym enthusiasts</p>
            <ul className="mt-6 space-y-4 text-lg">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3">30 Credits</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3">GPT-4 Powered</span>
              </li>
            </ul>
            <a className="mt-8 block w-full py-3 bg-emerald-500 text-white font-medium text-center rounded-lg hover:bg-emerald-600 transition duration-300" href="/auth/login">
              Sign Up for Pro
            </a>
          </div>

          {/* 6 Months Plan */}
          <div className="relative p-8 border border-gray-300 rounded-2xl shadow-lg bg-gray-900 text-white">
            <h3 className="text-2xl font-semibold">6 Months Plan</h3>
            <p className="mt-4 flex items-baseline text-5xl font-extrabold tracking-tight">
              ₹2500 <span className="ml-1 text-lg font-medium">/6 months</span>
            </p>
            <p className="mt-6">For those who are serious about progress</p>
            <ul className="mt-6 space-y-4 text-lg">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3">500 Credits</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3">Unlimited Videos</span>
              </li>
            </ul>
            <a className="mt-8 block w-full py-3 bg-emerald-500 text-white font-medium text-center rounded-lg hover:bg-emerald-600 transition duration-300" href="/auth/login">
              Sign Up for 6 Months Plan
            </a>
          </div>

          {/* Annual Plan */}
          <div className="relative p-8 border border-gray-300 rounded-2xl shadow-lg bg-gradient-to-r from-red-600 to-orange-500 text-white">
            <h3 className="text-2xl font-semibold">Annual Plan</h3>
            <p className="mt-4 flex items-baseline text-5xl font-extrabold tracking-tight">
              ₹5200 <span className="ml-1 text-lg font-medium">/year</span>
            </p>
            <p className="mt-6">Save and stay committed</p>
            <ul className="mt-6 space-y-4 text-lg">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3">500 Credits/month</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3">12-Month Commitment</span>
              </li>
            </ul>
            <a className="mt-8 block w-full py-3 bg-emerald-500 text-white font-medium text-center rounded-lg hover:bg-emerald-600 transition duration-300" href="/auth/login">
              Sign Up for Annual Plan
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;

