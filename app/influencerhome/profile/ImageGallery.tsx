"use client";
import { useState } from "react";
import { Pencil, X } from "lucide-react";

const ImageGallery = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-1">
        <div className="col-span-1 relative">
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

        <div className="col-span-1 relative">
          <img
            src="/photo-brand/b3.jpg"
            className="w-full h-52 object-cover rounded"
            alt="Main"
          />

          {/* Pencil button */}
          <button
            type="button"
            onClick={toggleModal}
            style={{ border: "1px solid rgb(128 91 148)" }}
            className="w-6 h-6 rounded-full flex items-center justify-center absolute top-1 right-1 bg-white"
          >
            <Pencil size={14} style={{ color: "rgb(128 91 148)" }} />
          </button>
        </div>
      </div>

      {/* Transparent Popup Modal */}
      {showModal && (
        <div
          className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50"
          onClick={toggleModal}
        >
          <div
            className="relative p-6 bg-white rounded-xl shadow-xl border max-w-md w-full"
            onClick={(e) => e.stopPropagation()} // prevent click from closing modal
          >
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
            >
              <X size={18} />
            </button>

            {/* Modal Content */}
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Edit Image Gallery
            </h2>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700">Upload New Image</label>
              <input
                type="file"
                accept="image/*"
                className="border border-gray-300 rounded p-2"
              />
            </div>

            <button
              onClick={toggleModal}
              className="mt-4 px-4 py-2 text-white rounded-md"
              style={{ backgroundColor: "rgb(128 91 148)" }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
