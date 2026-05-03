import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { articles } from '../../src/data/articles';
import PageProgress from 'components/PageProgress';

const READ_TIMES = {
  'optimized-performance-sound-healing': '8 min',
  'synergy-yoga-diet-sound': '6 min',
  'healthy-life-yoga-sound': '5 min',
};

const CategoryColors = {
  'Sound Healing': '#5b8ee6',
  'Holistic Recovery': '#5aaa7c',
  'Longevity': '#c2a46f',
};

const ArticlePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [readPct, setReadPct] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setReadPct(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <PageProgress />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="text-center">
            <h2 style={{ color: '#132a24' }}>Article Not Found</h2>
            <Link href="/articles" className="btn mt-4" style={{ background: '#132a24', color: '#fff', borderRadius: 100, padding: '0.7rem 2rem' }}>← Back to Articles</Link>
          </div>
        </div>
      </>
    );
  }

  const catColor = CategoryColors[article.category] || '#c2a46f';
  const readTime = READ_TIMES[article.slug] || '6 min';

  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>{article.title} – Poshak Tattva</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
      </Head>

      {/* ── Scroll Progress Bar ── */}
      <div className="apage-progress" style={{ width: `${readPct}%` }} />

      {/* ── Hero ── */}
      <section className="apage-hero">
        <div className="apage-hero__bg-img">
          <Image src={article.image} alt={article.title} fill style={{ objectFit: 'cover' }} priority sizes="100vw" />
          <div className="apage-hero__overlay" />
        </div>
        <div className="container position-relative" style={{ zIndex: 3 }}>
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <Link href="/articles" className="apage-back-link">← All Articles</Link>
                <span className="apage-cat-tag" style={{ background: catColor }}>{article.category}</span>
                <h1 className="apage-hero__title">{article.title}</h1>
                <div className="apage-hero__meta">
                  <span>📅 {article.date}</span>
                  <span className="apage-meta-dot" />
                  <span>⏱ {readTime} read</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Body ── */}
      <div className="apage-body">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">

              {/* Excerpt lead */}
              <motion.p className="apage-excerpt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
                {article.excerpt}
              </motion.p>

              {/* Article HTML content */}
              <motion.article
                className="apage-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* References */}
              {article.references && (
                <motion.div className="apage-refs" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                  <div className="apage-refs__header">
                    <span className="apage-refs__icon">📚</span>
                    <h4 className="apage-refs__title">Scientific References</h4>
                  </div>
                  <ol className="apage-refs__list">
                    {article.references.map((ref, i) => (
                      <li key={i} className="apage-refs__item">{ref}</li>
                    ))}
                  </ol>
                </motion.div>
              )}

              {/* CTA */}
              <motion.div className="apage-cta" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }}>
                <div className="apage-cta__glow" />
                <span className="apage-cta__eyebrow">TAKE THE NEXT STEP</span>
                <h3 className="apage-cta__title">Ready for a Clinical Reset?</h3>
                <p className="apage-cta__sub">Stop managing symptoms. Start addressing the root cause with our personalised clinical protocols.</p>
                <Link href="/contact-appointment" className="apage-cta__btn">
                  Book Your Free Consultation →
                </Link>
              </motion.div>

              {/* Back link */}
              <div className="text-center" style={{ marginTop: '2.5rem', marginBottom: '4rem' }}>
                <Link href="/articles" className="apage-footer-back">← Back to All Insights</Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Progress Bar ── */
        .apage-progress {
          position: fixed;
          top: 0; left: 0;
          height: 3px;
          background: linear-gradient(90deg, #c2a46f, #e8c98a);
          z-index: 9999;
          transition: width 0.1s linear;
          border-radius: 0 2px 2px 0;
        }

        /* ── Hero ── */
        .apage-hero {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          padding: 7rem 0 4rem;
        }
        .apage-hero__bg-img {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .apage-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10, 22, 17, 0.78) 0%,
            rgba(13, 31, 24, 0.88) 60%,
            rgba(10, 22, 17, 0.95) 100%
          );
          z-index: 2;
        }
        .apage-back-link {
          display: inline-block;
          color: rgba(255,255,255,0.55);
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.04em;
          margin-bottom: 1.5rem;
          transition: color 0.25s ease;
        }
        .apage-back-link:hover { color: #c2a46f; }
        .apage-cat-tag {
          display: inline-block;
          color: #fff;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.35rem 1rem;
          border-radius: 100px;
          margin-bottom: 1.25rem;
        }
        .apage-hero__title {
          font-size: clamp(1.9rem, 4.5vw, 3.2rem) !important;
          font-weight: 900 !important;
          line-height: 1.18 !important;
          color: #fff !important;
          margin-bottom: 1.5rem;
          text-wrap: balance;
        }
        .apage-hero__meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          color: rgba(255,255,255,0.55);
          font-size: 0.88rem;
          font-weight: 500;
        }
        .apage-meta-dot {
          width: 4px; height: 4px;
          background: rgba(255,255,255,0.35);
          border-radius: 50%;
          display: inline-block;
        }

        /* ── Body ── */
        .apage-body {
          background: #f7f5f1;
          padding: 3.5rem 0 0;
        }

        /* Excerpt */
        .apage-excerpt {
          font-size: 1.2rem !important;
          line-height: 1.78 !important;
          color: #3d5248 !important;
          font-weight: 500;
          margin-bottom: 2.5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid #e0dbd3;
        }

        /* ── Article Content Typography ── */
        .apage-content {
          font-size: 1.06rem;
          line-height: 1.85;
          color: #2c3e35;
        }
        .apage-content h2 {
          font-size: 1.65rem !important;
          font-weight: 800 !important;
          color: #132a24 !important;
          margin-top: 2.75rem !important;
          margin-bottom: 1.1rem !important;
          letter-spacing: -0.01em;
        }
        .apage-content h3 {
          font-size: 1.3rem !important;
          font-weight: 700 !important;
          color: #1a3a2a !important;
          margin-top: 2rem !important;
          margin-bottom: 0.85rem !important;
        }
        .apage-content p {
          margin-bottom: 1.5rem !important;
          color: #2c3e35 !important;
        }
        .apage-content .lead {
          font-size: 1.15rem !important;
          color: #3d5248 !important;
          font-weight: 500 !important;
          line-height: 1.8 !important;
        }
        .apage-content blockquote {
          border-left: 4px solid #c2a46f !important;
          padding: 1.25rem 1.75rem !important;
          margin: 2.5rem 0 !important;
          background: rgba(194,164,111,0.07);
          border-radius: 0 12px 12px 0;
          font-style: italic;
          font-size: 1.1rem !important;
          color: #132a24 !important;
          line-height: 1.7;
        }
        .apage-content ul, .apage-content ol {
          padding-left: 1.6rem !important;
          margin-bottom: 1.75rem !important;
        }
        .apage-content li {
          margin-bottom: 0.6rem !important;
          color: #2c3e35 !important;
        }
        .apage-content strong {
          color: #132a24 !important;
          font-weight: 700 !important;
        }
        .apage-content em { color: #3d5248 !important; }

        /* ── References ── */
        .apage-refs {
          margin-top: 3rem;
          padding: 2rem 2.25rem;
          background: #fff;
          border-radius: 18px;
          border: 1px solid #e8e2d8;
          box-shadow: 0 4px 18px rgba(19,42,36,0.05);
        }
        .apage-refs__header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #f0ebe2;
        }
        .apage-refs__icon { font-size: 1.4rem; }
        .apage-refs__title {
          font-size: 1rem !important;
          font-weight: 800 !important;
          color: #132a24 !important;
          margin: 0 !important;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .apage-refs__list {
          padding-left: 1.25rem;
          margin: 0;
        }
        .apage-refs__item {
          font-size: 0.84rem !important;
          line-height: 1.65 !important;
          color: #52665d !important;
          margin-bottom: 0.65rem !important;
        }

        /* ── CTA ── */
        .apage-cta {
          position: relative;
          margin-top: 3rem;
          padding: 3.5rem 2.5rem;
          background: linear-gradient(140deg, #0d1f18 0%, #132a24 50%, #1a3a2e 100%);
          border-radius: 24px;
          text-align: center;
          overflow: hidden;
        }
        .apage-cta__glow {
          position: absolute;
          top: -40%; left: 50%;
          transform: translateX(-50%);
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(194,164,111,0.14) 0%, transparent 70%);
          pointer-events: none;
        }
        .apage-cta__eyebrow {
          display: block;
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #c2a46f;
          margin-bottom: 1rem;
        }
        .apage-cta__title {
          font-size: 1.7rem !important;
          font-weight: 900 !important;
          color: #fff !important;
          margin-bottom: 0.9rem;
        }
        .apage-cta__sub {
          color: rgba(255,255,255,0.60) !important;
          font-size: 1rem !important;
          line-height: 1.7 !important;
          max-width: 440px;
          margin: 0 auto 2rem;
        }
        .apage-cta__btn {
          display: inline-block;
          padding: 0.85rem 2.25rem;
          background: #c2a46f;
          color: #fff !important;
          font-weight: 800;
          font-size: 0.95rem;
          border-radius: 100px;
          text-decoration: none !important;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(194,164,111,0.35);
        }
        .apage-cta__btn:hover {
          background: #d4b87a;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(194,164,111,0.45);
          color: #fff !important;
        }

        /* ── Back link ── */
        .apage-footer-back {
          color: #52665d !important;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none !important;
          transition: color 0.25s ease;
        }
        .apage-footer-back:hover { color: #c2a46f !important; }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .apage-hero {
            min-height: 55vh;
            padding: 6rem 0 3rem;
          }
          .apage-hero__title { font-size: clamp(1.6rem, 6vw, 2.2rem) !important; }
          .apage-excerpt { font-size: 1.05rem !important; }
          .apage-content h2 { font-size: 1.4rem !important; }
          .apage-content blockquote { padding: 1rem 1.25rem !important; font-size: 1rem !important; }
          .apage-refs { padding: 1.5rem 1.25rem; }
          .apage-cta { padding: 2.5rem 1.5rem; }
          .apage-cta__title { font-size: 1.4rem !important; }
        }
      `}</style>
    </Fragment>
  );
};

export default ArticlePage;
