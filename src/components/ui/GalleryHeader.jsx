import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GalleryHeader({
  eyebrowText = "Glimpse Into The Serene World of Poshak Tattva",
  mainHeading = "Gallery",
  subText = "",
}) {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      className="gallery-header-section"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="gallery-header-container">
        <motion.h1 className="gallery-main-heading" variants={itemVariants}>
          {mainHeading}
        </motion.h1>

        <motion.div className="eyebrow-text" variants={itemVariants}>
          {eyebrowText}
        </motion.div>

        {subText && (
          <motion.p className="gallery-subtext" variants={itemVariants}>
            {subText}
          </motion.p>
        )}
      </div>

      <style>{`
        .gallery-header-section {
          width: 100%;
          padding: 48px 0;
          text-align: center;
        }

        .gallery-header-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .eyebrow-text {
          display: block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #8B7355;
          margin-bottom: 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Helvetica Neue", sans-serif;
        }

        .gallery-main-heading {
          font-size: clamp(48px, 8vw, 80px);
          font-weight: 300;
          letter-spacing: -1.5px;
          line-height: 1.1;
          margin: 0 0 24px 0;
          color: #2c2c2c;
          font-family: "Playfair Display", "Georgia", serif;
        }

        .gallery-subtext {
          font-size: clamp(16px, 2.5vw, 20px);
          line-height: 1.6;
          color: #666666;
          margin: 0;
          font-weight: 400;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Helvetica Neue", sans-serif;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .gallery-header-section {
            padding: 40px 0;
          }

          .gallery-main-heading {
            font-size: 42px;
            margin-bottom: 20px;
          }

          .eyebrow-text {
            font-size: 12px;
            letter-spacing: 1.5px;
            margin-bottom: 14px;
          }

          .gallery-subtext {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .gallery-header-section {
            padding: 32px 0;
          }

          .gallery-header-container {
            padding: 0 16px;
          }

          .gallery-main-heading {
            font-size: 36px;
            margin-bottom: 16px;
          }

          .eyebrow-text {
            font-size: 11px;
            letter-spacing: 1px;
            margin-bottom: 12px;
          }

          .gallery-subtext {
            font-size: 14px;
          }
        }

        /* Import Playfair Display for elegant serif heading */
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap");
      `}</style>
    </motion.section>
  );
}
