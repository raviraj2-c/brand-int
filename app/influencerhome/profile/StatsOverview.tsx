const stats = [
  { label: "Number of campaigns", value: "12" },
  { label: "AVG campaign budget", value: "₹ 1,400" },
  { label: "Total reach", value: "₹ 1,400" }
];

export default function StatsOverview() {
  return (
    <div className="flex gap-2 h-60">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex-1 aspect-square overflow-hidden rounded-lg"
          style={{
            border: "3px solid",
            borderImageSource: "linear-gradient(225deg, #FFE2B6 0%, #99FCFF 100%)",
            borderImageSlice: 1,
          }}
        >
          <img
            src={`/photo-brand/stat/${i}.png`}
            alt={`Stat ${i}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="flex-1 flex flex-col gap-1">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex-1 p-2 text-center flex flex-col justify-center"
            style={{
              border: "3px solid",
              borderImageSource: "linear-gradient(225deg, #EAFFC2 0%, #FFD4F6 100%)",
              borderImageSlice: 1,
            }}
          >
            <p className="text-xs text-gray-500 leading-tight">{stat.label}</p>
            <h2 className="text-base font-semibold">{stat.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
