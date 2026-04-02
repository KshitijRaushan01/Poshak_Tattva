import { useState, useMemo, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PageProgress from "components/PageProgress";
import { useCart } from "context/CartContext";
import { productsData } from "../../src/data/products";
import { toast } from "react-toastify";

/* ── helpers ── */
function getDiscountPercent(regular, sale) {
  if (!regular || !sale || regular <= sale) return null;
  return Math.round(((regular - sale) / regular) * 100);
}

function getVariationOptions(variations) {
  const keys = new Set();
  variations.forEach((v) => Object.keys(v.attributes).forEach((k) => keys.add(k)));
  return Array.from(keys);
}

function Pill({ label, active, outOfStock, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "5px 14px",
        borderRadius: "20px",
        fontSize: "13px",
        fontWeight: "600",
        border: active ? "2px solid #1C7690" : "1.5px solid #d1d5db",
        background: active ? "#e0f4fa" : outOfStock ? "#f9f9f9" : "#fff",
        color: active ? "#1C7690" : outOfStock ? "#b0b8c1" : "#374151",
        cursor: outOfStock ? "not-allowed" : "pointer",
        textDecoration: outOfStock ? "line-through" : "none",
        opacity: outOfStock ? 0.6 : 1,
        transition: "all 0.15s",
      }}
    >
      {label}
    </button>
  );
}

export default function ProductDetailsPage({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();

  /* ── variation state ── */
  const attrKeys = useMemo(
    () => (product?.hasVariations ? getVariationOptions(product.variations) : []),
    [product]
  );

  const initialSelection = useMemo(() => {
    const init = {};
    if (!product?.hasVariations) return init;
    attrKeys.forEach((k) => {
      if (product.sizeOptions[k]?.length > 0) init[k] = product.sizeOptions[k][0];
    });
    return init;
  }, [attrKeys, product]);

  const [selected, setSelected] = useState(initialSelection);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // keyboard nav for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const imgCount = product?.images?.length || 0;
    const handleKey = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setActiveImageIdx((i) => (i + 1) % imgCount);
      if (e.key === "ArrowLeft") setActiveImageIdx((i) => (i - 1 + imgCount) % imgCount);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, product?.images?.length]);

  const activeVariation = useMemo(() => {
    if (!product?.hasVariations || !product.variations.length) return null;
    return (
      product.variations.find((v) =>
        Object.entries(selected).every(([k, val]) => v.attributes[k] === val)
      ) || product.variations[0]
    );
  }, [selected, product]);

  if (router.isFallback) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1>Product Not Found</h1>
        <Link href="/shop" className="btn btn-primary mt-4">Return to Shop</Link>
      </div>
    );
  }

  const {
    id,
    name,
    thumbnail,
    images = [],
    price,
    description,
    keyFeatures = [],
    careInstructions = [],
    inStock,
    offers = [],
    pairWith = [],
    metaDescription,
    hasVariations,
    variations = [],
    sizeOptions = {},
  } = product;

  /* ── derived price ── */
  const { saleFormatted, regularFormatted, discountPct, isOnSale, variantInStock } = useMemo(() => {
    if (hasVariations && activeVariation) {
      const sale = activeVariation.price.inr;
      const regular = activeVariation.regularPrice?.inr;
      const discountPct = getDiscountPercent(regular, sale);
      return {
        saleFormatted: activeVariation.price.inrFormatted,
        regularFormatted: activeVariation.regularPrice?.inrFormatted,
        discountPct,
        isOnSale: activeVariation.onSale && discountPct !== null,
        variantInStock: activeVariation.inStock,
      };
    }
    if (price.onSale) {
      const sale = price.salePrice?.inr;
      const regular = price.originalPrice?.inr;
      const discountPct = getDiscountPercent(regular, sale);
      return {
        saleFormatted: price.salePrice?.inrFormatted,
        regularFormatted: price.originalPrice?.inrFormatted,
        discountPct,
        isOnSale: true,
        variantInStock: inStock,
      };
    }
    return {
      saleFormatted: price.min?.inrFormatted || price.display,
      regularFormatted: null,
      discountPct: null,
      isOnSale: false,
      variantInStock: inStock,
    };
  }, [hasVariations, activeVariation, price, inStock]);

  const handleSelect = (key, value) => {
    setSelected((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddToCart = () => {
    if (!variantInStock) return;
    const cartItem = {
      id: activeVariation ? `${id}-${activeVariation.id}` : id,
      name: activeVariation
        ? `${name} (${Object.values(activeVariation.attributes).join(", ")})`
        : name,
      image: thumbnail,
      price: activeVariation ? activeVariation.price.inr : (price.salePrice?.inr || price.min?.inr),
      quantity: 1,
    };
    addToCart(cartItem);
    toast.success(`${cartItem.name} added to cart!`, { autoClose: 1500 });
  };

  const displayImage = images[activeImageIdx] || ((hasVariations && activeVariation?.image) ? activeVariation.image : thumbnail);

  return (
    <>
      <PageProgress />
      <Head>
        <title>{name} – Poshak Tattva</title>
        <meta name="description" content={metaDescription || description?.substring(0, 150)} />
      </Head>

      <main className="content-wrapper bg-light">
        {/* Breadcrumb */}
        <section className="wrapper pt-4 pb-2">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0" style={{ fontSize: "14px", fontWeight: "500" }}>
                <li className="breadcrumb-item">
                  <Link href="/" className="text-decoration-none text-muted">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/shop" className="text-decoration-none text-muted">Shop</Link>
                </li>
                <li className="breadcrumb-item active text-dark" aria-current="page">{name}</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Product Layout */}
        <section className="wrapper py-8 pb-16">
          <div className="container">
            <div className="row g-5 bg-white p-6 rounded-4 shadow-sm border border-gray-100">

              {/* Image */}
              <div className="col-lg-5">
                <div style={{ position: "sticky", top: "100px" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "1/1",
                      borderRadius: "16px",
                      background: "#F6DAB0",
                      border: "1px solid #f1f5f9",
                      overflow: "hidden",
                      cursor: "zoom-in",
                    }}
                    onClick={() => setLightboxOpen(true)}
                  >
                    <Image
                      src={displayImage}
                      alt={name}
                      fill
                      style={{ objectFit: "contain", padding: "2rem" }}
                      priority
                      sizes="(max-width: 991px) 100vw, 50vw"
                    />
                    {isOnSale && discountPct && (
                      <div
                        className="position-absolute top-0 start-0 m-3"
                        style={{
                          background: "#e63946",
                          color: "white",
                          padding: "5px 14px",
                          borderRadius: "20px",
                          fontWeight: "bold",
                          fontSize: "13px",
                        }}
                      >
                        -{discountPct}% OFF
                      </div>
                    )}
                  </div>

                  {/* Thumbnail strip */}
                  {images.length > 1 && (
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        marginTop: "12px",
                        overflowX: "auto",
                        paddingBottom: "4px",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }}
                    >
                      {images.map((img, i) => (
                        <div
                          key={i}
                          onClick={() => setActiveImageIdx(i)}
                          style={{
                            position: "relative",
                            width: "64px",
                            height: "64px",
                            borderRadius: "8px",
                            background: "#F6DAB0",
                            border: i === activeImageIdx ? "2.5px solid #1C7690" : "1.5px solid #e2e8f0",
                            overflow: "hidden",
                            flexShrink: 0,
                            cursor: "pointer",
                            transition: "border-color 0.15s",
                          }}
                        >
                          <Image
                            src={img}
                            alt={`${name} ${i + 1}`}
                            fill
                            style={{ objectFit: "contain", padding: "4px" }}
                            sizes="64px"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="col-lg-7 d-flex flex-column">

                {/* Name */}
                <h1 className="fw-bold mb-3" style={{ color: "#1e293b", fontSize: "clamp(22px,3vw,30px)" }}>
                  {name}
                </h1>

                {/* Stock badge */}
                <div className="mb-3">
                  {variantInStock ? (
                    <span className="text-success fw-semibold" style={{ fontSize: "14px" }}>✔ In Stock</span>
                  ) : (
                    <span className="text-danger fw-semibold" style={{ fontSize: "14px" }}>✖ Out of Stock</span>
                  )}
                </div>

                {/* Price */}
                <div className="d-flex align-items-baseline gap-3 mb-4 border-bottom pb-4">
                  <span className="fw-bold" style={{ fontSize: "2rem", color: "#b91c1c" }}>
                    {saleFormatted}
                  </span>
                  {isOnSale && regularFormatted && (
                    <span className="text-muted text-decoration-line-through mb-2">{regularFormatted}</span>
                  )}
                </div>

                {/* Variation selectors */}
                {hasVariations && attrKeys.map((key) => (
                  <div key={key} style={{ marginBottom: "16px" }}>
                    <p style={{ margin: "0 0 6px", fontSize: "12px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.6px" }}>
                      {key === "type" ? "Type" : key === "size" ? "Size" : key}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {(sizeOptions[key] || []).map((val) => {
                        const matchingVar = variations.find((v) => {
                          const others = Object.entries(selected).filter(([k]) => k !== key);
                          return v.attributes[key] === val && others.every(([k, vv]) => v.attributes[k] === vv);
                        });
                        return (
                          <Pill
                            key={val}
                            label={val}
                            active={selected[key] === val}
                            outOfStock={matchingVar ? !matchingVar.inStock : false}
                            onClick={() => handleSelect(key, val)}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Offers */}
                {offers.length > 0 && (
                  <div className="mb-4" style={{ background: "#f0fdf4", borderRadius: "8px", padding: "10px 14px", border: "1px solid #bbf7d0" }}>
                    {offers.map((o, i) => (
                      <p key={i} style={{ margin: 0, fontSize: "13px", color: "#16a34a", fontWeight: "600" }}>
                        🏷 {o}
                      </p>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="d-flex flex-column gap-2 mb-5">
                  <button
                    onClick={handleAddToCart}
                    disabled={!variantInStock}
                    className="btn w-100 rounded-pill py-3 fw-bold shadow-sm"
                    style={{
                      fontSize: "16px",
                      backgroundColor: variantInStock ? "#FB991C" : "#cbd5e1",
                      borderColor: variantInStock ? "#FB991C" : "#cbd5e1",
                      color: "#fff",
                      cursor: variantInStock ? "pointer" : "not-allowed",
                    }}
                  >
                    🛒 {variantInStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                  {variantInStock && (
                    <button
                      onClick={() => { handleAddToCart(); router.push("/checkout"); }}
                      className="btn btn-dark w-100 rounded-pill py-3 fw-bold shadow-sm border-0"
                      style={{ fontSize: "16px" }}
                    >
                      Buy Now
                    </button>
                  )}
                </div>

                {/* Description */}
                <div className="mb-4">
                  <h4 className="fw-bold mb-2 " style={{ color: "#1e293b" }}>About this item</h4>
                  <p className="text-muted" style={{ lineHeight: "1.75", fontSize: "15px" }}>{description}</p>
                </div>

                {/* Key Features */}
                {keyFeatures.length > 0 && (
                  <div className="mb-4">
                    <h4 className="fw-bold mb-2 " style={{ color: "#1e293b" }}>Key Features</h4>
                    <ul className="text-muted ps-4" style={{ lineHeight: "1.9", fontSize: "14px" }}>
                      {keyFeatures.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                )}

                {/* Care Instructions */}
                {careInstructions.length > 0 && (
                  <div className="mb-4">
                    <h4 className="fw-bold mb-2 " style={{ color: "#1e293b" }}>Care Instructions</h4>
                    <ul className="text-muted ps-4" style={{ lineHeight: "1.9", fontSize: "14px" }}>
                      {careInstructions.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                )}

                {/* Pair With */}
                {pairWith.length > 0 && (
                  <div className="mt-2">
                    <h4 className="fw-bold mb-2 fs-16" style={{ color: "#1e293b" }}>Pairs Well With</h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {pairWith.map((item, i) => (
                        <Link
                          key={i}
                          href={item.url}
                          style={{
                            padding: "5px 14px",
                            borderRadius: "20px",
                            fontSize: "13px",
                            fontWeight: "600",
                            border: "1.5px solid #1C7690",
                            color: "#1C7690",
                            textDecoration: "none",
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 2000,
            background: "rgba(0,0,0,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxOpen(false)}
            style={{
              position: "absolute", top: "20px", right: "24px",
              background: "rgba(255,255,255,0.12)", border: "none",
              color: "#fff", fontSize: "26px", width: "44px", height: "44px",
              borderRadius: "50%", cursor: "pointer", lineHeight: 1,
            }}
          >×</button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setActiveImageIdx((i) => (i - 1 + images.length) % images.length); }}
              style={{
                position: "absolute", left: "16px",
                background: "rgba(255,255,255,0.15)", border: "none",
                color: "#fff", fontSize: "28px", width: "48px", height: "48px",
                borderRadius: "50%", cursor: "pointer",
              }}
            >‹</button>
          )}

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh", width: "700px", height: "700px" }}
          >
            <Image
              src={images[activeImageIdx]}
              alt={`${name} ${activeImageIdx + 1}`}
              fill
              style={{ objectFit: "contain" }}
              sizes="90vw"
              priority
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setActiveImageIdx((i) => (i + 1) % images.length); }}
              style={{
                position: "absolute", right: "16px",
                background: "rgba(255,255,255,0.15)", border: "none",
                color: "#fff", fontSize: "28px", width: "48px", height: "48px",
                borderRadius: "50%", cursor: "pointer",
              }}
            >›</button>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <div style={{
              position: "absolute", bottom: "20px",
              color: "rgba(255,255,255,0.7)", fontSize: "13px", letterSpacing: "0.5px"
            }}>
              {activeImageIdx + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const paths = productsData.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = productsData.find((p) => p.id.toString() === params.id);
  if (!product) return { notFound: true };
  return { props: { product } };
}
