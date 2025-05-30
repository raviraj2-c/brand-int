"use client";

import React from "react";
import { Pencil, ArrowUp, ShieldCheck } from "lucide-react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import Card from "./Card";
import Navbarall from "../components/Navberall";
import Footer from "../components/Footer";

import { useRouter } from 'next/navigation';
 
export default function Dasbord() {
    const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbarall />

      {/* Main Content Area */}
      <div className="flex-grow bg-gradient-to-r from-purple-50 to-yellow-50 py-8">
        <div className="max-w-5xl mx-auto px-4 bg-white rounded shadow p-6 overflow-hidden">
          {/* Header */}
          <div className="flex items-center space-x-4 flex-wrap">
            <div className="relative w-16 h-16 flex-shrink-0">
              <img
                src="/google.jpg"
                className="w-16 h-16 rounded-full object-cover"
                alt="Starbucks"
              />
              <button
                type="button"
                style={{ border: "1px solid rgb(128 91 148)" }}
                className="w-6 h-6 rounded-full flex items-center justify-center absolute -bottom-1 -right-2 bg-white"
                suppressHydrationWarning
              >
                <Pencil size={14} style={{ color: "rgb(128 91 148)" }} />
              </button>
            </div>

            <div className="min-w-0 flex-grow">
              <h2 className="text-xl font-semibold flex items-center">
                Starbucks
                <button
                  type="button"
                  style={{ border: "1px solid rgb(128 91 148)" }}
                  className="w-6 h-6 rounded-full flex items-center justify-center ml-2 flex-shrink-0"
                  suppressHydrationWarning
                >
                  <Pencil size={14} style={{ color: "rgb(128 91 148)" }} />
                </button>
              </h2>
              <div className="flex items-center flex-wrap">
                <p className="text-sm text-gray-600 break-words min-w-0">
                  Cooking, Unfiltered, Roastmaster, Gourmet, Placeholder
                </p>
                <button
                  type="button"
                  style={{ border: "1px solid rgb(128 91 148)" }}
                  className="w-6 h-6 rounded-full flex items-center justify-center ml-2 flex-shrink-0 mt-1 md:mt-0"
                  suppressHydrationWarning
                >
                  <Pencil size={14} style={{ color: "rgb(128 91 148)" }} />
                </button>
              </div>
            </div>

           <div className="ml-auto flex space-x-2 flex-wrap">
  <button
    type="button"
    style={{ color: "rgb(120 61 145)" }}
    className="flex items-center px-2 py-1 border rounded-3xl whitespace-nowrap text-sm"
    suppressHydrationWarning
  >
    <ArrowUp className="w-3 h-3 mr-1" /> SHARE
  </button>
  <button
    type="button"
    onClick={() => router.push('/brand-home/Campaign')}
    style={{ background: "rgb(120 61 145)" }}
    className="px-2 py-1 text-white rounded-3xl whitespace-nowrap text-sm"
    suppressHydrationWarning
  >
    POST CAMPAIGN
  </button>
</div>

          </div>

          {/* Description */}
          <section className="mt-6">
            <h3 className="text-xl font-semibold flex items-center">
              Description
              <button
                type="button"
                style={{ border: "1px solid rgb(128 91 148)" }}
                className="w-6 h-6 rounded-full flex items-center justify-center ml-2 flex-shrink-0"
                suppressHydrationWarning
              >
                <Pencil size={14} style={{ color: "rgb(128 91 148)" }} />
              </button>
            </h3>

            <p className="text-sm text-gray-700 mt-2 break-words">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </p>

            <div className="flex space-x-4 mt-3 flex-wrap">
              <span className="px-2 py-1 text-xs border border-gray-300 rounded inline-flex flex-col items-start space-y-1 max-w-xs break-words">
                <div className="flex items-center space-x-1">
                  <CheckBadgeIcon
                    style={{ color: "rgb(209 205 96)" }}
                    className="w-4 h-4"
                  />
                  <h6 className="m-0 text-xs">Verified payment</h6>
                </div>
                <p className="text-xs text-gray-600">
                  This profile has been successfully verified.
                </p>
              </span>

              <span className="px-2 py-1 text-xs border border-gray-300 rounded inline-flex flex-col items-start space-y-1 max-w-xs break-words">
                <div className="flex items-center space-x-1">
                  <ShieldCheck
                    style={{ color: "rgb(209 205 96)" }}
                    className="w-4 h-4"
                  />
                  <h6 className="m-0 text-xs">Top Campaign</h6>
                </div>
                <p className="text-xs text-gray-600">
                  Used as a placeholder for top campaigns.
                </p>
              </span>
            </div>
          </section>

          {/* Stats */}
          <section className="mt-6">
            <h3 className="text-xl font-semibold flex items-center">
              Brief Stats about past campaigns
            </h3>

            <section className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                ["Number of campaigns", "12"],
                ["AVG campaign budget", "₹ 1,400"],
                ["Number of influencers", "20"],
                ["Highest campaign budget", "₹ 3,200"],
                ["Total money spent", "₹ 1,32,250"],
              ].map(([label, value]) => (
                <div
                  className="bg-white border border-t-[1.5px] border-t-red-400  
                  border-r-[1.5px] border-r-green-400 
                  border-b-[1.5px] border-b-blue-400 
                  border-l-[1.5px] border-l-yellow-400 
                  rounded p-3 text-center shadow-sm"
                  key={label}
                >
                  <p className="text-xs text-gray-500">{label}</p>
                  <p className="text-base font-semibold mt-1">{value}</p>
                </div>
              ))}
            </section>
          </section>

          {/* Card Section */}
         
            <Card />
     
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
