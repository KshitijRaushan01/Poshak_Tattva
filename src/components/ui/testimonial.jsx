import { motion } from "framer-motion";
import { cn } from "lib/utils";

// --- Helpers ---

/** Returns up to 2 initials from a name string */
function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/** Returns a deterministic background colour from the first letter */
function getAvatarBg(name) {
  const palette = [
    "#2D6A4F", "#40916C", "#74C69D",
    "#1B4332", "#52796F", "#84A98C",
    "#3A5A40", "#588157", "#A3B18A",
    "#C2A46F", "#8B6347", "#5A3E28",
  ];
  const idx = name ? name.charCodeAt(0) % palette.length : 0;
  return palette[idx];
}

/** Renders filled / half / empty stars */
function StarIcon({ size = 16, filled = true }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
        fill={filled ? "#C2A46F" : "#e5e7eb"}
      />
    </svg>
  );
}

// --- Component ---

/**
 * TestimonialCard
 *
 * Props:
 *   name        {string}  – reviewer's name
 *   role        {string}  – reviewer's role / service used
 *   quote       {string}  – testimonial text
 *   rating      {number}  – star count (1–5), default 5
 *   className   {string}  – optional extra class names
 */
export function TestimonialCard({ name, role, quote, rating = 5, className }) {
  const initials = getInitials(name);
  const bg = getAvatarBg(name);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        .pt-tc {
          font-family: 'Poppins', sans-serif;
          width: 300px;
          min-width: 300px;
          height: max-content;
          display: flex;
          flex-direction: column;
          border: 1px solid #ede8df;
          border-radius: 1rem;
          background: #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          overflow: hidden;
          flex-shrink: 0;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          padding: 1.5rem;
          gap: 0;
        }
        .pt-tc:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 40px rgba(0,0,0,0.12);
        }

        /* Avatar row */
        .pt-tc .tc-avatar-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
          flex-shrink: 0;
        }
        .pt-tc .tc-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.5px;
          flex-shrink: 0;
        }
        .pt-tc .tc-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
          line-height: 1.3;
        }
        .pt-tc .tc-role {
          font-size: 0.78rem;
          color: #9ca3af;
          margin: 0;
          margin-top: 1px;
        }

        /* Stars */
        .pt-tc .tc-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 0.75rem;
          flex-shrink: 0;
        }

        /* Quote */
        .pt-tc .tc-quote {
          color: #4b5563;
          font-size: 0.82rem;
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }

        /* Divider */
        .pt-tc .tc-divider {
          border: none;
          border-top: 1px solid #f3f0eb;
          margin: 0.75rem 0 0.6rem;
          flex-shrink: 0;
        }
      `}</style>

      <div className={cn("pt-tc", className)}>
        {/* Avatar + name row */}
        <div className="tc-avatar-row">
          <div className="tc-avatar" style={{ background: bg }}>
            {initials}
          </div>
          <div>
            <p className="tc-name">{name}</p>
            {role && <p className="tc-role">{role}</p>}
          </div>
        </div>

        {/* Stars */}
        <div className="tc-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < Math.round(rating)} />
          ))}
        </div>

        <hr className="tc-divider" />

        {/* Quote */}
        <p className="tc-quote">{quote}</p>
      </div>
    </>
  );
}

export default TestimonialCard;
