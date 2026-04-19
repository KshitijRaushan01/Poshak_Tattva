import Head from "next/head";
import PageProgress from "components/PageProgress";
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
 {/* Page Header */}
 <section className="wrapper bg-light py-16">
 <div className="container text-center">
 <h1 className="display-4 fw-bold mb-3">Our Gallery</h1>
 <p className="lead mb-0">
 A glimpse into the serene world of Poshak Tattva
 </p>
 </div>
 </section>

 {/* Gallery masonry layout */}
 <section className="wrapper py-0">
 <MasonryGallery images={images} />
 </section>
 </main>
 </>
 );
}
