import Link from "next/link";

export default function PageHeader({ title }) {
  return (
    <nav
      aria-label="breadcrumb"
      className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 text-center position-relative w-100"
      style={{
        backgroundColor: "#f5f0e8",
      }}
    >
      <div className="text-center position-relative">
        <h1
          className="display-5 fw-bold mb-3"
          style={{ fontSize: "clamp(2rem, 6vw, 3rem)", color: "#1a3a33", letterSpacing: "-0.01em" }}
        >
          {title}
        </h1>

        <p className="mt-3" style={{ fontSize: "clamp(0.95rem, 2.2vw, 1rem)", color: "#555555", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          <Link
            href="/"
            className="text-decoration-none"
            style={{ color: "#5a7a52", fontWeight: "500", transition: "color 0.2s" }}
            onMouseOver={e => e.target.style.color = "#fd2a05ff"}
            onMouseOut={e => e.target.style.color = "#5a7a52"}
          >
            Home
          </Link>{" "}
          <span style={{ color: "#1a3a33" }}>/</span>{" "}
          <span style={{ color: "#1a3a33", fontWeight: "500" }}>{title}</span>
        </p>
      </div>
    </nav>
  );
}
