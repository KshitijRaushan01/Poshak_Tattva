import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PageProgress from "components/PageProgress";
import { useCart } from "context/CartContext";
import { productsData } from "../../src/data/products";
import { toast } from "react-toastify";

export default function ProductDetailsPage({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();

  if (router.isFallback) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // If statically generated page somehow doesn't have a product, bail out safely
  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1>Product Not Found</h1>
        <Link href="/shop" className="btn btn-primary mt-4">Return to Shop</Link>
      </div>
    );
  }

  const { id, title, image, price, discount, discountedPrice, description, features, rating, reviews, inStock } = product;
  const currentPrice = discount ? discountedPrice : price;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${title} added to cart!`);
  };

  return (
    <>
      <PageProgress />
      <Head>
        <title>{title} – Poshak Tattva</title>
        <meta name="description" content={description.substring(0, 150) + "..."} />
      </Head>

      <main className="content-wrapper bg-light">
        {/* Breadcrumb Navigation */}
        <section className="wrapper pt-4 pb-2">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0" style={{ fontSize: "14px", fontWeight: "500" }}>
                <li className="breadcrumb-item">
                  <Link href="/" className="text-decoration-none text-muted hover:text-primary transition-colors">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/shop" className="text-decoration-none text-muted hover:text-primary transition-colors">Shop</Link>
                </li>
                <li className="breadcrumb-item active text-dark" aria-current="page">{title}</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Product Layout */}
        <section className="wrapper py-8 pb-16">
          <div className="container">
            <div className="row g-5 bg-white p-6 rounded-4 shadow-sm border border-gray-100">
              
              {/* Left Column: Image Gallery */}
              <div className="col-lg-5">
                <div 
                  className="rounded-4 bg-[#F6DAB0] p-5 d-flex align-items-center justify-content-center" 
                  style={{ position: 'relative', width: '100%', aspectRatio: '1/1', border: '1px solid #f1f5f9' }}
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'contain', padding: '2rem' }}
                    priority
                    sizes="(max-width: 991px) 100vw, 50vw"
                  />
                  {discount && (
                    <div 
                      className="position-absolute top-0 start-0 m-4 shadow-sm"
                      style={{ 
                        background: '#dc3545', 
                        color: 'white', 
                        padding: '6px 14px', 
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        fontSize: '14px'
                      }}
                    >
                      Save {discount}%
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Details & Actions */}
              <div className="col-lg-7 d-flex flex-column">
                <div className="mb-4 border-bottom pb-4">
                  <h1 className="display-5 fw-bold mb-2" style={{ color: '#1e293b' }}>{title}</h1>
                  
                  {/* Rating Stars */}
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="d-flex text-warning">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className={i < Math.floor(rating) ? "text-warning" : "text-gray-300"} viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-primary fw-semibold" style={{ fontSize: '14px' }}>{rating}</span>
                    <span className="text-muted" style={{ fontSize: '14px' }}>({reviews} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="d-flex align-items-center gap-3">
                    <span className="fw-bold" style={{ fontSize: '2rem', color: '#b91c1c' }}>
                      ₹{currentPrice.toLocaleString()}
                    </span>
                    {discount && (
                      <span className="text-muted text-decoration-line-through fs-5">
                        ₹{price.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Stock Status */}
                <div className="mb-4">
                  {inStock ? (
                    <span className="text-success fw-bold d-flex align-items-center gap-2">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      In Stock & Ready to Ship
                    </span>
                  ) : (
                    <span className="text-danger fw-bold d-flex align-items-center gap-2">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      Currently Out of Stock
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="mb-5">
                  <h4 className="fw-bold mb-3 fs-5">About this item</h4>
                  <p className="text-muted" style={{ lineHeight: '1.7', fontSize: '15px' }}>
                    {description}
                  </p>
                  <ul className="text-muted mt-3" style={{ lineHeight: '1.8', fontSize: '15px' }}>
                    {features.map((feature, idx) => (
                      <li key={idx} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Action Box */}
                <div className="mt-auto p-4 rounded-3 border" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    <span className="text-muted fw-semibold" style={{ fontSize: '14px' }}>Secure transaction provided by Razorpay</span>
                  </div>
                  
                  <button
                    onClick={handleAddToCart}
                    disabled={!inStock}
                    className="btn btn-primary w-100 rounded-pill py-3 fw-bold shadow-sm d-flex justify-content-center align-items-center gap-2 transition-all hover:opacity-90"
                    style={{ fontSize: "16px", backgroundColor: inStock ? '#FB991C' : '#cbd5e1', borderColor: inStock ? '#FB991C' : '#cbd5e1' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    {inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  
                  {inStock && (
                    <button
                      onClick={() => {
                        handleAddToCart();
                        router.push('/checkout');
                      }}
                      className="btn btn-dark w-100 rounded-pill py-3 fw-bold shadow-sm mt-3 border-0 transition-all hover:opacity-90"
                      style={{ fontSize: "16px" }}
                    >
                      Buy Now
                    </button>
                  )}
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Generate static routes for all products at build time
export async function getStaticPaths() {
  const paths = productsData.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Return 404 if product doesn't exist
  };
}

// Pass the product data to the page safely
export async function getStaticProps({ params }) {
  const product = productsData.find((p) => p.id.toString() === params.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}
