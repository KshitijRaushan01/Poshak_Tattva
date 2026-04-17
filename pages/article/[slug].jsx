import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Layout from '../../src/components/Layout';
import { articles } from '../../src/data/articles';

const ArticlePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the article by slug
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h2>Article Not Found</h2>
          <Link href="/" className="btn btn-primary mt-4">Return Home</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{article.title} - Poshak Tattva</title>
        <meta name="description" content={article.excerpt} />
      </Head>

      <div className="article-wrapper">
        {/* Progress Bar */}
        <motion.div
          className="reading-progress"
          initial={{ scaleX: 0 }}
          style={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Hero Header */}
        <section className="article-hero py-12 py-md-20">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="badge bg-secondary mb-4 px-3 py-2 text-uppercase letter-spacing-1">
                    {article.category}
                  </span>
                  <h1 className="display-4 fw-bold mb-6 text-darker article-title">
                    {article.title}
                  </h1>
                  <div className="d-flex align-items-center justify-content-center text-muted mb-8">
                    <span className="me-3">📅 {article.date}</span>
                    <span className="mx-2">•</span>
                    <span className="ms-3">⏱️ 5 min read</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="container mb-12 mb-md-16">
          <motion.div
            className="article-image-container shadow-2xl rounded-4 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ position: 'relative', height: '500px', width: '100%' }}>
              <Image
                src={article.image}
                alt={article.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Content Body */}
        <div className="container pb-20">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <motion.article 
                className="article-content fs-lg text-darkest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* References Section */}
              {article.references && (
                <motion.div 
                  className="mt-12 p-8 rounded-4 bg-soft-primary border border-primary-subtle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h4 className="fw-bold mb-4">Scientific References</h4>
                  <ul className="list-unstyled mb-0">
                    {article.references.map((ref, i) => (
                      <li key={i} className="mb-2 text-muted-dark small">
                        - {ref}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* CTA Section */}
              <div className="mt-16 text-center p-10 rounded-4 bg-dark text-white cta-card">
                <h3 className="h2 fw-bold mb-4">Ready for a Clinical Reset?</h3>
                <p className="lead mb-8 opacity-80">Stop managing symptoms. Start addressing the root cause with our clinical protocols.</p>
                <Link href="/contact-appointment" className="btn btn-primary btn-lg px-8 py-4 fw-bold rounded-pill">
                  Book Your Free Consultation →
                </Link>
              </div>

              {/* Back to Articles */}
              <div className="mt-12 text-center">
                <Link href="/" className="text-secondary fw-bold text-decoration-none hover-link">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .article-title {
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.015em;
          line-height: 1.15;
          color: #132a24;
        }

        .article-content {
          line-height: 1.8;
          font-family: 'Inter', sans-serif;
          color: #2d3748;
        }

        .article-content h2 {
          font-weight: 800;
          color: #1a202c;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          font-size: 2rem;
        }

        .article-content h3 {
          font-weight: 700;
          color: #2d3748;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .article-content p {
          margin-bottom: 1.5rem;
        }

        .article-content .lead {
          font-size: 1.25rem;
          color: #4a5568;
          font-weight: 400;
        }

        .article-content blockquote {
          border-left: 5px solid #C2A46F;
          padding-left: 1.5rem;
          margin: 2.5rem 0;
          font-style: italic;
          font-size: 1.25rem;
          color: #1a202c;
          opacity: 0.9;
        }

        .article-content ul, .article-content ol {
          margin-bottom: 2rem;
          padding-left: 1.5rem;
        }

        .article-content li {
          margin-bottom: 0.75rem;
        }

        .article-image-container {
          box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.1), 0 30px 60px -30px rgba(0, 0, 0, 0.1);
        }

        .reading-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: #C2A46F;
          transform-origin: 0%;
          z-index: 1000;
        }

        .bg-soft-primary {
          background-color: #f8f9fa;
        }

        .cta-card {
           background: linear-gradient(135deg, #132a24 0%, #1f3d2b 100%);
           border: 1px solid rgba(255,255,255,0.1);
           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .hover-link:hover {
          color: #C2A46F !important;
          transform: translateX(-5px);
          transition: all 0.3s ease;
        }

        .badge {
          letter-spacing: 0.1em;
          font-size: 0.75rem;
        }
      `}</style>
    </Layout>
  );
};

export default ArticlePage;
