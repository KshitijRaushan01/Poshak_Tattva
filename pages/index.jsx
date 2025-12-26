import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import PageProgress from "components/PageProgress";
import Hero from "components/Hero";
import About from "components/About";
import Services from "components/Services";
import Testimonials from "components/Testimonials";

const Home = () => {
  return (
    <Fragment>
      <PageProgress />

      <Head>
        <title>Poshak Tattva</title>
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

        {/* Surgeries Section */}
        <section className="wrapper bg-light py-10 py-md-14">
          <div className="container">
            <div className="col-md-10 col-lg-8">
              <p className="fs-80 fw-bolder sub-h2 position-relative">
                Our Offerings
              </p>
              <h2 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 ">
                Poshak Tattva Wellness Programs
                {/* <span
                  className="ms-2 d-inline-block"
                  style={{
                    borderBottom: "3px solid #D8D8D8",
                    width: "30px",
                    height: 0,
                  }}
                /> */}
              </h2>
            </div>

            {/* Services Grid */}
            <Services />
          </div>
        </section>

        {/* About Section */}
        <section className="wrapper bg-light">
          <div className="container pt-8 pt-md-15 mb-12">
            <About
              imgPosition="left"
              imgSrc="/img/yds.png"
              heading="Welcome to Poshak Tattva"
              isH1="true"
              btnName="Discover More"
              btnUrl="google.com"
              para="At Poshak Tattva, we believe that true wellness is not merely the absence of illness — it is a harmonious alignment of the body, mind, and soul. Our philosophy is rooted in the timeless wisdom of holistic living, where healing is achieved through balance, awareness, and conscious nourishment. Through the integration of Yoga, Diet, and Sound Healing, we guide you on a transformative journey toward complete well-being.
Our Yoga practices cultivate strength, flexibility, and inner calm, helping you reconnect with your breath and your being. Our personalized diet plans are grounded in sattvic principles, designed to cleanse and energize your system from within while nurturing your relationship with food. Through Sound Healing, we work with vibrational frequencies to realign your energy centers, release emotional blockages, and restore peace to your mind and heart."
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Quick Links Section */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card shadow-sm border-0 h-100 text-center p-6">
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📅</div>
                  <h5 className="fw-bold mb-3">View Schedule</h5>
                  <p className="text-muted mb-4">Check live class timings and book your preferred session</p>
                  <Link href="/classes" className="btn btn-primary">
                    View Classes
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm border-0 h-100 text-center p-6">
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💰</div>
                  <h5 className="fw-bold mb-3">Simple Pricing</h5>
                  <p className="text-muted mb-4">Flexible plans for every budget. Choose what works for you</p>
                  <Link href="/pricing" className="btn btn-primary">
                    See Plans
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm border-0 h-100 text-center p-6">
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>❓</div>
                  <h5 className="fw-bold mb-3">Questions?</h5>
                  <p className="text-muted mb-4">Have questions? Find answers to all your concerns</p>
                  <Link href="/faq" className="btn btn-primary">
                    Visit FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
