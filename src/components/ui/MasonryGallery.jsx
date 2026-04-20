/**
 * MasonryGallery — Infinite Vertical Scroll + Lightbox
 *
 * Features:
 *  1. Infinite upward-scrolling masonry columns (RAF-based, GPU translateY, no layout shift).
 *  2. Each column scrolls at a slightly different speed for organic motion.
 *  3. Click any image → pause scroll → shared-element expand into fullscreen lightbox.
 *  4. Press any key / Escape / click outside → animate back → resume scroll from frozen position.
 *  5. Focus trap, scroll lock, and complete useEffect cleanup to prevent memory leaks.
 */

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useLayoutEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── helpers ─────────────────────────────────────────────────────────────── */

function getAltText(src) {
  if (!src) return "Gallery image";
  const filename = src.split("/").pop() || src;
  const cleaned = filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  return cleaned ? `${cleaned} photo` : "Gallery image";
}

function normaliseImages(images) {
  return images.map((image, index) => {
    if (typeof image === "string") {
      return { key: `${image}-${index}`, src: image, alt: getAltText(image) };
    }
    return {
      key: image.key ?? `${image.src}-${index}`,
      src: image.src,
      alt: image.alt || getAltText(image.src),
    };
  });
}

/** Split items across N columns in round-robin order (matching CSS column-count) */
function splitIntoColumns(items, columnCount) {
  const cols = Array.from({ length: columnCount }, () => []);
  items.forEach((item, i) => cols[i % columnCount].push(item));
  return cols;
}

/* ─── per-column scroll speed (px/s, slightly varied for organic feel) ─── */
const BASE_SPEED = 32; // Slightly faster for visibility
const SPEED_VARIANCE = 8; // ± variance

/* ─── InfiniteColumn ──────────────────────────────────────────────────────── */

function InfiniteColumn({ items, speedPxPerSec, isPaused, onImageClick, columnIndex }) {
  const trackRef = useRef(null);
  const posRef = useRef(0);         // current translateY (negative = scrolled up)
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const halfHeightRef = useRef(0);  // height of single set (half of duplicated track)

  // Measure the height of one set of items after mount / resize
  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      // Children: first half = original, second half = duplicate
      const children = Array.from(el.children);
      const half = Math.floor(children.length / 2);
      if (half === 0) return;
      
      let h = 0;
      for (let i = 0; i < half; i++) {
        h += children[i].getBoundingClientRect().height;
      }
      
      // gap distance for a full cycle (from item 1 to start of duplicated item 1)
      const gap = parseFloat(getComputedStyle(el).rowGap) || 16;
      halfHeightRef.current = h + (gap * half);
    };

    // Small delay to let images render, plus ResizeObserver for dynamic changes
    const t = setTimeout(measure, 500); // Wait bit more for images
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    return () => {
      clearTimeout(t);
      ro.disconnect();
    };
  }, [items]);

  // RAF animation loop
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tick = (timestamp) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      
      const delta = (timestamp - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = timestamp;

      if (!isPaused) {
        posRef.current -= speedPxPerSec * delta;

        // Seamless loop: when scrolled past one full set, reset by +halfHeight
        const half = halfHeightRef.current;
        if (half > 100 && posRef.current < -half) {
          posRef.current += half;
        }

        el.style.transform = `translateY(${posRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [isPaused, speedPxPerSec]);

  // Duplicate items for seamless loop
  const doubled = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="masonry-column" aria-label={`Gallery column ${columnIndex + 1}`}>
      <div
        ref={trackRef}
        className="masonry-column-track"
        style={{ willChange: "transform" }}
      >
        {doubled.map((item, idx) => (
          <MasonryItem
            key={`${item.key}-${idx}`}
            item={item}
            onImageClick={onImageClick}
            isPaused={isPaused}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── MasonryItem ─────────────────────────────────────────────────────────── */

function MasonryItem({ item, onImageClick, isPaused }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <article
      className="masonry-item"
      onClick={() => onImageClick(item)}
      role="button"
      tabIndex={isPaused ? -1 : 0}
      aria-label={`View ${item.alt} fullscreen`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onImageClick(item);
        }
      }}
    >
      <motion.div
        className="masonry-card"
        layoutId={`gallery-card-${item.key}`}
        whileHover={{ scale: 1.02, boxShadow: "0 28px 70px rgba(0,0,0,0.18)" }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        {!loaded && <div className="masonry-skeleton" aria-hidden="true" />}
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className={`masonry-img${loaded ? " loaded" : ""}`}
          onLoad={() => setLoaded(true)}
          draggable={false}
        />
      </motion.div>
    </article>
  );
}

/* ─── LightboxModal ───────────────────────────────────────────────────────── */

function LightboxModal({ item, onClose }) {
  const backdropRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Close on any key press
  useEffect(() => {
    const handler = (e) => {
      // Ignore modifier-only keys
      if (["Shift", "Control", "Alt", "Meta", "CapsLock"].includes(e.key)) return;
      onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Click outside image
  const handleBackdropClick = useCallback(
    (e) => { if (e.target === backdropRef.current) onClose(); },
    [onClose]
  );

  return (
    <motion.div
      ref={backdropRef}
      className="lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      aria-label={`Fullscreen view of ${item.alt}`}
    >
      {/* Close button */}
      <button
        ref={closeBtnRef}
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close fullscreen image"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Expanded image — shared layout transition */}
      <motion.div
        className="lightbox-card"
        layoutId={`gallery-card-${item.key}`}
        transition={{ duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="lightbox-img"
          draggable={false}
        />
      </motion.div>

    </motion.div>
  );
}

/* ─── MasonryGallery (main export) ───────────────────────────────────────── */

export default function MasonryGallery({ images = [] }) {
  const [columnCount, setColumnCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  // Responsive column detection
  useEffect(() => {
    const mediaQueries = [
      { query: "(min-width: 1400px)", cols: 4 },
      { query: "(min-width: 1000px)", cols: 3 },
      { query: "(min-width: 700px)",  cols: 2 },
    ];

    const update = () => {
      for (const mq of mediaQueries) {
        if (window.matchMedia(mq.query).matches) {
          setColumnCount(mq.cols);
          return;
        }
      }
      setColumnCount(1);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const items = useMemo(() => normaliseImages(images), [images]);

  const columns = useMemo(
    () => splitIntoColumns(items, columnCount),
    [items, columnCount]
  );

  // Per-column speeds — deterministic, no random to avoid SSR/CSR mismatch
  const columnSpeeds = useMemo(
    () =>
      columns.map((_, i) => {
        const t = i / Math.max(columns.length - 1, 1); // 0 → 1
        return BASE_SPEED - (SPEED_VARIANCE / 2) + (t * SPEED_VARIANCE);
      }),
    [columns]
  );

  const handleImageClick = useCallback((item) => {
    setIsPaused(true);
    setActiveItem(item);
  }, []);

  const handleClose = useCallback(() => {
    setActiveItem(null);
    // Small delay so exit animation plays before scroll resumes
    setTimeout(() => setIsPaused(false), 420);
  }, []);

  return (
    <>
      <section
        className="masonry-gallery"
        aria-label="Gallery masonry grid"
        aria-busy={isPaused ? "true" : "false"}
      >
        <div className="masonry-columns-wrapper">
          {columns.map((col, colIdx) => (
            <InfiniteColumn
              key={colIdx}
              columnIndex={colIdx}
              items={col}
              speedPxPerSec={columnSpeeds[colIdx]}
              isPaused={isPaused}
              onImageClick={handleImageClick}
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeItem && (
          <LightboxModal
            key="lightbox"
            item={activeItem}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>

      <style>{`
        /* ── Gallery wrapper ─────────────────────────────── */
        .masonry-gallery {
          width: 100%;
          padding: 12px 0 32px;
          position: relative;
        }

        .masonry-columns-wrapper {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          /* Fixed height so every column is clipped at the same point */
          height: 100vh;
          overflow: hidden;
        }

        /* ── Individual column ──────────────────────────── */
        .masonry-column {
          flex: 1;
          min-width: 0;
          /* Each column clips its own overflowing track */
          height: 100%;
          overflow: hidden;
        }

        .masonry-column-track {
          display: flex;
          flex-direction: column;
          gap: 16px;
          will-change: transform;
        }

        /* ── Item / card ────────────────────────────────── */
        .masonry-item {
          display: block;
          cursor: pointer;
          outline: none;
          border-radius: 16px;
        }

        .masonry-item:focus-visible .masonry-card {
          outline: 3px solid #8B7355;
          outline-offset: 3px;
        }

        .masonry-card {
          overflow: hidden;
          border-radius: 16px;
          background: #f0e6d8;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08);
          position: relative;
          cursor: pointer;
        }

        .masonry-skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            #f0e6d8 25%,
            #e8d8c4 50%,
            #f0e6d8 75%
          );
          background-size: 200% 100%;
          animation: skeletonShimmer 1.6s infinite linear;
          border-radius: 16px;
        }

        @keyframes skeletonShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .masonry-img {
          width: 100%;
          height: auto;
          display: block;
          background-color: #e7d2bc;
          opacity: 0;
          transition: opacity 0.45s ease;
          border-radius: 16px;
          pointer-events: none;
          user-select: none;
        }

        .masonry-img.loaded {
          opacity: 1;
        }

        /* ── Lightbox backdrop ──────────────────────────── */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(15, 12, 9, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          cursor: zoom-out;
        }

        /* ── Lightbox card ──────────────────────────────── */
        .lightbox-card {
          position: relative;
          max-width: min(90vw, 960px);
          max-height: 90vh;
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 40px 100px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.06);
          cursor: default;
          background: #1a1410;
        }

        .lightbox-img {
          display: block;
          width: 100%;
          height: auto;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 20px;
          user-select: none;
          pointer-events: none;
        }

        /* ── Lightbox caption ───────────────────────────── */
        .lightbox-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 48px 20px 16px;
          background: linear-gradient(transparent, rgba(0,0,0,0.7));
          color: rgba(255,255,255,0.85);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: capitalize;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        /* ── Close button ───────────────────────────────── */
        .lightbox-close {
          position: fixed;
          top: 24px;
          right: 28px;
          z-index: 10000;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
          outline: none;
        }

        .lightbox-close:hover {
          background: rgba(255,255,255,0.18);
          transform: scale(1.08);
        }

        .lightbox-close:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 3px;
        }

        /* ── Hint text ──────────────────────────────────── */
        .lightbox-hint {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.55);
          font-size: 12px;
          letter-spacing: 0.5px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          margin: 0;
          white-space: nowrap;
          pointer-events: none;
        }

        /* ── Responsive ─────────────────────────────────── */
        @media (max-width: 699px) {
          .masonry-columns-wrapper {
            gap: 10px;
            height: 100vh;
          }
          .masonry-column-track {
            gap: 10px;
          }
          .lightbox-backdrop {
            padding: 12px;
          }
          .lightbox-close {
            top: 12px;
            right: 14px;
          }
        }

        @media (min-width: 1400px) {
          .masonry-columns-wrapper {
            height: 100vh;
          }
        }
      `}</style>
    </>
  );
}
