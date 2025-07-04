"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { ChevronLeft, ChevronRight} from 'lucide-react';
import {ArrowUp, ShieldCheck,XCircle, Pencil } from "lucide-react";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

import Navbarall from '../components/Navberall';
import Footer from '../components/Footer';
import AlertBox from './AlertBox';
import ImageGallery from './ImageGallery';
import ProfileInfo from './ProfileInfo';
import SocialMediaLinks from './SocialMediaLinks';
import VerificationStatus from './VerificationStatus';
import DescriptionSection from './DescriptionSection';
import MediaSelector from './MediaSelector';
import ShortsGallery from './ShortsGallery';
import VideoCarousel from './VideoCarousel';
import StatsOverview from './StatsOverview';
const Profile = () => {
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

      <div className="max-w-6xl mx-auto px-4 mt-4">
       
      
<div className="max-w-5xl mx-auto mt-4 p-2 bg-white rounded shadow">

      <AlertBox />
          <ImageGallery />
          <ProfileInfo />
<SocialMediaLinks />
<VerificationStatus />
<DescriptionSection />
<div className='mt-5'>
<MediaSelector/>
<ShortsGallery/>
<VideoCarousel/>
<StatsOverview/>
</div>



</div>
</div>
      <Footer />
    </div>
  );
};

export default Profile;