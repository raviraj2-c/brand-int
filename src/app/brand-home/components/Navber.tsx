import React, { useState, useEffect } from 'react';
import { Search, Bell } from 'lucide-react';
export default function Navber({ searchTerm, setSearchTerm, suggestions }) {

const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const matches = suggestions.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSuggestions(matches);
    } else {
      setFilteredSuggestions([]);
    }
  }, [searchTerm, suggestions]);

  return (
    <div>
        {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-3 bg-white ">
      <div className="flex items-center ">
      <h1 className="text-lg font-bold text-[rgb(43 38 51)]  tracking-wider">"</h1>
      <h1 className=" text-lg font-bold text-[rgb(43 38 51)]  tracking-wider rotate-40 ">)</h1>
     
        <h1 className="text-lg font-bold text-[rgb(43 38 51)]  tracking-wider">SOCIAL STRATIX</h1>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search influencers"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-3 pr-10 py-1.5 rounded-md border border-gray-400 text-gray-700 text-sm w-56"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </button>

          {filteredSuggestions.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 mt-1 w-56 shadow-sm z-20 max-h-40 overflow-auto">
              {filteredSuggestions.map((item, i) => (
                <li
                  key={i}
                  onClick={() => setSearchTerm(item)}
                  className="px-3 py-1 cursor-pointer hover:bg-gray-100 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center space-x-6">
         <a href="/brand-home/Campaign" className="text-sm font-medium text-gray-700 ">Post Campaign</a>
          <a href="/brand-home/masseges" className="text-sm font-medium text-gray-700">Messages</a>
          <button className="relative text-gray-700">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[rgb(199,148,35)] rounded-full text-xs text-[rgb(199,148,35)] flex items-center justify-center">
              
            </span>
          </button>
           <a href='/brand-home/profile'>
            <img className="w-8 h-8 rounded-full" src="/google.jpg"  />
          </a>
        </div>
      </div>
    </nav>
    </div>
  )
}
