import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "components/PageHeader";
import StatsSection from "components/StatsSection";

export default function AboutUs() {
    const timeline = [
        {
            year: "2020",
            title: "The Beginning",
            desc: "After years of personal struggle with unresolved health issues, Priyanka Pugalia founded Poshak Tattva — built not from theory, but from lived transformation.",
        },
        {
            year: "2021",
            title: "First 100 Lives Changed",
            desc: "Word spread through results. The first cohort of clients reversed lifestyle disorders, hormonal imbalances, and digestive issues through the integrated protocol.",
        },
        {
            year: "2022",
            title: "Going Digital",
            desc: "Expanded online to reach individuals across India who couldn't access in-person sessions — making root-cause healing borderless.",
        },
        {
            year: "2023",
            title: "500+ Recoveries",
            desc: "Crossed 500 individuals supported across 50+ cities. Sound healing workshops and retreats launched as standalone programs.",
        },
        {
            year: "2024",
            title: "Clinical Framework Formalised",
            desc: "Structured the three-pillar methodology — Yoga, Clinical Nutrition, Sound Healing — into formal personalised healing protocols.",
        },
        {
            year: "2025",
            title: "Scaling the Mission",
            desc: "Bringing root-cause healing to more cities. More sessions, more retreats, more people finally feeling well — not just managing.",
        },
    ];

    const whatWeDo = [
        {
            icon: "🔍",
            title: "Identify the Root Cause",
            desc: "We don't guess. We assess — your lifestyle, nutrition, stress patterns, and energetic state — to find exactly what is driving your condition.",
        },
        {
            icon: "🥗",
            title: "Rebuild Through Clinical Nutrition",
            desc: "Personalised diet protocols engineered to nourish at the cellular level, reduce inflammation, and restore metabolic function naturally.",
        },
        {
            icon: "🧘",
            title: "Restore Through Yoga",
            desc: "Specific asana and pranayama sequences prescribed for your condition — stimulating the lymphatic system, vagus nerve, and endocrine regulation.",
        },
        {
            icon: "🔔",
            title: "Release Through Sound Healing",
            desc: "Precision vibrational frequencies that dissolve what your body holds subconsciously — rewiring the nervous system, not just relaxing it.",
        },
    ];

    const trustPoints = [
        "This knowledge is not borrowed — it is lived, tested, and refined through real transformation",
        "Personalised 1:1 consultations — no generic plans",
        "Yoga & meditation sessions designed for your condition",
        "Sound healing workshops, retreats & individual sessions",
        "Clinically structured healing protocols, tracked over time",
        "No extreme diets. No shortcuts. No dependency.",
    ];

    return (
        <>
            <Head>
                <title>About Poshak Tattva — Real Healing. Root Cause. Real Results.</title>
                <meta
                    name="description"
                    content="Poshak Tattva was built from personal suffering — not theory. Discover the story of founder Priyanka Pugalia and how an integrated approach of Yoga, Clinical Diet, and Sound Healing is reversing chronic conditions for 500+ people across India."
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
                                    We don't believe in treating symptoms.<br />
                                    <span style={{ color: "#1F3D2B" }}>We believe in understanding why.</span>
                                </h1>
                                <p className="lead mb-4" style={{ lineHeight: 1.8 }}>
                                    Because real healing doesn't come from quick fixes.
                                </p>
                                <p
                                    className="fw-bold"
                                    style={{ fontSize: "1.3rem", color: "#1F3D2B" }}
                                >
                                    It comes from alignment.
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
                                    Built out of suffering.<br />Not out of theory.
                                </h2>
                                <p className=" mb-4" style={{ lineHeight: 1.85 }}>
                                    Our founder, <strong>Priyanka Pugalia</strong>, wasn't always in control of her health. She experienced what most people silently go through for years:
                                </p>
                                <ul className="list-unstyled mb-5">
                                    {[
                                        "Persistent health issues that never fully resolved",
                                        "Treatments that managed symptoms but never addressed the root",
                                        "A constant feeling that something was 'off' — despite doing everything right",
                                    ].map((item, i) => (
                                        <li key={i} className="mb-3 d-flex align-items-start gap-3">
                                            <span style={{ color: "#C97B3A", fontWeight: "700", marginTop: "3px" }}>—</span>
                                            <span className="">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className=" mb-4" style={{ lineHeight: 1.85 }}>
                                    That phase wasn't short. It was long, frustrating, and deeply personal. And that's exactly where the shift began.
                                </p>
                                <p className="" style={{ lineHeight: 1.85 }}>
                                    Instead of depending on surface-level solutions, she went deeper — into ancient yogic practices, clinical nutrition, and sound healing. <strong>Not as trends. As systems.</strong>
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
                                    The Breakthrough
                                </p>
                                <h2 className="display-6 fw-bold text-white mb-4">
                                    Through disciplined practice and deep study — something changed.
                                </h2>
                                <p className="text-white" style={{ lineHeight: 1.8 }}>
                                    The body started responding. Energy improved. Mental clarity returned. The dependency on external fixes reduced. This wasn't magic. It was alignment of three fundamentals.
                                </p>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {[
                                { icon: "🧘", title: "Yoga", desc: "To restore the body — lymphatic, endocrine, and neurological function" },
                                { icon: "🥗", title: "Clinical Diet", desc: "To nourish at a cellular level — correcting inflammation and gut dysbiosis" },
                                { icon: "🔔", title: "Sound Healing", desc: "To regulate the nervous system and release what the body holds unconsciously" },
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
                                What modern wellness often separates — ancient science had already integrated.
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
                                    From Healing Self to Healing Others
                                </p>
                                <h2 className="display-6 fw-bold mb-5" style={{ lineHeight: 1.25 }}>
                                    Once the transformation became real — the direction became obvious.
                                </h2>
                                <p className=" mb-4" style={{ lineHeight: 1.85 }}>
                                    With a strong foundation in <strong>Nutrition & Dietetics</strong>, along with professional training in Yoga and Sound Healing, Priyanka started working with individuals facing:
                                </p>
                                <ul className="list-unstyled mb-5">
                                    {[
                                        "Lifestyle disorders",
                                        "Hormonal imbalances",
                                        "Digestive issues",
                                        "Chronic stress and burnout",
                                        "Weight struggles that never resolved sustainably",
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
                                        "People weren't sick because they lacked effort. They were stuck because they were solving the wrong problem."
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-3">
                                    {[
                                        { num: "500+", label: "People Recovered", sub: "Real, documented results" },
                                        { num: "50+", label: "Cities Reached", sub: "Across India & beyond" },
                                        { num: "5+", label: "Years of Practice", sub: "Founded in 2020" },
                                        { num: "98%", label: "Positive Outcomes", sub: "Root-cause vs symptom management" },
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
                                What We Actually Do
                            </p>
                            <h2 className="display-5 fw-bold mb-4">
                                Poshak Tattva is not a service.<br />
                                <span style={{ color: "#1F3D2B" }}>It's a correction.</span>
                            </h2>
                            <p className="lead " style={{ maxWidth: "560px", margin: "0 auto" }}>
                                No extreme diets. No shortcuts. No dependency. Just structured, natural healing.
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
                                    Because this is not borrowed knowledge.
                                </h2>
                                <p className=" mb-6" style={{ lineHeight: 1.85 }}>
                                    It is lived. Tested. Refined through real transformation.
                                    And delivered with the full credibility of someone who has walked this path personally.
                                </p>
                                <ul className="list-unstyled">
                                    {trustPoints.map((point, i) => (
                                        <li key={i} className="mb-4 d-flex align-items-start gap-3">
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
                                                }}
                                            >
                                                ✓
                                            </span>
                                            <span className="" style={{ lineHeight: 1.7 }}>{point}</span>
                                        </li>
                                    ))}
                                </ul>
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
                                            src="/img/Pri-Pu.jpg"
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
                                        className="mt-5 p-4"
                                        style={{
                                            background: "rgba(131, 163, 67, 0.08)",
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
                                Our Journey
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
