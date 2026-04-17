// Script to insert initial articles
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://qcnvvzmxqfxdcfhdviyc.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjbnZ2em14cWZ4ZGNmaGR2aXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3OTAwMjUsImV4cCI6MjA5MTM2NjAyNX0.yib8uTlHLvMNSKJhCvGVI0BXxLrT6H4CtSyVG5nnkqU";

const supabase = createClient(supabaseUrl, supabaseKey);

const articles = [
  {
    title: "How sound healing can reset your mind to optimal performance",
    content: `Sound healing is an ancient practice that uses vibrational frequencies to promote relaxation and mental clarity.

Sound healing involves the use of specific frequencies and vibrations to influence the body's energy and promote healing. It has been used for centuries in various cultures to reduce stress and improve mental well-being.

Research shows that sound therapy can lower cortisol levels, the stress hormone, leading to reduced anxiety and better sleep. This creates a foundation for improved cognitive function and focus.

Techniques like binaural beats and singing bowls can entrain brainwaves to states of deep relaxation or heightened alertness, resetting the mind for optimal performance.

Incorporating sound healing into daily routines can lead to long-term benefits, including enhanced memory, creativity, and overall mental resilience.`,
    image_url: "/img/Sound_Healing.jpg"
  },
  {
    title: "How integration of Yoga, Diet and Sound healing can give an immeasurable boost for any treatment",
    content: `Combining yoga, diet, and sound healing creates a holistic approach to health.

Yoga provides physical strength and flexibility, while diet nourishes the body, and sound healing addresses emotional and energetic imbalances.

This integration targets the root causes of health issues, rather than just symptoms, leading to more effective treatments for chronic conditions.

Studies indicate that this multimodal approach can enhance immune function, reduce inflammation, and improve mental health outcomes.

Patients undergoing treatments like chemotherapy or therapy for mental health disorders report significant improvements when these practices are combined.`,
    image_url: "/img/Diet.jpg"
  },
  {
    title: "Key to a Healthy life through Yoga and sound healing",
    content: `Yoga and sound healing are key practices for maintaining a healthy life.

Yoga promotes physical health through postures and breathing, while sound healing supports emotional balance and stress reduction.

Regular practice of these can prevent chronic diseases by improving circulation, reducing stress, and enhancing immune response.

They foster mindfulness and self-awareness, leading to better lifestyle choices and long-term health.

Embracing yoga and sound healing as daily habits can lead to a more balanced, fulfilling, and healthy life.`,
    image_url: "/img/Yoga.jpg"
  }
];

async function insertArticles() {
  for (const article of articles) {
    const { data, error } = await supabase.from('articles').insert(article);
    if (error) {
      console.error('Error inserting article:', error);
    } else {
      console.log('Inserted article:', data);
    }
  }
}

insertArticles();