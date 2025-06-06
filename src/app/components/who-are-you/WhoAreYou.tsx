"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function WhoAreYou() {
  const [selected, setSelected] = useState<string>("");
  const router = useRouter();

  const handleSelect = (type: string): void => {
    setSelected(type);
  };

  const handleContinue = (): void => {
    if (selected === "Influencer") {
      router.push("/influencersignin");
    } else if (selected === "Brand") {
      router.push("/brandsignin");
    }
  };

  const isSelected = (type: string): boolean => selected === type;

  const purple = "rgba(120, 60, 145, 1)";

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50">
      <nav className="bg-white shadow-md p-4 px-8">
         <div className="flex items-center">
  <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider">"</h1>
  <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider rotate-40">)</h1>
  <span className="ml-2 text-sm "></span>
  <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider">SOCIAL STRATIX</h1>
</div>
      </nav>

      <div className="flex flex-col items-center justify-center py-12">
        <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Tell us who you are</h1>
            <p className="mt-1 text-gray-500 text-sm">
              Knowing whether you're an influencer or a brand helps us tailor the platform experience to suit your needs.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center relative">
            {/* Influencer Card */}
            <div
              onClick={() => handleSelect("Influencer")}
              className={`relative cursor-pointer p-4 rounded-lg transition-all duration-300 w-60 shadow-md hover:bg-gray-100 ${
                isSelected("Influencer") ? "bg-white" : "bg-white"
              }`}
              style={
                isSelected("Influencer")
                  ? {
                      border: `2px solid ${purple}`,
                      backgroundColor: "rgba(120, 60, 145, 0.05)",
                    }
                  : {}
              }
            >
              {isSelected("Influencer") && (
                <CheckCircle
                  size={20}
                  className="absolute top-2 left-2"
                  color={purple}
                  strokeWidth={2.5}
                />
              )}
              <img src="./Influencer.png" alt="Influencer" className="h-32 mx-auto mb-3" />
              <h2 className="text-lg font-bold text-gray-800 ">Influencer</h2>
              <p className="text-sm text-gray-500 mt-1 ">
                A content creator with a following who influences their audience's decisions through digital platforms.
              </p>
            </div>

            {/* Brand Card */}
            <div
              onClick={() => handleSelect("Brand")}
              className={`relative cursor-pointer p-4 rounded-lg transition-all duration-300 w-60 shadow-md hover:bg-gray-100 ${
                isSelected("Brand") ? "bg-white" : "bg-white"
              }`}
              style={
                isSelected("Brand")
                  ? {
                      border: `2px solid ${purple}`,
                      backgroundColor: "rgba(120, 60, 145, 0.05)",
                    }
                  : {}
              }
            >
              {isSelected("Brand") && (
                <CheckCircle
                  size={20}
                  className="absolute top-2 left-2"
                  color={purple}
                  strokeWidth={2.5}
                />
              )}
              <img src="./brand.png" alt="Brand" className="h-32 mx-auto mb-3" />
              <h2 className="text-lg font-bold text-gray-800 ">Brand</h2>
              <p className="text-sm text-gray-500 mt-1 ">
                A business or organization that builds recognition and loyalty through its products and marketing.
              </p>
            </div>
          </div>

          {/* Continue Button */}
          <div className="text-center mt-8">
            <button
              disabled={!selected}
              onClick={handleContinue}
              className={`px-4 py-1.5 rounded-full cursor-pointer border text-sm font-medium transition-all duration-200 ${
                selected
                  ? "hover:shadow-md"
                  : "bg-gray-300 cursor-not-allowed text-white border-gray-300"
              }`}
              style={
                selected
                  ? {
                      color: purple,
                      borderColor: purple,
                      backgroundColor: "#D1D5DB",
                    }
                  : {}
              }
            >
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
