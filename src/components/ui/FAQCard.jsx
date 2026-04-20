import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────
   FAQItem — numbered accordion row, matching Framer design
   ───────────────────────────────────────────────────────── */
function FAQItem({ num, question, answer, isFirst = false }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      style={{
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: open ? "rgba(255,255,255,0.7)" : "transparent",
        borderRadius: open ? 12 : 0,
        transition: "background 0.2s",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          gap: 16,
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {/* Number tag */}
        <span
          style={{
            fontFamily: "'Figtree', sans-serif",
            fontWeight: 600,
            fontSize: 12,
            color: "#9ca3af",
            letterSpacing: "0.05em",
            flexShrink: 0,
            paddingTop: 3,
            minWidth: 24,
          }}
        >
          {num}
        </span>

        {/* Question text */}
        <span
          style={{
            fontFamily: "'Figtree', sans-serif",
            fontWeight: 600,
            fontSize: 15,
            color: "#111927",
            flex: 1,
            lineHeight: 1.5,
          }}
        >
          {question}
        </span>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.44, 0, 0.56, 1] }}
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            color: "#6b7280",
            paddingTop: 2,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.span>
      </button>

      {/* Answer — animated height */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 400,
                fontSize: 14,
                color: "#384250",
                lineHeight: 1.7,
                margin: 0,
                paddingLeft: 40,
                paddingBottom: 20,
                paddingRight: 4,
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   useInView hook — triggers scroll reveal once
   ───────────────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────────────────────────────────────────
   FAQCard — the main Framer-style card
   ───────────────────────────────────────────────────────── */
export default function FAQCard({ items = [], title = "Questions & Answers", subtitle = "Have more questions? Don't hesitate to contact us:" }) {
  const [cardRef, cardVisible] = useInView(0.1);
  const [itemsRef, itemsVisible] = useInView(0.2);

  // Flatten all items if they come from categories, or use as-is
  const flatItems = items.flatMap
    ? items.flatMap((cat) => (cat.items ? cat.items : [cat]))
    : items;

  return (
    <>
      {/* Figtree font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&display=swap');`}</style>

      <div
        ref={cardRef}
        style={{
          background: "linear-gradient(180deg, #f3f4f6 0%, #f9fafb 100%)",
          border: "1px solid #e5e7eb",
          borderRadius: 32,
          padding: "clamp(24px, 4vw, 48px)",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* ── Decorative "FAQ" watermark ──────────────────── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 48,
            left: 48,
            fontFamily: "'Figtree', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(120px, 18vw, 250px)",
            lineHeight: 1,
            backgroundImage: "linear-gradient(0deg, rgba(228,230,235,0) 0%, rgb(210,214,219) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: 0.63,
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          FAQ
        </div>

        {/* ── Main content row ───────────────────────────── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "flex-start",
          }}
        >
          {/* ── LEFT: Title + subtitle + contact ─────────── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={cardVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: [0.44, 0, 0.56, 1] }}
            style={{
              flex: "1 1 260px",
              maxWidth: 400,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <h2
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(22px, 3vw, 32px)",
                lineHeight: 1.25,
                margin: 0,
                backgroundImage: "linear-gradient(0deg, #111927 0%, #6c737f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {title}
            </h2>

            {subtitle && (
              <p
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#384250",
                  lineHeight: 1.7,
                  margin: "4px 0 0",
                }}
              >
                {subtitle}
              </p>
            )}

            {/* Contact links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 16 }}>
              <a
                href="tel:+919351500400"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "'Figtree', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#29303d",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => e.currentTarget.style.color = "#1F3D2B"}
                onMouseOut={(e)  => e.currentTarget.style.color = "#29303d"}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 93515 00400
              </a>
              <a
                href="mailto:poshaktattva@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "'Figtree', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#29303d",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => e.currentTarget.style.color = "#1F3D2B"}
                onMouseOut={(e)  => e.currentTarget.style.color = "#29303d"}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                poshaktattva@gmail.com
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: Accordion items ────────────────────── */}
          <motion.div
            ref={itemsRef}
            initial={{ opacity: 0, x: 60 }}
            animate={itemsVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.12, 0.23, 0, 1] }}
            style={{ flex: "1 1 320px" }}
          >
            {flatItems.map((item, i) => (
              <FAQItem
                key={i}
                num={String(i + 1).padStart(2, "0")}
                question={item.q || item.question}
                answer={item.a || item.answer}
                isFirst={i === 0}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
