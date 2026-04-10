import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "components/ui/testimonial";

// ─── Real client testimonials ──────────────────────────────────────────────
const testimonials = [
  {
    name: "Singhi",
    rating: 5,
    quote:
      "Perfect! I absolutely love her approach to teaching yoga, it's truly different. Every session leaves me feeling both energised and deeply calm at the same time, which is such a rare balance to experience. What I appreciate most is how she intuitively caters each session to what the body and mind need that day. It never feels mechanical or repetitive; it feels intentional and responsive. Each session feels grounding, nourishing, and purposeful. I'm genuinely enjoying this journey and am so grateful to be learning from her.",
  },
  {
    name: "Bronwyne",
    rating: 5,
    quote:
      "Perfect! Priyanka is a great instructor, especially if you haven't exercised or practised yoga for a long time. She was patient and focused on what I could do without rushing. I have sporting injuries that limit my mobility range. Her understanding of these injuries, yoga and holistic health was great. Very supportive environment and highly recommend!",
  },
  {
    name: "Sreedhar",
    rating: 5,
    quote:
      "Perfect! Well structured session with focus on health and wellbeing of the participants, liked the session!",
  },
  {
    name: "Ahmed",
    rating: 5,
    quote:
      "Perfect! Priyanka is an excellent teacher. The class flies by. Always on time, very good at communicating by message and in class. Totally professional. I feel energised. Both the yoga and pranayama are great. And, if you're older, stiff, or new to yoga, then Priyanka will ease you in gently. 10/10 can highly recommend — better than our local teachers!",
  },
  {
    name: "Tarun",
    rating: 5,
    quote:
      "Perfect! Very helpful, excellent communicator and teacher.",
  },
  {
    name: "Deesha",
    rating: 5,
    quote:
      "Perfect! An amazing session with Priyanka left me energized and rejuvenated. The pointers she gives during the session are apt and help extracting the benefits of ease pose. Highly recommend classes with her!",
  },
  {
    name: "Bharadwaz",
    rating: 5,
    quote:
      "Perfect! I had the opportunity to take Yoga session from Priyanka and must say it was very positive experience. Starting with prayer, then warm ups including strength based and flexible stretches, some asanas, and then breathing exercises and savasana — all was a complete package that is well worth it.",
  },
  {
    name: "Arushi",
    rating: 5,
    quote:
      "Perfect! Priyanka was wonderful, kind and very attentive. She planned the session according to my needs. Meditation under her was a beautiful experience and I felt extremely refreshed after my session. Her voice and demeanor has a very calming effect. She also made me do some unique exercises and provided some great tips. Thank you Priyanka!",
  },
  {
    name: "Phoenix",
    rating: 4,
    quote:
      "Excellent! I recently had the opportunity to experience a yoga session with Priyanka, it was a delightful journey into wellness and mindfulness. Her ability to connect and guide through the screen is commendable. The classes are well-structured, catering to various skill levels. What I particularly appreciated was the focus on holistic well-being — not just physical poses. The sessions included breathing exercises and meditation, which are great for stress relief and mental clarity.",
  },
  {
    name: "Cameron",
    rating: 5,
    quote:
      "Perfect! She is a great teacher. The lessons are well structured and interesting and she has helped me with yoga and breathing.",
  },
  {
    name: "Kishore",
    rating: 5,
    quote:
      "Perfect! Instructor is very knowledgeable, talented and expert in Yoga. I have great faith in Priyanka — she will help me resolve my back ache issues and weight loss problems.",
  },
  {
    name: "Tanya",
    rating: 5,
    quote:
      "Perfect! Priyanka is an excellent teacher with great knowledge of yoga and nutrition. I've been taking yoga classes from her and have felt a great difference. She explains everything with great detail and patience. I look forward to my journey of wellness with her.",
  },
  {
    name: "Huyen",
    rating: 5,
    quote:
      "Perfect! Priyanka is wonderful! She is very patient and attentive. I have learnt so much about yoga and peace with her!",
  },
  {
    name: "Lukas",
    rating: 5,
    quote:
      "Perfect! Having amazing classes with Priyanka. She's knowledgeable and focuses on the individual requirements of the students. Will definitely recommend!",
  },
  {
    name: "Avisha",
    rating: 5,
    quote:
      "Perfect! The class with Priyanka is great! She explains everything well and is a good teacher.",
  },
  {
    name: "Avi",
    rating: 4,
    quote:
      "Excellent! Priyanka is really patient and methodical in teaching kids. She always ensured that my daughter was learning new asanas and ensuring correct posture so there are no injuries. I would recommend her to parents looking for kids yoga.",
  },
  {
    name: "Judit",
    rating: 5,
    quote:
      "Perfect! Priyanka is a champion, professional and amazing teacher! A real expert, patient and attentive. I have been studying with her for several months, she knows how to adapt the lesson to the student in the most precise way. Every lesson with her is a good and relaxing experience. Highly recommend!!",
  },
  {
    name: "Bhoomi Gandhi",
    rating: 5,
    quote:
      "Perfect! Priyanka is very good and she understands individual issues and works on them. She is very understanding and helpful. I really benefit a lot with my health conditions. In few classes I can see the difference. She has personalised approach towards health and mind conditions. I definitely recommend her.",
  },
  {
    name: "Vinod",
    rating: 5,
    quote:
      "Perfect! Priyanka is an amazing instructor. She is super flexible that you can't but feel inspired from the word go. She is extremely patient, takes extra time to ensure you get every single posture right and works with you when things get difficult. I am super glad to have found her and will recommend her to anyone serious about making yoga part of your lifestyle.",
  },
  {
    name: "Sakshi",
    rating: 5,
    quote:
      "Perfect! She is an amazing communicator and listener as well. In every class she pays attention to the posture of the Asanas and makes you do the things which you can't by just pushing you every time. Her classes are helping me in increasing my efficiency throughout the day. A big thanks to her.",
  },
  {
    name: "Anshi",
    rating: 5,
    quote:
      "Perfect! Priyanka is very composed and patient. She tailors the class to suit the individual and is very encouraging.",
  },
  {
    name: "Ankush",
    rating: 5,
    quote:
      "Perfect! She is very sympathetic and professional. I booked these sessions for my mother and she was happy with how Priyanka took those sessions with extreme patience.",
  },
  {
    name: "Gauri",
    rating: 5,
    quote:
      "Priyanka is one of the best teachers I have ever met. She has changed my view about diet and life. I never even feel like I am on a diet. She gives me everything according to my likes and dislikes. Her diet plans are easy to follow and you will never feel hungry.",
  },
  {
    name: "Rohit",
    rating: 5,
    quote:
      "She is an amazing yoga teacher. I feel more calm and relaxed. She makes yoga practices so seamless and effortless.",
  },
];

// Split testimonials into 3 columns
const col1 = testimonials.filter((_, i) => i % 3 === 0);
const col2 = testimonials.filter((_, i) => i % 3 === 1);
const col3 = testimonials.filter((_, i) => i % 3 === 2);

// ─── Scrolling column ──────────────────────────────────────────────────────
function TestimonialsColumn({ items, duration = 30 }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
      >
        {/* Duplicate for seamless loop */}
        {[...items, ...items].map((t, i) => (
          <TestimonialCard
            key={`${t.name}-${i}`}
            name={t.name}
            role={t.role}
            quote={t.quote}
            rating={t.rating}
          />
        ))}
      </motion.div>
    </div>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────
const stats = [
  { icon: "🧘‍♀️", number: "5000+", label: "Students Trained" },
  { icon: "⭐", number: "4.9/5", label: "Average Rating" },
  { icon: "🏆", number: "5+", label: "Years Experience" },
  { icon: "🌿", number: "50+", label: "Wellness Programs" },
];

// ─── Main Export ───────────────────────────────────────────────────────────
export default function Testimonials() {
  return (
    <>
      <style>{`
        .pt-testimonials-section {
          background: #faf9f7;
          padding: 5rem 0;
          overflow: hidden;
        }
        .pt-cols-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          max-height: 720px;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .pt-cols-wrapper {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 992px) {
          .pt-cols-wrapper {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .pt-badge {
          display: inline-block;
          padding: 0.3rem 1rem;
          border: 1px solid #c2a46f55;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #8B6347;
          background: #c2a46f18;
          margin-bottom: 1rem;
        }
      `}</style>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section className="pt-testimonials-section" aria-labelledby="testimonials-heading">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <h2 id="testimonials-heading" className="display-5 fw-bold mb-3">
              What Our Students Say
            </h2>
            <p className="lead text-muted">
              Real transformations from real students across the globe
            </p>
          </div>

          {/* Scrolling columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pt-cols-wrapper">
              <TestimonialsColumn items={col1} duration={38} />
              <TestimonialsColumn items={col2} duration={48} />
              <TestimonialsColumn items={col3} duration={42} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────── */}
      <section
        className="wrapper py-12"
        style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}
      >
        <div className="container">
          <div className="row g-4 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="text-white">
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{stat.icon}</div>
                  <h3 className="h2 fw-bold mb-2 text-white">{stat.number}</h3>
                  <p className="mb-0 text-white text-opacity-75">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
