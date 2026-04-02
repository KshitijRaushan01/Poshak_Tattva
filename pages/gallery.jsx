import Head from "next/head";
import PageProgress from "components/PageProgress";
import { useState } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/img/Gallery/1.webp",
    "/img/Gallery/2.jpg",
    "/img/Gallery/3.webp",
    "/img/Gallery/91938.jpg",
    "/img/Gallery/4.jpg",
  ];

  return (
    <>
      <PageProgress />
      <Head>
        <title>Gallery - Poshak Tattva</title>
        <meta name="description" content="View our gallery of wellness activities, yoga sessions, and sound healing workshops." />
      </Head>

      <main className="content-wrapper">
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Our Gallery</h1>
              <p className="lead text-muted">A glimpse into the serene world of Poshak Tattva</p>
            </div>
          </div>
        </section>

        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4">
              {images.map((img, idx) => (
                <div key={idx} className="col-md-4">
                  <div
                    className="card h-100 shadow-sm border-0 overflow-hidden"
                    onClick={() => setSelectedImage(img)}
                    style={{ cursor: "pointer", backgroundColor: "#f8f9fa", transition: "transform 0.2s" }}
                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                  >
                    <img
                      src={img}
                      alt={`Gallery Image ${idx + 1}`}
                      className="w-100"
                      style={{
                        height: "250px",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 1050,
            cursor: "pointer",
            transition: "opacity 0.3s ease-in-out"
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="position-absolute top-0 end-0 m-4 btn-close btn-close-white"
            style={{ fontSize: "1.5rem", zIndex: 1051 }}
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          ></button>
          <img
            src={selectedImage}
            alt="Expanded view"
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              objectFit: "contain",
              cursor: "default"
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
