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

      <main className="content-wrapper" style={{ overflowX: 'clip' }}>
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <StatsBar />

        {/* About Section */}
        <section className="wrapper bg-light">
          <div className="container pt-8 pt-md-15">
            <About
              imgPosition="right"
              imgSrc="/img/yds.png"
              heading="Welcome to Poshak Tattva"
              isH1="true"
              para="At Poshak Tattva, we go beyond the absence of illness to achieve systemic recovery. Chronic lifestyle disorders — from metabolic dysfunction and hormonal imbalance to autoimmune flares and digestive disorders — are not destiny. They are the result of compounding root causes that conventional medicine rarely addresses."
              para2="Our methodology is clinically grounded. Our Sattvic Diet protocols are therapeutic-grade, engineered to correct metabolic health at the cellular level — reducing inflammation, rebalancing the gut microbiome, and restoring endocrine function. Our Sound Healing sessions use precision vibrational frequencies to rewire the autonomic nervous system, shifting patients from chronic stress states into deep physiological repair."
              para3="Through Functional Yoga, we prescribe movement as medicine — specific asana and pranayama sequences that activate the lymphatic system, stimulate the vagus nerve, and restore hormonal regulation. This is not wellness as a lifestyle choice. This is clinical recovery delivered through the wisdom of ancient science."
            />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="wrapper bg-white py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="display-5 fw-bold mb-4">Our Clinical Methodology</h2>
              <p className="lead ">How we move beyond symptom management to achieve measurable, systemic recovery</p>
            </div>
            <div className="row g-4">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm overflow-hidden" style={{ transition: "all 0.3s ease", borderRadius: '16px' }}>
                    <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                      <Image src={item.img} alt={item.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="p-5 text-center">
                      <h5 className="fw-bold mb-3">{item.title}</h5>
                      <p className=" mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="wrapper bg-light py-10 py-md-14">
          <div className="container">
            <div className="col-md-10 col-lg-8">
              <p className="fs-80 fw-bolder sub-h3 position-center" style={{ color: "#14582fff" }}>
                Our Offerings
              </p>
              <h2 className="display-5 mb-16 fw-bold z-1 position-center">
                Clinical Recovery Programs
              </h2>
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
                      alt="Yoga"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6" style={{ backgroundColor: "#f5f0e8" }}>
                    <ul className="list-unstyled">
                      {yoga.slice(0, 3).map((item) => (
                        <li key={item.id} className="mb-3 pb-3" style={{ borderBottom: "1px solid #ddd5c0" }}>
                          <Link
                            href={item.url}
                            className="text-decoration-none featured-service-link"
                            style={{ color: "#5a7a52", fontWeight: "500", transition: "color 0.2s, letter-spacing 0.2s" }}
                            onMouseOver={e => { e.currentTarget.style.color = "#fd2a05ff"; e.currentTarget.style.letterSpacing = "0.03em"; }}
                            onMouseOut={e => { e.currentTarget.style.color = "#5a7a52"; e.currentTarget.style.letterSpacing = "0"; }}
                          >
                            → {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/yoga"
                      className="btn btn-sm w-100"
                      style={{ backgroundColor: "#5a7a52", color: "#fff", border: "none", transition: "background-color 0.2s" }}
                      onMouseOver={e => e.currentTarget.style.backgroundColor = "#fd2a05ff"}
                      onMouseOut={e => e.currentTarget.style.backgroundColor = "#5a7a52"}
                    >
                      Explore All Yoga Classes
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
                      alt="Diet & Nutrition"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6" style={{ backgroundColor: "#fdf6ec" }}>
                    <ul className="list-unstyled">
                      {diet.slice(0, 3).map((item) => (
                        <li key={item.id} className="mb-3 pb-3" style={{ borderBottom: "1px solid #e8d8b8" }}>
                          <Link
                            href={item.url}
                            className="text-decoration-none"
                            style={{ color: "#a0622a", fontWeight: "500", transition: "color 0.2s, letter-spacing 0.2s" }}
                            onMouseOver={e => { e.currentTarget.style.color = "#fd2a05ff"; e.currentTarget.style.letterSpacing = "0.03em"; }}
                            onMouseOut={e => { e.currentTarget.style.color = "#a0622a"; e.currentTarget.style.letterSpacing = "0"; }}
                          >
                            → {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/diet"
                      className="btn btn-sm w-100"
                      style={{ backgroundColor: "#a0622a", color: "white", border: "none", transition: "background-color 0.2s" }}
                      onMouseOver={e => e.currentTarget.style.backgroundColor = "#7a4a1e"}
                      onMouseOut={e => e.currentTarget.style.backgroundColor = "#a0622a"}
                    >
                      Explore All Diet Programs
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
                      alt="Sound Healing"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6" style={{ backgroundColor: "#f4ede4" }}>
                    <ul className="list-unstyled">
                      {soundHealing.slice(0, 3).map((item) => (
                        <li key={item.id} className="mb-3 pb-3" style={{ borderBottom: "1px solid #dccfc4" }}>
                          <Link
                            href={item.url}
                            className="text-decoration-none"
                            style={{ color: "#8b6347", fontWeight: "500", transition: "color 0.2s, letter-spacing 0.2s" }}
                            onMouseOver={e => { e.currentTarget.style.color = "#6b4830"; e.currentTarget.style.letterSpacing = "0.03em"; }}
                            onMouseOut={e => { e.currentTarget.style.color = "#8b6347"; e.currentTarget.style.letterSpacing = "0"; }}
                          >
                            → {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/sound-healing"
                      className="btn btn-sm w-100"
                      style={{ backgroundColor: "#8b6347", color: "white", border: "none", transition: "background-color 0.2s" }}
                      onMouseOver={e => e.currentTarget.style.backgroundColor = "#6b4830"}
                      onMouseOut={e => e.currentTarget.style.backgroundColor = "#8b6347"}
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

        {/* Quick Links Section */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="display-5 fw-bold mb-4">Ready to Reverse Your Condition?</h2>
              <p className="lead ">Everything you need to start your root-cause recovery — session booking, program details, and answers to your questions</p>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card shadow-sm border-0 h-100 text-center p-6 hover-shadow" style={{ transition: "all 0.3s ease", cursor: "pointer" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📅</div>
                  <h5 className="fw-bold mb-3">Book Your Free Root-Cause Consultation</h5>
                  <p className=" mb-4">Start with a no-cost clinical intake session — we map your symptoms to their systemic root causes before recommending any protocol.</p>
                  <Link href="/contact-appointment" className="btn btn-primary">
                    Book Free Consultation →
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm border-0 h-100 text-center p-6 hover-shadow" style={{ transition: "all 0.3s ease", cursor: "pointer" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💰</div>
                  <h5 className="fw-bold mb-3">Simple Pricing</h5>
                  <p className=" mb-4">Flexible and affordable plans for every budget. Choose what works for you
                    <br />
                    Start your Healing Journey
                  </p>
                  <Link href="/pricing" className="btn btn-primary">
                    See Plans →
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm border-0 h-100 text-center p-6 hover-shadow" style={{ transition: "all 0.3s ease", cursor: "pointer" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>❓</div>
                  <h5 className="fw-bold mb-3">Questions?</h5>
                  <p className=" mb-4">Have questions? Find answers to all your concerns in our comprehensive FAQ</p>
                  <Link href="/faq" className="btn btn-primary">
                    Visit FAQ →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="wrapper py-12 bg-white">
          <div className="container text-center">
            <h2 className="display-5 fw-bold mb-6">Start Your Clinical Recovery Today</h2>
            <p className="lead mb-8">Chronic disorders don't reverse themselves. Your first step is a free root-cause consultation — no prescription, no guesswork, just clarity on what's driving your condition.</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link href="/contact-appointment" className="btn btn-lg" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #1F3D2B 100%)", color: "white", border: "none" }}>
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
