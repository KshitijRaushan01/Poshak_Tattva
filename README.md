# Poshak Tattva - Wellness & Healing Platform

Poshak Tattva is a holistic wellness platform dedicated to balancing the mind, body, and spirit through traditional and modern practices. We offer a curated range of services, a wellness shop, and photo gallery — all designed to foster deep healing and lifelong vitality.

## 🌟 Core Pillars

- **🧘 Yoga & Mindfulness**: From group sessions to private 1:1 Pranayama and Meditation, we provide diverse yoga practices for all levels, including Yoga Nidra.
- **🥗 Diet & Nutrition**: Personalized nutrition plans for digestive health, hormonal balance, lifestyle disorders, and natural weight loss.
- **🎵 Sound Healing**: Transformative vibrational therapy through Singing Bowls, Gong Baths, and Chakra Healing sessions.
- **🛍️ Wellness Shop**: Premium wellness products with a full e-commerce flow (cart, checkout, order confirmation).

## 🚀 Features

- **Responsive Design**: Seamless experience across mobile, tablet, and desktop.
- **Interactive Gallery**: Photo gallery with click-to-expand lightbox viewer.
- **E-Commerce**: Full product browsing, cart management, and Razorpay checkout.
- **Interactive Schedule**: Easy-to-navigate class schedules across 50+ cities.
- **Appointment Booking**: Integrated consultation and appointment booking flow.
- **Resource Center**: Comprehensive FAQ and wellness guides.
- **Legal Pages**: Privacy Policy page included.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, Bootstrap 5, React-Bootstrap
- **Styling**: Sass (SCSS), Animate.css
- **Interactivity**: Lucide Icons, Swiper
- **Payments**: Razorpay
- **Email**: Resend API
- **Utilities**: UUID, Sharp (Image Optimization)

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sakett4871/poshak_tattva_.git
   cd poshak_tattva_
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.local.example .env.local
   # Add your RESEND_API_KEY and RAZORPAY keys
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
pages/
├── index.jsx                  # Home page
├── about-us/                  # About Us
├── classes.jsx                # Online classes schedule
├── shop.jsx                   # Product listing
├── gallery.jsx                # Photo gallery with lightbox
├── faq.jsx                    # FAQ
├── cart.jsx                   # Shopping cart
├── checkout.jsx               # Checkout with Razorpay
├── order-confirmation.jsx     # Order success page
├── privacy-policy.jsx         # Privacy Policy
├── contact-appointment.jsx    # Book appointment
├── contact.jsx                # Contact page
├── product/[id].jsx           # Dynamic product detail
├── yoga/                      # Yoga service pages
├── diet/                      # Diet service pages
└── sound-healing/             # Sound healing pages

src/
├── components/                # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Testimonials.jsx
│   ├── ProductCard.jsx
│   └── StatsSection.jsx
├── data/
│   └── products.js            # Centralized product data
└── assets/                    # Global styles and SCSS
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
