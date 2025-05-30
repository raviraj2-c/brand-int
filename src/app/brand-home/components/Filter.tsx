// src/components/Filter.tsx
import { useState } from "react";

export default function Filter() {
  const [advanced, setAdvanced] = useState<boolean>(true);
  const filters: string[] = [
    "Followers/Subscribers",
    "Avg view per post",
    "Highest View",
    "Avg likes per post",
    "Highest likes",
  ];
  const [sliderValues, setSliderValues] = useState<number[]>(
    new Array(filters.length).fill(1500)
  );

  const handleSliderChange = (index: number, value: number) => {
    const updated = [...sliderValues];
    updated[index] = value;
    setSliderValues(updated);
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-sm border border-gray-100 text-xs font-medium text-gray-800 mb-4">
      <div className="text-xs font-medium text-gray-800">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-base">Filters</h2>
          <button className="text-[rgba(120,60,145,1)] font-semibold text-xs">
            CLEAR ALL
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3 items-end">
          <div>
            <label className="block mb-1 text-gray-700 text-sm">Select platform</label>
            <select className="w-full border border-gray-300 rounded-xs px-2 py-1 text-xs">
              <option>Instagram, YouTube...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-gray-700 text-sm">Select Tags</label>
            <select className="w-full border border-gray-300 rounded-xs px-2 py-1 text-xs">
              <option>Instagram, YouTube...</option>
            </select>
          </div>

          <div className="relative">
            <label className="block mb-1 text-gray-700 text-sm">Select Location</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xs px-2 py-1 text-xs"
              placeholder="All Location"
            />
            <span className="absolute right-2 top-8 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <label className="text-gray-700 text-sm">Advanced Filters</label>
            <button
              onClick={() => setAdvanced(!advanced)}
              className={`w-8 h-5 flex items-center rounded-full p-0.5 transition-colors duration-300 ${advanced ? "bg-[rgba(120,60,145,1)]" : "bg-gray-300"}`}
            >
              <div
                className={`w-3.5 h-3.5 bg-white rounded-full shadow-md transform duration-300 ${advanced ? "translate-x-3" : "translate-x-0"}`}
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {filters.map((label: string, i: number) => (
            <div key={i}>
              <label className="block text-xs font-semibold text-black mb-1">{label}</label>
              <div className="flex items-center gap-2">
                <select className="w-14 border border-gray-300 rounded-xs px-1 py-0.5 text-xs">
                  <option>Min</option>
                </select>
                <span className="text-xs">{sliderValues[i]}</span>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={sliderValues[i]}
                  onChange={(e) => handleSliderChange(i, parseInt(e.target.value))}
                  className="w-24 accent-[rgba(120,60,145,1)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
