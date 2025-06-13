"use client";
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { SiYoutube, SiInstagram, SiTiktok, SiFacebook, SiX } from 'react-icons/si';
import { FaStar, FaCrown } from "react-icons/fa";

import Navber from '../components/Navber';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';
import Filter from '../components/Filter';

const iconMap = { SiYoutube, SiInstagram, SiTiktok, SiFacebook, SiX };

const HomePage = () => {
  const [influencers, setInfluencers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch('/data-brand.json')
      .then(res => res.json())
      .then(data => setInfluencers(data))
      .catch(err => console.error('Failed to load influencers data', err));
  }, []);

  const allSuggestions = useMemo(() => {
    if (!influencers.length) return [];
    const names = influencers.map(i => i.name);
    const tags = influencers.flatMap(i => i.tags);
    return Array.from(new Set([...names, ...tags]));
  }, [influencers]);

  const filteredInfluencers = influencers.filter((inf) =>
    inf.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inf.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <Navber
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        suggestions={allSuggestions}
      />

      <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50 flex flex-col">
        <main className="px-4 py-6 max-w-7xl mx-auto">

          {/* Conditionally show Filer or Header */}
          {searchTerm.trim() !== '' ? (
            <Filter/>
          ) : (
            <header className="text-center mb-6">
              <h1
                className="text-3xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #DD8AFF 0%, #783C91 20%, #DB9400 95%, #FFC244 100%)"
                }}
              >
                Right Voices to Amplify Your Brand!
              </h1>
              <p className="text-gray-600 mt-2 text-sm">
                Find top influencers for your campaign from Instagram, YouTube, Facebook and other social platforms
              </p>
            </header>
          )}

          <div className='bg-white p-4 shadow-sm'>
            <h1 className='text-base font-semibold mb-3'>Title</h1>

           <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
  {filteredInfluencers.length === 0 ? (
    <p className="text-gray-500 col-span-full text-center text-sm">No influencers found.</p>
  ) : (
    filteredInfluencers.map((influencer, idx) => (
      <div
        key={idx}
        className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition duration-300 w-full flex flex-col"
        style={{ fontSize: '0.75rem' }}
      >
        <button className="cursor-pointer" type="button" onClick={() => router.push('/brandhome/home/brand-page')}>
          {/* Image Section */}
          <div className="relative w-full aspect-video">
            <Image
              src={influencer.image}
              alt={influencer.name}
              fill
              className="object-cover"
            />
            {/* Top Creator Badge */}
            {influencer.isTopCreator && (
              <div className="absolute top-1 left-1 bg-white text-[0.6rem] font-medium text-black px-1 py-0.5 rounded-sm flex items-center gap-1 shadow">
                <FaCrown className="text-yellow-500" /> Top Creator
              </div>
            )}
            {/* Rating */}
            <div className="absolute top-1 right-1 bg-white text-black text-[0.6rem] font-semibold px-1 py-0.5 rounded-lg shadow flex items-center gap-1">
              <FaStar className="text-yellow-500" /> {influencer.rating}
            </div>
          </div>

          {/* Content Section */}
          <div className="pt-1 px-2 pb-2 flex flex-col flex-1 justify-start items-start gap-1">
            {/* Avatar + Name */}
            <div className="flex items-center gap-1 mb-1">
              <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  src={influencer.avatar}
                  alt={`${influencer.name} avatar`}
                  width={28}
                  height={28}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-bold text-xs text-[#3f2d56]">{influencer.name}</h3>
            </div>

            {/* Tags */}
            <p className="text-[0.65rem] text-gray-500 line-clamp-2 text-left w-full">
              {influencer.tags.join(', ')}
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-1 w-full text-[0.65rem] font-medium">
              {influencer.socials.map((social, i) => {
                const Icon = iconMap[social.icon] || (() => null);
                return (
                  <div
                    key={i}
                    className="flex items-center border gap-1 px-1 py-0.5 rounded-sm"
                    style={{
                      borderColor: social.bgColor,
                      color: social.bgColor
                    }}
                  >
                    <Icon className="w-3 h-3" />
                    {social.followers}k
                  </div>
                );
              })}
            </div>
          </div>
        </button>
      </div>
    ))
  )}
</section>

          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
