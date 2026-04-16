import { useRef, useState, useCallback, useEffect } from "react";
import { useAnimationFrame } from "framer-motion";

/* ────────────────────────────────────────────────────────────
   ZenGallery – vertical infinite ticker (desktop: 4-col, mobile: responsive grid)
   + Lightbox with zoom & keyboard dismiss
   ──────────────────────────────────────────────────────────── */

const GAP   = 12;
const SPEED = 18; // slower for readability

/* ── Lightbox ─────────────────────────────────────────────── */
function Lightbox({ src, onClose }) {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const isDraggingImg = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });

  // Close on Escape
  useEffect(() => {
    if (!src) return;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [src, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (src) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [src]);

  const onWheel = (e) => {
    e.stopPropagation();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setScale((s) => Math.min(5, Math.max(1, s + delta)));
  };

  const onImgPointerDown = (e) => {
    e.stopPropagation();
    isDraggingImg.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
    translateStart.current = { ...translate };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onImgPointerMove = (e) => {
    if (!isDraggingImg.current) return;
    setTranslate({
      x: translateStart.current.x + (e.clientX - dragStart.current.x),
      y: translateStart.current.y + (e.clientY - dragStart.current.y),
    });
  };
  const onImgPointerUp = () => { isDraggingImg.current = false; };
  const onDblClick = (e) => {
    e.stopPropagation();
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  if (!src) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "lbFadeIn 0.3s ease",
        cursor: "zoom-out",
      }}
    >
      <style>{`
        @keyframes lbFadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes lbImgIn  { from { transform: scale(0.9) translateY(20px); opacity:0 }
                               to   { transform: scale(1)   translateY(0);   opacity:1 } }
      `}</style>

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        style={{
          position: "absolute",
          top: 20, right: 20,
          width: 44, height: 44,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.15)",
          border: "none",
          color: "#fff",
          fontSize: 22,
          cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(6px)",
          zIndex: 2,
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
        onMouseOut={(e)  => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
      >✕</button>

      {/* Hint */}
      <div style={{
        position: "absolute", bottom: 20, left: "50%",
        transform: "translateX(-25%)",
        color: "rgba(255,255,255,0.45)",
        fontSize: 12, letterSpacing: "0.06em",
        pointerEvents: "none", userSelect: "none",
      }}>
        Scroll to zoom · Double-click to reset · Click outside to close
      </div>

      {/* Image */}
      <img
        src={src}
        alt="Gallery expanded view"
        draggable={false}
        onWheel={onWheel}
        onPointerDown={onImgPointerDown}
        onPointerMove={onImgPointerMove}
        onPointerUp={onImgPointerUp}
        onPointerCancel={onImgPointerUp}
        onDoubleClick={onDblClick}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: "90vh",
          maxWidth: "90vw",
          objectFit: "contain",
          borderRadius: 14,
          boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
          cursor: scale > 1 ? "grab" : "zoom-in",
          transform: `scale(${scale}) translate(${translate.x / scale}px, ${translate.y / scale}px)`,
          transition: isDraggingImg.current ? "none" : "transform 0.2s ease",
          animation: "lbImgIn 0.35s cubic-bezier(0.22,1,0.36,1)",
          userSelect: "none",
          touchAction: "none",
        }}
      />
    </div>
  );
}

/* ── Single scrolling column (desktop ticker) ─────────────── */
function TickerColumn({ images, direction = 1, onImageClick }) {
  const offsetRef    = useRef(0);
  const [offset, setOffset] = useState(0);
  const pausedRef    = useRef(false);
  const dragStartRef = useRef(null);
  const dragOffsetRef = useRef(0);
  const didDragRef   = useRef(false);

  const heights = images.map((_, i) => (i % 2 === 0 ? 260 : 220));
  const totalH  = heights.reduce((a, h) => a + h + GAP, 0);
  const doubled = [...images, ...images];

  useAnimationFrame((_, delta) => {
    if (pausedRef.current) return;
    const step = (delta / 1000) * SPEED * direction;
    offsetRef.current += step;
    if (Math.abs(offsetRef.current) >= totalH)
      offsetRef.current = offsetRef.current % totalH;
    if (offsetRef.current > 0) offsetRef.current -= totalH;
    setOffset(offsetRef.current + dragOffsetRef.current);
  });

  const onPointerDown = (e) => {
    pausedRef.current  = true;
    didDragRef.current = false;
    dragStartRef.current = e.clientY;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (dragStartRef.current === null) return;
    const delta = e.clientY - dragStartRef.current;
    if (Math.abs(delta) > 4) didDragRef.current = true;
    dragOffsetRef.current = delta;
    setOffset(offsetRef.current + dragOffsetRef.current);
  };
  const onPointerUp = (e) => {
    if (dragStartRef.current === null) return;
    if (!didDragRef.current) {
      const imgEl = e.target.closest("[data-gallery-src]");
      if (imgEl) onImageClick(imgEl.dataset.gallerySrc);
    }
    offsetRef.current += dragOffsetRef.current;
    dragOffsetRef.current = 0;
    dragStartRef.current  = null;
    pausedRef.current     = false;
    didDragRef.current    = false;
  };

  return (
    <div
      style={{ flex: 1, overflow: "hidden", userSelect: "none", WebkitUserSelect: "none" }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { if (dragStartRef.current === null) pausedRef.current = false; }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div style={{
        display: "flex", flexDirection: "column", gap: `${GAP}px`,
        transform: `translateY(${offset}px)`,
        willChange: "transform",
      }}>
        {doubled.map((src, i) => {
          const h = heights[i % heights.length];
          return (
            <div
              key={i}
              data-gallery-src={src}
              className="zen-gallery-card"
              style={{ height: `${h}px`, flexShrink: 0, borderRadius: 12, overflow: "hidden", cursor: "pointer", position: "relative" }}
            >
              <img
                src={src}
                alt={`Gallery ${(i % images.length) + 1}`}
                draggable={false}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
              />
              {/* Hover overlay with zoom icon */}
              <div className="zen-overlay">
                <span className="zen-overlay-icon">⊕</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Mobile static grid ───────────────────────────────────── */
function MobileGrid({ images, onImageClick }) {
  return (
    <div className="zen-mobile-grid">
      {images.map((src, i) => (
        <div
          key={i}
          className="zen-mobile-card"
          onClick={() => onImageClick(src)}
        >
          <img
            src={src}
            alt={`Gallery ${i + 1}`}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div className="zen-overlay">
            <span className="zen-overlay-icon">⊕</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Main ZenGallery ──────────────────────────────────────── */
export default function ZenGallery({ images = [] }) {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [isMobile, setIsMobile]       = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const openImage  = useCallback((src) => setLightboxSrc(src), []);
  const closeImage = useCallback(() => setLightboxSrc(null), []);

  const pad = (start, count) =>
    Array.from({ length: count }, (_, i) => images[(start + i) % images.length]);

  const col1 = pad(0, 4);
  const col2 = pad(4, 3);
  const col3 = pad(7, 3);
  const col4 = pad(1, 4);

  return (
    <>
      <Lightbox src={lightboxSrc} onClose={closeImage} />

      <style>{`
        /* ── Ticker (desktop) ── */
        .zen-ticker-wrapper {
          position: relative;
          width: 100%;
          height: 700px;
          overflow: hidden;
        }
        .zen-ticker-inner {
          display: flex;
          flex-direction: row;
          gap: ${GAP}px;
          height: 100%;
        }

        /* ── Hover overlay ── */
        .zen-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0);
          transition: background 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: inherit;
        }
        .zen-overlay-icon {
          color: #fff;
          font-size: 2rem;
          opacity: 0;
          transition: opacity 0.4s ease, transform 0.4s ease;
          transform: scale(0.7);
        }
        .zen-gallery-card:hover .zen-overlay,
        .zen-mobile-card:hover .zen-overlay {
          background: rgba(0,0,0,0.35);
        }
        .zen-gallery-card:hover .zen-overlay-icon,
        .zen-mobile-card:hover .zen-overlay-icon {
          opacity: 1;
          transform: scale(1);
        }

        /* ── Fade mask ── */
        .zen-fade-mask {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            to bottom,
            #fff 0%,
            rgba(255,255,255,0.1) 12%,
            transparent 35%,
            transparent 65%,
            rgba(255,255,255,0.1) 88%,
            #fff 100%
          );
          z-index: 2;
        }

        /* ── Mobile grid ── */
        .zen-mobile-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          padding: 0 0 24px;
        }
        @media (min-width: 480px) {
          .zen-mobile-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .zen-mobile-card {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 3/4;
        }
        .zen-mobile-card img {
          transition: transform 0.45s ease;
        }
        .zen-mobile-card:hover img {
          transform: scale(1.04);
        }
      `}</style>

      {isMobile ? (
        <MobileGrid images={images} onImageClick={openImage} />
      ) : (
        <div className="zen-ticker-wrapper">
          <div className="zen-ticker-inner">
            <TickerColumn images={col1} direction={-1} onImageClick={openImage} />
            <TickerColumn images={col2} direction={1}  onImageClick={openImage} />
            <TickerColumn images={col3} direction={-1} onImageClick={openImage} />
            <TickerColumn images={col4} direction={1}  onImageClick={openImage} />
          </div>
          <div className="zen-fade-mask" aria-hidden="true" />
        </div>
      )}
    </>
  );
}
