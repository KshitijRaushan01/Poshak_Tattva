import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import Layout from "components/Layout";
import ThemeProvider from "theme/ThemeProvider";
import { CartProvider } from "context/CartContext";

import "animate.css";
import "styles/style.css";
import "styles/responsive.css";
import "plyr-react/plyr.css";
import "plugins/scrollcue/scrollCue.css";
import "assets/scss/style.scss";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") import("bootstrap");
  }, []);

  useEffect(() => {
    (async () => {
      const scrollCue = (await import("plugins/scrollcue")).default;
      scrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8,
      });
      scrollCue.update();
    })();
  }, [pathname]);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 300); // debounce initial load
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Poshak Tattva – Yoga, Diet & Sound Healing for Holistic Wellness
        </title>
        <meta
          name="description"
          content="Poshak Tattva offers holistic wellness through Yoga, Diet, and Sound Healing. Rebalance your body and mind with natural healing practices in India."
        />
        <link rel="canonical" href="https://poshaktattva.com/" />

        {/* Open Graph Meta */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Poshak Tattva – Yoga, Diet & Sound Healing for Holistic Wellness"
        />
        <meta
          property="og:description"
          content="Discover Poshak Tattva — your holistic destination for Yoga, Diet, and Sound Healing. Experience balance, energy, and mindful living."
        />
        <meta property="og:url" content="https://poshaktattva.com/" />
        <meta
          property="og:image"
          content="https://poshaktattva.com/img/poshak.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://poshaktattva.com/img/poshak.png"
        />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Poshak Tattva – Holistic Wellness"
        />
        <meta
          name="twitter:description"
          content="Rejuvenate your mind, body, and soul with Yoga, Diet, and Sound Healing."
        />
        <meta
          name="twitter:image"
          content="https://poshaktattva.com/img/poshak.png"
        />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "name": "Poshak Tattva",
              "url": "https://poshaktattva.com/",
              "logo": "https://poshaktattva.com/img/poshak.png",
              "image": "https://poshaktattva.com/img/poshak.png",
              "description": "Holistic wellness center offering Yoga, Diet therapy, and Sound Healing.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.instagram.com/poshak_tattva/",
                "https://www.facebook.com/poshaktattva"
              ]
            }),
          }}
        />
      </Head>

      <CartProvider>
        <ThemeProvider>
          <Layout>
            <ToastContainer position="bottom-right" autoClose={5000} />
            {loading ? (
              <div className="page-loader" />
            ) : (
              <Component {...pageProps} />
            )}
          </Layout>
        </ThemeProvider>
      </CartProvider>
    </Fragment>
  );
}

export default MyApp;
