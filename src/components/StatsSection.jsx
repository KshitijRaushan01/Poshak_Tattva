"use client";

export default function StatsSection() {
  const stats = [
    { value: "8+", label: "Years Of Experience" },
    { value: "150,000+", label: "Happy Patients" },
    { value: "50,000+", label: "Operations" },
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl text-white py-12 px-8 flex flex-col md:flex-row justify-around items-center gap-8"
          style={{
            backgroundImage: "url('/img/poshak.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {stats.map((item, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl font-bold">{item.value}</h3>
              <p className="text-lg mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
