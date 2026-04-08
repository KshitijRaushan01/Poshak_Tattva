import { cn } from "lib/utils";

/**
 * StarIcon — renders a single filled star SVG (colour: #FF532E)
 */
function StarIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
        fill="#FF532E"
      />
    </svg>
  );
}

/**
 * TestimonialCard
 *
 * Props:
 *   name        {string}  – reviewer's name
 *   role        {string}  – reviewer's role / service used
 *   quote       {string}  – testimonial text
 *   image       {string}  – URL to reviewer avatar
 *   rating      {number}  – star count (1–5), default 5
 *   className   {string}  – optional extra class names
 *
 * Designed to live at: src/components/ui/testimonial.jsx
 * Import path alias   : components/ui/testimonial
 */
export function TestimonialCard({ name, role, quote, image, rating = 5, className }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
        .pt-testimonial-card {
          font-family: 'Poppins', sans-serif;
          width: 320px;
          border: 1px solid #e5e7eb;
          padding-bottom: 1.5rem;
          border-radius: 0.5rem;
          background: #ffffff;
          box-shadow: 0 4px 15px 0 rgba(0,0,0,0.05);
          flex-shrink: 0;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .pt-testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px 0 rgba(0,0,0,0.10);
        }
        .pt-testimonial-card .avatar-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 1.25rem;
          position: relative;
        }
        .pt-testimonial-card .avatar {
          height: 96px;
          width: 96px;
          border-radius: 50%;
          object-fit: cover;
          margin-top: -3.5rem;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .pt-testimonial-card .name {
          margin-top: 0.75rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #1f2937;
          text-align: center;
        }
        .pt-testimonial-card .role {
          font-size: 0.85rem;
          color: rgba(31,41,55,0.7);
          text-align: center;
          margin-top: 0.15rem;
        }
        .pt-testimonial-card .quote {
          color: #6b7280;
          font-size: 0.875rem;
          padding: 0 1.5rem;
          text-align: center;
          line-height: 1.6;
        }
        .pt-testimonial-card .stars {
          display: flex;
          justify-content: center;
          gap: 2px;
          padding-top: 1rem;
        }
      `}</style>
      <div className={cn("pt-testimonial-card", className)}>
        {/* Avatar section — positioned absolutely above the card top, needs parent pt-14 spacing */}
        <div className="avatar-wrap" style={{ paddingTop: "4rem" }}>
          <img className="avatar" src={image} alt={name} />
          <p className="name">{name}</p>
          <p className="role">{role}</p>
        </div>
        <p className="quote">{quote}</p>
        <div className="stars">
          {Array.from({ length: Math.round(rating) }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
