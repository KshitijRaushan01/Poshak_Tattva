import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageProgress from "components/PageProgress";
import FAQCard from "components/ui/FAQCard";

export const metadata = {
  title: "FAQ - Poshak Tattva",
  description: "Frequently asked questions about Poshak Tattva's yoga, diet, and sound healing programs. Learn about our approach, pricing, and how we help reverse chronic lifestyle disorders."
}

export default function FAQPage() {
 const faqCategories = [
 {
 category: "About Classes",
 items: [
 {
 q: "What should I do before my first session?",
 a: "Eat a light meal 1-2 hours before class. Wear comfortable clothing. Have a yoga mat ready. Most importantly, come with an open mind and willingness to learn.",
 },
 {
 q: "Do I need prior experience?",
 a: "No! Our classes cater to all levels—beginners to advanced. We'll provide modifications for each pose.",
 },
 {
 q: "What time zone are classes in?",
 a: "All classes are scheduled in Indian Standard Time (IST). You can attend from any city in India or abroad.",
 },
 {
 q: "Can I attend classes offline?",
 a: "Yes! We have offline sessions in Delhi. Contact us for details about other cities.",
 },
 ],
 },
 {
 category: "Booking & Scheduling",
 items: [
 {
 q: "How do I book a class?",
 a: "Go to our Contact/Appointment page, select your preferred service, date, and time. You'll receive a confirmation email with Zoom link.",
 },
 {
 q: "Can I reschedule my class?",
 a: "Yes, you can reschedule up to 24 hours before the class. Just email us with your new preferred time.",
 },
 {
 q: "What if I miss my class?",
 a: "One free reschedule per month. After that, the session will be considered used. Monthly subscriptions get unlimited rescheduling.",
 },
 {
 q: "Do you offer group discounts?",
 a: "Yes! Groups of 5+ people get 15% discount. Contact us at poshaktattva@gmail.com for bulk bookings.",
 },
 ],
 },
 {
 category: "Services",
 items: [
 {
 q: "What's the difference between Yoga, Diet, and Sound Healing?",
 a: "Yoga focuses on physical postures and breathing. Diet Consultation provides personalized sattvic meal plans. Sound Healing uses vibrational frequencies to balance energy.",
 },
 {
 q: "Can I combine multiple services?",
 a: "Absolutely! Most students benefit from combining all three. We can create a customized wellness plan for you.",
 },
 {
 q: "How often should I do Sound Healing?",
 a: "For best results, 1-2 sessions per week. Some benefits are felt immediately, while deeper transformation takes 4-6 weeks.",
 },
 {
 q: "Is the diet plan vegetarian?",
 a: "No we offer Both veg and non-veg diet plans, based on your preference."
 },
 ], 
 },
 {
 category: "Technical",
 items: [
 {
 q: "What platform do you use for online classes?",
 a: "We use Zoom. You'll receive the meeting link via email 1 hour before your session.",
 },
 {
 q: "What if I have internet issues?",
 a: "We'll reschedule the session at no extra cost. Contact us immediately if this happens.",
 },
 {
 q: "Can I record the session?",
 a: "Personal recording for your own practice is allowed. Sharing publicly is not permitted.",
 },
 {
 q: "Do you have a mobile app?",
 a: "Not yet, but our website is fully mobile-friendly. You can book from your phone easily.",
 },
 ],
 },
 {
 category: "Shop & Orders",
 items: [
 {
 q: "How fast is the shipping?",
 a: "Standard shipping takes 3–5 business days across India. International orders typically arrive within 7–12 days.",
 },
 {
 q: "What's your return policy?",
 a: "We offer a 7-day return window for unopened products or items that arrive damaged. Your healing journey should be stress-free.",
 },
 {
 q: "Are the singing bowls authentic?",
 a: "Yes. Every bowl and tool is ethically sourced and hand-picked for its clinical-grade vibrational quality.",
 },
 {
 q: "How do I track my order?",
 a: "Once your package is shipped, a tracking link will be sent directly to your email for real-time updates.",
 },
 ],
 },
 {
 category: "Payments & Refunds",
 items: [
 {
 q: "What payment methods do you accept?",
 a: "We accept all major payment methods through our booking system. You'll see options at checkout.",
 },
 {
 q: "Is there a refund policy?",
 a: "We offer a 7-day money-back guarantee on all packages. After that, unused sessions can be transferred.",
 },
 {
 q: "Do you issue invoices?",
 a: "Yes! Invoices are sent automatically via email after payment.",
 },
 {
 q: "Can I get a receipt for my payments?",
 a: "Yes, both email receipts and printed invoices are available upon request.",
 },
 ],
 },
 ];

 return (
 <>
 <PageProgress />
 <Head>
 <title>FAQ - Poshak Tattva</title>
 <meta
 name="description"
 content="Frequently asked questions about Poshak Tattva wellness programs."
 />
 </Head>

 <main className="content-wrapper">
 {/* ── Premium FAQ Header ────────────────────────────── */}
 <section className="wrapper py-0">
 <div className="container">
 <FAQPageHeader />
 </div>
 </section>

 {/* FAQ Cards — one per category */}
 <section className="wrapper py-12">
 <div className="container">
 <div
 style={{
 display: "flex",
 flexDirection: "column",
 gap: 32,
 }}
 >
 {faqCategories.map((cat, i) => (
 <FAQCard
 key={i}
 title={cat.category}
 subtitle={
 i === faqCategories.length - 1
 ? "Have more questions? Don't hesitate to contact us:"
 : ""
 }
 items={cat.items}
 />
 ))}
 </div>
 </div>
 </section>

 {/* Contact CTA */}
 <section className="wrapper bg-light py-16">
 <div className="container">
 <div className="row">
 <div className="col-lg-8 mx-auto text-center">
 <h2 className="h4 fw-bold mb-4">Didn't find your answer?</h2>
 <p className=" mb-6">Our team is here to help. Reach out to us anytime.</p>
 <div className="d-flex gap-3 justify-content-center flex-wrap">
 <a href="/contact-appointment" className="btn btn-primary">
 Book a Consultation
 </a>
 <a href="mailto:poshaktattva@gmail.com" className="btn btn-outline-primary">
 Email Us
 </a>
 <a href="tel:+919351500400" className="btn btn-outline-primary">
 Call Us
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>
 </main>
 </>
 );
}

/* ── Premium animated page header ────────────────────────── */
function FAQPageHeader() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <>
      <style>{`
        .faq-page-header {
          width: 100%;
          padding: 56px 0 40px;
          text-align: center;
        }
        .faq-page-header-inner {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .faq-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #8B7355;
          margin-bottom: 18px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        .faq-main-heading {
          font-size: clamp(42px, 7vw, 72px);
          font-weight: 300;
          letter-spacing: -1.5px;
          line-height: 1.1;
          margin: 0 0 20px;
          color: #2c2c2c;
          font-family: 'Playfair Display', Georgia, serif;
        }
        .faq-sub {
          font-size: clamp(15px, 2.2vw, 18px);
          line-height: 1.65;
          color: #666;
          margin: 0 auto;
          max-width: 520px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 400;
        }
        .faq-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, #8B7355, #c4a882);
          border-radius: 2px;
          margin: 24px auto 0;
        }
        @media (max-width: 768px) {
          .faq-page-header { padding: 40px 0 28px; }
          .faq-main-heading { font-size: 38px; }
        }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400&display=swap');
      `}</style>

      <motion.section
        ref={ref}
        className="faq-page-header"
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        variants={container}
      >
        <div className="faq-page-header-inner">
          <motion.span className="faq-eyebrow" variants={item}>
            Everything You Need to Know
          </motion.span>
          <motion.h1 className="faq-main-heading" variants={item}>
            Frequently Asked Questions
          </motion.h1>
          <motion.p className="faq-sub" variants={item}>
            Browse our most common questions below, or reach out to us directly — we&apos;re always happy to help.
          </motion.p>
          <motion.div className="faq-divider" variants={item} />
        </div>
      </motion.section>
    </>
  );
}
