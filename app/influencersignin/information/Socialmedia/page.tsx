"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { useRouter } from 'next/navigation';

const socialAccounts = [
  { name: "Instagram", icon: "/Instagram.png" },
  { name: "Facebook", icon: "/facebook.jpeg" },
  { name: "TikTok", icon: "/tiktok.avif" },
  { name: "X", icon: "/twitter.png" },
  { name: "YouTube", icon: "/YouTube.png" },
];

const currentStep = 4;
const purple = "rgba(120, 60, 145, 1)";

export default function LinkSocialMediaAccount() {
  const router = useRouter();
  const [openDropdownIdx, setOpenDropdownIdx] = useState<number | null>(null);
  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => {
    router.prefetch('/influencersignin/information/photo');
    router.prefetch('/influencersignin/information/skill');
  }, [router]);

  const handleLinkChange = (index: number, value: string) => {
    const updated = [...links];
    updated[index] = value;
    setLinks(updated);
  };

  const handleClear = (index: number) => {
    const updated = [...links];
    updated[index] = '';
    setLinks(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50 flex flex-col">
      <nav className="bg-white shadow-md p-4 px-8">
        <div className="flex items-center">
          <div className="text-lg font-bold tracking-wider">SOCIAL STRATIX</div>
        </div>
      </nav>

      <div className="flex justify-center items-center flex-1 bg-[#f9f6f4]">
        <div className="w-[400px] p-6 bg-white shadow-md rounded-lg">
          <div className="text-sm text-gray-500 mb-2">Question 4/5</div>

          <div className="flex mb-4 mt-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="h-1 flex-1 mx-0.5 rounded-full"
                style={{
                  backgroundColor: index < currentStep ? purple : "#e5e7eb",
                }}
              />
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <button 
              type="button"
              onClick={() => router.push('/influencersignin/information/skill')}
              className="bg-gray-200 cursor-pointer p-2 rounded-lg inline-flex items-center justify-center transition-colors hover:bg-gray-300"
            >
              <ArrowLeft size={19} className="text-gray-700" />
            </button>
            <span>Link your Social media Account</span>
          </h2>

          <div className="space-y-3">
            {socialAccounts.map((account, idx) => (
              <div key={idx} className="relative space-y-2">
                <button
                  type="button"
                  onClick={() => setOpenDropdownIdx(openDropdownIdx === idx ? null : idx)}
                  className="w-full flex items-center gap-3 p-3 border rounded-md text-left transition-colors hover:bg-gray-50"
                  style={{ borderColor: purple }}
                >
                  <img
                    src={account.icon}
                    alt={account.name}
                    className="w-5 h-5"
                  />
                  <span>Link {account.name} Account</span>
                </button>

                {openDropdownIdx === idx && (
                  <div className="relative">
                    <input
                      type="url"
                      placeholder={`Enter ${account.name} link`}
                      className="w-full p-2 border rounded-md text-sm placeholder-gray-400 pr-10"
                      style={{ borderColor: purple }}
                      value={links[idx] || ''}
                      onChange={(e) => handleLinkChange(idx, e.target.value)}
                    />
                    {links[idx] && (
                      <X
                        className="absolute right-3 top-2.5 cursor-pointer text-gray-400 hover:text-red-500 w-4 h-4"
                        onClick={() => handleClear(idx)}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => router.push('/influencersignin/information/photo')}
              style={{ background: purple }}
              className="w-full text-white cursor-pointer py-2 rounded-md transition-colors hover:brightness-110"
            >
              NEXT
            </button>

            <button
              type="button"
              onClick={() => router.push('/influencersignin/information/photo')}
              style={{ color: purple }}
              className="w-full text-center cursor-pointer text-sm mt-2 transition-colors hover:bg-purple-50"
            >
              SKIP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
