'use client';

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';

export default function Information() {
  const router = useRouter();
  const purple = "rgba(120, 60, 145, 1)";

  const countries = [
    {
      code: "IN",
      name: "India",
      flag: "https://flagcdn.com/w40/in.png",
      phoneRegex: /^(?:\+91|91)?[6-9]\d{9}$/,
      placeholder: "9876543210",
      states: [
        {
          code: "MH",
          name: "Maharashtra",
          cities: ["Mumbai", "Pune", "Nagpur"]
        },
        {
          code: "DL",
          name: "Delhi",
          cities: ["New Delhi", "Dwarka", "Rohini"]
        },
        {
          code: "KA",
          name: "Karnataka",
          cities: ["Bengaluru", "Mysore", "Mangalore"]
        }
      ]
    },
    {
      code: "US",
      name: "USA",
      flag: "https://flagcdn.com/w40/us.png",
      phoneRegex: /^(?:\+1|1)?[2-9]\d{2}[2-9]\d{2}\d{4}$/,
      placeholder: "+1 2125551234",
      states: [
        {
          code: "CA",
          name: "California",
          cities: ["Los Angeles", "San Francisco", "San Diego"]
        },
        {
          code: "NY",
          name: "New York",
          cities: ["New York City", "Buffalo", "Rochester"]
        },
        {
          code: "TX",
          name: "Texas",
          cities: ["Houston", "Dallas", "Austin"]
        }
      ]
    },
    {
      code: "UK",
      name: "UK",
      flag: "https://flagcdn.com/w40/gb.png",
      phoneRegex: /^(?:\+44|44)?7\d{9}$/,
      placeholder: "+44 7123456789",
      states: [
        {
          code: "ENG",
          name: "England",
          cities: ["London", "Manchester", "Liverpool"]
        },
        {
          code: "SCT",
          name: "Scotland",
          cities: ["Edinburgh", "Glasgow", "Aberdeen"]
        },
        {
          code: "WLS",
          name: "Wales",
          cities: ["Cardiff", "Swansea", "Newport"]
        }
      ]
    },
    {
      code: "CA",
      name: "Canada",
      flag: "https://flagcdn.com/w40/ca.png",
      phoneRegex: /^(?:\+1|1)?[2-9]\d{2}[2-9]\d{2}\d{4}$/,
      placeholder: "+1 6471234567",
      states: [
        {
          code: "ON",
          name: "Ontario",
          cities: ["Toronto", "Ottawa", "Hamilton"]
        },
        {
          code: "QC",
          name: "Quebec",
          cities: ["Montreal", "Quebec City", "Laval"]
        },
        {
          code: "BC",
          name: "British Columbia",
          cities: ["Vancouver", "Victoria", "Richmond"]
        }
      ]
    },
    {
      code: "AU",
      name: "Australia",
      flag: "https://flagcdn.com/w40/au.png",
      phoneRegex: /^(?:\+61|61)?4\d{8}$/,
      placeholder: "+61 412345678",
      states: [
        {
          code: "NSW",
          name: "New South Wales",
          cities: ["Sydney", "Newcastle", "Wollongong"]
        },
        {
          code: "VIC",
          name: "Victoria",
          cities: ["Melbourne", "Geelong", "Ballarat"]
        },
        {
          code: "QLD",
          name: "Queensland",
          cities: ["Brisbane", "Gold Coast", "Cairns"]
        }
      ]
    }
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedState, setSelectedState] = useState(selectedCountry.states[0]);
  const [selectedCity, setSelectedCity] = useState(selectedState.cities[0]);
  const [phone, setPhone] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentStep = 1;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const firstState = selectedCountry.states[0];
    setSelectedState(firstState);
    setSelectedCity(firstState.cities[0]);
  }, [selectedCountry]);

  useEffect(() => {
    setSelectedCity(selectedState.cities[0]);
  }, [selectedState]);

  const validatePhone = (number: string, regex: RegExp) => regex.test(number);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50 flex flex-col">
      <nav className="bg-white shadow-md p-4 px-8">
        <div className="flex items-center">
          <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider">"</h1>
          <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider rotate-40">)</h1>
          <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider ml-2">SOCIAL STRATIX</h1>
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
                style={{ backgroundColor: index < currentStep ? purple : '#e5e7eb' }}
              />
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6">Where are you from?</h2>

          <div className="flex gap-2 mb-4" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-12 h-10 cursor-pointer border rounded-md flex items-center justify-center bg-white transition-colors hover:bg-gray-50"
              style={{ border: `1px solid ${purple}` }}
            >
              <img src={selectedCountry.flag} alt={selectedCountry.code} className="w-6 h-6" />
            </button>

            {dropdownOpen && (
              <div className="absolute mt-1 z-10 bg-white border rounded-md shadow-md w-32">
                {countries.map((country) => (
                  <div
                    key={country.code}
                    className="flex cursor-pointer items-center gap-2 px-2 py-1 hover:bg-gray-100 transition-colors"
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

            <input
              type="text"
              placeholder={selectedCountry.placeholder}
              value={phone}
              onChange={(e) => {
                const value = e.target.value.trim();
                setPhone(value);
                setIsValidPhone(validatePhone(value, selectedCountry.phoneRegex));
              }}
              className={`flex-1 px-4 py-2 outline-none text-gray-700 bg-white rounded-md placeholder-black transition-colors hover:bg-gray-50 ${
                !isValidPhone ? 'border-red-500' : ''
              }`}
              style={{ border: `1px solid ${!isValidPhone ? 'red' : purple}` }}
            />
          </div>

          <select
            className="w-full mb-4 p-2 rounded-md transition-colors hover:bg-gray-50"
            style={{ border: `1px solid ${purple}` }}
            value={selectedState.code}
            onChange={(e) => {
              const state = selectedCountry.states.find(s => s.code === e.target.value);
              if (state) setSelectedState(state);
            }}
          >
            {selectedCountry.states.map(state => (
              <option key={state.code} value={state.code}>{state.name}</option>
            ))}
          </select>

          <select
            className="w-full mb-4 p-2 rounded-md transition-colors hover:bg-gray-50"
            style={{ border: `1px solid ${purple}` }}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {selectedState.cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Pincode"
            className="w-full mb-4 p-2 rounded-md placeholder-black transition-colors hover:bg-gray-50"
            style={{ border: `1px solid ${purple}` }}
          />

          <textarea
            placeholder="Address (Optional)"
            className="w-full p-2 rounded-md placeholder-black transition-colors hover:bg-gray-50"
            style={{ border: `1px solid ${purple}` }}
          />

          <button
            type="button"
            onClick={() => router.push('/influencersignin/information/kind-of-influencer')}
            className="w-full mt-6 cursor-pointer text-white py-2 rounded-full font-semibold transition-colors hover:brightness-110"
            style={{ backgroundColor: purple }}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
