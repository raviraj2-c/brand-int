"use client";
import React, { useState, useRef, useEffect } from "react";
import { Pencil, MoreVertical, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

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
}

const sampleCampaigns: Campaign[] = [
  {
    id: 1,
    postedTime: "Posted 3 hours ago",
    brandName: "Nike",
    time: "3 hours",
    campaignName: "Nike Summer Collection 2025",
    categories: ["Lifestyle", "Fitness", "Fashion"],
    description:
      "Looking for fitness and lifestyle influencers to showcase our summer wear collection in a dynamic and authentic way.",
    location: "Mumbai",
    budget: "₹15,000",
    platforms: ["instagram", "youtube"],
  },
  {
    id: 2,
    postedTime: "Posted 1 day ago",
    brandName: "Zara",
    time: "1 day",
    campaignName: "Zara Style Fest",
    categories: ["Fashion", "Beauty"],
    description:
      "Seeking fashion-forward creators to promote our new seasonal arrivals with reels and story content.",
    location: "Delhi",
    budget: "₹12,000",
    platforms: ["instagram", "tiktok"],
  },
  {
    id: 3,
    postedTime: "Posted 5 hours ago",
    brandName: "Apple India",
    time: "5 hours",
    campaignName: "iPhone 16 Awareness Campaign",
    categories: ["Technology", "Lifestyle"],
    description:
      "Partner with Apple to demonstrate the newest iPhone 16 features in a modern, engaging manner.",
    location: "Bangalore",
    budget: "₹50,000",
    platforms: ["youtube"],
  },
  {
    id: 4,
    postedTime: "Posted 3 days ago",
    brandName: "Mamaearth",
    time: "3 days",
    campaignName: "Natural Skincare Drive",
    categories: ["Beauty", "Health", "Lifestyle"],
    description:
      "Influencers needed to try and review our skincare kits made with natural ingredients. Honest feedback preferred.",
    location: "Hyderabad",
    budget: "₹8,000",
    platforms: ["instagram", "facebook"],
  },
  {
    id: 5,
    postedTime: "Posted 2 hours ago",
    brandName: "Swiggy",
    time: "2 hours",
    campaignName: "Swiggy Summer Cravings",
    categories: ["Food", "Lifestyle"],
    description:
      "Promote exciting summer food deals on Swiggy. Great for food bloggers and local influencers.",
    location: "Pune",
    budget: "₹10,000",
    platforms: ["instagram", "tiktok"],
  },
];

const Card = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"active" | "previous">("active");
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleTabChange = (tab: "active" | "previous") => {
    setActiveTab(tab);
    setVisibleCount(3);
    setOpenDropdownId(null);
  };

  const handleSeeMore = () => setVisibleCount(sampleCampaigns.length);
  const handleSeeLess = () => setVisibleCount(3);

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

    return platforms.map(
      (platform) =>
        iconMap[platform] && (
          <img
            key={platform}
            src={iconMap[platform]}
            alt={platform}
            className="w-3 h-3"
          />
        )
    );
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        openDropdownId !== null &&
        dropdownRefs.current[openDropdownId] &&
        !dropdownRefs.current[openDropdownId]!.contains(event.target as Node)
      ) {
        setOpenDropdownId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdownId]);

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      {/* Tabs */}
      <div className="flex text-sm font-semibold mb-4">
        <button
          onClick={() => handleTabChange("active")}
          className={`px-3 py-1.5 cursor-pointer ${
            activeTab === "active"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
        >
          Active Campaigns
        </button>
        <button
          onClick={() => handleTabChange("previous")}
          className={`px-3 py-1.5 cursor-pointer ${
            activeTab === "previous"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
        >
          Previous Campaigns
        </button>
      </div>

      {/* Campaign List */}
      <div className="p-1">
        {campaignsToShow.map((campaign) => (
          <div
            key={campaign.id}
            className="border-b border-gray-300 py-6 relative"
          >
            <div className="absolute right-4 top-4 flex items-center gap-2">
              <button
                type="button"
                onClick={() => router.push("/brandhome/edit")}
                style={{
                  color: "rgb(120, 61, 145)",
                  background: "rgb(232 227 234)",
                }}
                className="rounded-full cursor-pointer px-4 py-1 text-sm font-semibold"
              >
                <Pencil size={14} className="inline mr-1" /> EDIT
              </button>

              <div
                className="relative"
                ref={(el) => {
                  dropdownRefs.current[campaign.id] = el;
                }}
              >
                <button
                  style={{ color: "rgb(120, 61, 145)" }}
                  className="rounded-2xl p-2 border cursor-pointer"
                  onClick={() =>
                    setOpenDropdownId((prev) =>
                      prev === campaign.id ? null : campaign.id
                    )
                  }
                >
                  <MoreVertical size={18} />
                </button>

                {openDropdownId === campaign.id && (
                  <div className="absolute z-10 top-full right-0 bg-white shadow-md text-sm mt-2 w-40 rounded-md">
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Mark as Complete
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Delete Campaign
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Other Action
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-1">
              Posted {campaign.time} ago
            </p>
            <a
              href="#"
              style={{ color: "rgb(120 61 145)" }}
              className="text-sm font-semibold flex items-center gap-1"
            >
              {campaign.brandName} <ExternalLink size={14} />
            </a>
            <h2 className="text-xl font-semibold mt-2">
              {campaign.campaignName}
            </h2>
            <p className="text-sm text-gray-400 mb-2">
              {campaign.categories.join(", ")}
            </p>
            <p className="text-gray-600 mb-3">{campaign.description}</p>

            <div className="flex items-center text-sm gap-4 mb-2 flex-wrap">
              <p>
                <span className="font-semibold">Location:</span>{" "}
                <span style={{ color: "rgb(190 177 128)" }}>
                  {campaign.location}
                </span>
              </p>
              |
              <p>
                <span className="font-semibold">Budget:</span>{" "}
                <span style={{ color: "rgb(190 177 128)" }}>
                  {campaign.budget}
                </span>
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
              style={{ color: "rgb(120, 61, 145)" }}
              className="font-semibold text-sm cursor-pointer"
            >
              See more ↓
            </button>
          ) : (
            <button
              onClick={handleSeeLess}
              style={{ color: "rgb(120, 61, 145)" }}
              className="font-semibold cursor-pointer text-sm"
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
