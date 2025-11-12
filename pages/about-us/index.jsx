import PageHeader from "components/PageHeader";
import About from "components/About";
import StatsSection from "components/StatsSection";

export default function AboutUs() {
  return (
    <>
      <main>
        <PageHeader title="About Us" />

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

        <section className="wrapper bg-light">
          <div className="container pt-8 pt-md-15">
            <About
              imgPosition="left"
              imgSrc="/img/yds.png"
              heading="Welcome to Poshak Tattva"
              isH1="true"
              para="At Poshak Tattva, we believe that true wellness is not merely the absence of illness — it is a harmonious alignment of the body, mind, and soul. Our philosophy is rooted in the timeless wisdom of holistic living, where healing is achieved through balance, awareness, and conscious nourishment. Through the integration of Yoga, Diet, and Sound Healing, we guide you on a transformative journey toward complete well-being.
       Our Yoga practices cultivate strength, flexibility, and inner calm, helping you reconnect with your breath and your being. Our personalized diet plans are grounded in sattvic principles, designed to cleanse and energize your system from within while nurturing your relationship with food. Through Sound Healing, we work with vibrational frequencies to realign your energy centers, release emotional blockages, and restore peace to your mind and heart."
            />
          </div>
        </section>

        <StatsSection />
      </main>
    </>
  );
}
