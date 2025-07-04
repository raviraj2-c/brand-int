"use client";

import React from "react";
import { Pencil, ArrowUp, ShieldCheck } from "lucide-react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import Card from "./Card";
import Navbarall from "../components/Navberall";
import Footer from "../components/Footer";

import { useRouter } from 'next/navigation';
import DashboardHeader from "./DashboardHeader";
import DashboardDescription from "./DashboardDescription";
import DashboardStats from "./DashboardStats";
 
export default function Dasbord() {
    const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbarall />

      {/* Main Content Area */}
      <div className="flex-grow bg-gradient-to-r from-purple-50 to-yellow-50 py-8">
        <div className="max-w-5xl mx-auto px-4 bg-white rounded shadow p-6 overflow-hidden">
          {/* Header */}
          
<DashboardHeader />
          <DashboardDescription />
          <DashboardStats />
       
         

          {/* Card Section */}
         
            <Card />
     
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
