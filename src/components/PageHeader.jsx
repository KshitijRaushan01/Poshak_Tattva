import Link from "next/link";

export default function PageHeader({ title }) {
  return (
    <nav
      aria-label="breadcrumb"
      className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 text-center position-relative w-100"
      style={{
        backgroundColor: "#dcecff", // ✅ ensures the blue background is visible
      }}
    >
      <div className="text-center position-relative">
        <p
          className="fw-bold mb-2"
          style={{ fontSize: "56px", color: "#1769aa" }}
        >
          {title}
        </p>

        <p className="mt-2" style={{ fontSize: "18px" }}>
          <Link
            href="/"
            className="text-decoration-none"
            style={{ color: "#3eb489" }}
          >
            Home
          </Link>{" "}
          / <span style={{ color: "#1769aa" }}>{title}</span>
        </p>
      </div>
    </nav>
  );
}
