import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "components/PageHeader";
import StatsSection from "components/StatsSection";

export default function AboutUs() {
    const timeline = [
        {
            year: "2020",
            title: "Where It Started",
            desc: "Priyanka Pugalia founded Poshak Tattva — not from a business plan, but from a genuine conviction that most people were being offered the wrong kind of help.",
        },
        {
            year: "2021",
            title: "The First 100",
            desc: "The results spoke before the marketing did. The first cohort of clients recovered from lifestyle disorders, hormonal imbalances, and digestive conditions that had resisted conventional approaches.",
        },
        {
            year: "2022",
            title: "Healing Without Borders",
            desc: "Moved online to reach individuals across India who couldn't access in-person sessions — bringing root-cause clarity to wherever people needed it most.",
        },
        {
            year: "2023",
            title: "500 Recoveries and Growing",
            desc: "Crossed 500 people supported across 50+ cities. Sound healing workshops and immersive retreats launched as standalone programmes.",
        },
        {
            year: "2024",
            title: "A Formalised Framework",
            desc: "The three-pillar methodology — Yoga Therapy, Clinical Nutrition, Sound Healing — was formalised into structured, fully personalised healing protocols.",
        },
        {
            year: "2025",
            title: "Reaching Further",
            desc: "More cities. More retreats. More people moving past management into actual recovery — and finally understanding why they struggled in the first place.",
        },
    ];

    const whatWeDo = [
        {
            icon: "🔍",
            title: "Find the Real Source",
            desc: "We start with a full picture — your lifestyle, diet history, stress patterns, sleep, and energetic state — before drawing any conclusions.",
        },
        {
            icon: "🥗",
            title: "Rebuild with Clinical Nutrition",
            desc: "Personalised nutrition protocols designed to reduce systemic inflammation, restore gut integrity, and rebuild metabolic function from the inside out.",
        },
        {
            icon: "🧘",
            title: "Restore with Yoga Therapy",
            desc: "Condition-specific sequences that target the lymphatic system, vagus nerve, and endocrine function — therapeutic, not generic.",
        },
        {
            icon: "🔔",
            title: "Regulate with Sound Healing",
            desc: "Targeted frequency-based sessions that shift the nervous system out of chronic stress patterns — addressing what simply resting cannot reach.",
        },
    ];

    const trustPoints = [
        {
            title: "Biological Understanding",
            desc: "A root-cause lens applied to nutrition, inflammation, gut health, hormonal balance, and nervous system regulation — not generalist wellness.",
        },
        {
            title: "Traditional Intelligence",
            desc: "Yogic science engaged not as ritual or performance, but as a deeply studied therapeutic system with measurable physiological effects.",
        },
        {
            title: "Energetic Regulation",
            desc: "Sound-based clinical interventions that work on stress physiology, recovery depth, and nervous system tone — not ambient relaxation.",
        },
    ];

    return (
        <>
            <Head>
                <title>About Poshak Tattva — Where Real Healing Begins</title>
                <meta
                    name="description"
                    content="Meet Priyanka Pugalia and the story behind Poshak Tattva — an integrated healing practice uniting Clinical Nutrition, Yoga Therapy, and Sound Healing to help 500+ people across India address the root cause, not just the symptoms."
                />
            </Head>

            <main className="content-wrapper">
                <PageHeader title="About Poshak Tattva" />

                {/* Opening Statement */}
                <section className="wrapper bg-white py-16">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <p
                                    className="fw-bold mb-3"
                                    style={{ color: "#1F3D2B", letterSpacing: "0.12em", fontSize: "0.8rem", textTransform: "uppercase" }}
                                >
                                    Our Philosophy
                                </p>
                                <h1 className="display-5 fw-bold mb-5" style={{ lineHeight: 1.25 }}>
                                    Most health struggles aren't a mystery.<br />
                                    <span style={{ color: "#1F3D2B" }}>They're a mismatch — and that can be corrected.</span>
                                </h1>
                                <p className="lead mb-4" style={{ lineHeight: 1.8 }}>
                                    At Poshak Tattva, we don't manage symptoms. We look for what caused them — and work backward from there.
                                </p>
                                <p
                                    className="fw-bold"
                                    style={{ fontSize: "1.3rem", color: "#1F3D2B" }}
                                >
                                    Because when the body is in alignment, healing follows naturally.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Story */}
                <section className="wrapper py-16" style={{ background: "#f7f4f0" }}>
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6">
                                <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}>
                                    <Image
                                        src="/img/Gallery/1.webp"
                                        alt="Priyanka Pugalia — Founder, Poshak Tattva"
                                        width={580}
                                        height={440}
                                        style={{ objectFit: "cover", width: "100%", height: "440px", display: "block" }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p
                                    className="fw-bold mb-2"
                                    style={{ color: "#fc0101ff", letterSpacing: "0.12em", fontSize: "0.75rem", textTransform: "uppercase" }}
                                >
                                    The Story Behind Poshak Tattva
                                </p>
                                <h2 className="display-6 fw-bold mb-5" style={{ lineHeight: 1.25 }}>
                                    This work didn't begin with a trend.<br />It began with a question.
                                </h2>
                                <p className="mb-4" style={{ lineHeight: 1.85 }}>
                                    Long before founding Poshak Tattva, <strong>Priyanka Pugalia</strong> was captivated by a single question: why does the body struggle the way it does? Her fascination with human anatomy and physiology grew alongside a yoga practice that began in childhood — not as exercise, but as a way of paying close attention to how the body speaks.
                                </p>
                                <p className="mb-4" style={{ lineHeight: 1.85 }}>
                                    What truly shaped her path, though, was witnessing something that troubled her deeply: people doing everything right — and still not getting better. Persistent gut issues, hormonal disruption, chronic fatigue, inflammation without cause. The advice was standard. The results were not.
                                </p>
                                <div className="mb-4 p-4" style={{ background: "#f0f7f2", borderRadius: "12px", borderLeft: "4px solid #1F3D2B" }}>
                                    <p className="mb-0 fw-bold" style={{ color: "#1F3D2B" }}>
                                        Symptoms were being managed. But the person was not being restored.
                                    </p>
                                </div>
                                <p className="mb-4" style={{ lineHeight: 1.85 }}>
                                    That gap became the foundation of her work. Through deep study across Clinical Nutrition, Yoga Therapy, and Sound Healing, she built a framework grounded not in wellness trends, but in biological logic and honest application.
                                </p>
                                <p className="mb-0" style={{ lineHeight: 1.85 }}>
                                    That framework became <strong>Poshak Tattva</strong> — a practice designed to help people stop managing what's wrong and start understanding why it began.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Breakthrough */}
                <section
                    className="wrapper py-16"
                    style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}
                >
                    <div className="container">
                        <div className="row justify-content-center mb-10">
                            <div className="col-lg-7 text-center">
                                <p
                                    className="fw-bold text-white mb-2"
                                    style={{ letterSpacing: "0.12em", fontSize: "0.75rem", textTransform: "uppercase" }}
                                >
                                    The Framework
                                </p>
                                <h2 className="display-6 fw-bold text-white mb-4">
                                    Three disciplines. One integrated system. Permanent results.
                                </h2>
                                <p className="text-white" style={{ lineHeight: 1.8 }}>
                                    What emerged from years of rigorous study and applied practice was the recognition that truly lasting recovery requires three things working in concert — not one at a time, not interchangeably. Each pillar addresses a different layer of dysfunction.
                                </p>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {[
                                { icon: "🧘", title: "Yoga Therapy", desc: "Therapeutic movement to restore lymphatic, endocrine, and nervous system function — not fitness, but physiology." },
                                { icon: "🥗", title: "Clinical Nutrition", desc: "Personalised food and protocol design to correct inflammation, heal the gut, and restore metabolic integrity at the cellular level." },
                                { icon: "🔔", title: "Sound Healing", desc: "Frequency-based interventions that calm the stress response, support recovery, and release what the body holds beneath the surface." },
                            ].map((item, i) => (
                                <div key={i} className="col-md-4">
                                    <div
                                        className="text-center p-6 h-100"
                                        style={{
                                            background: "rgba(255,255,255,0.08)",
                                            borderRadius: "16px",
                                            border: "1px solid rgba(255,255,255,0.12)",
                                        }}
                                    >
                                        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{item.icon}</div>
                                        <h5 className="fw-bold text-white mb-3">{item.title}</h5>
                                        <p className="text-white" style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <p className="text-white" style={{ fontStyle: "italic" }}>
                                What modern wellness has fragmented into separate verticals, ancient science understood as a unified whole.
                            </p>
                        </div>
                    </div>
                </section>

                {/* From Healing Self to Healing Others */}
                <section className="wrapper bg-white py-16">
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6">
                                <p
                                    className="fw-bold mb-2"
                                    style={{ color: "#1F3D2B", letterSpacing: "0.12em", fontSize: "0.75rem", textTransform: "uppercase" }}
                                >
                                    From Personal Practice to Clinical Work
                                </p>
                                <h2 className="display-6 fw-bold mb-5" style={{ lineHeight: 1.25 }}>
                                    When the work proved itself in practice, sharing it became the natural next step.
                                </h2>
                                <p className=" mb-4" style={{ lineHeight: 1.85 }}>
                                    Grounded in formal training in <strong>Nutrition &amp; Dietetics</strong> and professional certification in Yoga and Sound Healing, Priyanka began working one-on-one with people navigating some of the most common — and commonly misunderstood — health challenges:
                                </p>
                                <ul className="list-unstyled mb-5">
                                    {[
                                        "Lifestyle disorders — affecting energy, sleep, and metabolism",
                                        "Hormonal imbalances that conventional tests often miss",
                                        "Digestive dysfunction and gut-related chronic conditions",
                                        "Chronic stress, nervous system dysregulation, and burnout",
                                        "Weight that wouldn't shift — no matter what was tried",
                                    ].map((item, i) => (
                                        <li key={i} className="mb-2 d-flex align-items-center gap-3">
                                            <span style={{ color: "#36ac66ff", fontWeight: "700" }}>✓</span>
                                            <span className="">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div
                                    className="p-5"
                                    style={{
                                        background: "#f0f7f2",
                                        borderLeft: "4px solid #1F3D2B",
                                        borderRadius: "0 12px 12px 0",
                                    }}
                                >
                                    <p className="mb-0 fw-semibold" style={{ color: "#1F3D2B", lineHeight: 1.7 }}>
                                        "The people I worked with were not failing. They were simply asking the wrong question — and receiving answers that didn't go deep enough."
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-3">
                                    {[
                                        { num: "500+", label: "People Recovered", sub: "Across documented, real-world cases" },
                                        { num: "50+", label: "Cities Reached", sub: "From India and beyond" },
                                        { num: "5+", label: "Years in Practice", sub: "Every year built on the last" },
                                        { num: "98%", label: "Positive Outcomes", sub: "When root cause is the focus" },
                                    ].map((s, i) => (
                                        <div key={i} className="col-6">
                                            <div
                                                className="p-5 text-center h-100"
                                                style={{
                                                    background: i % 2 === 0 ? "#f7f4f0" : "#f0f7f2",
                                                    borderRadius: "16px",
                                                }}
                                            >
                                                <div className="fw-bold mb-1" style={{ fontSize: "2.2rem", color: "#1F3D2B" }}>{s.num}</div>
                                                <div className="fw-semibold small mb-1">{s.label}</div>
                                                <div className="" style={{ fontSize: "0.75rem" }}>{s.sub}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Poshak Tattva Really Does */}
                <section className="wrapper py-16" style={{ background: "#f7f4f0" }}>
                    <div className="container">
                        <div className="text-center mb-12">
                            <p
                                className="fw-bold mb-2"
                                style={{ color: "#1F3D2B", letterSpacing: "0.12em", fontSize: "0.75rem", textTransform: "uppercase" }}
                            >
                                How We Work
                            </p>
                            <h2 className="display-5 fw-bold mb-4">
                                This is not a wellness programme.<br />
                                <span style={{ color: "#1F3D2B" }}>It's a structured path back to function.</span>
                            </h2>
                            <p className="lead" style={{ maxWidth: "560px", margin: "0 auto" }}>
                                No extreme diets. No shortcuts. No one-size blueprint. Just a methodical, honest approach designed around how your body actually works.
                            </p>
                        </div>
                        <div className="row g-4">
                            {whatWeDo.map((item, i) => (
                                <div key={i} className="col-md-6 col-lg-3">
                                    <div
                                        className="card border-0 h-100 p-6 text-center"
                                        style={{
                                            borderRadius: "16px",
                                            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                        }}
                                        onMouseOver={e => {
                                            e.currentTarget.style.transform = "translateY(-4px)";
                                            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
                                        }}
                                        onMouseOut={e => {
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
                                        }}
                                    >
                                        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{item.icon}</div>
                                        <h5 className="fw-bold mb-3">{item.title}</h5>
                                        <p className=" small mb-0" style={{ lineHeight: 1.7 }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why People Trust Us */}
                <section className="wrapper bg-white py-16">
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6">
                                <p
                                    className="fw-bold mb-2"
                                    style={{ color: "#fe5b09ff", letterSpacing: "0.12em", fontSize: "1rem", textTransform: "uppercase" }}
                                >
                                    Why People Trust Us
                                </p>
                                <h2 className="display-6 fw-bold mb-5" style={{ lineHeight: 1.25 }}>
                                    Years of study, practice, and honest clinical observation.
                                </h2>
                                <p className="mb-6" style={{ lineHeight: 1.85 }}>
                                    This methodology was not assembled from popular wellness trends or borrowed frameworks. It grew from the convergence of three disciplines — each studied seriously, each applied with rigour over years of real-world practice:
                                </p>
                                <ul className="list-unstyled">
                                    {trustPoints.map((point, i) => (
                                        <li key={i} className="mb-5 d-flex align-items-start gap-3">
                                            <span
                                                className="d-flex align-items-center justify-content-center flex-shrink-0"
                                                style={{
                                                    width: "28px",
                                                    height: "28px",
                                                    background: "#f0f7f2",
                                                    borderRadius: "50%",
                                                    color: "#1F3D2B",
                                                    fontWeight: "700",
                                                    fontSize: "0.75rem",
                                                    marginTop: "4px"
                                                }}
                                            >
                                                ✓
                                            </span>
                                            <div style={{ lineHeight: 1.7 }}>
                                                <div className="fw-bold" style={{ color: "#1F3D2B", fontSize: "1.1rem" }}>{point.title}</div>
                                                <div className="text-muted small">{point.desc}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-5 mb-0" style={{ lineHeight: 1.85, fontStyle: "italic" }}>
                                    Every protocol is built around the individual — their pattern, their history, their root cause. Not a template. Not a trend. A considered response to what's actually happening.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <div
                                    className="p-8 text-center"
                                    style={{
                                        background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "160px",
                                            height: "160px",
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            margin: "0 auto 2rem",
                                            border: "4px solid #1F3D2B",
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                                        }}
                                    >
                                        <img
                                            src="/img/image-founder.jpg"
                                            alt="Priyanka Pugalia"
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        />
                                    </div>
                                    <h4 className="fw-bold text-white mb-2" style={{ fontSize: "1.75rem" }}>Priyanka Pugalia</h4>
                                    <p className="text-white" style={{ fontSize: "0.9rem", fontWeight: "600", marginBottom: "2rem" }}>
                                        Founder · Nutrition & Dietetics · Yoga Therapist · Sound Healer
                                    </p>
                                    <p className="text-white" style={{ lineHeight: 1.8, fontSize: "1rem" }}>
                                        Trained professionally in Nutrition & Dietetics, Yoga, and Sound Healing — Priyanka brings the rare combination of lived experience, clinical training, and ancient wisdom to every client protocol she designs.
                                    </p>
                                    <div
                                        className="mt-5 p-4 text-start"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.05)",
                                            borderRadius: "12px",
                                            borderLeft: "3px solid #A8D5B5",
                                        }}
                                    >
                                        <p className="text-white" style={{ fontStyle: "italic", margin: 0, fontSize: "0.9rem" }}>
                                            "I didn't start this to build a brand. I started it because I knew what it felt like to be stuck — and I found a way out. Now I help others find theirs."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="wrapper py-16" style={{ background: "#f7f4f0" }}>
                    <div className="container">
                        <div className="text-center mb-12">
                            <p
                                className="fw-bold mb-2"
                                style={{ color: "#1F3D2B", letterSpacing: "0.12em", fontSize: "0.75rem", textTransform: "uppercase" }}
                            >
                                Milestones
                            </p>
                            <h2 className="display-5 fw-bold mb-4">5+ Years of Real Results</h2>
                            <p className="lead ">Founded in 2020 — built one recovery at a time.</p>
                        </div>

                        <div style={{ position: "relative" }}>
                            <div
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: 0,
                                    bottom: 0,
                                    width: "2px",
                                    background: "linear-gradient(180deg, #1F3D2B 0%, #A8D5B5 100%)",
                                    transform: "translateX(-50%)",
                                }}
                                className="d-none d-lg-block"
                            />
                            <div className="row g-4">
                                {timeline.map((item, idx) => (
                                    <div key={idx} className={`col-lg-6 ${idx % 2 === 0 ? "pe-lg-8" : "ps-lg-8"}`} style={{ position: "relative" }}>
                                        <div
                                            style={{
                                                position: "absolute",
                                                left: idx % 2 === 0 ? "calc(100% - 10px)" : "-10px",
                                                top: "1.5rem",
                                                width: "20px",
                                                height: "20px",
                                                background: "#1F3D2B",
                                                border: "4px solid #A8D5B5",
                                                borderRadius: "50%",
                                                zIndex: 2,
                                            }}
                                            className="d-none d-lg-block"
                                        />
                                        <div
                                            className="card border-0 p-6 h-100"
                                            style={{
                                                borderRadius: "14px",
                                                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                                borderTop: "3px solid #1F3D2B",
                                            }}
                                        >
                                            <span
                                                className="badge mb-3 px-3 py-2 align-self-start"
                                                style={{ background: "#1F3D2B", color: "white", fontSize: "0.8rem" }}
                                            >
                                                {item.year}
                                            </span>
                                            <h6 className="fw-bold mb-2">{item.title}</h6>
                                            <p className=" small mb-0" style={{ lineHeight: 1.7 }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Strip */}
                <StatsSection />

                {/* CTA — Your Turn */}
                <section
                    className="wrapper py-16"
                    style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}
                >
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-7">
                                <p
                                    className="fw-bold mb-2"
                                    style={{ color: "white", letterSpacing: "0.12em", fontSize: "0.75rem", textTransform: "uppercase" }}
                                >
                                    Your Turn
                                </p>
                                <h2 className="display-5 fw-bold mb-5 custom-white-heading" style={{ lineHeight: 1.25 }}>
                                    Tired of fixing the same problem — again and again?
                                </h2>
                                <style jsx>{`
                                    .custom-white-heading {
                                        color: #ffffff !important;
                                        -webkit-text-fill-color: #ffffff !important;
                                    }
                                `}</style>
                                <ul className="list-unstyled mb-6">
                                    {[
                                        "Fixing the same problem again and again",
                                        "Feeling \"almost okay\" but never fully well",
                                        "Trying methods that don't last",
                                    ].map((item, i) => (
                                        <li key={i} className="mb-3 d-flex align-items-center gap-3">
                                            <span style={{ color: "#A8D5B5", fontWeight: "700" }}>—</span>
                                            <span className="text-white">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="lead text-white mb-2" style={{ fontWeight: "600" }}>
                                    Then you don't need another solution.
                                </p>
                                <p className="text-white" style={{ lineHeight: 1.7 }}>
                                    You need a different approach. Start where real healing begins.
                                </p>
                            </div>
                            <div className="col-lg-5">
                                <div
                                    className="p-7"
                                    style={{
                                        background: "rgba(255,255,255,0.08)",
                                        borderRadius: "20px",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                    }}
                                >
                                    <h4 className="fw-bold text-white mb-6">Start Here</h4>
                                    <div className="d-flex flex-column gap-3">
                                        <Link
                                            href="/contact-appointment"
                                            className="btn fw-semibold w-100 d-flex align-items-center justify-content-center"
                                            style={{ background: "#A8D5B5", color: "#1F3D2B", border: "none", borderRadius: "50px", padding: "1rem", minHeight: "60px", whiteSpace: "normal", lineHeight: 1.4 }}
                                        >
                                            👉 Book Your Consultation
                                        </Link>
                                        <Link
                                            href="/yoga"
                                            className="btn fw-semibold w-100 d-flex align-items-center justify-content-center text-white"
                                            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "50px", padding: "1rem", minHeight: "60px", whiteSpace: "normal", lineHeight: 1.4 }}
                                        >
                                            👉 Experience Your First Session
                                        </Link>
                                        <Link
                                            href="/#programs"
                                            className="btn fw-semibold w-100 d-flex align-items-center justify-content-center text-white"
                                            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "50px", padding: "1rem", minHeight: "60px", whiteSpace: "normal", lineHeight: 1.4 }}
                                        >
                                            👉 Understand Your Body, Not Fight It
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
