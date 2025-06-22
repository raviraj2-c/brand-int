"use client";

import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Kind() {
  const router = useRouter();
  const currentStep = 2;
  const purple = "rgba(120, 60, 145, 1)";

  useEffect(() => {
    router.prefetch('/influencersignin/information/skill');
    router.prefetch('/influencersignin/information/address');
  }, [router]);

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
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-lg">
          <p className="text-sm text-gray-400 mb-2">Question 2/5</p>

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
              <button 
                type="button"
                onClick={() => router.push('/influencersignin/information/address')}
                className="bg-gray-200 cursor-pointer p-2 rounded-md transition-colors hover:bg-gray-300"
              >
                <ArrowLeft size={20} className="text-gray-700" />
              </button>
              <span>Describe the kind of influencer you are</span>
            </h2>

            <a 
              href="#" 
              style={{ color: purple }} 
              className="text-sm font-bold ml-10 mt-1 inline-block"
            >
              View Example
            </a>
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Describe the kind of influencer you are"
            className="w-full px-4 py-2 outline-none text-gray-700 bg-white rounded-md placeholder-gray-400 mb-4"
            style={{ border: `1px solid ${purple}` }}
          />

          {/* Buttons */}
          <button
            type="button"
            onClick={() => router.push('/influencersignin/information/skill')}
            style={{ background: purple }}
            className="w-full cursor-pointer text-white font-bold py-2 mt-2 rounded-full transition-colors hover:brightness-110"
          >
            NEXT
          </button>

          <button
            type="button"
            onClick={() => router.push('/influencersignin/information/skill')}
            style={{ color: purple }}
            className="w-full cursor-pointer font-bold py-2 mt-2 rounded-full transition-colors hover:bg-purple-50"
          >
            SKIP
          </button>

          {/* Image */}
          <div className="mt-6 flex justify-center ">
            <img src="/Kind.png" alt="Kind Example" className="w-screen" />
          </div>
        </div>
      </div>
    </div>
  );
}
