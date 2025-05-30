'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function Information() {
  const router = useRouter();
  const countries = [
    { code: "IN", name: "India", flag: "https://flagcdn.com/w40/in.png" },
    { code: "US", name: "USA", flag: "https://flagcdn.com/w40/us.png" },
    { code: "UK", name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
    { code: "CA", name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
    { code: "AU", name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentStep = 1;
  const purple = "rgba(120, 60, 145, 1)";

  useEffect(() => {
    // Prefetch both next and previous pages
    router.prefetch('/influencer-signin/information/kind-of-influencer');
    router.prefetch('/influencer-signin');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50 flex flex-col">
      <nav className="bg-white shadow-md p-4 px-8">
        <div className="flex items-center">
          <span className="text-lg font-bold tracking-wider">"</span>
          <span className="text-lg font-bold tracking-wider rotate-45"> ) </span>
          <span className="text-sm font-bold tracking-wider ml-2">SOCIAL STRATIX</span>
        </div>
      </nav>

      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white p-6 rounded-lg border w-full max-w-md">
          <p className="text-sm text-gray-400 mb-2">Question 1/5</p>

          <div className="flex mb-4 mt-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="h-1 flex-1 mx-0.5 rounded-full"
                style={{
                  backgroundColor: index < currentStep ? purple : '#e5e7eb'
                }}
              />
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6">Where are you from?</h2>

          <div className="flex gap-2 mb-4">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-12 h-10 border rounded-md flex items-center justify-center bg-white transition-colors hover:bg-gray-50"
                style={{ border: `1px solid ${purple}` }}
                suppressHydrationWarning
              >
                <img
                  src={selectedCountry.flag}
                  alt={selectedCountry.code}
                  className="w-6 h-6"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute mt-1 z-10 bg-white border rounded-md shadow-md w-32">
                  {countries.map((country) => (
                    <div
                      key={country.code}
                      className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer transition-colors"
                      onClick={() => {
                        setSelectedCountry(country);
                        setDropdownOpen(false);
                      }}
                    >
                      <img src={country.flag} alt={country.name} className="w-5 h-5" />
                      <span className="text-sm">{country.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <input
              type="text"
              placeholder="1234567890"
              className="flex-1 px-4 py-2 outline-none text-gray-700 bg-white rounded-md placeholder-black transition-colors hover:bg-gray-50"
              style={{ border: `1px solid ${purple}` }}
              suppressHydrationWarning
            />
          </div>

          <select
            className="w-full mb-4 p-2 rounded-md transition-colors hover:bg-gray-50"
            style={{ border: `1px solid ${purple}` }}
            suppressHydrationWarning
          >
            <option>Select country</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>

          <input
            type="text"
            placeholder="State"
            className="w-full mb-4 p-2 rounded-md placeholder-black transition-colors hover:bg-gray-50"
            style={{ border: `1px solid ${purple}` }}
            suppressHydrationWarning
          />

          <input
            type="text"
            placeholder="Pincode"
            className="w-full mb-4 p-2 rounded-md placeholder-black transition-colors hover:bg-gray-50"
            style={{ border: `1px solid ${purple}` }}
            suppressHydrationWarning
          />

          <input
            type="text"
            placeholder="City"
            className="w-full mb-4 p-2 rounded-md placeholder-black transition-colors hover:bg-gray-50"
            style={{ border: `1px solid ${purple}` }}
            suppressHydrationWarning
          />

          <textarea
            placeholder="Address (Optional)"
            className="w-full p-2 rounded-md placeholder-black transition-colors hover:bg-gray-50"
            style={{ border: `1px solid ${purple}` }}
            suppressHydrationWarning
          />

          <button
            type="button"
            onClick={() => router.push('/influencer-signin/information/kind-of-influencer')}
            className="w-full mt-6 text-white py-2 rounded-full font-semibold transition-colors hover:brightness-110"
            style={{ backgroundColor: purple }}
            suppressHydrationWarning
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}




