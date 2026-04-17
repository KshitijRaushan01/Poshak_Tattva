import { useMemo } from "react";

function getAltText(src) {
  if (!src) return "Gallery image";
  const filename = src.split("/").pop() || src;
  const cleaned = filename.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " ").trim();
  return cleaned ? `${cleaned} photo` : "Gallery image";
}

export default function MasonryGallery({ images = [] }) {
  const items = useMemo(
    () => images.map((image, index) => {
      if (typeof image === "string") {
        return {
          key: `${image}-${index}`,
          src: image,
          alt: getAltText(image),
        };
      }

      return {
        key: image.key ?? `${image.src}-${index}`,
        src: image.src,
        alt: image.alt || getAltText(image.src),
      };
    }),
    [images]
  );

  return (
    <section className="masonry-gallery" aria-label="Gallery masonry grid">
      <div className="masonry-grid">
        {items.map((item) => (
          <article key={item.key} className="masonry-item">
            <div className="masonry-card">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="masonry-img"
              />
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .masonry-gallery {
          width: 100%;
          padding: 32px 0;
        }

        .masonry-grid {
          column-count: 1;
          column-gap: 16px;
        }

        @media (min-width: 700px) {
          .masonry-grid {
            column-count: 2;
          }
        }

        @media (min-width: 1000px) {
          .masonry-grid {
            column-count: 3;
          }
        }

        @media (min-width: 1400px) {
          .masonry-grid {
            column-count: 4;
          }
        }

        .masonry-item {
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
          margin-bottom: 16px;
          width: 100%;
        }

        .masonry-card {
          overflow: hidden;
          border-radius: 16px;
          background: #f7e3d0;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
          transition: transform 0.24s ease, box-shadow 0.24s ease;
        }

        .masonry-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 26px 62px rgba(0, 0, 0, 0.12);
        }

        .masonry-img {
          width: 100%;
          height: auto;
          display: block;
          background-color: #e7d2bc;
        }
      `}</style>
    </section>
  );
}
