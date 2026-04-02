import { Fragment, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageProgress from "components/PageProgress";
import Hero from "components/Hero";
import About from "components/About";
import Services from "components/Services";
import Testimonials from "components/Testimonials";
import { yoga, diet, soundHealing } from "../src/data";

const Home = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const stats = [
    { number: "500+", label: "Happy Students", icon: "👥" },
    { number: "50+", label: "Cities", icon: "🌍" },
    { number: "15+", label: "Years Experience", icon: "⏱️" },
    { number: "98%", label: "Satisfaction Rate", icon: "⭐" },
  ];

  const whyChooseUs = [
    {
      title: "Holistic Approach",
      desc: "We combine Yoga, Diet, and Sound Healing for complete wellness",
      icon: "🧘"
    },
    {
      title: "Expert Instructors",
      desc: "Certified professionals with years of practice and experience",
      icon: "👨‍🏫"
    },
    {
      title: "Personalized Plans",
      desc: "Customized sessions tailored to your specific needs and goals",
      icon: "📋"
    },
    {
      title: "Multi-City Access",
      desc: "Classes available in 50+ cities with flexible scheduling",
      icon: "📍"
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Consultation",
      desc: "Schedule a free consultation to discuss your wellness goals"
    },
    {
      step: "2",
      title: "Assessment",
      desc: "We analyze your current health and create a personalized plan"
    },
    {
      step: "3",
      title: "Practice",
      desc: "Begin your journey with guided sessions and daily practices"
    },
    {
      step: "4",
      title: "Transform",
      desc: "Experience lasting changes in health, energy, and wellness"
    },
  ];

  return (
    <Fragment>
      <PageProgress />

      <Head>
        <title>Poshak Tattva - Holistic Wellness Through Yoga, Diet & Sound Healing</title>
        <meta
          name="description"
          content="Poshak Tattva is a holistic wellness platform dedicated to healing through Yoga, Diet, and Sound Therapy. We guide you towards balance, vitality, and inner harmony with personalized yoga practices, sattvic diet plans, and transformative sound healing sessions."
        />

        <link rel="canonical" href="https://www.poshaktattva.com" />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Hero Section */}
        <Hero />

      

        {/* About Section */}
        <section className="wrapper bg-light">
          <div className="container pt-8 pt-md-15">
            <About
              imgPosition="right"
              imgSrc="/img/yds.png"
              heading="Welcome to Poshak Tattva"
              isH1="true"
              para="At Poshak Tattva, we believe that true wellness is not merely the absence of illness — it is a harmonious alignment of the body, mind, and soul. Our philosophy is rooted in the timeless wisdom of holistic living, where healing is achieved through balance, awareness, and conscious nourishment. Through the integration of Yoga, Diet, and Sound Healing, we guide you on a transformative journey toward complete well-being.
Our Yoga practices cultivate strength, flexibility, and inner calm, helping you reconnect with your breath and your being. Our personalized diet plans are grounded in sattvic principles, designed to cleanse and energize your system from within while nurturing your relationship with food. Through Sound Healing, we work with vibrational frequencies to realign your energy centers, release emotional blockages, and restore peace to your mind and heart."
            />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="wrapper bg-white py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="display-5 fw-bold mb-4">Why Choose Poshak Tattva?</h2>
              <p className="lead text-muted">Discover what makes our holistic wellness approach unique</p>
            </div>
            <div className="row g-4">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm p-6 text-center hover-shadow" style={{ transition: "all 0.3s ease" }}>
                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{item.icon}</div>
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p className="text-muted small">{item.desc}</p>
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
              <p className="fs-80 fw-bolder sub-h2 position-relative">
                Our Offerings
              </p>
              <h2 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 ">
                Poshak Tattva Wellness Programs
              </h2>
            </div>

            {/* Services Grid */}
            <Services />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="wrapper bg-white py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="display-5 fw-bold mb-4">Your Journey Starts Here</h2>
              <p className="lead text-muted">Simple steps to begin your wellness transformation</p>
            </div>
            <div className="row g-4">
              {howItWorks.map((item, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="card border-0 h-100 p-6 text-center" style={{ borderTop: "4px solid #1F3D2B" }}>
                    <div 
                      className="mx-auto mb-4 d-flex align-items-center justify-content-center" 
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)",
                        borderRadius: "50%",
                        color: "white",
                        fontSize: "1.5rem",
                        fontWeight: "bold"
                      }}
                    >
                      {item.step}
                    </div>
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p className="text-muted small">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="display-5 fw-bold mb-4">Explore Our Services</h2>
              <p className="lead text-muted">Find the perfect wellness practice for your needs</p>
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
                      href="/yoga/group-sessions"
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
                      href="/diet/digestive-disorders"
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
                      href="/sound-healing/1-1-session"
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
                <h2 className="h3 fw-bold mb-4">Stay Updated with Wellness Tips</h2>
                <p className="lead mb-0">Subscribe to our newsletter for exclusive tips, class schedules, and wellness advice delivered to your inbox.</p>
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
                    <button className="btn btn-light fw-bold" style={{ background: "#1F3D2B", color: "#C97B63", border: "1px solid black" }} type="submit">
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
              <h2 className="display-5 fw-bold mb-4">Ready to Begin?</h2>
              <p className="lead text-muted">Everything you need to know about our wellness programs</p>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card shadow-sm border-0 h-100 text-center p-6 hover-shadow" style={{ transition: "all 0.3s ease", cursor: "pointer" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📅</div>
                  <h5 className="fw-bold mb-3">Book Your Session</h5>
                  <p className="text-muted mb-4">Schedule your personalized consultation and get started on your wellness journey</p>
                  <Link href="/contact-appointment" className="btn btn-primary">
                    Book Appointment →
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm border-0 h-100 text-center p-6 hover-shadow" style={{ transition: "all 0.3s ease", cursor: "pointer" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💰</div>
                  <h5 className="fw-bold mb-3">Simple Pricing</h5>
                  <p className="text-muted mb-4">Flexible and affordable plans for every budget. Choose what works for you
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
                  <p className="text-muted mb-4">Have questions? Find answers to all your concerns in our comprehensive FAQ</p>
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
            <h2 className="display-5 fw-bold mb-6">Begin Your Wellness Journey Today</h2>
            <p className="lead text-muted mb-8">Don't wait for tomorrow. Take the first step towards complete wellness and inner peace.</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link href="/contact-appointment" className="btn btn-lg" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #1F3D2B 100%)", color: "white", border: "none" }}>
                Book Your Consultation →
              </Link>
              <Link href="/pricing" className="btn btn-lg btn-outline-primary">
                See Pricing →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
