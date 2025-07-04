export default function MediaSelector() {
  return (
    <div className="relative w-60 mb-6">
      <label
        htmlFor="socialMedia"
        className="absolute -top-2 left-3 px-1 text-sm font-medium bg-white"
        style={{ color: 'rgba(120, 60, 145, 1)' }}
      >
        Social media
      </label>
      <select
        id="socialMedia"
        className="w-full px-4 py-3 rounded-md text-base appearance-none focus:outline-none"
        defaultValue="Instagram"
        style={{
          border: '2px solid rgba(120, 60, 145, 1)',
          color: 'rgba(120, 60, 145, 1)',
        }}
      >
        <option>Instagram</option>
        <option>Facebook</option>
        <option>YouTube</option>
        <option>X</option>
        <option>TikTok</option>
      </select>
      <div className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 text-xs text-gray-500">
        ▼
      </div>
    </div>
  );
}
