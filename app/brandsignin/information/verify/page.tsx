"use client";

import { useState } from 'react';

import { useRouter } from 'next/navigation';

export default function Verify() {
  const router = useRouter();
  const currentStep = 1; 
  const purple = "rgba(120, 60, 145, 1)";


const [otp, setOtp] = useState('');
  const [isFocused, setIsFocused] = useState(false);


  const isActive = isFocused || otp.length > 0;


  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 px-8">
        <div className="flex items-center">
  <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider">"</h1>
  <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider rotate-40">)</h1>
  <span className="ml-2 text-sm "></span>
  <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider">SOCIAL STRATIX</h1>
</div>
      </nav>

      {/* Form container */}
      <div className="flex justify-center items-center flex-grow px-4">
        <div className="bg-white p-6 sm:p-8 rounded-lg border w-full max-w-lg">
          <p className="text-sm text-gray-400 mb-2">Question 1/5</p>

          {/* Progress bar */}
          <div className="flex mb-4 mt-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="h-1 flex-1 mx-0.5 rounded-full"
                style={{
                  backgroundColor: index < currentStep ? purple : '#e5e7eb'
                }}
              ></div>
            ))}
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span>Verify your email</span>
            </h2>

            <span>We have sent an OTP to your email, please </span>           
          </div>

          {/* Input */}
           <div className="relative w-full mb-4">
      <label
        className={`absolute left-3 px-1 transition-all bg-white duration-200 ${
          isActive ? 'text-sm -top-2' : 'top-2 text-gray-500'
        }`}
        style={isActive ? { color: purple, zIndex: 1 } : { zIndex: 1 }}
      >
        One Time Password
      </label>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-3 pt-2 pb-2 text-gray-900 bg-white border rounded-md outline-none"
        style={{ border: `2px solid ${purple}` }}
      />
    </div>
          {/* Buttons */}
          <button
            type="button"
            onClick={() => router.push('/brandsignin/information/about')}
            style={{ background: purple }}
            className="w-full text-white cursor-pointer font-bold py-2 mt-2 rounded-full"
          >
            Resend
          </button>

         </div>
      </div>
    </div>
  );
}
