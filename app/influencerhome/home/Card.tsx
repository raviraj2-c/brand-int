"use client";

import React, { useState } from "react";
import { Heart, ExternalLink } from "lucide-react";
import { useRouter } from 'next/navigation';

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
    website: "https://www.nike.com/in", // 👈 Website link
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
    website: "https://www.zara.com/in/",
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
    website: "https://www.apple.com/in/",
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
    website: "https://mamaearth.in/",
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
    website: "https://www.swiggy.com/",
  },
];

const Card = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"active" | "previous">("active");
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [likedCampaigns, setLikedCampaigns] = useState<number[]>([]); 

  const handleTabChange = (tab: "active" | "previous") => {
    setActiveTab(tab);
    setVisibleCount(3);
  };

  const handleSeeMore = () => setVisibleCount(sampleCampaigns.length);
  const handleSeeLess = () => setVisibleCount(3);

  const toggleLike = (id: number) => {
    setLikedCampaigns((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  const campaignsToShow =
    activeTab === "active"
      ? sampleCampaigns.slice(0, visibleCount)
      : [...sampleCampaigns].reverse().slice(0, visibleCount);

  const renderPlatformIcons = (platforms: string[]) => {
    const iconMap: Record<string, string> = {
      youtube: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
      instagram: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png",
      tiktok: "https://cdn-icons-png.flaticon.com/512/3046/3046122.png",
      facebook: "https://cdn-icons-png.flaticon.com/512/1384/1384053.png",
    };

    return platforms.map((platform) =>
      iconMap[platform] ? (
        <img key={platform} src={iconMap[platform]} alt={platform} className="w-3 h-3" />
      ) : null
    );
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      {/* Tabs */}
      <div className="flex text-sm font-semibold mb-4">
        <button
          onClick={() => handleTabChange("active")}
          className={`px-3 cursor-pointer py-1.5 ${
            activeTab === "active" ? "border-b-2 border-black text-black" : "text-gray-500"
          }`}
        >
          Active Campaigns
        </button>
        <button
          onClick={() => handleTabChange("previous")}
          className={`px-3 cursor-pointer py-1.5 ${
            activeTab === "previous" ? "border-b-2 border-black text-black" : "text-gray-500"
          }`}
        >
          Previous Campaigns
        </button>
      </div>

      {/* Campaigns */}
      <div className="p-1">
        {campaignsToShow.map((campaign) => (
          <div key={campaign.id} className="border-b border-gray-300 py-6 relative">
            <div className="absolute right-4 top-4 flex items-center gap-2">
              <button
                onClick={() => toggleLike(campaign.id)}
                className="rounded-2xl cursor-pointer p-2 border"
                style={{ borderColor: "rgb(120, 61, 145)" }}
              >
                <Heart
                  className="w-3 h-3"
                  color={likedCampaigns.includes(campaign.id) ? "red" : "rgb(120, 61, 145)"}
                  fill={likedCampaigns.includes(campaign.id) ? "red" : "none"}
                />
              </button>
              <button
                type="button"
                style={{ background: "rgb(120, 61, 145)" }}
                className="rounded-full text-white px-4 py-1 text-sm font-semibold"
              >
                Apply
              </button>
            </div>

            <p className="text-sm text-gray-400 mb-1">Posted {campaign.time} ago</p>
            <a
              href={campaign.website}
              target="_blank"
              style={{ color: "rgb(120 61 145)" }}
              className="text-sm font-semibold flex items-center gap-1"
            >
              {campaign.brandName} <ExternalLink size={14} />
            </a>
            <a href="/influencerhome/apply" className="text-xl font-semibold mt-2">{campaign.campaignName}</a>
            <p className="text-sm text-gray-400 mb-2">{campaign.categories.join(", ")}</p>
            <p className="text-gray-600 mb-3">{campaign.description}</p>

            <div className="flex items-center text-sm gap-4 mb-2 flex-wrap">
              <p>
                <span className="font-semibold">Location:</span>{" "}
                <span style={{ color: "rgb(190 177 128)" }}>{campaign.location}</span>
              </p>
              |
              <p>
                <span className="font-semibold">Budget:</span>{" "}
                <span style={{ color: "rgb(190 177 128)" }}>{campaign.budget}</span>
              </p>
              |
              <div className="flex items-center gap-3">
                <span className="font-semibold">Post on:</span>
                {renderPlatformIcons(campaign.platforms)}
              </div>
            </div>
          </div>
        ))}

        {/* See More / See Less */}
        <div className="text-center mt-4">
          {visibleCount < sampleCampaigns.length ? (
            <button
              onClick={handleSeeMore}
              className="text-sm font-semibold cursor-pointer"
              style={{ color: "rgb(120, 61, 145)" }}
            >
              See more ↓
            </button>
          ) : (
            <button
              onClick={handleSeeLess}
              className="text-sm font-semibold cursor-pointer"
              style={{ color: "rgb(120, 61, 145)" }}
            >
              See less ↑
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
