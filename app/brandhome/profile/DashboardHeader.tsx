"use client";
import { useState, useRef } from "react";
import { Pencil, ArrowUp, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
  const router = useRouter();

  const [showImageModal, setShowImageModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [showTagsModal, setShowTagsModal] = useState(false);

  const [name, setName] = useState("Starbucks");
  const [tags, setTags] = useState([
    "Cooking",
    "Unfiltered",
    "Roastmaster",
    "Gourmet",
    "Placeholder",
  ]);
  const [tagInput, setTagInput] = useState("");

  const MAX_TAGS = 6;
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const purple = "rgb(120 61 145)";

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim()) && tags.length < MAX_TAGS) {
        setTags([...tags, tagInput.trim()]);
        setTagInput("");
      }
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="flex items-center space-x-4 flex-wrap">
      {/* IMAGE */}
      <div className="relative w-16 h-16 flex-shrink-0">
        <img
          src={preview || "/google.jpg"}
          className="w-16 h-16 rounded-full object-cover"
          alt="Profile"
        />
        <button
          type="button"
          onClick={() => setShowImageModal(true)}
          style={{ border: "1px solid rgb(128 91 148)" }}
          className="w-6 h-6 rounded-full flex items-center justify-center absolute -bottom-1 -right-2 bg-white"
        >
          <Pencil size={14} style={{ color: "rgb(128 91 148)" }} />
        </button>
      </div>

      {/* NAME & TAGS */}
      <div className="min-w-0 flex-grow">
        <h2 className="text-xl font-semibold flex items-center">
          {name}
          <button
            type="button"
            onClick={() => setShowNameModal(true)}
            style={{ border: "1px solid rgb(128 91 148)" }}
            className="w-6 h-6 rounded-full flex items-center justify-center ml-2"
          >
            <Pencil size={14} style={{ color: "rgb(128 91 148)" }} />
          </button>
        </h2>
        <div className="flex items-center flex-wrap">
          <p className="text-sm text-gray-600 break-words min-w-0">
            {tags.join(", ")}
          </p>
          <button
            type="button"
            onClick={() => setShowTagsModal(true)}
            style={{ border: "1px solid rgb(128 91 148)" }}
            className="w-6 h-6 rounded-full flex items-center justify-center ml-2 mt-1 md:mt-0"
          >
            <Pencil size={14} style={{ color: "rgb(128 91 148)" }} />
          </button>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="ml-auto flex space-x-2 flex-wrap">
        <button
          type="button"
          style={{ color: purple }}
          className="flex items-center px-2 py-1 border rounded-3xl text-sm"
        >
          <ArrowUp className="w-3 h-3 mr-1" /> SHARE
        </button>
        <button
          type="button"
          onClick={() => router.push("/brandhome/Campaign")}
          style={{ background: purple }}
          className="px-2 py-1 text-white rounded-3xl text-sm"
        >
          POST CAMPAIGN
        </button>
      </div>

      {/* IMAGE MODAL */}
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
                  Must be an actual photo of you. Logos, clip-art, group photos,
                  and digitally-altered images are not recommended.{" "}
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

      {/* NAME MODAL */}
      {showNameModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40"
          onClick={() => setShowNameModal(false)}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowNameModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            >
              <X size={18} />
            </button>
            <h2 className="text-lg font-semibold mb-3">Edit Brand Name</h2>
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
                className="bg-purple-600 text-white px-4 py-2 rounded-md"
                onClick={() => setShowNameModal(false)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAGS MODAL */}
      {showTagsModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40"
          onClick={() => setShowTagsModal(false)}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg relative w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTagsModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            >
              <X size={18} />
            </button>
            <h2 className="text-lg font-semibold">Edit Tags</h2>
            <p className="text-sm text-gray-500 mb-3">
              Add tags that highlight your brand.
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
              <p className="text-xs text-red-500">You can only add up to 6 tags</p>
            )}
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="text-gray-600 font-semibold"
                onClick={() => setShowTagsModal(false)}
              >
                Cancel
              </button>
              <button
                className={`${
                  tags.length > MAX_TAGS
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-purple-600 text-white"
                } px-4 py-2 rounded-md`}
                onClick={() => setShowTagsModal(false)}
                disabled={tags.length > MAX_TAGS}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
