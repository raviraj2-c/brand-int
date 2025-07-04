"use client";

export default function DashboardStats() {
  const stats = [
    ["Number of campaigns", "12"],
    ["AVG campaign budget", "₹ 1,400"],
    ["Number of influencers", "20"],
    ["Highest campaign budget", "₹ 3,200"],
    ["Total money spent", "₹ 1,32,250"],
  ];

  return (
    <section className="mt-6">
      <h3 className="text-xl font-semibold">
        Brief Stats about past campaigns
      </h3>

      <section className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map(([label, value]) => (
          <div
            key={label}
            className="bg-white border border-t-[1.5px] border-t-red-400  
            border-r-[1.5px] border-r-green-400 
            border-b-[1.5px] border-b-blue-400 
            border-l-[1.5px] border-l-yellow-400 
            rounded p-3 text-center shadow-sm"
          >
            <p className="text-xs text-gray-500">{label}</p>
            <p className="text-base font-semibold mt-1">{value}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
