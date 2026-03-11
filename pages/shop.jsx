import Head from "next/head";
import Link from "next/link";
import PageProgress from "components/PageProgress";
import ProductCard from "components/ProductCard";
import { productsData as products } from "../src/data/products";

export default function ShopPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Shop – Poshak Tattva</title>
        <meta
          name="description"
          content="Shop our premium wellness products including singing bowls, crystal bowls, gongs, bells, and eco-friendly yoga mats."
        />
      </Head>

      <main className="content-wrapper">
        {/* Hero */}
        <section
          className="wrapper py-12"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          <div className="container text-center text-white">
            <h1 className="display-5 fw-bold mb-3">Wellness Shop</h1>
            <p className="lead mb-0 opacity-75">
              Curated tools to deepen your practice
            </p>
          </div>
        </section>

        {/* Products grid */}
        <section className="wrapper py-16 bg-light">
          <div className="container">
            <div className="row g-4">
              {products.map((product) => (
                <div key={product.id} className="col-lg-4 col-md-6">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/cart" className="btn btn-primary btn-lg px-5 rounded-pill">
                🛒 View Cart
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
