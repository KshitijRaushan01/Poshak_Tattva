"use client";

export default function StatsSection() {
  const stats = [
    { value: "5+", label: "Years Of Experience" },
    { value: "15K+", label: "Happy Patients" },
    { value: "5+", label: "Operations" },
  ];

  return (
    <section className="wrapper py-12">
      <div className="container">
        <div
          className="rounded-4 text-white py-4 px-8 d-flex flex-column flex-md-row justify-content-around align-items-center gap-4"
          style={{
            background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)",
            boxShadow: "0 10px 30px rgba(31, 61, 43, 0.2)"
          }}
        >
          {stats.map((item, i) => (
            <div key={i} className="text-center">
              <h3 className="display-4 fw-bold mb-2 text-white">{item.value}</h3>
              <p className="lead mb-0 text-white text-opacity-75">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
