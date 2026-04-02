import Head from "next/head";
import PageHeader from "components/PageHeader";
import About from "components/About";
import StatsSection from "components/StatsSection";

export default function AboutUs() {
  const coreValues = [
    {
      icon: "🌿",
      title: "Holistic Wellness",
      desc: "We believe in treating the whole person - body, mind, and spirit - not just symptoms."
    },
    {
      icon: "🤝",
      title: "Authenticity",
      desc: "We honor ancient wisdom while embracing modern science for authentic healing."
    },
    {
      icon: "💚",
      title: "Compassion",
      desc: "Every person's wellness journey is unique. We guide with care and understanding."
    },
    {
      icon: "✨",
      title: "Empowerment",
      desc: "We empower individuals to take control of their own health and transformation."
    }
  ];

  const team = [
    {
      name: "Priyanka Pugalia",
      role: "Founder & Yoga Therapist & Holistic Coach",
      bio: "8+ years of experience in traditional yoga and holistic healing",
      icon: "👨‍⚕️"
    },
    {
      name: "Priya Sharma",
      role: "Lead Nutritionist",
      bio: "Expert in Ayurvedic diet and sattvic meal planning",
      icon: "👩‍🍳"
    },
    {
      name: "Arjun Verma",
      role: "Sound Healing Specialist",
      bio: "Certified sound healer with expertise in vibrational frequencies",
      icon: "🎵"
    },
    {
      name: "Anjali Singh",
      role: "Meditation Guide",
      bio: "Passionate about guiding students through mindfulness practices",
      icon: "🧘‍♀️"
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      desc: "Priyanka Pugalia founded Poshak Tattva with a vision to bring holistic wellness to urban communities."
    },
    {
      year: "2021",
      title: "Expansion Phase",
      desc: "Opened branches in 5 major cities and trained 50+ certified instructors."
    },
    {
      year: "2022",
      title: "Digital Transformation",
      desc: "Launched online classes to reach students across the country and beyond."
    },
    {
      year: "2023",
      title: "Global Reach",
      desc: "Now serving 500+ students across 50+ cities with specialized wellness programs."
    },
    {
      year: "2024",
      title: "Innovation & Growth",
      desc: "Introducing AI-powered personalized wellness plans and expanded sound healing offerings."
    },
    {
      year: "2025",
      title: "Community First",
      desc: "Committed to making holistic wellness accessible to everyone, everywhere."
    }
  ];

  return (
    <>
      <Head>
        <title>About Poshak Tattva - Holistic Wellness Journey</title>
        <meta
          name="description"
          content="Learn about Poshak Tattva's mission to transform lives through holistic wellness, yoga, diet, and sound healing. Meet our expert team and discover our 15+ year journey."
        />
      </Head>

      <main>
        <PageHeader title="About Poshak Tattva" />

        {/* Our Story Section */}
        <section className="wrapper bg-light">
          <div className="container pt-8 pt-md-15">
            <About
              imgPosition="right"
              imgSrc="/img/yds.png"
              heading="Our Story"
              isH1="true"
              para="At Poshak Tattva, we believe that true wellness is not merely the absence of illness — it is a harmonious alignment of the body, mind, and soul. Founded in 2009 with a simple mission: to bring the ancient wisdom of holistic healing to modern communities. Our philosophy is rooted in the timeless wisdom of holistic living, where healing is achieved through balance, awareness, and conscious nourishment.

Through the integration of Yoga, Diet, and Sound Healing, we guide you on a transformative journey toward complete well-being. Our Yoga practices cultivate strength, flexibility, and inner calm, helping you reconnect with your breath and your being. Our personalized diet plans are grounded in sattvic principles, designed to cleanse and energize your system from within while nurturing your relationship with food. Through Sound Healing, we work with vibrational frequencies to realign your energy centers, release emotional blockages, and restore peace to your mind and heart."
            />
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="wrapper bg-white py-16">
          <div className="container">
            <div className="row g-6">
              <div className="col-lg-6">
                <div className="card border-0 shadow-lg p-8" style={{ borderTop: "4px solid #1F3D2B" }}>
                  <h3 className="h4 fw-bold mb-4">🎯 Our Mission</h3>
                  <p className="text-muted lh-lg">
                    To empower individuals across all cities and cultures with accessible, personalized holistic wellness solutions that integrate the wisdom of ancient practices with modern science. We are committed to transforming lives by facilitating profound healing and sustainable wellness through Yoga, Sattvic Diet, and Sound Healing.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card border-0 shadow-lg p-8" style={{ borderTop: "4px solid #1F3D2B" }}>
                  <h3 className="h4 fw-bold mb-4">✨ Our Vision</h3>
                  <p className="text-muted lh-lg">
                    To create a world where every individual has access to holistic wellness tools and guidance, enabling them to achieve complete balance in body, mind, and spirit. We envision a community where wellness is not a luxury, but a fundamental right accessible to all, fostering a healthier, more conscious, and more compassionate society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="display-5 fw-bold mb-4">Our Core Values</h2>
              <p className="lead text-muted">The principles that guide every decision and interaction</p>
            </div>
            <div className="row g-4">
              {coreValues.map((value, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm p-6 text-center">
                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{value.icon}</div>
                    <h5 className="fw-bold mb-3">{value.title}</h5>
                    <p className="text-muted small">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="wrapper bg-white py-16">
          <div className="container">
            <About
              imgPosition="left"
              imgSrc="/img/yds.png"
              heading="Why Choose Poshak Tattva?"
              isH1="false"
              para="Poshak Tattva stands out in the wellness industry for several compelling reasons. With over 6 years of experience, we've perfected a unique approach that combines ancient yogic wisdom with contemporary science. Our team of certified experts are deeply passionate about your wellness journey.

We don't believe in one-size-fits-all solutions. Every student receives personalized attention and customized programs tailored to their specific needs and goals. Our multi-city presence across 50+ cities ensures you can access our programs wherever you are, while our online platform brings flexibility to your schedule.

Beyond just teaching techniques, we build a supportive community where you're empowered to take control of your health. Our proven track record speaks for itself: 500+ happy students with a 98% satisfaction rate and countless success stories of transformation."
            />
          </div>
        </section>

        {/* Our Team Section */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="display-5 fw-bold mb-4">Meet Our Expert Team</h2>
              <p className="lead text-muted">Dedicated professionals committed to your wellness transformation</p>
            </div>
            <div className="row g-4">
              {team.map((member, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm overflow-hidden text-center">
                    <div style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)", padding: "2rem", color: "white" }}>
                      <div style={{ fontSize: "4rem" }}>{member.icon}</div>
                    </div>
                    <div className="p-6">
                      <h5 className="fw-bold mb-2">{member.name}</h5>
                      <p className="text-primary fw-bold small mb-3">{member.role}</p>
                      <p className="text-muted small">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="wrapper bg-white py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="display-5 fw-bold mb-4">Our Journey</h2>
              <p className="lead text-muted">6+ years of transforming lives through holistic wellness</p>
            </div>

            <div style={{ position: "relative" }}>
              {/* Timeline line */}
              <div style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "2px",
                background: "linear-gradient(180deg, #1F3D2B 0%, #3D5C4A 100%)",
                transform: "translateX(-50%)"
              }} className="d-none d-lg-block" />

              <div className="row g-4">
                {timeline.map((item, idx) => (
                  <div key={idx} className={`col-lg-6 ${idx % 2 === 0 ? "pe-lg-5" : "ps-lg-5"}`}>
                    <div style={{ position: "relative" }}>
                      {/* Timeline dot */}
                      <div style={{
                        position: "absolute",
                        left: "50%",
                        top: "1rem",
                        width: "20px",
                        height: "20px",
                        background: "white",
                        border: "4px solid #1F3D2B",
                        borderRadius: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 2
                      }} className="d-none d-lg-block" />

                      <div className="card h-100 border-0 shadow-sm p-6">
                        <h5 className="fw-bold text-primary mb-2">{item.year}</h5>
                        <h6 className="fw-bold mb-3">{item.title}</h6>
                        <p className="text-muted small">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Commitment Section */}
        <section className="wrapper py-16" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}>
          <div className="container">
            <div className="row g-4 text-white">
              <div className="col-lg-8">
                <h2 className="display-6 fw-bold mb-4 text-white">Our Commitment to Your Wellness</h2>
                <p className="lead mb-4 text-white text-opacity-75">
                  We don't just provide services; we build relationships. Our commitment is to walk alongside you on your healing journey, providing the tools, knowledge, and support you need to achieve your manifestation of health.
                </p>
                <ul className="list-unstyled">
                  {[
                    "✓ Providing authentic teachings rooted in traditional wisdom",
                    "✓ Creating a safe, judgment-free space for your transformation",
                    "✓ Offering personalized guidance tailored to your unique needs",
                    "✓ Supporting you every step of your wellness journey",
                    "✓ Staying dedicated to continuous learning and improvement",
                    "✓ Making wellness accessible and affordable for all"
                  ].map((item, idx) => (
                    <li key={idx} className="mb-3">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-4 d-flex flex-column justify-content-center text-center">
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>💚</div>
                <h2 className="h3 fw-bold mb-4 text-white">Ready to Start Your Wellness Journey?</h2>
                <p className="lead mb-6 text-white text-opacity-75">Join hundreds of students transforming their lives</p>
                <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>
                  Begin Your Journey
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="display-5 fw-bold mb-4">The Impact We Create</h2>
              <p className="lead text-muted">Real transformations, real lives changed</p>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm p-6 text-center">
                  <h3 className="h2 fw-bold text-primary mb-3">500+</h3>
                  <p className="fw-bold mb-3">Students Transformed</p>
                  <p className="text-muted small">Lives changed through holistic wellness practices</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm p-6 text-center">
                  <h3 className="h2 fw-bold text-primary mb-3">50+</h3>
                  <p className="fw-bold mb-3">Cities Served</p>
                  <p className="text-muted small">Bringing wellness to communities across the country</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm p-6 text-center">
                  <h3 className="h2 fw-bold text-primary mb-3">98%</h3>
                  <p className="fw-bold mb-3">Satisfaction Rate</p>
                  <p className="text-muted small">Students who report significant health improvements</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
