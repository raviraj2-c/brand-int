"use client";
import { useState } from "react";
import { Pencil, X } from "lucide-react";

const DescriptionSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="mt-8 relative">
      <h3 className="text-xl font-semibold mb-2">Description</h3>

      {/* Pencil Icon */}
      <button
        type="button"
        onClick={handleToggleModal}
        style={{ border: "1px solid rgb(128 91 148)" }}
        className="w-6 h-6 rounded-full flex items-center justify-center absolute -top-0 left-28 bg-white"
      >
        <Pencil size={14} style={{ color: "rgb(128 91 148)" }} />
      </button>

      {/* Description Text */}
      <p className="text-sm text-gray-700 mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      {/* Modal */}
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
    </div>
  );
};

export default DescriptionSection;
