"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import {ArrowUp, ShieldCheck } from "lucide-react";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Footer from "../../components/Footer";
import Navbarall from "../../components/Navberall";
import { useRouter } from 'next/navigation';

import { UserIcon } from '@heroicons/react/24/solid'
import { ChevronDown } from "lucide-react";

import { BadgeCheck } from "lucide-react";
const BrandPage = () => {
const images = [
    '/photo-brand/video/1.jpg',
    '/photo-brand/video/2.jpg',
    '/photo-brand/video/3.jpg',
    '/photo-brand/video/4.jpg',
    '/photo-brand/video/5.jpg',
    
  ];


  const influencers = [
  {
    name: "Gordon Ramsay",
    image: "/photo-brand/card/1.jpg",
    isTopCreator: true,
    tags: ["Cooking", "Unfiltered", "Roastmaster", "Gourmet"],
    socials: { ig: "1.2K", yt: "1.2K", tiktok: "1.2K" },
  },
  {
    name: "Naruto Uzumaki",
    image: "/photo-brand/card/2.jpg",
    isTopCreator: false,
    tags: ["Ramen", "Ninja", "Hokage", "Believe it!"],
    socials: { ig: "1.2K", yt: "1.2K", tiktok: "1.2K" },
  },
  {
    name: "Itachi Uchiha",
    image: "/photo-brand/card/3.jpg",
    isTopCreator: false,
    tags: ["Genjutsu", "Brother", "Silent", "Akatsuki"],
    socials: { ig: "1.2K", yt: "1.2K", tiktok: "1.2K" },
  },
  {
    name: "Deku",
    image: "/photo-brand/card/4.jpg",
    isTopCreator: true,
    tags: ["Hero", "One for All", "Training", "UA High"],
    socials: { ig: "1.2K" },
  },
  {
    name: "Baki Hanma",
    image: "/photo-brand/card/5.jpg",
    isTopCreator: false,
    tags: ["Strength", "Fighter", "Champion", "Beast"],
    socials: { yt: "1.2K", tiktok: "1.2K" },
  },
];


  const stats = [
  { label: "Number of campaigns", value: "12" },
  { label: "AVG campaign budget", value: "₹ 1,400" },
  { label: "Total reach", value: "₹ 1,400" }
];


const reviews = Array(3).fill({
  name: "Nobita Nobi",
  date: "12th September 2024",
  text: "Nobita Nobi is the main character of the popular Japanese manga and anime series Doraemon.",
});

  const total = images.length;
  const [centerIndex, setCenterIndex] = useState(0);

  const getRelativeIndex = (index: number) => {
    const diff = (index - centerIndex + total) % total;

    switch (diff) {
      case 0:
        return 'center';
      case 1:
        return 'right1';
      case 2:
        return 'right';
      case total - 1:
        return 'left1';
      case total - 2:
        return 'left';
      default:
        return 'hidden';
    }
  };

  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5, opacity: 1 },
    left1: { x: '-50%', scale: 0.7, zIndex: 3, opacity: 1 },
    left: { x: '-90%', scale: 0.5, zIndex: 2, opacity: 1 },
    right: { x: '90%', scale: 0.5, zIndex: 2, opacity: 1 },
    right1: { x: '50%', scale: 0.7, zIndex: 3, opacity: 1 },
    hidden: { opacity: 0, scale: 0.5, zIndex: 0 },
  };


  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % total);
  };

  const handleBack = () => {
    setCenterIndex((prev) => (prev - 1 + total) % total);
  };

    const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50">
      <Navbarall />

      {/* Back to influencer listing */}
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <button 
        type="button"
              onClick={() => router.push('/brandhome/home')}
        style={{color:'rgba(120, 60, 145, 1)'}}
        className="text-sm cursor-pointer">
          &lt; Back to influencer listing
        </button>

        
<div className="max-w-5xl mx-auto mt-4 p-2 bg-white rounded shadow">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-1">
  <div className="col-span-1">
    <img
      src="/photo-brand/b1.jpg"
      className="w-full h-52 object-cover rounded"
      alt="Main"
    />
  </div>
  <div className="col-span-1 grid grid-cols-1 gap-4">
    <img
      src="/photo-brand/b2.jpg"
      className="w-full h-24 object-cover rounded"
      alt="Secondary"
    />
    <img
      src="/photo-brand/b4.jpg"
      className="w-full h-24 object-cover rounded"
      alt="Secondary"
    />
  </div>
  <div className="col-span-1">
    <img
      src="/photo-brand/b3.jpg"
      className="w-full h-52 object-cover rounded"
      alt="Vertical"
    />
  </div>
</div>


       {/* Wrapper flex container for profile info + buttons */}
<div className="flex items-center mt-3 relative">

  {/* Profile Info (unchanged) */}
  <div className="relative flex-1">
    <div className="absolute -top-14 left-4">
      <img
        src="/photo-brand/profile.jpg"
        className="w-20 h-20 rounded-full border-4 border-white shadow"
        alt="Profile"
      />
    </div>

    <div className="flex items-center mt-12 space-x-4">
      <div className="pl-24 absolute -top-4">
        <h2 className="text-2xl font-semibold">Adam eve</h2>
        <p className="text-gray-600 text-sm">
          Bangalore · Cooking, Unfiltered, Roastmaster, Gourmet
        </p>
      </div>
    </div>
  </div>

  {/* Action Buttons placed on right */}
<div className="flex gap-3 ml-6 mb-4">
  <button 
  style={{color:'rgba(120, 60, 145, 1)'}}
  className="flex items-center px-3 py-1.5  rounded-full text-xs font-semibold">
    <ArrowUp className="w-3 h-3 mr-1.5" /> SHARE
  </button>
  <button 
  style={{color:'rgba(120, 60, 145, 1)', borderColor:'rgba(120, 60, 145, 1)'}}
  className="px-3 py-1.5 border font-semibold text-xs rounded-full">
    SHORTLIST
  </button>
  <button 
  style={{color:'rgba(120, 60, 145, 1)'}}
  className="px-3 py-1.5 bg-gray-100 font-semibold shadow-sm text-xs rounded-full">
    CONNECT
  </button>
</div>

</div>



        {/* Follower Buttons */}
<div className="flex flex-wrap gap-2 mt-3">
  {[
    { platform: "Instagram", icon: "/Instagram.png", followers: "1.2K", border: "border-red-500" },
    { platform: "Facebook", icon: "/facebook.jpeg", followers: "1.2K", border: "border-blue-500" },
    { platform: "X", icon: "/twitter.png", followers: "1.2K", border: "border-black" },
    { platform: "YouTube", icon: "/YouTube.png", followers: "1.2K", border: "border-red-500" },
    { platform: "TikTok", icon: "/tiktok.avif", followers: "1.2K", border: "border-black" },
  ].map((item, index) => (
    <button
      key={index}
      className={`flex items-center px-2 py-0.5 rounded-sm border text-xs font-medium bg-white shadow ${item.border}`}
    >
      <img src={item.icon} alt={item.platform} className="w-3 h-3 mr-1" />
      {item.followers} Followers
    </button>
  ))}
</div>


       

        {/* Verification + Top Creator */}
        <div className="flex gap-4 mt-6 flex-wrap">
          <span className="px-2 py-1 text-xs border border-gray-300 rounded inline-flex flex-col items-start space-y-1">
  <div className="flex ">
    <AiOutlineCheckCircle style={{ color: 'rgb(209 205 96)' }} className="w-4 h-4" />
    <p className="m-0 font-semibold">  Verified payment</p>
  </div>
  <p className="text-xs text-gray-600">The profile has been successfully verified and authenticated.</p>
</span>

<span className="px-2 py-1 text-xs border border-gray-300 rounded inline-flex flex-col items-start space-y-1">
  <div className="flex ">
    <ShieldCheck style={{ color: 'rgb(209 205 96)' }} className="w-4 h-4" />
    <p className="m-0 font-semibold">  Top Creator</p>
  </div>
  <p className="text-xs text-gray-600">Top creators have high ratings and completed multiple orders.</p>
</span>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Description</h3>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      


{/* Social Media Filter + Shorts & Videos Section */}
<div className="max-w-6xl mx-auto px-4 pt-6">
  {/* Dropdown */}
  <div className="relative w-60 mb-6">
  {/* Floating Label */}
  <label
    htmlFor="socialMedia"
    className="absolute -top-2 left-3 px-1 text-sm font-medium bg-white"
    style={{ color: 'rgba(120, 60, 145, 1)' }}
  >
    Social media
  </label>

  {/* Styled Select Box */}
  <select
    id="socialMedia"
    className="w-full px-4 py-3 rounded-md text-base appearance-none focus:outline-none"
    defaultValue="Instagram"
    style={{
      border: '2px solid rgba(120, 60, 145, 1)',
      color: 'rgba(120, 60, 145, 1)',
    }}
  >
    <option>Instagram</option>
    <option>Facebook</option>
    <option>YouTube</option>
    <option>X</option>
    <option>TikTok</option>
  </select>

  {/* Dropdown Arrow */}
 <div
  className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 text-xs text-gray-500"
>
  ▼
</div>

</div>


  {/* Shorts */}
  <div className="mb-6">
    <div className="flex items-center gap-2 mb-2"> 
  <h2 className="text-lg font-bold text-gray-900">Shorts</h2>
  <span className="text-xs text-gray-600">Last 7 days ▼</span>
</div>

    <div
  className="flex overflow-x-auto gap-2 pb-2"
  style={{
    scrollbarWidth: "none",           // Firefox
    msOverflowStyle: "none",          // IE 10+
  }}
>
  <style>
    {`
      div::-webkit-scrollbar {
        display: none; /* Chrome, Safari */
      }
    `}
  </style>
  {[1, 2, 3, 4, 5, 6].map((_, index) => (
    <img
      key={index}
      src={`/photo-brand/shorts/${index + 1}.jpg`}
      className="w-40 h-50 object-cover rounded-md flex-shrink-0"
    />
  ))}
</div>

  </div>

  {/* Videos */}
  <div>
     <div className="flex items-center gap-2 mb-2"> 
  <h2 className="text-lg font-bold text-gray-900">Videos</h2>
  <span className="text-xs text-gray-600">Last 7 days ▼</span>
</div>

    {/* Carousel style slider */}
    <div className="relative w-full flex flex-col items-center justify-center mt-6">
  {/* Smaller Image Container */}
  <div className="relative w-[320px] h-[240px]">
    {images.map((image, index) => {
      const position = getRelativeIndex(index);
      return (
        <motion.div
          key={index}
          initial="hidden"
          animate={position}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          className="absolute"
          style={{ width: '100%', height: '100%' }}
        >
          <Image
            src={image}
            alt={`Slide ${index}`}
            fill
            className="rounded-[40px] object-cover"
            priority
          />
        </motion.div>
      );
    })}
  </div>

  {/* Arrows and Dots */}
  <div className="flex items-center justify-center gap-4 mt-3">
    {/* Left Arrow */}
    <button
      className="text-gray-700 cursor-pointer hover:text-purple-700"
      onClick={handleBack}
    >
      <ChevronLeft size={20} />
    </button>

    {/* Smaller Dots */}
    <div className="flex items-center gap-1">
      {images.map((_, index) => (
        <span
          key={index}
          className="w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor:
              index === centerIndex
                ? 'rgba(120, 60, 145, 1)'
                : 'rgba(180, 180, 180, 0.5)',
          }}
        />
      ))}
    </div>

    {/* Right Arrow */}
    <button
      className="text-gray-700 cursor-pointer hover:text-purple-700"
      onClick={handleNext}
    >
      <ChevronRight size={20} />
    </button>
  </div>
</div>


 <div className="flex items-center gap-2 mb-2"> 
  <h2 className="text-lg font-bold text-gray-900">Stats</h2>
  <span className="text-xs text-gray-600">Last 7 days ▼</span>
</div>


  <div className="flex gap-2 h-60"> {/* Set fixed height for the whole row */}
  {/* Image Boxes */}
  <div
    className="flex-1 aspect-square overflow-hidden rounded-lg"
    style={{
      border: "3px solid",
      borderImageSource: "linear-gradient(225deg, #FFE2B6 0%, #99FCFF 100%)",
      borderImageSlice: 1,
    }}
  >
    <img
      src="/photo-brand/stat/1.png"
      alt="Stat 1"
      className="w-full h-full object-cover"
    />
  </div>
   <div
    className="flex-1 aspect-square overflow-hidden rounded-lg"
    style={{
      border: "3px solid",
      borderImageSource: "linear-gradient(225deg, #FFE2B6 0%, #99FCFF 100%)",
      borderImageSlice: 1,
    }}
  >
    <img
      src="/photo-brand/stat/2.png"
      alt="Stat 1"
      className="w-full h-full object-cover"
    />
  </div>
   <div
    className="flex-1 aspect-square overflow-hidden rounded-lg"
    style={{
      border: "3px solid",
      borderImageSource: "linear-gradient(225deg, #FFE2B6 0%, #99FCFF 100%)",
      borderImageSlice: 1,
    }}
  >
    <img
      src="/photo-brand/stat/3.png"
      alt="Stat 1"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Stats Column */}
  <div className="flex-1 flex flex-col gap-1">
    

<div className="flex-1 flex flex-col gap-1">
  {stats.map((stat, index) => (
    <div
      key={index}
      className="flex-1 p-2 text-center flex flex-col justify-center"
      style={{
        border: "3px solid",
        borderImageSource: "linear-gradient(225deg, #EAFFC2 0%, #FFD4F6 100%)",
        borderImageSlice: 1,
      }}
    >
      <p className="text-xs text-gray-500 leading-tight">{stat.label}</p>
      <h2 className="text-base font-semibold">{stat.value}</h2>
    </div>
  ))}
</div>

  </div>
</div>


<div className="flex items-center gap-2 mt-4"> 
  <h2 className="text-lg font-bold text-gray-900">Campaign Stats</h2>
</div>
   <div className="flex items-center gap-2 mt-4">
   <p 
   style={{background:' rgba(217, 207, 0, 1)'}}
   className=" rounded-md text-center px-4 py-1 inline-block">
  stats#
</p>
<p 
   style={{background:' rgba(217, 207, 0, 1)'}}
   className=" rounded-md text-center px-4 py-1 inline-block">
  stats#
</p>
<p 
   style={{background:' rgba(217, 207, 0, 1)'}}
   className=" rounded-md text-center px-4 py-1 inline-block">
  stats#
</p>
  
  </div>



<div className="flex items-center gap-2 mt-4"> 
  <h2 className="text-lg font-bold text-gray-900">Reviews</h2>
  <p>(10)</p>
</div>

<div className="space-y-6">
       {reviews.map((review, index) => (
  <div key={index} className="flex items-start space-x-4">
   <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
      <UserIcon className="w-5 h-5" />
    </div>
    <div>
      <div className="text-sm font-semibold">{review.name}</div>
      <div className="text-xs text-gray-500">{review.date}</div>
      <p className="text-sm mt-1 text-gray-700 -ml-12">
        {review.text}
      </p>
    </div>
  </div>
))}

      </div>

     
  <div 
  style={{color:'rgba(120, 60, 145, 1)'}}
  className="mt-6 flex items-center justify-center  w-full text-sm  font-medium cursor-pointer hover:underline">
    See more reviews <ChevronDown size={16} className="ml-1" />
  </div>
  <hr className='mt-3' />

<div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Similar influencers</h2>
        <a href="#" 
        style={{color:' rgba(120, 60, 145, 1)'}}
        className=" text-sm font-medium ">
          See All
        </a>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-2">
        {influencers.map((influencer, index) => (
          <div
            key={index}
            className="min-w-[200px] rounded-sm border border-gray-200 shadow-sm bg-white overflow-hidden"
          >
            <div className="relative h-50 w-full">
              <Image
                src={influencer.image}
                alt={influencer.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-sm"
              />

              {influencer.isTopCreator && (
                <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded-full shadow text-gray-800 font-medium flex items-center space-x-1">
                  <BadgeCheck size={14} className="text-yellow-500" />
                  <span>Top Creator</span>
                </div>
              )}

              {/* Social Buttons aligned to left */}
              <div
                className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1 justify-start"
                style={{ zIndex: 10 }}
              >
               {[
  { platform: "Instagram", icon: "/Instagram.png", key: "ig", border: "border-red-500" },
  { platform: "Facebook", icon: "/facebook.jpeg", key: "fb", border: "border-blue-500" },
  { platform: "X", icon: "/twitter.png", key: "x", border: "border-black" },
  { platform: "YouTube", icon: "/YouTube.png", key: "yt", border: "border-red-500" },
  { platform: "TikTok", icon: "/tiktok.avif", key: "tiktok", border: "border-black" },
].map((item, i) =>
  influencer.socials[item.key as keyof typeof influencer.socials] ? (
    <button
      key={i}
      className={`flex items-center px-2 py-0.5 rounded-sm border text-[10px] font-medium bg-white shadow ${item.border}`}
      style={{ backgroundColor: "white" }}
    >
      <img src={item.icon} alt={item.platform} className="w-3 h-3 mr-1" />
      {influencer.socials[item.key as keyof typeof influencer.socials]}
    </button>
  ) : null
)}

              </div>
            </div>

           <div className="p-3">
  <div className="flex items-center gap-2 mb-1">
    <div className="w-6 h-6 rounded-full overflow-hidden">
      <Image
        src={influencer.image}
        alt={influencer.name}
        width={24}
        height={24}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="font-semibold text-sm">{influencer.name}</div>
  </div>
  <div className="text-xs text-gray-500 truncate">
    {influencer.tags.join(", ") + ", ..."}
  </div>
</div>

          </div>
        ))}
      </div>
    </div>


  </div>
</div>
</div>
</div>
      <Footer />
    </div>
  );
};

export default BrandPage;
