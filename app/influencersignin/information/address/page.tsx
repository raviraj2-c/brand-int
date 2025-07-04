'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

export default function Information() {
  const router = useRouter();
  const purple = 'rgba(120, 60, 145, 1)';

  const countries = [
    {
      code: 'IN',
      name: 'India',
      flag: 'https://flagcdn.com/w40/in.png',
      phoneRegex: /^(?:\+91|91)?[6-9]\d{9}$/,
      placeholder: '9876543210',
      states: [
        { code: 'MH', name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur'] },
        { code: 'DL', name: 'Delhi', cities: ['New Delhi', 'Dwarka', 'Rohini'] },
        { code: 'KA', name: 'Karnataka', cities: ['Bengaluru', 'Mysore', 'Mangalore'] }
      ]
    },
    {
      code: 'US',
      name: 'USA',
      flag: 'https://flagcdn.com/w40/us.png',
      phoneRegex: /^(?:\+1|1)?[2-9]\d{2}[2-9]\d{2}\d{4}$/,
      placeholder: '+1 2125551234',
      states: [
        { code: 'CA', name: 'California', cities: ['Los Angeles', 'San Francisco', 'San Diego'] },
        { code: 'NY', name: 'New York', cities: ['New York City', 'Buffalo', 'Rochester'] },
        { code: 'TX', name: 'Texas', cities: ['Houston', 'Dallas', 'Austin'] }
      ]
    }
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [phone, setPhone] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [pincode, setPincode] = useState('');
  const [pincodeError, setPincodeError] = useState('');
  const [pincodeTouched, setPincodeTouched] = useState(false);

  const currentStep = 1;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const validatePhone = (number: string, regex: RegExp) => regex.test(number);
  const validatePincode = (value: string) => {
    if (!/^\d+$/.test(value)) return 'Pincode must be numeric';
    if (value.length < 4) return 'Pincode must be at least 4 digits';
    return '';
  };

  const availableStates = selectedCountry.states;
  const availableCities =
    availableStates.find((s) => s.code === selectedState)?.cities || [];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50 flex flex-col">
      <nav className="bg-white shadow-md p-4 px-8">
        <div className="flex items-center">
          <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider">"</h1>
          <h1 className="text-lg font-bold text-[rgb(43 38 51)] rotate-40">)</h1>
          <h1 className="text-lg font-bold text-[rgb(43 38 51)] ml-2">SOCIAL STRATIX</h1>
        </div>
      </nav>

      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
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

          {/* Country & Phone */}
          <div className="flex gap-2 mb-4" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-12 h-10 cursor-pointer border rounded-md flex items-center justify-center bg-white hover:bg-gray-50"
              style={{ border: `1px solid ${purple}` }}
            >
              <img src={selectedCountry.flag} alt={selectedCountry.code} className="w-6 h-6" />
            </button>

            {dropdownOpen && (
              <div className="absolute mt-1 z-10 bg-white border rounded-md shadow-md w-40">
                {countries.map((country) => (
                  <div
                    key={country.code}
                    className="flex cursor-pointer items-center gap-2 px-2 py-1 hover:bg-gray-100"
                    onClick={() => {
                      setSelectedCountry(country);
                      setSelectedState('');
                      setSelectedCity('');
                      setDropdownOpen(false);
                    }}
                  >
                    <img src={country.flag} alt={country.name} className="w-5 h-5" />
                    <span className="text-sm">{country.name}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="relative flex-1">
              <input
                type="text"
                placeholder={selectedCountry.placeholder}
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.trim();
                  setPhone(value);
                  setIsValidPhone(validatePhone(value, selectedCountry.phoneRegex));
                  setPhoneTouched(true);
                }}
                onBlur={() => setPhoneTouched(true)}
                className={`w-full px-4 py-2 rounded-md text-gray-700 bg-white placeholder-gray-400 hover:bg-gray-50 ${
                  !isValidPhone && phoneTouched ? 'border-red-500' : ''
                }`}
                style={{ border: `1px solid ${!isValidPhone && phoneTouched ? 'red' : purple}` }}
              />
              {!isValidPhone && phoneTouched && (
                <>
                  <X className="absolute right-3 top-5 transform -translate-y-1/2 text-red-500 w-5 h-5" />
                  <p className="text-red-500 text-sm mt-1">Invalid phone number format</p>
                </>
              )}
            </div>
          </div>

          {/* State Dropdown */}
          <select
  className={`w-full mb-4 p-2 rounded-md hover:bg-gray-50 ${
    !selectedState ? 'text-gray-400' : 'text-gray-700'
  }`}
  style={{ border: `1px solid ${purple}` }}
  value={selectedState}
  onChange={(e) => {
    setSelectedState(e.target.value);
    setSelectedCity('');
  }}
>
  <option value="">State</option>
  {availableStates.map((state) => (
    <option key={state.code} value={state.code}>
      {state.name}
    </option>
  ))}
</select>


          {/* City Dropdown */}
          <select
  className={`w-full mb-4 p-2 rounded-md hover:bg-gray-50 ${
    !selectedState ? 'text-gray-400' : 'text-gray-700'
  }`}
  style={{ border: `1px solid ${purple}` }}
  value={selectedState}
  onChange={(e) => {
    setSelectedState(e.target.value);
    setSelectedCity('');
  }}
>
            <option value="">City</option>
            {availableCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          {/* Pincode */}
          <div className="relative w-full mb-4">
            <input
              type="text"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => {
                const value = e.target.value;
                setPincode(value);
                if (pincodeTouched) setPincodeError(validatePincode(value));
              }}
              onBlur={() => {
                setPincodeTouched(true);
                setPincodeError(validatePincode(pincode));
              }}
              className={`w-full p-2 rounded-md placeholder-gray-400 text-gray-700 hover:bg-gray-50 ${
                pincodeError ? 'border-red-500' : ''
              }`}
              style={{ border: `1px solid ${pincodeError ? 'red' : purple}` }}
            />
            {pincodeError && (
              <>
                <X className="absolute right-3 top-5 transform -translate-y-1/2 text-red-500 w-5 h-5" />
                <p className="text-red-500 text-sm mt-1">{pincodeError}</p>
              </>
            )}
          </div>

          {/* Address */}
          <textarea
            placeholder="Address (Optional)"
            className="w-full p-2 rounded-md placeholder-gray-400 text-gray-700 hover:bg-gray-50"
            style={{ border: `1px solid ${purple}` }}
          />

          {/* Next Button */}
          <button
            type="button"
            onClick={() => router.push('/influencersignin/information/kind-of-influencer')}
            className="w-full mt-6 text-white py-2 rounded-full font-semibold hover:brightness-110"
            style={{ backgroundColor: purple }}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
