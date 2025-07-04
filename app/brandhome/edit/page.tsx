'use client';

import React, { useState } from 'react';
import Navbarall from '../components/Navberall';
import Footer from '../components/Footer';
import Card from '../profile/Card';
import { MapPin, Check, Pencil, ExternalLink, Flag, Copy } from 'lucide-react';

const Edit = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('Instagram');

  const platforms = [
    { platform: 'Instagram', icon: '/Instagram.png', border: 'border-red-500' },
    { platform: 'Facebook', icon: '/facebook.jpeg', border: 'border-blue-500' },
    { platform: 'X', icon: '/twitter.png', border: 'border-black' },
    { platform: 'YouTube', icon: '/YouTube.png', border: 'border-red-500' },
    { platform: 'TikTok', icon: '/tiktok.avif', border: 'border-black' },
  ];

  return (
    <>
    <div className='min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50'>
      <Navbarall />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className=" rounded-md p-6 mb-8 bg-white shadow-sm relative">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex-shrink-0">
                  <img
                    src="/google.jpg"
                    className="w-10 h-10 rounded-full object-cover"
                    alt="Brand Logo"
                  />
                </div>
                <h2 className="text-sm font-medium">Brand name</h2>
              </div>

              <div className="flex items-start w-fit mb-6 mt-1">
                <div className="relative w-60">
                  <label
                    htmlFor="socialMedia"
                    className="absolute -top-2 left-3 px-1 text-xs font-medium bg-white z-10"
                    style={{ color: 'rgba(120, 60, 145, 1)' }}
                  >
                    Social media
                  </label>
                  <input
                    id="socialMedia"
                    className="w-full px-3 py-2 rounded-sm text-sm placeholder:text-xs placeholder:text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Sports product campaign posts"
                    style={{
                      border: '1.5px solid rgba(120, 60, 145, 1)',
                    }}
                  />
                </div>
                <button
                  style={{ border: '1px solid rgb(128 91 148)' }}
                  className="w-6 h-6 rounded-full flex items-center justify-center ml-2 mt-2 flex-shrink-0"
                >
                  <Check size={14} style={{ color: 'rgb(128 91 148)' }} />
                </button>
              </div>

              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                <span>Posted 3 hours ago</span>
                <span>| Proposal: Over 100 applicants |</span>
                <span className="text-gray-600 font-medium flex items-center">
                  <button
                    style={{ border: '1px solid rgba(217, 207, 0, 1)' }}
                    className="w-4 h-4 rounded-full flex items-center justify-center mr-2 flex-shrink-0"
                  >
                    <Check size={10} style={{ color: 'rgba(217, 207, 0, 1)' }} />
                  </button>
                  Verified payment
                </span>
              </div>
            </div>
          </div>

          <hr className="mt-3 w-2xl" />

          {/* Description */}
          <div className="mt-4 space-y-3 text-[13px] text-gray-700 w-2xl">
            <p>Lorem ipsum dolor sit amet...</p>
            <p>Turpis ex libero aliquam vulputate semper...</p>
            <p>Rhoncus sed class ex quis; fermentum eros...</p>
          </div>

          {/* Post On */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold flex items-center">
              Post on
              <button
                style={{ border: '1px solid rgb(128 91 148)' }}
                className="w-6 h-6 mt-2 rounded-full flex items-center justify-center ml-2 flex-shrink-0"
              >
                <Pencil size={14} style={{ color: 'rgb(128 91 148)' }} />
              </button>
            </h3>

            <div className="flex flex-wrap gap-2 mt-3">
              {platforms.map((item, index) => {
                const isSelected = item.platform === selectedPlatform;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedPlatform(item.platform)}
                    className={`flex items-center px-2 py-0.5 rounded-sm border text-xs font-medium bg-white shadow ${item.border}`}
                  >
                    <img src={item.icon} alt={item.platform} className="w-3 h-3 mr-1" />
                    {item.platform}
                    {isSelected && (
                      <div/>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold flex items-center">
              Tag
              <button
                style={{ border: '1px solid rgb(128 91 148)' }}
                className="w-6 h-6 mt-2 rounded-full flex items-center justify-center ml-2 flex-shrink-0"
              >
                <Pencil size={14} style={{ color: 'rgb(128 91 148)' }} />
              </button>
            </h3>
            <p className="text-sm text-gray-600">Lifestyle, Fashion, Beauty</p>
          </div>

          {/* Attachments */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold flex items-center">
              Attachments
              <button
                style={{ border: '1px solid rgb(128 91 148)' }}
                className="w-6 h-6 mt-2 rounded-full flex items-center justify-center ml-2 flex-shrink-0"
              >
                <Pencil size={14} style={{ color: 'rgb(128 91 148)' }} />
              </button>
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {[1, 2, 3].map((num) => (
                <div key={num} className="relative w-full sm:w-auto">
                  <input
                    readOnly
                    value={`https://www.stratixx.com/campaign/${num}`}
                    className="w-full px-3 py-1 pr-8 border rounded text-sm text-gray-700"
                  />
                  <ExternalLink
                    size={14}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Side Panel */}
          <div
            className="absolute top-22 right-6 w-64 space-y-8 pl-4"
            style={{
              top: '5.5rem',
              right: '1.5rem',
              borderLeft: '2px solid rgba(223, 223, 223, 1)',
              height: '40%',
              position: 'absolute',
            }}
          >
            <div className="flex justify-between items-center">
              <button
                style={{ borderColor: 'rgba(120,60,145,1)' }}
                className=" text-[rgba(120,60,145,1)] px-3 py-1 rounded-full border text-xs font-semibold"
              >
                CLOSE CAMPAIGN
              </button>
              <div
                className="border rounded-lg w-8 flex justify-center items-center"
                style={{ borderColor: 'rgba(120,60,145,1)' }}
              >
                <button className="text-[rgba(120,60,145,1)] font-bold text-md">
                  &#8942;
                </button>
              </div>
            </div>

            <div className="flex items-center text-xs text-black font-bold space-x-2">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span>Bangalore</span>
              </div>
              <span>|</span>
              <span>Budget: ₹1,000</span>
            </div>

            <a href="#" className="flex items-center space-x-1 text-xs">
              <span className="text-[rgba(120,60,145,1)]">About Brand</span>
              <ExternalLink size={14} className="text-[rgba(120,60,145,1)]" />
            </a>

            <div>
              <h3 className="font-bold text-sm">Pricing</h3>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-[rgba(30, 0, 43, 1)]">Costs per view:</span>
                <span className="font-bold">₹0.25</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold">Requirements</h3>
              <div className="flex justify-between text-sm mt-1">
                <span>Min number of followers:</span>
                <span className="font-bold">1,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Duration:</span>
                <span className="font-bold">60 days</span>
              </div>
            </div>

            <a
              href="#"
              className="text-[rgba(120,60,145,1)] text-xs flex items-center gap-1"
            >
              <Flag className="w-3 h-3 text-[rgba(120,60,145,1)]" />
              Report campaign
            </a>

            <div>
              <h3 className="font-semibold">Campaign link</h3>
              <div className="mt-1 relative">
                <input
                  type="text"
                  readOnly
                  value="https://www.camp_name.com"
                  className="w-full border border-gray-300 rounded-sm px-3 py-2 pr-10 text-xs bg-gray-100 text-gray-600"
                />
                <Copy className="w-4 h-4 text-gray-500 cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <Card />
        </div>
      </div>
      <Footer />
    <div/>
    </div>
    </>
  );
};

export default Edit;
