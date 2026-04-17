import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PageProgress from "components/PageProgress";

const soundHealingServices = [
    {
        id: 1,
        title: "1:1 Private Sound Healing Sessions",
        url: "/sound-healing/1-1-session",
        img: "/img/Gallery/5.jpg",
        badge: "Fully Personalised",
        description:
            "A fully personalised therapeutic session where we assess your energetic and neurological state before designing a custom sound therapy protocol. Using singing bowls, tuning forks, and gongs calibrated to specific Hz frequencies, we shift your autonomic nervous system from chronic sympathetic activation into deep parasympathetic repair — rewiring the stress response at a physiological level.",
        benefits: [
            "Custom frequency protocol per session",
            "Autonomic nervous system assessment",
            "Singing bowls, tuning forks & gong",
            "Emotional release & trauma processing",
            "Measurable HRV & cortisol improvement",
            "Remote & in-person options available",
        ],
        bestFor: "Chronic Stress, Anxiety, Trauma, Insomnia, Autoimmune Flares",
        accent: "#5C3D8F",
        bg: "#f3f0fa",
    },
    {
        id: 2,
        title: "Sound Healing Workshops",
        url: "/sound-healing/workshop",
        img: "/img/services/sound/sound- healing workshop.jpg",
        badge: "Group Immersion",
        description:
            "Immersive group sound healing workshops where you experience the collective amplification of healing frequencies. These structured sessions combine psycho-education on sound therapy, breathwork priming, and a deep sound bath — designed to reset the nervous system of a group simultaneously and provide lasting post-session physiological calm.",
        benefits: [
            "Group nervous system co-regulation",
            "Psycho-education on frequency healing",
            "Breathwork & intention-setting practice",
            "Deep group sound bath experience",
            "Integration & sharing circle",
            "Take-home sound healing practices",
        ],
        bestFor: "Stress Management, Team Wellness, Community Recovery, Burnout",
        accent: "#3D7A9C",
        bg: "#eef5fa",
    },
    {
        id: 3,
        title: "Gong Bath Therapy",
        url: "/sound-healing/gong-bath",
        img: "/img/home/methodology-sound.png",
        badge: "Deep Cellular Healing",
        description:
            "The gong produces a complex spectrum of harmonic frequencies that penetrate the body at a cellular level. In a therapeutic gong bath, these vibrations entrain the brain into theta and delta states — the same brainwave frequencies associated with deep sleep, cellular repair, and trauma processing. This is one of the most powerful sound healing modalities for systemic recovery.",
        benefits: [
            "Theta & delta brainwave entrainment",
            "Full-body vibration & cellular resonance",
            "Deep parasympathetic nervous system activation",
            "Lymphatic & circulatory stimulation",
            "Trauma release & emotional clearing",
            "Post-session deep sleep enhancement",
        ],
        bestFor: "Chronic Pain, Inflammatory Conditions, Emotional Trauma, Sleep Disorders",
        accent: "#8C5A2A",
        bg: "#faf4ee",
    },
    {
        id: 4,
        title: "Chakra Healing & Balancing",
        url: "/sound-healing/chakra-healing",
        img: "/img/services/sound/Chakra-Healing/CHakra-Main.jpg",
        badge: "Energy System Regulation",
        description:
            "Each of the body's seven chakras corresponds to specific nerve plexuses, endocrine glands, and physiological functions. Chakra sound healing uses precise frequencies (Solfeggio tones, binaural beats, singing bowls tuned to specific Hz) to identify and correct energetic blockages that manifest as physical, hormonal, or emotional dysfunction — a bridge between ancient energy medicine and modern neuroscience.",
        benefits: [
            "Seven-chakra energy assessment",
            "Solfeggio frequency protocols",
            "Binaural beat & singing bowl therapy",
            "Endocrine & hormonal system correlation",
            "Aura cleansing & energy protection",
            "Guided chakra visualisation",
        ],
        bestFor: "Hormonal Imbalance, Emotional Blockages, Spiritual Disconnection, Fatigue",
        accent: "#7B3F8C",
        bg: "#f5f0fa",
    },
];

export default function SoundHealingMainPage() {
    return (
        <>
            <PageProgress />
            <Head>
                <title>Sound Healing & Nervous System Reset Programs - Poshak Tattva</title>
                <meta
                    name="description"
                    content="Explore Poshak Tattva's clinical sound healing programs — private 1:1 sessions, group workshops, gong bath therapy, and chakra healing. Precision vibrational frequencies for autonomic nervous system recovery."
                />
            </Head>

            <main className="content-wrapper">
                {/* Hero Header */}
                <section
                    className="wrapper py-0 hero-header"
                    style={{
                        background: "linear-gradient(135deg, #1A1040 0%, #8f6d3dff 100%)",
                        minHeight: "420px",
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage:
                                "radial-gradient(circle at 20% 50%, rgba(232, 50, 50, 0.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(31, 135, 195, 0.3) 0%, transparent 50%)",
                        }}
                    />
                    <div className="container py-16" style={{ position: "relative", zIndex: 1 }}>
                        <div className="row align-items-center g-5">
                            <div className="col-lg-7">
                                <span
                                    className="badge mb-4 px-3 py-2"
                                    style={{ background: "rgba(255,255,255,0.15)", color: "white", fontSize: "0.8rem", letterSpacing: "0.1em" }}
                                >
                                    VIBRATIONAL MEDICINE
                                </span>
                                <h1 className="display-3 fw-bold text-white mb-4" style={{ lineHeight: 1.15 }}>
                                    Sound Healing &<br />
                                    <span style={{ color: "white !important" }}>Nervous System Reset</span>
                                </h1>
                                <p className="lead mb-6" style={{ color: "#ffffff", maxWidth: "560px" }}>
                                    Precision vibrational frequencies that shift the autonomic nervous system from chronic stress states into deep physiological repair — rewiring the stress response, not just relaxing it.
                                </p>
                                <div className="d-flex flex-wrap gap-3">
                                    <Link
                                        href="/contact-appointment"
                                        className="btn btn-lg fw-semibold px-5"
                                        style={{ background: "#D4A8F0", color: "#1A1040", border: "none", borderRadius: "50px" }}
                                    >
                                        Book Free Consultation →
                                    </Link>
                                    <Link
                                        href="#programs"
                                        className="btn btn-lg fw-semibold px-5"
                                        style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "50px" }}
                                    >
                                        Explore Programs
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5 d-none d-lg-block">
                                <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.4)" }}>
                                    <Image
                                        src="/img/Sound_Healing.jpg"
                                        alt="Sound Healing Therapy at Poshak Tattva"
                                        width={500}
                                        height={340}
                                        style={{ objectFit: "cover", width: "100%", height: "340px", display: "block" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Strip */}
                <section style={{ background: "#f8f9fa", borderBottom: "1px solid #e9ecef" }}>
                    <div className="container">
                        <div className="row text-center py-5 g-4">
                            {[
                                { num: "4+", label: "Sound-Healing Programs" },
                                { num: "15k+", label: "Students" },
                                { num: "5+", label: "Years of Experience" },
                                { num: "432Hz", label: "Healing Frequency Used" },
                            ].map((s, i) => (
                                <div key={i} className="col-6 col-md-3">
                                    <div className="fw-bold mb-1" style={{ fontSize: "2rem", color: "#5C3D8F" }}>{s.num}</div>
                                    <div className=" small">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How Sound Heals */}
                <section className="wrapper py-14 bg-white">
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6">
                                <h2 className="display-6 fw-bold mb-4">How Sound Heals the Body</h2>
                                <p className=" mb-4" style={{ lineHeight: "1.8" }}>
                                    Sound healing is not alternative medicine — it is applied physics. When specific frequencies interact with biological tissue, they induce sympathetic resonance, entraining the brain, nervous system, and organ tissue to shift from pathological stress patterns into coherent, healing states.
                                </p>
                                <p className=" mb-4" style={{ lineHeight: "1.8" }}>
                                    Clinical research demonstrates that therapeutic sound reduces cortisol and inflammatory cytokines, improves heart rate variability (HRV), promotes neuroplasticity, and accelerates cellular repair — measurable outcomes that validate its use as a primary clinical intervention.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-3">
                                    {[
                                        { icon: "🧠", title: "Brainwave Entrainment", desc: "Frequencies guide the brain into theta/delta states for deep repair" },
                                        { icon: "💓", title: "HRV Improvement", desc: "Measurable recovery in heart rate variability after sessions" },
                                        { icon: "🔬", title: "Cortisol Reduction", desc: "Clinical reduction in stress hormone levels post-session" },
                                        { icon: "⚡", title: "Cellular Resonance", desc: "Vibrations penetrate tissue at the cellular and molecular level" },
                                    ].map((item, i) => (
                                        <div key={i} className="col-sm-6">
                                            <div className="card border-0 p-4 h-100" style={{ background: "#f8f5ff", borderRadius: "12px" }}>
                                                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                                                <h6 className="fw-bold mb-2">{item.title}</h6>
                                                <p className=" mb-0">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Programs Section */}
                <section id="programs" className="wrapper py-16" style={{ background: "#fafafa" }}>
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="display-5 fw-bold mb-3">Sound Healing Programs</h2>
                            <p className="lead " style={{ maxWidth: "600px", margin: "0 auto" }}>
                                From deeply personal 1:1 sessions to powerful group immersions — each modality targets distinct aspects of nervous system recovery.
                            </p>
                        </div>

                        <div className="d-flex flex-column gap-5">
                            {soundHealingServices.map((service, idx) => (
                                <div
                                    key={service.id}
                                    className="card border-0 shadow-sm overflow-hidden bg-white"
                                    style={{ borderRadius: "16px" }}
                                >
                                    <div className={`row g-0 ${idx % 2 === 1 ? "flex-row-reverse" : ""}`}>
                                        {/* Image Panel */}
                                        <div className="col-md-5 position-relative" style={{ minHeight: "350px", background: "#fdfaff" }}>
                                            <Image src={service.img} alt={service.title} fill style={{ objectFit: 'contain', padding: '24px' }} />
                                        </div>

                                        {/* Content */}
                                        <div className="col-md-7 p-6 p-md-8">
                                            <div className="d-flex align-items-center mb-3 flex-wrap gap-2">
                                                <h3 className="fw-bold mb-0" style={{ color: "#1a1a1a" }}>{service.title}</h3>
                                                <span
                                                    className="badge px-3 py-2 ms-xl-2 ms-0"
                                                    style={{ background: service.accent, color: "white", fontSize: "0.7rem", letterSpacing: "0.05em" }}
                                                >
                                                    {service.badge}
                                                </span>
                                            </div>
                                            <p className=" fw-semibold mb-4" style={{ fontSize: "0.9rem" }}>
                                                Best For: <span style={{ color: service.accent }}>{service.bestFor}</span>
                                            </p>

                                            <p className=" mb-5" style={{ lineHeight: "1.75" }}>{service.description}</p>

                                            <h6 className="fw-bold mb-3 text-uppercase" style={{ fontSize: "0.95rem", letterSpacing: "0.05em", color: service.accent }}>
                                                What's Included
                                            </h6>
                                            <div className="row g-2 mb-5">
                                                {service.benefits.map((b, i) => (
                                                    <div key={i} className="col-sm-6">
                                                        <div className="d-flex align-items-start gap-2">
                                                            <span style={{ color: service.accent, fontWeight: "bold", marginTop: "2px" }}>✓</span>
                                                            <span className="" style={{ fontSize: "0.95rem" }}>{b}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <Link
                                                href={service.url}
                                                className="btn fw-semibold px-5"
                                                style={{ background: service.accent, color: "white", border: "none", borderRadius: "50px" }}
                                            >
                                                Learn More →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section
                    className="wrapper py-16"
                    style={{ background: "linear-gradient(135deg, #1A1040 0%, #8f6d3dff 100%)" }}
                >
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold mb-4 custom-white-heading">
                            Experience Vibrational Healing
                        </h2>
                        <style jsx>{`
     .custom-white-heading {
         color: #ffffff !important;
         -webkit-text-fill-color: #ffffff !important;
     }
 `}</style>
                        <p className="lead text-white mb-6" style={{ maxWidth: "560px", margin: "0 auto 2rem" }}>
                            Begin with a free consultation to determine which sound healing modality best addresses your specific physiological and energetic needs.
                        </p>
                        <Link
                            href="/contact-appointment"
                            className="btn btn-lg fw-semibold px-6"
                            style={{ background: "#D4A8F0", color: "#1A1040", border: "none", borderRadius: "50px" }}
                        >
                            Book Free Consultation →
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
