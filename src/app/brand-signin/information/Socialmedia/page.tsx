"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from 'next/navigation';


const socialAccounts = [
  { name: "Instagram", icon: "/instagram.png" },
  { name: "Facebook", icon: "/facebook.jpeg" },
  { name: "TikTok", icon: "/tiktok.avif" },
  { name: "X", icon: "/twitter.png" },
  { name: "YouTube", icon: "/YouTube.png" },
];

const currentStep = 4;
const purple = "rgba(120, 60, 145, 1)";



export default function LinkSocialMediaAccount() {


   const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 px-8">
        <div className="flex items-center">
          <div className="text-lg font-bold tracking-wider">SOCIAL STRATIX</div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex justify-center items-center flex-1 bg-[#f9f6f4]">
        <div className="w-[400px] p-6 bg-white shadow-md rounded-lg">
          <div className="text-sm text-gray-500 mb-2">Question 4/5</div>

          {/* Progress Bar */}
          <div className="flex mb-4 mt-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="h-1 flex-1 mx-0.5 rounded-full"
                style={{
                  backgroundColor: index < currentStep ? purple : "#e5e7eb",
                }}
              ></div>
            ))}
          </div>

          {/* Header */}
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <button 
             type="button"
              onClick={() => router.push('/brand-signin/information/photo')}
            className="bg-gray-200 p-2 rounded-lg inline-flex items-center justify-center">
              <ArrowLeft size={19} className="text-gray-700" />
            </button>
            <span>Link your Social media Account</span>
          </h2>

          {/* Social Account Buttons */}
          <div className="space-y-3">
            {socialAccounts.map((account, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-3 p-3 border rounded-md text-left transition"
                style={{borderColor:`${purple}`}}
              >
                <img
                  src={account.icon}
                  alt={account.name}
                  className="w-5 h-5"
                />
                <span>Link {account.name} Account</span>
              </button>
            ))}

            {/* Next Button */}
            <button
             type="button"
              onClick={() => router.push('/brand-signin/information/skill')}
              style={{ background: purple }}
              className="w-full text-white py-2 rounded-md transition"
            >
              NEXT
            </button>

            {/* Skip Button */}
            <button
            type="button"
              onClick={() => router.push('/brand-signin/information/skill')}
              style={{ color: purple }}
              className="w-full text-center text-sm mt-2"
            >
              SKIP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
