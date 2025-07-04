"use client";

import React from 'react';

const platforms = [
  { platform: "Instagram", icon: "/Instagram.png", followers: "1.2K", border: "border-red-500" },
  { platform: "Facebook", icon: "/facebook.jpeg", followers: "1.2K", border: "border-blue-500" },
  { platform: "X", icon: "/twitter.png", followers: "1.2K", border: "border-black" },
  { platform: "YouTube", icon: "/YouTube.png", followers: "1.2K", border: "border-red-500" },
  { platform: "TikTok", icon: "/tiktok.avif", followers: "1.2K", border: "border-black" },
];

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-3">
      <div className="flex flex-wrap gap-2">
        {platforms.map((item, index) => (
          <button
            key={index}
            className={`flex items-center px-2 py-0.5 rounded-sm border text-xs font-medium bg-white shadow ${item.border}`}
          >
            <img src={item.icon} alt={item.platform} className="w-3 h-3 mr-1" />
            {item.followers} Followers
          </button>
        ))}
      </div>
      <button
        style={{ color: "rgba(120, 60, 145, 1)" }}
        className="ml-auto px-4 py-1 text-sm  bg-gray-200 rounded-full"
      >
        <span
          style={{ color: "rgba(120, 60, 145, 1)" }}
          className="text-lg font-semibold"
        >
          +
        </span>{" "}
        Link Account
      </button>
    </div>
  );
};

export default SocialMediaLinks;