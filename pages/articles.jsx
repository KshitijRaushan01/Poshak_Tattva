// Articles page — Premium Editorial Revamp
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { articles as staticArticles } from "../src/data/articles";
import PageProgress from "components/PageProgress";

const READING_TIMES = { "optimized-performance-sound-healing": "8 min", "synergy-yoga-diet-sound": "6 min", "healthy-life-yoga-sound": "5 min" };

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Sound Healing", "Holistic Recovery", "Longevity"];

  const filteredArticles = useMemo(() => {
    return staticArticles.filter((a) => {
      const matchesSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase()) || a.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || a.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);
  const showFeatured = !searchTerm && activeCategory === "All" && featuredArticle;

  return (
    <>
      <PageProgress />
      <Head>
        <title>Clinical Insights & Articles – Poshak Tattva</title>
        <meta name="description" content="Evidence-based articles on sound healing, functional yoga, and clinical nutrition from Poshak Tattva's practitioners." />
      </Head>

      {/* ── Hero ── */}
      <section className="art-hero">
        <div className="art-hero__glow art-hero__glow--1" />
        <div className="art-hero__glow art-hero__glow--2" />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <span className="art-eyebrow">EVIDENCE-BASED INSIGHTS</span>
                <h1 className="art-hero__title">
                  The Science of{" "}
                  <span className="art-hero__accent">Systemic Recovery</span>
                </h1>
                <p className="art-hero__sub">
                  Bridging ancient wisdom with modern clinical research — helping you understand root causes and the science behind holistic healing.
                </p>
              </motion.div>

              {/* Filter Bar */}
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22 }} className="art-filter">
                <div className="art-filter__inner">
                  <div className="art-search">
                    <svg className="art-search__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input type="text" placeholder="Search articles…" className="art-search__input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                  </div>
                  <div className="art-pills">
                    {categories.map((cat) => (
                      <button key={cat} onClick={() => setActiveCategory(cat)} className={`art-pill${activeCategory === cat ? " art-pill--active" : ""}`}>{cat}</button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="art-body">
        <div className="container">
          {filteredArticles.length > 0 ? (
            <>
              {/* Featured */}
              {showFeatured && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="art-featured">
                  <Link href={`/article/${featuredArticle.slug}`} className="text-decoration-none">
                    <div className="art-featured__inner">
                      <div className="art-featured__img-col">
                        <div className="art-featured__img-wrap">
                          <Image src={featuredArticle.image} alt={featuredArticle.title} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 55vw" />
                          <div className="art-featured__overlay" />
                        </div>
                        <span className="art-featured__badge">★ FEATURED</span>
                      </div>
                      <div className="art-featured__body">
                        <span className="art-cat-tag">{featuredArticle.category}</span>
                        <h2 className="art-featured__title">{featuredArticle.title}</h2>
                        <p className="art-featured__excerpt">{featuredArticle.excerpt}</p>
                        <div className="art-featured__meta">
                          <div className="art-meta-item">
                            <span className="art-meta-label">Published</span>
                            <span className="art-meta-val">{featuredArticle.date}</span>
                          </div>
                          <div className="art-meta-divider" />
                          <div className="art-meta-item">
                            <span className="art-meta-label">Read Time</span>
                            <span className="art-meta-val">{READING_TIMES[featuredArticle.slug] || "6 min"}</span>
                          </div>
                        </div>
                        <span className="art-featured__cta">
                          Read Full Insight
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Grid */}
              {(showFeatured ? remainingArticles : filteredArticles).length > 0 && (
                <>
                  {showFeatured && <h3 className="art-grid-label">More Insights</h3>}
                  <div className="art-grid">
                    <AnimatePresence mode="popLayout">
                      {(showFeatured ? remainingArticles : filteredArticles).map((article, i) => (
                        <motion.div key={article.slug} layout initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.45, delay: i * 0.1 }}>
                          <Link href={`/article/${article.slug}`} className="text-decoration-none">
                            <div className="art-card">
                              <div className="art-card__img">
                                <Image src={article.image} alt={article.title} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 33vw" />
                                <div className="art-card__img-overlay" />
                                <span className="art-card__chip">{article.category}</span>
                                <span className="art-card__read-time">{READING_TIMES[article.slug] || "6 min"} read</span>
                              </div>
                              <div className="art-card__body">
                                <span className="art-card__date">{article.date}</span>
                                <h3 className="art-card__title">{article.title}</h3>
                                <p className="art-card__excerpt">{article.excerpt.length > 120 ? article.excerpt.substring(0, 120) + "…" : article.excerpt}</p>
                                <span className="art-card__link">
                                  Read Insight
                                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
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
              )}
            </>
          ) : (
            <motion.div className="art-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="art-empty__icon">🔍</div>
              <h3>No articles found</h3>
              <p>Try adjusting your search or category filters.</p>
              <button onClick={() => { setSearchTerm(""); setActiveCategory("All"); }} className="art-reset-btn">Clear All Filters</button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="art-newsletter">
        <div className="container">
          <div className="art-newsletter__card">
            <div className="art-newsletter__glow" />
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center position-relative" style={{ zIndex: 2 }}>
                <span className="art-eyebrow" style={{ color: "#C2A46F" }}>JOIN OUR COMMUNITY</span>
                <h2 className="art-newsletter__title">Stay Ahead of the Science</h2>
                <p className="art-newsletter__sub">Receive the latest evidence-based insights on holistic recovery, directly in your inbox. No spam — only clinical wisdom.</p>
                <div className="art-newsletter__form">
                  <input type="email" className="art-newsletter__input" placeholder="Enter your email address" />
                  <button className="art-newsletter__btn" type="button">Subscribe</button>
                </div>
                <p className="art-newsletter__fine">We respect your privacy. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Hero ── */
        .art-hero {
          position: relative;
          padding: 8rem 0 3.5rem;
          background: linear-gradient(170deg, #0d1f18 0%, #132a24 50%, #1a3a2e 100%);
          overflow: hidden;
        }
        .art-hero__glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .art-hero__glow--1 {
          top: -20%; right: -8%;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(194,164,111,0.10) 0%, transparent 70%);
        }
        .art-hero__glow--2 {
          bottom: -30%; left: -8%;
          width: 460px; height: 460px;
          background: radial-gradient(circle, rgba(45,106,79,0.15) 0%, transparent 70%);
        }
        .art-eyebrow {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #c2a46f;
          margin-bottom: 1.2rem;
        }
        .art-hero__title {
          font-size: clamp(2.2rem, 5vw, 3.5rem) !important;
          font-weight: 900 !important;
          line-height: 1.15 !important;
          color: #fff !important;
          margin-bottom: 1.25rem;
        }
        .art-hero__accent {
          background: linear-gradient(135deg, #c2a46f 0%, #e8c98a 60%, #c2a46f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .art-hero__sub {
          font-size: 1.05rem !important;
          line-height: 1.8 !important;
          color: rgba(255,255,255,0.65) !important;
          max-width: 580px;
          margin: 0 auto 2.5rem;
        }

        /* ── Filter ── */
        .art-filter { max-width: 740px; margin: 0 auto; }
        .art-filter__inner {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.4rem 1.6rem;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
        }
        .art-search { position: relative; }
        .art-search__icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.4);
          pointer-events: none;
        }
        .art-search__input {
          width: 100%;
          padding: 0.9rem 1rem 0.9rem 3rem;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          font-size: 0.98rem;
          color: #fff;
          outline: none;
          transition: all 0.3s ease;
        }
        .art-search__input::placeholder { color: rgba(255,255,255,0.35); }
        .art-search__input:focus {
          border-color: #c2a46f;
          background: rgba(255,255,255,0.11);
          box-shadow: 0 0 0 3px rgba(194,164,111,0.15);
        }
        .art-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; }
        .art-pill {
          padding: 0.42rem 1.15rem;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 100px;
          background: transparent;
          color: rgba(255,255,255,0.65);
          font-weight: 600;
          font-size: 0.83rem;
          cursor: pointer;
          transition: all 0.28s ease;
        }
        .art-pill:hover {
          background: rgba(255,255,255,0.1);
          border-color: #c2a46f;
          color: #fff;
        }
        .art-pill--active {
          background: #c2a46f;
          color: #132a24;
          border-color: #c2a46f;
          font-weight: 800;
          box-shadow: 0 4px 14px rgba(194,164,111,0.35);
        }
        .art-pill--active:hover { background: #d4b87a; color: #132a24; }

        /* ── Body ── */
        .art-body { padding: 4.5rem 0 5rem; background: #f7f5f1; }

        /* ── Featured ── */
        .art-featured { margin-bottom: 3.5rem; }
        .art-featured__inner {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          min-height: 500px;
          border-radius: 28px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 24px 64px rgba(19,42,36,0.10);
          transition: transform 0.5s cubic-bezier(0.165,0.84,0.44,1), box-shadow 0.5s ease;
        }
        .art-featured__inner:hover {
          transform: translateY(-6px);
          box-shadow: 0 40px 80px rgba(19,42,36,0.14);
        }
        .art-featured__img-col { position: relative; overflow: hidden; }
        .art-featured__img-wrap { position: relative; width: 100%; height: 100%; min-height: 420px; }
        .art-featured__img-wrap img { transition: transform 0.9s ease; }
        .art-featured__inner:hover .art-featured__img-wrap img { transform: scale(1.06); }
        .art-featured__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(13,31,24,0.55) 100%);
          z-index: 1;
        }
        .art-featured__badge {
          position: absolute;
          top: 1.4rem;
          left: 1.4rem;
          z-index: 3;
          background: #c2a46f;
          color: #fff;
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          padding: 0.38rem 1rem;
          border-radius: 100px;
        }
        .art-featured__body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3.5rem;
          background: #fff;
        }
        .art-cat-tag {
          color: #c2a46f;
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: block;
        }
        .art-featured__title {
          font-size: 1.75rem !important;
          font-weight: 800 !important;
          line-height: 1.3 !important;
          color: #132a24 !important;
          margin-bottom: 1.1rem;
        }
        .art-featured__excerpt {
          color: #52665d !important;
          font-size: 1rem !important;
          line-height: 1.75 !important;
          margin-bottom: 1.75rem;
        }
        .art-featured__meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          padding-bottom: 1.75rem;
          border-bottom: 1px solid #f0ece6;
        }
        .art-meta-item { display: flex; flex-direction: column; }
        .art-meta-label {
          font-size: 0.68rem;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.18rem;
        }
        .art-meta-val { font-weight: 700; color: #1a202c; font-size: 0.9rem; }
        .art-meta-divider { width: 1px; height: 32px; background: #e5e7eb; }
        .art-featured__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          color: #132a24;
          font-weight: 800;
          font-size: 0.9rem;
          background: #f0ece6;
          padding: 0.75rem 1.5rem;
          border-radius: 100px;
          width: fit-content;
          transition: all 0.3s ease;
        }
        .art-featured__inner:hover .art-featured__cta {
          background: #132a24;
          color: #fff;
          gap: 0.9rem;
        }

        /* ── Grid ── */
        .art-grid-label {
          font-size: 0.72rem !important;
          font-weight: 800 !important;
          letter-spacing: 0.14em !important;
          text-transform: uppercase;
          color: #9ca3af !important;
          margin-bottom: 1.75rem;
        }
        .art-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        .art-card {
          border-radius: 22px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 4px 18px rgba(19,42,36,0.06);
          transition: all 0.42s cubic-bezier(0.165,0.84,0.44,1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .art-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 56px rgba(19,42,36,0.11);
        }
        .art-card__img {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .art-card__img img { transition: transform 0.7s ease; }
        .art-card:hover .art-card__img img { transform: scale(1.08); }
        .art-card__img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(13,31,24,0.45) 100%);
          z-index: 1;
        }
        .art-card__chip {
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 3;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          padding: 0.28rem 0.85rem;
          border-radius: 100px;
          font-size: 0.68rem;
          font-weight: 700;
          color: #132a24;
        }
        .art-card__read-time {
          position: absolute;
          bottom: 0.85rem;
          right: 0.85rem;
          z-index: 3;
          background: rgba(13,31,24,0.75);
          backdrop-filter: blur(6px);
          padding: 0.22rem 0.7rem;
          border-radius: 100px;
          font-size: 0.65rem;
          font-weight: 700;
          color: #c2a46f;
          letter-spacing: 0.04em;
        }
        .art-card__body {
          padding: 1.6rem 1.6rem 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .art-card__date {
          font-size: 0.75rem !important;
          color: #9ca3af !important;
          margin-bottom: 0.65rem;
          font-weight: 500;
        }
        .art-card__title {
          font-size: 1.1rem !important;
          font-weight: 800 !important;
          line-height: 1.38 !important;
          color: #132a24 !important;
          margin-bottom: 0.75rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .art-card__excerpt {
          font-size: 0.9rem !important;
          line-height: 1.7 !important;
          color: #6b7280 !important;
          margin-bottom: 1.4rem;
          flex: 1;
        }
        .art-card__link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-weight: 700;
          font-size: 0.84rem;
          color: #c2a46f;
          margin-top: auto;
          transition: gap 0.3s ease;
        }
        .art-card:hover .art-card__link { gap: 0.8rem; }

        /* ── Empty ── */
        .art-empty { text-align: center; padding: 5rem 0; }
        .art-empty__icon { font-size: 3.5rem; margin-bottom: 1.5rem; }
        .art-empty h3 { font-size: 1.5rem !important; font-weight: 700 !important; color: #374151 !important; margin-bottom: 0.7rem; }
        .art-empty p { color: #6b7280 !important; margin-bottom: 1.75rem; }
        .art-reset-btn {
          padding: 0.65rem 2rem;
          border: 2px solid #132a24;
          border-radius: 100px;
          background: transparent;
          color: #132a24;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .art-reset-btn:hover { background: #132a24; color: #fff; }

        /* ── Newsletter ── */
        .art-newsletter { padding: 0 0 5rem; background: #f7f5f1; }
        .art-newsletter__card {
          position: relative;
          background: linear-gradient(135deg, #0d1f18 0%, #132a24 45%, #1a3a2e 100%);
          border-radius: 28px;
          padding: 5.5rem 2rem;
          overflow: hidden;
        }
        .art-newsletter__glow {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(194,164,111,0.14) 0%, transparent 70%);
          pointer-events: none;
        }
        .art-newsletter__title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem) !important;
          font-weight: 900 !important;
          color: #fff !important;
          margin: 0.75rem 0 1rem;
        }
        .art-newsletter__sub {
          color: rgba(255,255,255,0.60) !important;
          font-size: 1rem !important;
          line-height: 1.75 !important;
          max-width: 440px;
          margin: 0 auto 2.25rem;
        }
        .art-newsletter__form {
          display: flex;
          max-width: 440px;
          margin: 0 auto;
          border-radius: 100px;
          overflow: hidden;
          box-shadow: 0 12px 32px rgba(0,0,0,0.28);
        }
        .art-newsletter__input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: none;
          outline: none;
          font-size: 0.95rem;
          color: #1a202c;
          background: #fff;
        }
        .art-newsletter__btn {
          padding: 1rem 1.75rem;
          background: #c2a46f;
          color: #fff;
          border: none;
          font-weight: 800;
          font-size: 0.9rem;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.3s ease;
        }
        .art-newsletter__btn:hover { background: #d4b87a; }
        .art-newsletter__fine {
          font-size: 0.72rem !important;
          color: rgba(255,255,255,0.30) !important;
          margin-top: 1.1rem;
        }

        /* ── Responsive ── */
        @media (max-width: 991px) {
          .art-featured__inner { grid-template-columns: 1fr; }
          .art-featured__img-wrap { min-height: 280px; }
          .art-featured__body { padding: 2.5rem; }
          .art-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 767px) {
          .art-hero { padding: 6rem 0 2.5rem; }
          .art-filter__inner { padding: 1rem 1.1rem; }
          .art-grid { grid-template-columns: 1fr; }
          .art-featured__body { padding: 2rem 1.5rem; }
          .art-featured__title { font-size: 1.4rem !important; }
          .art-newsletter__card { padding: 3.5rem 1.5rem; }
          .art-newsletter__form { flex-direction: column; border-radius: 16px; }
          .art-newsletter__input { border-radius: 12px 12px 0 0; }
          .art-newsletter__btn { border-radius: 0 0 12px 12px; }
        }
      `}</style>
    </>
  );
}