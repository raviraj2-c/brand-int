"use client";
import React, { useState, useEffect, KeyboardEvent } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from 'next/navigation';


export default function Skill() {
  const currentStep = 3;
  const purple = "rgba(120, 60, 145, 1)";
  const router = useRouter();


  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    router.prefetch('/influencersignin/information/Socialmedia');
    router.prefetch('/influencersignin/information/kind-of-influencer');
  }, [router]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 px-6">
         <div className="flex items-center">
  <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider">"</h1>
  <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider rotate-40">)</h1>
  <span className="ml-2 text-sm "></span>
  <h1 className="text-lg font-bold text-[rgb(43 38 51)] tracking-wider">SOCIAL STRATIX</h1>
</div>
      </nav>

      {/* Form container */}
      <div className="flex mt-4 justify-center items-center flex-grow">
        <div className="bg-white p-6 rounded-lg border w-full max-w-md shadow-sm">
          <p className="text-xs text-gray-400 mb-2">Question 3/5</p>

          {/* Progress bar */}
          <div className="flex mb-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="h-1 flex-1 mx-0.5 rounded-full"
                style={{
                  backgroundColor: index < currentStep ? purple : "#e5e7eb",
                }}
              ></div>
            ))}
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 flex items-baseline gap-2">
              <button
                type="button"
                onClick={() => router.push('/influencersignin/information/kind-of-influencer')}
                className="bg-gray-200 cursor-pointer p-1.5 rounded-md inline-flex items-center justify-center transition-colors hover:bg-gray-300"
              >
                <ArrowLeft size={20} className="text-gray-700" />
              </button>
              <span>
                Add tags that clearly highlight your skills and expertise, making it easy for brands to understand you.
              </span>
            </h2>

            <a
              href="#"
              style={{ color: purple }}
              className="text-xs font-bold ml-10 mt-1 inline-block"
            >
              View Example
            </a>
          </div>

          {/* Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Add Tags"
              className="w-full px-3 py-2 outline-none text-sm text-gray-700 bg-white rounded-md placeholder-black"
              style={{ border: `1px solid ${purple}` }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          {/* Tags Display */}
          {tags.length > 0 && (
            <div
              className="border rounded-md p-3 mb-4"
              style={{ borderColor: purple }}
            >
              <div className="grid grid-cols-3 gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full text-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <button
            type="button"
            onClick={() => router.push('/influencersignin/information/Socialmedia')}
            style={{ background: purple }}
            className="w-full cursor-pointer text-white text-sm font-bold py-2 mt-2 rounded-full transition-colors hover:brightness-110"
          >
            NEXT
          </button>

          <button
            type="button"
            onClick={() => router.push('/influencersignin/information/Socialmedia')}
            style={{ color: purple }}
            className="w-full cursor-pointer text-sm font-bold py-2 mt-2 rounded-full transition-colors hover:bg-purple-50"
          >
            SKIP
          </button>

          {/* Example Image */}
          <img src="/Tag.png" alt="Example tags" className="w-full mt-4 rounded-md" />
        </div>
      </div>
    </div>
  );
}
