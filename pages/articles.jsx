// Articles page - premium clinical research & insights hub
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { articles as staticArticles } from "../src/data/articles";

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Sound Healing", "Holistic Recovery", "Longevity"];

  const filteredArticles = useMemo(() => {
    return staticArticles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || article.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  return (
    <>
      <Head>
        <title>Clinical Research &amp; Insights – Poshak Tattva</title>
        <meta
          name="description"
          content="Explore evidence-based articles on sound healing, functional yoga, and clinical nutrition from Poshak Tattva."
        />
      </Head>

      {/* ─── Hero Section ─── */}
      <section className="articles-hero">
        <div className="hero-bg-shape" />
        <div className="hero-bg-shape-2" />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="hero-eyebrow">EVIDENCE-BASED INSIGHTS</span>
                <h1 className="hero-title">
                  The Science of{" "}
                  <span className="hero-title-accent">Systemic Recovery</span>
                </h1>
                <p className="hero-subtitle">
                  Bridging ancient wisdom with modern clinical research — helping
                  you understand the root causes of chronic conditions and the
                  science behind holistic healing.
                </p>
              </motion.div>

              {/* ─── Search + Category Filters ─── */}
              <motion.div
                className="filter-bar"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <div className="filter-bar-inner">
                  <div className="search-wrapper">
                    <svg
                      className="search-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search articles…"
                      className="search-input"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="category-pills">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`pill ${activeCategory === cat ? "pill-active" : ""}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Articles Content ─── */}
      <section className="articles-content">
        <div className="container">
          {filteredArticles.length > 0 ? (
            <>
              {/* Featured Article (only when no filters active) */}
              {!searchTerm && activeCategory === "All" && featuredArticle && (
                <motion.div
                  className="featured-card"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Link
                    href={`/article/${featuredArticle.slug}`}
                    className="text-decoration-none"
                  >
                    <div className="featured-inner">
                      <div className="featured-img-col">
                        <div className="featured-img-wrap">
                          <Image
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 100vw, 60vw"
                          />
                          <div className="featured-badge">★ FEATURED</div>
                        </div>
                      </div>
                      <div className="featured-body">
                        <span className="featured-category">
                          {featuredArticle.category}
                        </span>
                        <h2 className="featured-title">
                          {featuredArticle.title}
                        </h2>
                        <p className="featured-excerpt">
                          {featuredArticle.excerpt}
                        </p>
                        <div className="featured-meta">
                          <div className="meta-item">
                            <span className="meta-label">Published</span>
                            <span className="meta-value">
                              {featuredArticle.date}
                            </span>
                          </div>
                          <div className="meta-divider" />
                          <div className="meta-item">
                            <span className="meta-label">Read Time</span>
                            <span className="meta-value">8 min read</span>
                          </div>
                        </div>
                        <span className="featured-cta">
                          Read Full Insight
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Article Grid */}
              <div className="articles-grid">
                <AnimatePresence mode="popLayout">
                  {(searchTerm || activeCategory !== "All"
                    ? filteredArticles
                    : remainingArticles
                  ).map((article, index) => (
                    <motion.div
                      key={article.slug}
                      className="article-grid-item"
                      layout
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.5, delay: index * 0.12 }}
                    >
                      <Link
                        href={`/article/${article.slug}`}
                        className="text-decoration-none"
                      >
                        <div className="grid-card">
                          <div className="grid-card-img">
                            <Image
                              src={article.image}
                              alt={article.title}
                              fill
                              style={{ objectFit: "cover" }}
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="grid-card-chip">
                              {article.category}
                            </div>
                          </div>
                          <div className="grid-card-body">
                            <span className="grid-card-date">
                              {article.date}
                            </span>
                            <h3 className="grid-card-title">{article.title}</h3>
                            <p className="grid-card-excerpt">
                              {article.excerpt.length > 130
                                ? article.excerpt.substring(0, 130) + "…"
                                : article.excerpt}
                            </p>
                            <span className="grid-card-link">
                              Read Insight
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </>
          ) : (
            /* Empty State */
            <motion.div
              className="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="empty-icon">🔍</div>
              <h3>No articles found</h3>
              <p>Try adjusting your search or category filters.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
                className="btn-reset"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ─── Newsletter / CTA ─── */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-glow" />
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center position-relative" style={{ zIndex: 2 }}>
                <span className="hero-eyebrow" style={{ color: '#C2A46F' }}>JOIN OUR COMMUNITY</span>
                <h2 className="newsletter-title">Stay Ahead of the Science</h2>
                <p className="newsletter-subtitle">
                  Receive the latest evidence-based insights on holistic recovery,
                  directly in your inbox. No spam — only clinical wisdom.
                </p>
                <div className="newsletter-form-row">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Enter your email address"
                  />
                  <button className="newsletter-btn" type="button">
                    Subscribe
                  </button>
                </div>
                <p className="newsletter-fine-print">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Styles ─── */}
      <style jsx>{`
        /* ===== Hero ===== */
        .articles-hero {
          position: relative;
          padding: 7rem 0 3rem;
          background: linear-gradient(180deg, #f8faf9 0%, #ffffff 100%);
          overflow: hidden;
        }
        .hero-bg-shape {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            rgba(194, 164, 111, 0.07) 0%,
            transparent 70%
          );
          border-radius: 50%;
        }
        .hero-bg-shape-2 {
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(19, 42, 36, 0.04) 0%,
            transparent 70%
          );
          border-radius: 50%;
        }
        .hero-eyebrow {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #c2a46f;
          margin-bottom: 1.25rem;
        }
        .hero-title {
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.15;
          color: #132a24;
          margin-bottom: 1.5rem;
        }
        .hero-title-accent {
          background: linear-gradient(135deg, #132a24 0%, #2d6a4f 60%, #c2a46f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-subtitle {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #52665d;
          max-width: 620px;
          margin: 0 auto 2.5rem;
        }

        /* ===== Filter Bar ===== */
        .filter-bar {
          max-width: 780px;
          margin: 0 auto;
        }
        .filter-bar-inner {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(19, 42, 36, 0.06);
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(19, 42, 36, 0.06);
        }
        .search-wrapper {
          position: relative;
        }
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          pointer-events: none;
        }
        .search-input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 3rem;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          font-size: 1rem;
          color: #1a202c;
          background: #f9fafb;
          transition: all 0.3s ease;
          outline: none;
        }
        .search-input:focus {
          border-color: #c2a46f;
          box-shadow: 0 0 0 3px rgba(194, 164, 111, 0.12);
          background: #fff;
        }
        .category-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }
        .pill {
          padding: 0.45rem 1.15rem;
          border: 1px solid #e2e8f0;
          border-radius: 100px;
          background: #fff;
          color: #52665d;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .pill:hover {
          background: #f1f5f3;
          border-color: #c2a46f;
          color: #132a24;
        }
        .pill-active {
          background: #132a24;
          color: #fff;
          border-color: #132a24;
          box-shadow: 0 4px 14px rgba(19, 42, 36, 0.25);
        }
        .pill-active:hover {
          background: #1a3a30;
          color: #fff;
        }

        /* ===== Articles Content ===== */
        .articles-content {
          padding: 4rem 0 5rem;
        }

        /* ===== Featured Card ===== */
        .featured-card {
          margin-bottom: 4rem;
        }
        .featured-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          min-height: 480px;
          border-radius: 24px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 20px 60px rgba(19, 42, 36, 0.08);
          transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
            box-shadow 0.5s ease;
        }
        .featured-inner:hover {
          transform: translateY(-6px);
          box-shadow: 0 35px 80px rgba(19, 42, 36, 0.12);
        }
        .featured-img-col {
          position: relative;
          overflow: hidden;
        }
        .featured-img-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 400px;
        }
        .featured-img-wrap img {
          transition: transform 0.8s ease;
        }
        .featured-inner:hover .featured-img-wrap img {
          transform: scale(1.05);
        }
        .featured-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background: rgba(194, 164, 111, 0.95);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          z-index: 2;
        }
        .featured-body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3.5rem;
        }
        .featured-category {
          color: #c2a46f;
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .featured-title {
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1.3;
          color: #132a24;
          margin-bottom: 1.25rem;
        }
        .featured-excerpt {
          color: #52665d;
          font-size: 1.02rem;
          line-height: 1.75;
          margin-bottom: 1.75rem;
        }
        .featured-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .meta-item {
          display: flex;
          flex-direction: column;
        }
        .meta-label {
          font-size: 0.72rem;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.2rem;
        }
        .meta-value {
          font-weight: 700;
          color: #1a202c;
          font-size: 0.92rem;
        }
        .meta-divider {
          width: 1px;
          height: 36px;
          background: #e5e7eb;
        }
        .featured-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: #c2a46f;
          font-weight: 700;
          font-size: 0.95rem;
          transition: gap 0.3s ease;
        }
        .featured-inner:hover .featured-cta {
          gap: 1rem;
        }

        /* ===== Grid ===== */
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .grid-card {
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 4px 20px rgba(19, 42, 36, 0.05);
          transition: all 0.45s cubic-bezier(0.165, 0.84, 0.44, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .grid-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(19, 42, 36, 0.1);
        }
        .grid-card-img {
          position: relative;
          height: 230px;
          overflow: hidden;
        }
        .grid-card-img img {
          transition: transform 0.7s ease;
        }
        .grid-card:hover .grid-card-img img {
          transform: scale(1.1);
        }
        .grid-card-chip {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(6px);
          padding: 0.3rem 0.9rem;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #132a24;
          z-index: 2;
        }
        .grid-card-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .grid-card-date {
          font-size: 0.78rem;
          color: #9ca3af;
          margin-bottom: 0.75rem;
          font-weight: 500;
        }
        .grid-card-title {
          font-size: 1.2rem;
          font-weight: 800;
          line-height: 1.35;
          color: #132a24;
          margin-bottom: 0.85rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .grid-card-excerpt {
          font-size: 0.92rem;
          line-height: 1.7;
          color: #6b7280;
          margin-bottom: 1.5rem;
          flex: 1;
        }
        .grid-card-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 0.88rem;
          color: #c2a46f;
          transition: gap 0.3s ease;
        }
        .grid-card:hover .grid-card-link {
          gap: 0.9rem;
        }

        /* ===== Empty State ===== */
        .empty-state {
          text-align: center;
          padding: 5rem 0;
        }
        .empty-icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }
        .empty-state h3 {
          font-size: 1.6rem;
          font-weight: 700;
          color: #374151;
          margin-bottom: 0.75rem;
        }
        .empty-state p {
          color: #6b7280;
          margin-bottom: 1.75rem;
        }
        .btn-reset {
          padding: 0.65rem 2rem;
          border: 2px solid #132a24;
          border-radius: 100px;
          background: transparent;
          color: #132a24;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-reset:hover {
          background: #132a24;
          color: #fff;
        }

        /* ===== Newsletter ===== */
        .newsletter-section {
          padding: 0 0 5rem;
        }
        .newsletter-card {
          position: relative;
          background: linear-gradient(135deg, #132a24 0%, #1a3a30 40%, #0f1f1b 100%);
          border-radius: 28px;
          padding: 5rem 2rem;
          overflow: hidden;
        }
        .newsletter-glow {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(194, 164, 111, 0.12) 0%,
            transparent 70%
          );
          pointer-events: none;
        }
        .newsletter-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: #fff;
          margin-bottom: 1rem;
          margin-top: 0.75rem;
        }
        .newsletter-subtitle {
          color: rgba(255, 255, 255, 0.65);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 480px;
          margin: 0 auto 2.5rem;
        }
        .newsletter-form-row {
          display: flex;
          max-width: 460px;
          margin: 0 auto;
          gap: 0;
          border-radius: 100px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
        .newsletter-input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: none;
          outline: none;
          font-size: 0.95rem;
          color: #1a202c;
          background: #fff;
        }
        .newsletter-btn {
          padding: 1rem 2rem;
          background: #c2a46f;
          color: #fff;
          border: none;
          font-weight: 700;
          font-size: 0.92rem;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.3s ease;
        }
        .newsletter-btn:hover {
          background: #b08f5a;
        }
        .newsletter-fine-print {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.35);
          margin-top: 1.25rem;
        }

        /* ===== Responsive ===== */
        @media (max-width: 991px) {
          .featured-inner {
            grid-template-columns: 1fr;
          }
          .featured-img-wrap {
            min-height: 300px;
          }
          .featured-body {
            padding: 2.5rem;
          }
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 767px) {
          .articles-hero {
            padding: 5rem 0 2rem;
          }
          .filter-bar-inner {
            padding: 1rem;
          }
          .articles-grid {
            grid-template-columns: 1fr;
          }
          .featured-body {
            padding: 2rem 1.5rem;
          }
          .featured-title {
            font-size: 1.4rem;
          }
          .newsletter-card {
            padding: 3rem 1.5rem;
          }
          .newsletter-form-row {
            flex-direction: column;
            border-radius: 16px;
          }
          .newsletter-input {
            border-radius: 12px 12px 0 0;
          }
          .newsletter-btn {
            border-radius: 0 0 12px 12px;
          }
        }
      `}</style>
    </>
  );
}