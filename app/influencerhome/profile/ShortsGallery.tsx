export default function ShortsGallery() {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-lg font-bold text-gray-900">Shorts</h2>
        <span className="text-xs text-gray-600">Last 7 days ▼</span>
      </div>
      <div
        className="flex overflow-x-auto gap-2 pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <img
            key={index}
            src={`/photo-brand/shorts/${index + 1}.jpg`}
            className="w-40 h-50 object-cover rounded-md flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}