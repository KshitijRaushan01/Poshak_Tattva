import { Fragment } from "react";
import Head from "next/head";
import PageProgress from "components/PageProgress";
import Hero from "components/Hero";
import About from "components/About";
import Services from "components/Services";

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
              para="At Poshak Tattva, we believe true wellness begins with balance — of the body, mind, and soul. Through our holistic approach of Yoga, Diet, and Sound Healing, we help you restore inner harmony, enhance vitality, and embrace mindful living. Each session is designed to nurture your energy and guide you toward natural healing and self-discovery."
              isH1="true"
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
              <h2 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head">
                Poshak Tattva Wellness Programs
                <span
                  className="ms-2 d-inline-block"
                  style={{
                    borderBottom: "3px solid #D8D8D8",
                    width: "30px",
                    height: 0,
                  }}
                />
              </h2>
            </div>

            {/* Services Grid */}
            <Services />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
