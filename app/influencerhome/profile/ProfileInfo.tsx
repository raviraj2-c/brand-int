"use client";
import { useState, useRef } from "react";
import { Pencil, ArrowUp, X } from "lucide-react";

const MAX_TAGS = 6;
const purple = "rgba(120, 60, 145, 1)";

const ProfileInfo = () => {
  const [showNameModal, setShowNameModal] = useState(false);
  const [showTagsModal, setShowTagsModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const [tags, setTags] = useState([
    "Cooking",
    "Unfiltered",
    "RoastMaster",
    "Gourmet",
    "Roastmaster",
    "Placeholder",
  ]);
  const [tagInput, setTagInput] = useState("");
  const [name, setName] = useState("Adam eve | Any other placeholder text here");
  const [preview, setPreview] = useState("/photo-brand/profile.jpg");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      if (tags.length < MAX_TAGS && !tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
        setTagInput("");
      }
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex items-center mt-3 relative">
      <div className="relative flex-1">
        {/* Profile image */}
        <div className="absolute -top-14 left-4">
          <img
            src={preview}
            className="w-20 h-20 rounded-full border-4 border-white shadow"
            alt="Profile"
          />
          <button
            type="button"
            onClick={() => setShowImageModal(true)}
            style={{ border: "1px solid rgb(128 91 148)" }}
            className="w-5 h-5 rounded-full flex items-center justify-center absolute top-[60px] right-1 bg-white z-10"
          >
            <Pencil size={12} style={{ color: "rgb(128 91 148)" }} />
          </button>
        </div>

        <div className="flex items-center mt-12 space-x-4">
          <div className="pl-24 absolute -top-4">
            <h2 className="text-xl font-semibold">{name}</h2>

            {/* Name Edit */}
            <button
              onClick={() => setShowNameModal(true)}
              className="w-6 h-6 rounded-full flex items-center justify-center absolute top-1 right-18 bg-white border"
              style={{ borderColor: "rgb(128 91 148)" }}
            >
              <Pencil size={14} style={{ color: "rgb(128 91 148)" }} />
            </button>

            {/* Tags */}
            <p className="text-gray-600 text-sm">
              Bangalore · {tags.join(", ")}
            </p>

            {/* Tags Edit */}
            <button
              onClick={() => setShowTagsModal(true)}
              className="w-6 h-6 rounded-full flex items-center justify-center absolute top-7 -right-8 bg-white border"
              style={{ borderColor: "rgb(128 91 148)" }}
            >
              <Pencil size={14} style={{ color: "rgb(128 91 148)" }} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-3 ml-6 mb-4">
        <button
          className="flex items-center px-3 py-1.5 border rounded-full text-xs font-semibold"
          style={{
            color: "rgba(120, 60, 145, 1)",
            borderColor: "rgba(120, 60, 145, 1)",
          }}
        >
          <ArrowUp className="w-3 h-3 mr-1.5" /> SHARE
        </button>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20"
          onClick={() => setShowImageModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-xl shadow-xl w-[520px] max-w-full relative"
          >
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-3">Edit Profile Photo</h2>

            <div className="flex gap-4 items-start">
              {/* Upload Area */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-36 h-36 rounded-full border-2 border-dashed flex items-center justify-center text-sm relative overflow-hidden cursor-pointer"
                style={{ borderColor: purple }}
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

              {/* Info Area */}
              <div className="flex-1">
                <p className="font-semibold text-sm mb-2">
                  Help influencers recognise you easier!
                </p>
                <div className="flex gap-2 mb-2">
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
                  Must be an actual photo of you. Logos, clip-art, group photos, and digitally-altered images are not recommended.{" "}
                  <a href="#" className="underline" style={{ color: purple }}>
                    Learn more
                  </a>
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3">200x200 Min / 10 MB Max</p>

            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-sm font-semibold text-purple-700"
              >
                CHANGE
              </button>
              <button
                className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold"
                onClick={() => setShowImageModal(false)}
              >
                SAVE PHOTO
              </button>
            </div>
          </div>
        </div>
      )}
{/* Name Modal */}
      {showNameModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md"
          onClick={() => setShowNameModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg max-w-md w-full relative"
          >
            <button
              onClick={() => setShowNameModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            >
              <X size={18} />
            </button>
            <h2 className="text-lg font-semibold mb-3">Edit Name</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                className="text-gray-600 font-semibold"
                onClick={() => setShowNameModal(false)}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowNameModal(false)}
                className="bg-purple-600 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tags Modal */}
      {showTagsModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md"
          onClick={() => setShowTagsModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg max-w-lg w-full relative"
          >
            <button
              onClick={() => setShowTagsModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-semibold">Edit Tags</h2>
            <p className="text-sm text-gray-500 mb-3">
              Add tags that highlight your skills.
            </p>

            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {tag}
                  <X
                    size={14}
                    className="ml-2 cursor-pointer"
                    onClick={() => removeTag(tag)}
                  />
                </span>
              ))}
            </div>

            <input
              type="text"
              placeholder="Add tag and press Enter"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={addTag}
              className="w-full p-2 border border-gray-300 rounded-md mb-1"
            />
            {tags.length >= MAX_TAGS && (
              <p className="text-xs text-red-500">
                You can only add up to 6 tags
              </p>
            )}

            <div className="flex justify-end gap-3 mt-4">
              <button
                className="text-gray-600 font-semibold"
                onClick={() => setShowTagsModal(false)}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowTagsModal(false)}
                disabled={tags.length > MAX_TAGS}
                className={`${
                  tags.length > MAX_TAGS
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-purple-600 text-white"
                } px-4 py-2 rounded-md`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Name & Tags modals remain unchanged */}
    </div>
  );
};

export default ProfileInfo;
