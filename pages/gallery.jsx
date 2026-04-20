import Head from "next/head";
import PageProgress from "components/PageProgress";
import GalleryHeader from "components/ui/GalleryHeader";
import MasonryGallery from "components/ui/MasonryGallery";

export const metadata = {
  title: "Gallery - Poshak Tattva",
  description: "Explore our gallery of yoga sessions, sound healing workshops, wellness retreats, and transformation stories. See the Poshak Tattva community in action."
}

export default function GalleryPage() {
  const images = [
    "/img/Gallery/1.webp",
    "/img/Gallery/2.jpg",
    "/img/Gallery/3.webp",
    "/img/Gallery/91938.jpg",
    "/img/Gallery/4.jpg",
    "/img/Gallery/ALS_0472.jpg",
    "/img/Gallery/ALS_0494.jpg",
    "/img/Gallery/ALS_0518.jpg",
    "/img/Gallery/DSC06324.jpg",
    "/img/Gallery/DSC06332.jpg",
    "/img/Gallery/DSC_7520.jpeg",
    "/img/Gallery/DSC_7541.jpeg",
    "/img/Gallery/DSC_7550.jpeg",
    "/img/Gallery/9415.jpeg",
    "/img/Gallery/9934 (1).jpg",
    "/img/Gallery/10043.jpeg",
    "/img/Gallery/21609.jpeg",
    "/img/Gallery/PXL_20260217_105520710.jpeg",
    "/img/Gallery/PXL_20260217_105532634.jpeg",
    "/img/Gallery/PXL_20260217_105543749.jpeg",
    "/img/Gallery/PXL_20260328_082110814.jpeg",
    "/img/Gallery/PXL_20260328_082158687.jpeg",
    "/img/Gallery/PXL_20260328_082209856.jpeg"
  ];

  return (
    <>
      <PageProgress />
      <Head>
        <title>Gallery - Poshak Tattva</title>
        <meta
          name="description"
          content="View our gallery of wellness activities, yoga sessions, and sound healing workshops."
        />
      </Head>

      <main className="content-wrapper">
        {/* Premium Gallery Header Section */}
        <section className="wrapper py-0">
          <div className="container">
            <GalleryHeader
              eyebrowText="Glimpse Into The Serene World of Poshak Tattva"
              mainHeading="Gallery"
              subText=""
            />
          </div>
        </section>

        {/* Gallery masonry layout — full width, no container cap */}
        <section className="wrapper py-0">
          <div style={{ padding: "0 16px" }}>
            <MasonryGallery images={images} />
          </div>
        </section>
      </main>
    </>
  );
}
