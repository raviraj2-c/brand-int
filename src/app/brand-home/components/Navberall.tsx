'use client';

import React from 'react';
import { Search, Bell } from 'lucide-react';
import Link from 'next/link';

const Navbarall = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white">
      <div className="flex items-center">
        <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider">"</h1>
        <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider rotate-40">)</h1>
        <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider">SOCIAL STRATIX</h1>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search influencers"
            className="pl-3 pr-10 py-1.5 rounded-md border border-[rgb(98 93 100)] text-[rgb(98 93 100)] text-sm w-56"
            suppressHydrationWarning
          />
          <button 
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            suppressHydrationWarning
          >
            <Search size={18} />
          </button>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link 
            href="/brand-home/Campaign" 
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Post Campaign
          </Link>
          <Link 
            href="/brand-home/masseges" 
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Messages
          </Link>
          <button 
            type="button"
            className="relative text-gray-700"
            suppressHydrationWarning
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[rgb(199,148,35)] rounded-full text-xs text-[rgb(199,148,35)] flex items-center justify-center" />
          </button>
          <Link href="/brand-home/profile">
            <img 
              className="w-8 h-8 rounded-full" 
              src="/google.jpg" 
              alt="Profile"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbarall;
