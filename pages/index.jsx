import { Fragment, useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import PageProgress from "components/PageProgress";
import Hero from "components/Hero";
import StatsBar from "components/StatsBar";
import About from "components/About";
import Services from "components/Services";
import Testimonials from "components/Testimonials";
import { yoga, diet, soundHealing } from "../src/data";

const Home = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const stats = [
    { number: "15k+", label: "Students", icon: "👥" },
    { number: "50+", label: "Cities Reached", icon: "🌍" },
    { number: "5+", label: "Years of Experience", icon: "⏱️" },
    { number: "98%", label: "Root-Cause Resolution Rate", icon: "⭐" },
  ];

  const whyChooseUs = [
    {
      title: "Root-Cause Methodology",
      desc: "We don't treat symptoms — we identify and eliminate the underlying metabolic and neurological triggers of chronic disorders.",
      img: "/img/home/methodology-root-cause.png"
    },
    {
      title: "Clinical-Grade Protocols",
      desc: "Our Clinical Diet plans are therapeutically calibrated to fix metabolic dysfunction, inflammation, and gut dysbiosis.",
      img: "/img/home/methodology-nutrition.png"
    },
    {
      title: "Nervous System Rewiring",
      desc: "Sound Healing sessions use precise vibrational frequencies to shift the nervous system out of chronic fight-or-flight patterns.",
      img: "/img/home/methodology-sound.png"
    },
    {
      title: "Functional Yoga Therapy",
      desc: "Yoga as medicine — postures and pranayama prescribed to stimulate the lymphatic, endocrine, and autonomic nervous systems.",
      img: "/img/home/methodology-yoga.png"
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Free Root-Cause Consult",
      desc: "A no-cost deep-dive session where we map your symptoms back to their systemic triggers.",
      img: "/img/home/roadmap-consult.png"
    },
    {
      step: "2",
      title: "Clinical Assessment",
      desc: "We evaluate metabolic markers, lifestyle patterns, and nervous system load to build your recovery blueprint.",
      img: "/img/home/roadmap-assessment.png"
    },
    {
      step: "3",
      title: "Integrated Protocol",
      desc: "Your personalised combination of Functional Yoga, Clinical Nutrition, and Sound Healing begins.",
      img: "/img/home/roadmap-protocol.png"
    },
    {
      step: "4",
      title: "Systemic Recovery",
      desc: "Track measurable improvements in energy, metabolic health, sleep, and inflammatory markers over time.",
      img: "/img/home/roadmap-recovery.png"
    },
  ];

  return (
    <Fragment>
      <PageProgress />

      <Head>
        <title>Poshak Tattva - Reverse Chronic Lifestyle Disorders Naturally</title>
        <meta
          name="description"
          content="Poshak Tattva offers clinical-grade Functional Yoga, Clinical Nutrition, and Sound Healing protocols designed to reverse chronic lifestyle disorders at the root cause — not just manage symptoms. Book your free root-cause consultation today."
        />

        <link rel="canonical" href="https://www.poshaktattva.com" />
      </Head>

      <main id="main-content" className="content-wrapper" style={{ overflowX: 'clip' }}>
        {/* Hero Section */}
        <Hero />


        {/* About Section */}
        <section className="wrapper bg-light">
          <div className="container pt-8 pt-md-15">
            <div className="row">
              <div className="col-12 text-center mb-10">
                <h1 id="welcome-heading" className="display-4 fw-bold">Welcome to Poshak Tattva</h1>
              </div>
            </div>
            <About
              imgPosition="right"
              imgSrc="/img/yds.png"
              heading="" // Removed heading from here to avoid duplication
              headingClass="text-center mb-6"
              para="At Poshak Tattva, we go beyond the absence of illness to achieve systemic recovery. Chronic lifestyle disorders — from metabolic dysfunction and hormonal imbalance to autoimmune flares and digestive disorders — are not destiny. They are the result of compounding root causes that conventional medicine rarely addresses."
              para2="Our methodology is clinically grounded. Our Sattvic Diet protocols are therapeutic-grade, engineered to correct metabolic health at the cellular level — reducing inflammation, rebalancing the gut microbiome, and restoring endocrine function. Our Sound Healing sessions use precision vibrational frequencies to rewire the autonomic nervous system, shifting patients from chronic stress states into deep physiological repair."
              para3="Through Functional Yoga, we prescribe movement as medicine — specific asana and pranayama sequences that activate the lymphatic system, stimulate the vagus nerve, and restore hormonal regulation. This is not wellness as a lifestyle choice. This is clinical recovery delivered through the wisdom of ancient science."
            />
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="wrapper bg-light py-10 py-md-14">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 mx-auto text-center">
                <h2 className="display-5 mb-16 fw-bold z-1 position-center">
                  Clinical Recovery Programs
                </h2>
              </div>
            </div>

            {/* Services Grid */}
            <Services />
          </div>
        </section>

        {/* Recovery Roadmap — Scroll-Stacking Cards */}
        <section className="wrapper py-16 overflow-hidden" style={{ background: "#f0ece6" }} ref={containerRef}>
          <div className="container text-center mb-12">
            <h2 className="display-5 fw-bold mb-4">Your Recovery Roadmap</h2>
            <p className="lead mx-auto" style={{ maxWidth: 640 }}>A structured clinical intake process designed for measurable results, not just temporary relief</p>
          </div>

          <div className="rmap-stack">
            {howItWorks.map((item, idx) => (
              <RoadmapCard
                key={idx}
                item={item}
                idx={idx}
                total={howItWorks.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          <style>{`
 .rmap-stack { padding-bottom: 5vh; }
 .rmap-pin { position: sticky; top: 120px; }
 .rmap-card {
 display: grid;
 grid-template-columns: 1fr 1fr;
 background: rgba(255, 255, 255, 0.85);
 backdrop-filter: blur(20px);
 -webkit-backdrop-filter: blur(20px);
 border: 1px solid rgba(255, 255, 255, 0.4);
 border-radius: 32px;
 box-shadow: 
 0 10px 40px -10px rgba(31,61,43,0.15),
 0 0 0 1px rgba(255,255,255,0.5) inset;
 min-height: 340px;
 overflow: hidden;
 }
 .rmap-text {
 padding: 40px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 position: relative;
 }
 .rmap-badge {
 display: inline-block;
 background: #1F3D2B;
 color: #fff;
 font-size: 0.7rem;
 font-weight: 700;
 letter-spacing: 0.1em;
 text-transform: uppercase;
 padding: 6px 16px;
 border-radius: 100px;
 margin-bottom: 20px;
 width: fit-content;
 }
 .rmap-num {
 font-size: 6rem;
 font-weight: 900;
 color: rgba(31,61,43,0.03);
 position: absolute;
 top: 0; right: 20px;
 line-height: 1;
 pointer-events: none;
 }
 .rmap-title {
 font-size: 1.8rem;
 font-weight: 800;
 color: #1a1a1a;
 margin-bottom: 12px;
 letter-spacing: -0.02em;
 }
 .rmap-hr {
 border: none;
 border-top: 2px solid #C2A46F;
 margin: 20px 0 24px;
 width: 70px;
 opacity: 0.6;
 }
 .rmap-desc {
 color: #2d2d2d;
 font-size: 1.05rem;
 line-height: 1.8;
 margin: 0;
 }
 .rmap-img {
 overflow: hidden;
 position: relative;
 }
 .rmap-spacer { height: 60vh; }
 @media (max-width: 991px) {
 .rmap-card { grid-template-columns: 1fr; }
 .rmap-img { height: 240px; order: -1; }
 .rmap-text { padding: 30px; }
 .rmap-num { font-size: 5rem; }
 }
 @media (max-width: 768px) {
 .rmap-pin { top: 100px; }
 .rmap-spacer { height: 40vh; }
 .rmap-text { padding: 24px; }
 .rmap-title { font-size: 1.5rem; }
 }
 @media (max-width: 575px) {
 .rmap-text { padding: 20px; }
 .rmap-title { font-size: 1.35rem; }
 .rmap-desc { font-size: 0.95rem; }
 .rmap-img { height: 200px; }
 }
 `}</style>
        </section>


        {/* Featured Services Section */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="display-5 fw-bold mb-4">Explore Our Clinical Programs</h2>
              <p className="lead ">Each program targets a specific physiological pathway — choose the intervention aligned with your root cause</p>
            </div>
            <div className="row g-4">
              {/* Yoga Section */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg h-100 overflow-hidden">
                  <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
                    <Image
                      src="/img/home/yoga.jpg"
                      alt="Functional Yoga Therapy"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6 featured-service-card-body" style={{ backgroundColor: "#f5f0e8" }}>
                    <h3 className="service-card-title">Functional Yoga</h3>
                    <ul className="list-unstyled">
                      {yoga.slice(0, 3).map((item) => (
                        <li key={item.id} className="mb-3 pb-3" style={{ borderBottom: "1px solid #ddd5c0" }}>
                          <Link
                            href={item.url}
                            className="text-decoration-none featured-service-link service-card-item"
                          >
                            → {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/yoga"
                      className="btn btn-sm w-100 service-card-link yoga-btn"
                    >
                      Explore All Classes
                    </Link>
                  </div>
                </div>
              </div>

              {/* Diet Section */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg h-100 overflow-hidden">
                  <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
                    <Image
                      src="/img/home/diet.jpg"
                      alt="Clinical Nutrition"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6 featured-service-card-body" style={{ backgroundColor: "#fdf6ec" }}>
                    <h3 className="service-card-title">Clinical Nutrition</h3>
                    <ul className="list-unstyled">
                      {diet.slice(0, 3).map((item) => (
                        <li key={item.id} className="mb-3 pb-3" style={{ borderBottom: "1px solid #e8d8b8" }}>
                          <Link
                            href={item.url}
                            className="text-decoration-none featured-service-link service-card-item diet-link"
                          >
                            → {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/diet"
                      className="btn btn-sm w-100 service-card-link diet-btn"
                    >
                      Explore All Programs
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sound Healing Section */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-lg h-100 overflow-hidden">
                  <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
                    <Image
                      src="/img/home/sound-healing.jpg"
                      alt="Sound Healing Therapy"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6 featured-service-card-body" style={{ backgroundColor: "#f4ede4" }}>
                    <h3 className="service-card-title">Sound Healing</h3>
                    <ul className="list-unstyled">
                      {soundHealing.slice(0, 3).map((item) => (
                        <li key={item.id} className="mb-3 pb-3" style={{ borderBottom: "1px solid #dccfc4" }}>
                          <Link
                            href={item.url}
                            className="text-decoration-none featured-service-link service-card-item sound-link"
                          >
                            → {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/sound-healing"
                      className="btn btn-sm w-100 service-card-link sound-btn"
                    >
                      Explore Sound Healing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Newsletter Section */}
        <section className="wrapper py-16" style={{ background: "#C2A46F", border: "1px solid black" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-white mb-5 mb-lg-0">
                <h2 className="h3 fw-bold mb-4">Get Clinical Insights Delivered to You</h2>
                <p className="lead mb-0">Subscribe for evidence-based protocols, root-cause health insights, and early access to new clinical programs — straight to your inbox.</p>
              </div>
              <div className="col-lg-6">
                <form onSubmit={handleSubscribe}>
                  <div className="input-group input-group-sm">
                    <input
                      type="email"
                      id="newsletter-email"
                      aria-label="Email for newsletter"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button className="btn btn-light fw-bold" style={{ background: "#1F3D2B", color: "#f8f7f7ff", border: "1px solid black" }} type="submit">
                      Subscribe
                    </button>
                  </div>
                  {subscribed && (
                    <small className="text-white mt-5 d-block">
                      ✅ Thank you for subscribing! Check your email for confirmation.
                    </small>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Articles — From Our Blog */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center mb-12 article-grid-hero">
              <h2 className="display-5 fw-bold mb-4 section-heading">From Our Blog</h2>
              <p className="lead section-copy">Evidence-based insights and actionable strategies to support your recovery journey</p>
            </div>
            <div className="row g-4">

              {/* Card 1 */}
              <div className="col-md-6 col-lg-4">
                <div className="blog-card">
                  <div className="blog-card-img-wrap">
                    <Image src="/img/Sound_Healing.jpg" alt="Sound Healing" fill style={{ objectFit: 'cover' }} />
                    <span className="blog-card-badge">Sound Healing</span>
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-card-date">April 17, 2026</span>
                    <h5 className="blog-card-title">How sound healing can reset your mind to optimal performance</h5>
                    <p className="blog-card-excerpt">Discover how vibrational frequencies can reduce stress, improve focus, and enhance cognitive function.</p>
                    <Link href="/article/optimized-performance-sound-healing" className="blog-card-btn">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-6 col-lg-4">
                <div className="blog-card">
                  <div className="blog-card-img-wrap">
                    <Image src="/img/Diet.jpg" alt="Yoga Diet Sound Healing" fill style={{ objectFit: 'cover' }} />
                    <span className="blog-card-badge">Holistic Recovery</span>
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-card-date">April 15, 2026</span>
                    <h5 className="blog-card-title">How integration of Yoga, Diet and Sound healing can boost any treatment</h5>
                    <p className="blog-card-excerpt">Learn how combining yoga, nutrition, and sound therapy creates a powerful holistic approach to recovery.</p>
                    <Link href="/article/synergy-yoga-diet-sound" className="blog-card-btn">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-6 col-lg-4">
                <div className="blog-card">
                  <div className="blog-card-img-wrap">
                    <Image src="/img/Yoga.jpg" alt="Yoga Sound Healing" fill style={{ objectFit: 'cover' }} />
                    <span className="blog-card-badge">Longevity</span>
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-card-date">April 10, 2026</span>
                    <h5 className="blog-card-title">Key to a Healthy life through Yoga and sound healing</h5>
                    <p className="blog-card-excerpt">Explore the essential practices of yoga and sound healing that lead to a balanced, healthy, and fulfilling life.</p>
                    <Link href="/article/healthy-life-yoga-sound" className="blog-card-btn">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* View All Articles Button */}
            <div className="text-center mt-12">
              <Link href="/articles" className="blog-view-all-btn">
                View All Articles →
              </Link>
            </div>
          </div>
        </section>

        <style>{`
          #welcome-heading {
            color: #132a24 !important;
          }

          .section-heading {
            font-size: 2.6rem !important;
            line-height: 1.08 !important;
            letter-spacing: -0.02em;
            color: #132a24 !important;
          }

          .section-copy {
            color: #4a5258 !important;
            max-width: 720px;
            margin: 0 auto;
            font-size: 1rem;
            line-height: 1.75;
          }

          .article-grid-hero p {
            color: #4f575d !important;
          }

          /* ===== Blog Cards ===== */
          .blog-card {
            border-radius: 20px;
            overflow: hidden;
            background: #fff;
            box-shadow: 0 4px 24px rgba(19, 42, 36, 0.06);
            transition: all 0.45s cubic-bezier(0.165, 0.84, 0.44, 1);
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          .blog-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 24px 48px rgba(19, 42, 36, 0.12);
          }
          .blog-card-img-wrap {
            position: relative;
            height: 210px;
            overflow: hidden;
          }
          .blog-card-img-wrap img {
            transition: transform 0.7s ease;
          }
          .blog-card:hover .blog-card-img-wrap img {
            transform: scale(1.08);
          }
          .blog-card-badge {
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
            letter-spacing: 0.03em;
          }
          .blog-card-body {
            padding: 1.75rem;
            display: flex;
            flex-direction: column;
            flex: 1;
          }
          .blog-card-date {
            font-size: 0.78rem;
            color: #9ca3af;
            margin-bottom: 0.65rem;
            font-weight: 500;
          }
          .blog-card-title {
            font-size: 1.15rem !important;
            font-weight: 800 !important;
            line-height: 1.35 !important;
            color: #132a24 !important;
            margin-bottom: 0.75rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .blog-card-excerpt {
            font-size: 0.92rem;
            line-height: 1.7;
            color: #6b7280;
            margin-bottom: 1.5rem;
            flex: 1;
          }
          .blog-card-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.7rem 1.75rem;
            background: #132a24;
            color: #fff !important;
            border-radius: 100px;
            font-weight: 700;
            font-size: 0.88rem;
            text-decoration: none !important;
            transition: all 0.3s ease;
            align-self: flex-start;
            margin-top: auto;
          }
          .blog-card-btn:hover {
            background: #C2A46F;
            transform: translateX(4px);
          }

          /* ===== View All Articles ===== */
          .blog-view-all-btn {
            display: inline-flex;
            align-items: center;
            padding: 0.9rem 2.5rem;
            border: 2px solid #132a24;
            border-radius: 100px;
            font-weight: 700;
            font-size: 1rem;
            color: #132a24 !important;
            text-decoration: none !important;
            transition: all 0.35s ease;
          }
          .blog-view-all-btn:hover {
            background: #132a24;
            color: #fff !important;
            box-shadow: 0 8px 24px rgba(19, 42, 36, 0.2);
          }
        `}</style>
        {/* Stats Section */}
        <StatsBar />

        {/* CTA Section */}
        <section className="wrapper py-12 homepage-cta-section">
          <div className="container text-center">
            <h2 className="display-5 fw-bold mb-4 homepage-cta-heading">Ready to Reverse Your Condition?</h2>
            <h3 className="display-6 fw-bold mb-3 homepage-cta-heading">Start Your Clinical Recovery Today</h3>
            <p className="mb-8 homepage-cta-text">Chronic disorders don't reverse themselves. Your first step is a free root-cause consultation — no prescription, no guesswork, just clarity on what's driving your condition.</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link href="/contact-appointment" className="btn btn-lg homepage-cta-btn">
                Book Root-Cause Consultation →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

const RoadmapCard = ({ item, idx, total, scrollYProgress }) => {
  const scale = useTransform(
    scrollYProgress,
    [idx / total, (idx + 1) / total],
    [1, Math.max(0.9, 1 - (total - idx - 1) * 0.03)]
  );

  return (
    <div className="rmap-pin pb-4">
      <motion.div className="rmap-card" style={{ scale }}>
        <div className="rmap-text">
          <div className="rmap-badge">Step {item.step}</div>
          <div className="rmap-num">0{item.step}</div>
          <h3 className="rmap-title">{item.title}</h3>
          <hr className="rmap-hr" />
          <p className="rmap-desc">{item.desc}</p>
        </div>
        <div className="rmap-img">
          <Image src={item.img} alt={item.title} fill style={{ objectFit: 'cover' }} />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
