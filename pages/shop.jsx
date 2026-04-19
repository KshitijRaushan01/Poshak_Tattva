import Head from "next/head";
import Link from "next/link";
import PageProgress from "components/PageProgress";
import ProductCard from "components/ProductCard";
import { productsData as products } from "../src/data/products";

export const metadata = {
  title: "Wellness Shop | Poshak Tattva",
  description: "Shop our premium wellness products including singing bowls, crystal bowls, gongs, bells, and Shakers. Curated tools to deepen your practice and start your healing journey."
}

export default function ShopPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Shop – Poshak Tattva</title>
        <meta
          name="description"
          content="Shop our premium wellness products including singing bowls, crystal bowls, gongs, bells, and Shakers ."
        />
      </Head>

      <main className="content-wrapper">
        {/* Hero */}
        <section
          className="wrapper py-12 d-flex align-items-center"
          style={{
            backgroundImage: "url('/img/Shop Header Image.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            minHeight: "50vh",
          }}
        >
          <div className="container text-center">
            <h1 className="display-5 fw-bold mb-3 text-white">Wellness Shop</h1>
            <p className="lead mb-0 opacity-75 text-white">
              Curated tools to deepen your practice
              <br />
              Start your Healing Journey
            </p>
          </div>
        </section>

        {/* Products grid */}
        <section className="wrapper py-16 bg-light">
          <div className="container">
            <div className="row g-4">
              {products.map((product, idx) => (
                <div key={product.id} className="col-lg-4 col-md-6">
                  <ProductCard product={product} priority={idx < 6} />
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/cart" className="btn btn-primary btn-lg px-5 rounded-pill">
                <i className="bi bi-cart4"></i> View Cart
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
