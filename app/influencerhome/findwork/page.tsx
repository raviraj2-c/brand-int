"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Heart, Filter, ChevronDown, ExternalLink } from "lucide-react";
import Navbarall from "../components/Navberall";
import Footer from "../components/Footer";
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

export default function HomePage() {
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
          <Image
            key={platform}
            src={iconMap[platform]}
            alt={platform}
            width={12}
            height={12}
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
    <div className="flex flex-col min-h-screen">
      <Navbarall />

      <div className="flex-grow bg-gradient-to-r from-purple-50 to-yellow-50 py-8">
        <div className="max-w-5xl mx-auto px-4 bg-white rounded shadow p-6 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div
              style={{ background: "rgba(242, 235, 220, 1)" }}
              className="rounded-sm p-6 text-center mb-6"
            >
              <h2 className="text-lg font-medium">
                Let brands connect with you.
              </h2>
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
              <button
                style={{ background: "rgba(219, 148, 0, 1)" }}
                className="mt-4 text-white py-2 px-4 rounded-full"
              >
                LEARN MORE
              </button>
            </div>

            {/* Tabs and Filters */}
            <div className="max-w-4xl mx-auto mt-8 px-4">
              <div className="flex justify-between items-center mb-4 text-sm">
                <div className="flex">
                  <button
                    onClick={() => handleTabChange("active")}
                    className={`px-3 py-1.5 cursor-pointer ${
                      activeTab === "active"
                        ? "border-b-2 border-black text-black "
                        : "text-gray-500"
                    }`}
                  >
                    All listing
                  </button>
                  <button
                    onClick={() => handleTabChange("previous")}
                    className={`px-3 py-1.5 cursor-pointer ${
                      activeTab === "previous"
                        ? "border-b-2 border-black text-black"
                        : "text-gray-500"
                    }`}
                  >
                    Suggested
                  </button>
                  <button className="text-gray-500 px-3 py-1.5">Save</button>
                </div>

                <div className="flex gap-4 items-center ml-auto text-sm text-gray-500">
                  <button className="hover:underline">Clear Filter</button>
                  <div className="flex items-center gap-1">
                    <Filter size={16} /> Filter:{" "}
                    <span className="font-semibold">1 + 2</span>
                  </div>
                  <div className="flex items-center gap-1">
                    Sort by <ChevronDown size={16} />
                  </div>
                </div>
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
                        style={{ borderColor: "rgb(120, 61, 145)" }}
                        className="rounded-2xl p-2 border cursor-pointer"
                        onClick={() =>
                          setOpenDropdownId((prev) =>
                            prev === campaign.id ? null : campaign.id
                          )
                        }
                      >
                        <Heart className="w-3 h-3 text-[rgb(120, 61, 145)]" />
                      </button>
                      <div
                        className="relative"
                        ref={(el) =>
                          (dropdownRefs.current[campaign.id] = el)
                        }
                      >
                        <button
                          type="button"
                          onClick={() =>
                            router.push("/influencerhome/apply")
                          }
                          style={{
                            background: "rgb(120, 61, 145)",
                          }}
                          className="rounded-full text-white px-4 py-1 text-sm cursor-pointer font-semibold"
                        >
                          Apply
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

                    <div className="flex items-center gap-3 mt-2">
                      <Image
                        src="/facebook.jpeg"
                        alt="Campaign"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <h2 className="text-xl font-semibold">
                        {campaign.campaignName}
                      </h2>
                    </div>

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

                <div className="text-center mt-4">
                  {visibleCount < sampleCampaigns.length ? (
                    <button
                      onClick={handleSeeMore}
                      style={{ color: "rgb(120, 61, 145)" }}
                      className="font-semibold cursor-pointer text-sm"
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
