import Head from "next/head";
import PageProgress from "components/PageProgress";

export const metadata = {
  title: "Chakra Healing with Sound Therapy | Poshak Tattva",
  description: "Balance your 7 energy centers through sound healing. Using specific frequencies and vibrations to clear blockages and restore energetic harmony in your chakra system."
}

export default function ChakraHealingPage() {
 const chakras = [
 { title: "Root · Muladhara", subtitle: "396 Hz — Grounding", desc: "Issues: Fear, insecurity, physical instability\nLocation: Base of the spine\nHealing: Grounding, stability", img: "/img/services/sound/Chakra-Healing/Root-Muladhara-Chakra.png", color: "#E74C3C" },
 { title: "Sacral · Svadhisthana", subtitle: "417 Hz — Creativity", desc: "Issues: Creative blocks, emotional numbness, low libido\nLocation: Below the navel\nHealing: Creativity, flow, passion", img: "/img/services/sound/Chakra-Healing/Svadhishthana-Navel-Chakra.png", color: "#E67E22" },
 { title: "Solar Plexus · Manipura", subtitle: "528 Hz — Transformation", desc: "Issues: Low self-esteem, lack of purpose, digestive issues\nLocation: Upper abdomen\nHealing: Confidence, willpower, transformation", img: "/img/services/sound/Chakra-Healing/Solar-Plexus-Manipura-Chakra.png", color: "#F1C40F" },
 { title: "Heart · Anahata", subtitle: "639 Hz — Connection", desc: "Issues: Resentment, lack of empathy, social isolation\nLocation: Chest centre\nHealing: Love, connection, compassion", img: "/img/services/sound/Chakra-Healing/Anahata-Heart-Chakra.png", color: "#27AE60" },
 { title: "Throat · Vishuddha", subtitle: "741 Hz — Expression", desc: "Issues: Communication blocks, social anxiety, fear of speaking\nLocation: Throat\nHealing: Truth, self-expression, clarity", img: "/img/services/sound/Chakra-Healing/Throat-Vishuddha-Chakra.png", color: "#3498DB" },
 { title: "Third Eye · Ajna", subtitle: "852 Hz — Intuition", desc: "Issues: Mental fog, lack of intuition, confusion\nLocation: Between the brows\nHealing: Intuition, mental clarity, awareness", img: "/img/services/sound/Chakra-Healing/Ajna-Third-Eye-Chakra.png", color: "#8E44AD" },
 { title: "Crown · Sahasrara", subtitle: "963 Hz — Awakening", desc: "Issues: Spiritual disconnection, alienation, cynicism\nLocation: Top of the head\nHealing: Higher awareness, universal connection, peace", img: "/img/services/sound/Chakra-Healing/Crown-Sahasrara-Chakra.png", color: "#9B59B6" },
 ];

 return (
 <>
 <PageProgress />
 <Head>
 <title>Chakra Healing with Sound Therapy | Balance 7 Energy Centres | Poshak Tattva</title>
 <meta name="description" content="Balance all 7 chakras through targeted Solfeggio frequencies, singing bowls & tuning forks. Root to Crown healing sessions in Delhi & online. Book your chakra alignment." />
 <meta property="og:title" content="Chakra Healing — Sound Therapy — Poshak Tattva" />
 <meta property="og:description" content="Restore balance to all 7 energy centres through Solfeggio frequencies and vibrational therapy." />
 <meta property="og:type" content="website" />
 <meta property="og:url" content="https://poshaktattva.com/sound-healing/chakra-healing" />
 <meta property="og:image" content="/img/services/sound/Chakra-Healing/CHakra-Main.jpg" />
 <meta name="twitter:card" content="summary_large_image" />
 <link rel="canonical" href="https://poshaktattva.com/sound-healing/chakra-healing" />
 </Head>

 <main className="content-wrapper">
 <section className="wrapper py-10 hero-header" style={{ background: "linear-gradient(135deg, #1A1040 0%, #8f6d3dff 100%)" }}>
 <div className="container text-center">
 <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>ENERGY ALIGNMENT</span>
 <h1 className="display-4 fw-bold mb-4" style={{ color: "#fff" }}>Chakra Healing</h1>
 <p className="lead mx-auto" style={{ maxWidth: 640, color: "rgba(255,255,255,0.85)" }}>
 Your body has seven primary energy centres. When they're in balance, energy flows freely. When they're blocked, it shows up as physical pain, emotional turbulence, or mental fog. Sound is the most direct way to restore the flow.
 </p>
 </div>
 </section>

 <section className="wrapper py-10">
 <div className="container">
 <div className="row g-5 align-items-center">
 <div className="col-lg-6">
 <h2 className="h3 fw-bold mb-4">How Sound Frequencies Heal Energy Centres</h2>
 <p className=" mb-3">
 Every cell in your body vibrates at a specific frequency. Your chakras — the seven energy vortexes along your spine — each resonate at their own frequency too. When a chakra is blocked, its frequency becomes distorted. Sound healing works by introducing the <em>correct</em> frequency back into that energy centre, literally re-tuning it like a musical instrument.
 </p>
 <p className=" mb-3">
 We use <strong>Solfeggio frequencies</strong> (ancient healing tones from 396 Hz to 963 Hz), each mapped to a specific chakra. Combined with singing bowls, tuning forks, and vocal toning, these frequencies penetrate beyond the conscious mind and work directly on the energetic body.
 </p>
 <p className=" mb-4">
 A full chakra healing session works through all seven centres sequentially — from Root to Crown — spending more time on centres that are most out of balance. Sessions run 60–75 minutes.
 </p>
 <a href="/contact-appointment" className="btn btn-primary">Balance Your Chakras</a>
 </div>
 <div className="col-lg-6">
 <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
 <img src="/img/services/sound/Chakra-Healing/CHakra-Main.jpg" alt="Chakra healing session with singing bowls" style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
 </div>
 </div>
 </div>
 </div>
 </section>

 <section className="wrapper py-10 bg-light">
 <div className="container">
 <div className="text-center mb-10">
 <span className="d-block text-uppercase fw-semibold mb-2" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>THE SEVEN CENTRES</span>
 <h2 className="display-6 fw-bold">Chakras We Work With</h2>
 </div>
 <div className="row g-4">
 {chakras.map((c, i) => (
 <div key={i} className="col-md-6 col-lg-3">
 <div className="card border-0 shadow-sm h-100 overflow-hidden" style={{ borderRadius: 16 }}>
 <div style={{ height: 180, overflow: "hidden", position: "relative", background: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
 <img src={c.img} alt={c.title} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
 <div style={{ position: "absolute", top: 12, left: 12, width: 12, height: 12, borderRadius: "50%", backgroundColor: c.color }} />
 </div>
 <div className="p-4">
 <h5 className="fw-bold mb-1">{c.title}</h5>
 <small className=" d-block mb-2">{c.subtitle}</small>
 <p className=" mb-0" style={{ whiteSpace: "pre-line", fontSize: "0.9rem" }}>{c.desc}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="wrapper py-10" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}>
 <div className="container text-center">
 <h2 className="h3 fw-bold mb-4 text-white">Restore Balance to Your Energy System</h2>
 <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>Book Chakra Healing</a>
 </div>
 </section>
 </main>
 </>
 );
}
