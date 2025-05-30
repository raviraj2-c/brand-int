"use client";
import React, { useRef, useState, useEffect, ChangeEvent } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function AddProfilePic() {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const purple = "rgba(120, 60, 145, 1)";
  const currentStep = 5;
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/influencer-signin/information/Socialmedia');
  }, [router]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50 flex flex-col overflow-hidden">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 px-8">
        <div className="flex items-center">
          <span className="text-lg font-bold tracking-wider">"</span>
          <span className="text-lg font-bold tracking-wider rotate-45"> ) </span>
          <span className="text-sm font-bold tracking-wider ml-2">SOCIAL STRATIX</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center bg-[#f9f6f4] overflow-hidden">
        <div className="bg-white p-6 rounded-lg shadow-md w-[420px]">
          {/* Step Info */}
          <div className="text-sm text-gray-500 mb-2">Question 5/5</div>

          {/* Progress Bar */}
          <div className="flex mb-4 mt-1">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="h-1 flex-1 mx-0.5 rounded-full"
                style={{
                  backgroundColor: index < currentStep ? purple : "#e5e7eb",
                }}
              ></div>
            ))}
          </div>

          {/* Header */}

          <button 
           type="button"
              onClick={() => router.push('/influencer-signin/information/Socialmedia')}
              className="flex items-center gap-2 mb-4 transition-colors hover:bg-gray-100 rounded-lg p-1"
          >
            <ArrowLeft size={20} className="bg-gray-200 rounded-lg cursor-pointer" />
            <h1 className="text-lg font-semibold">Add your profile pic</h1>
          </button>

          <div className="flex items-start gap-4">
            {/* Upload Circle */}
            <div
              onClick={triggerFileInput}
              className="w-36 h-36 rounded-full border-2 border-dashed flex items-center justify-center text-sm cursor-pointer relative overflow-hidden transition-colors hover:bg-gray-50"
              style={{
                borderColor: purple
              }}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-gray-500 text-center px-2 text-xs">
                  Add or drop photo here
                </span>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="hidden"
              />
            </div>

            {/* Preview Circles */}
            <div className="flex-1">
              <p className="font-semibold mb-2 text-sm">
                Show clients the best version of yourself!
              </p>
              <div className="flex items-center gap-2 mb-2">
                {[40, 32, 24, 16].map((size, i) => (
                  <div
                    key={i}
                    className="rounded-full bg-gray-300 overflow-hidden"
                    style={{ width: size, height: size }}
                  >
                    {preview && (
                      <img
                        src={preview}
                        alt="Mini preview"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500">
                Must be an actual photo of you. Logos, clip-art, group photos, and
                digitally-altered images are not recommended.{" "}
                <a
                  href="#"
                  className="underline"
                  style={{ color: purple }}
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>

          {/* Requirements */}
          <div className="text-xs text-gray-500 mt-4">200x200 Min / 10 MB Max</div>

          {/* Buttons */}
          <div className="mt-6 space-y-2">
            <button
              style={{ background: purple }}
              className="w-full text-white py-2 rounded-md transition-colors hover:brightness-110"
            >
              NEXT
            </button>
            <button
              style={{ color: purple }}
              className="w-full text-center text-sm transition-colors hover:bg-purple-50"
            >
              SKIP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
