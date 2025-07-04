"use client";
import { Pencil, ShieldCheck, X } from "lucide-react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function DashboardDescription() {
    const [showModal, setShowModal] = useState(false);
    
      const handleToggleModal = () => {
        setShowModal((prev) => !prev);
      };
  return (
    <section className="mt-6">
      <h3 className="text-xl font-semibold flex items-center">
        Description
        <button
          type="button"
          onClick={handleToggleModal}
          style={{ border: "1px solid rgb(128 91 148)" }}
          className="w-6 h-6 rounded-full flex items-center justify-center ml-2"
        >
          <Pencil size={14} style={{ color: "rgb(128 91 148)" }} />
        </button>
      </h3>

      <p className="text-sm text-gray-700 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
      </p>

      <div className="flex space-x-4 mt-3 flex-wrap">
        <span className="px-2 py-1 text-xs border border-gray-300 rounded inline-flex flex-col items-start space-y-1 max-w-xs">
          <div className="flex items-center space-x-1">
            <CheckBadgeIcon className="w-4 h-4" style={{ color: "rgb(209 205 96)" }} />
            <h6 className="text-xs">Verified payment</h6>
          </div>
          <p className="text-xs text-gray-600">
            This profile has been successfully verified.
          </p>
        </span>

        <span className="px-2 py-1 text-xs border border-gray-300 rounded inline-flex flex-col items-start space-y-1 max-w-xs">
          <div className="flex items-center space-x-1">
            <ShieldCheck className="w-4 h-4" style={{ color: "rgb(209 205 96)" }} />
            <h6 className="text-xs">Top Campaign</h6>
          </div>
          <p className="text-xs text-gray-600">
            Used as a placeholder for top campaigns.
          </p>
        </span>
        
      </div>

        {showModal && (
        <div
          className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50"
          onClick={handleToggleModal}
        >
          <div
            className="relative bg-white p-6 rounded-xl shadow-xl border max-w-md w-full"
            
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleToggleModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
            >
              <X size={18} />
            </button>

            {/* Modal Content */}
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Edit Description</h2>
            <textarea
              rows={4}
              placeholder="Enter your updated description here..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <button
              onClick={handleToggleModal}
              className="mt-4 px-4 py-2 text-white rounded-md"
              style={{ backgroundColor: "rgb(128 91 148)" }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
