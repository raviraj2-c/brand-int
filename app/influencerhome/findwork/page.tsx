"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Heart, Filter, ChevronDown, ExternalLink } from "lucide-react";
import Navbarall from "../components/Navberall";
import Footer from "../components/Footer";

interface Campaign {
  id: number;
  postedTime: string;
  brandName: string;
  time: string;
  campaignName: string;
  categories: string[];
  description: string;
  location: string;
  budget: string;
  platforms: string[];
  website: string;
}

const sampleCampaigns: Campaign[] = [
  {
    id: 1,
    postedTime: "Posted 3 hours ago",
    brandName: "Nike",
    time: "3 hours",
    campaignName: "Nike Summer Collection 2025",
    categories: ["Lifestyle", "Fitness", "Fashion"],
    description: "Looking for fitness and lifestyle influencers...",
    location: "Mumbai",
    budget: "₹15,000",
    platforms: ["instagram", "youtube"],
    website: "/influencerhome/home",
  },
  {
    id: 2,
    postedTime: "Posted 1 day ago",
    brandName: "Zara",
    time: "1 day",
    campaignName: "Zara Style Fest",
    categories: ["Fashion", "Beauty"],
    description: "Seeking fashion-forward creators...",
    location: "Delhi",
    budget: "₹12,000",
    platforms: ["instagram", "tiktok"],
    website: "/influencerhome/home",
  },
  {
    id: 3,
    postedTime: "Posted 5 hours ago",
    brandName: "Apple India",
    time: "5 hours",
    campaignName: "iPhone 16 Awareness Campaign",
    categories: ["Technology", "Lifestyle"],
    description: "Partner with Apple to demonstrate iPhone 16...",
    location: "Bangalore",
    budget: "₹50,000",
    platforms: ["youtube"],
    website: "/influencerhome/home",
  },
  {
    id: 4,
    postedTime: "Posted 3 days ago",
    brandName: "Mamaearth",
    time: "3 days",
    campaignName: "Natural Skincare Drive",
    categories: ["Beauty", "Health", "Lifestyle"],
    description: "Influencers needed to try our skincare kits...",
    location: "Hyderabad",
    budget: "₹8,000",
    platforms: ["instagram", "facebook"],
    website: "/influencerhome/home",
  },
  {
    id: 5,
    postedTime: "Posted 2 hours ago",
    brandName: "Swiggy",
    time: "2 hours",
    campaignName: "Swiggy Summer Cravings",
    categories: ["Food", "Lifestyle"],
    description: "Promote exciting summer food deals on Swiggy...",
    location: "Pune",
    budget: "₹10,000",
    platforms: ["instagram", "tiktok"],
    website: "/influencerhome/home",
  },
];

export default function HomePage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "suggested" | "saved">("all");
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [savedCampaigns, setSavedCampaigns] = useState<number[]>([]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleHeartToggle = (id: number) => {
    setSavedCampaigns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleTabChange = (tab: "all" | "suggested" | "saved") => {
    setActiveTab(tab);
    setVisibleCount(3);
  };

  const handleSeeMore = () => setVisibleCount(sampleCampaigns.length);
  const handleSeeLess = () => setVisibleCount(3);

  const getCampaignsToShow = () => {
    let campaigns = sampleCampaigns;
    if (activeTab === "suggested") {
      campaigns = [...sampleCampaigns].reverse();
    } else if (activeTab === "saved") {
      campaigns = sampleCampaigns.filter((c) => savedCampaigns.includes(c.id));
    }
    return campaigns.slice(0, visibleCount);
  };

  const renderPlatformIcons = (platforms: string[]) => {
    const iconMap: Record<string, string> = {
      youtube: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
      instagram: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png",
      tiktok: "https://cdn-icons-png.flaticon.com/512/3046/3046122.png",
      facebook: "https://cdn-icons-png.flaticon.com/512/1384/1384053.png",
    };
    return platforms.map((platform) =>
      iconMap[platform] ? (
        <Image
          key={platform}
          src={iconMap[platform]}
          alt={platform}
          width={12}
          height={12}
          className="w-3 h-3"
        />
      ) : null
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbarall />
      <div className="flex-grow bg-gradient-to-r from-purple-50 to-yellow-50 py-8">
        <div className="max-w-5xl mx-auto px-4 bg-white rounded shadow p-6">
          {/* Header */}
          <div className="rounded-sm p-6 text-center mb-6 bg-[rgba(242,235,220,1)]">
            <h2 className="text-lg font-medium">Let brands connect with you.</h2>
            <h1
              className="text-3xl font-bold mt-2 text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FFC244 0.04%, #DB9400 20.27%, #783C91 72.66%, #DD8AFF 100%)",
              }}
            >
              Get Discovered. Earn more!
            </h1>
            <p className="mt-2 text-gray-700">
              Find campaigns that are tailored to your profile, increase your
              earnings, and enhance your visibility.
            </p>
            <button className="mt-4 text-white py-2 px-4 rounded-full bg-[rgb(219,148,0)]">
              LEARN MORE
            </button>
          </div>

          {/* Tabs */}
          <div className="flex justify-between items-center mb-4 text-sm">
            <div className="flex">
              {["all", "suggested", "saved"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab as any)}
                  className={`px-3 py-1.5 ${
                    activeTab === tab
                      ? "border-b-2 border-black text-black"
                      : "text-gray-500"
                  }`}
                >
                  {tab === "all" ? "All listing" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex gap-4 items-center ml-auto text-sm text-gray-500">
              <button className="hover:underline">Clear Filter</button>
              <div className="flex items-center gap-1">
                <Filter size={16} /> Filter: <span className="font-semibold">1 + 2</span>
              </div>
              <div ref={dropdownRef} className="relative flex items-center gap-1">
                <button onClick={() => setShowDropdown((prev) => !prev)} className="cursor-pointer">
                  Sort by
                </button>
                <ChevronDown
                  size={16}
                  className="cursor-pointer"
                  onClick={() => setShowDropdown((prev) => !prev)}
                />
                {showDropdown && (
                  <ul className="absolute top-6 left-0 border z-50 rounded px-2 py-1 text-sm bg-white shadow">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Recent Listings</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">A–Z (Company)</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Z–A (Company)</li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Campaign List */}
          {getCampaignsToShow().map((campaign) => (
            <div key={campaign.id} className="border-b border-gray-300 py-6 relative">
              <div className="absolute right-4 top-4 flex items-center gap-2">
                <button
                  onClick={() => handleHeartToggle(campaign.id)}
                  className="rounded-2xl p-2 border cursor-pointer"
                  style={{ borderColor: "rgb(120, 61, 145)" }}
                >
                  <Heart
                    className="w-3 h-3"
                    fill={savedCampaigns.includes(campaign.id) ? "red" : "none"}
                    color={savedCampaigns.includes(campaign.id) ? "red" : "rgb(120, 61, 145)"}
                  />
                </button>
                <button className="rounded-full text-white px-4 py-1 text-sm font-semibold bg-[rgb(120,61,145)]">
                  Apply
                </button>
              </div>

              <p className="text-sm text-gray-400 mb-1">Posted {campaign.time} ago</p>
              <a
                href="/influencerhome/home"
               
                className="text-sm font-semibold flex items-center gap-1 text-[rgb(120_61_145)]"
              >
                {campaign.brandName} <ExternalLink size={14} />
              </a>

              <div className="flex items-center gap-3 mt-2">
                <Image
                  src="/facebook.jpeg"
                  alt="Campaign"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <a href="/influencerhome/apply" className="text-xl font-semibold">
                  {campaign.campaignName}
                </a>
              </div>

              <p className="text-sm text-gray-400 mb-2">{campaign.categories.join(", ")}</p>
              <p className="text-gray-600 mb-3">{campaign.description}</p>

              <div className="flex items-center text-sm gap-4 mb-2 flex-wrap">
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  <span className="text-[#beb180]">{campaign.location}</span>
                </p>
                |
                <p>
                  <span className="font-semibold">Budget:</span>{" "}
                  <span className="text-[#beb180]">{campaign.budget}</span>
                </p>
                |
                <div className="flex items-center gap-3">
                  <span className="font-semibold">Post on:</span>
                  {renderPlatformIcons(campaign.platforms)}
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            {visibleCount < sampleCampaigns.length ? (
              <button
                onClick={handleSeeMore}
                className="font-semibold cursor-pointer text-sm text-[rgb(120,61,145)]"
              >
                See more ↓
              </button>
            ) : (
              <button
                onClick={handleSeeLess}
                className="font-semibold cursor-pointer text-sm text-[rgb(120,61,145)]"
              >
                See less ↑
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
