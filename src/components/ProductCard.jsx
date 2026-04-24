'use client'
import { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from 'context/CartContext'
import { toast } from 'react-toastify'

/* ─────────────────────────────────────────
   helpers
───────────────────────────────────────── */
function getDiscountPercent(regular, sale) {
  if (!regular || !sale || regular <= sale) return null
  return Math.round(((regular - sale) / regular) * 100)
}

/* ─────────────────────────────────────────
   Main component
───────────────────────────────────────── */
const ProductCard = ({ product, priority = false }) => {
  const {
    id,
    name,
    thumbnail,
    price,
    hasVariations,
    variations = [],
    inStock,
  } = product

  const { addToCart } = useCart()

  /* ── derive the display price (always from first/cheapest variation or product price) ── */
  const { saleFormatted, regularFormatted, discountPct, isOnSale } = useMemo(() => {
    // For variation products: check if any variation is on sale
    if (hasVariations && variations.length > 0) {
      const firstVar = variations[0]
      const sale = firstVar.price?.inr
      const regular = firstVar.regularPrice?.inr
      const pct = getDiscountPercent(regular, sale)
      if (firstVar.onSale && pct) {
        return {
          saleFormatted: firstVar.price?.inrFormatted,
          regularFormatted: firstVar.regularPrice?.inrFormatted,
          discountPct: pct,
          isOnSale: true,
        }
      }
      // No sale on first var — show minimum price
      return {
        saleFormatted: hasVariations && price.min?.inrFormatted 
          ? `From ${price.min.inrFormatted}` 
          : (price.min?.inrFormatted || price.display),
        regularFormatted: null,
        discountPct: null,
        isOnSale: false,
      }
    }

    // No variations
    if (price.onSale) {
      const sale = price.salePrice?.inr
      const regular = price.originalPrice?.inr
      const pct = getDiscountPercent(regular, sale)
      return {
        saleFormatted: price.salePrice?.inrFormatted,
        regularFormatted: price.originalPrice?.inrFormatted,
        discountPct: pct,
        isOnSale: true,
      }
    }

    return {
      saleFormatted: price.min?.inrFormatted || price.salePrice?.inrFormatted || price.display,
      regularFormatted: null,
      discountPct: null,
      isOnSale: false,
    }
  }, [hasVariations, variations, price])

  /* ── add to cart (adds default/first variant) ── */
  const handleAddToCart = (e) => {
    e.preventDefault()
    if (!inStock) return
    const firstVar = hasVariations && variations.length > 0 ? variations[0] : null
    const cartItem = {
      id: firstVar ? `${id}-${firstVar.id}` : id,
      name: firstVar
        ? `${name} (${Object.values(firstVar.attributes).join(', ')})`
        : name,
      image: thumbnail,
      price: firstVar ? firstVar.price.inr : (price.salePrice?.inr || price.min?.inr || 0),
      quantity: 1,
    }
    addToCart(cartItem)
    toast.success(`${name} added to cart!`, { autoClose: 1500 })
  }

  return (
    <div className="pt-card h-100">
      {/* ── image area ── */}
      <Link href={`/product/${id}`} className="pt-card__img-wrap d-block">
        <Image
          src={thumbnail}
          alt={`View details for ${name}`}
          fill
          priority={priority}
          style={{ objectFit: 'contain', padding: '16px' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* discount badge */}
        {isOnSale && discountPct && (
          <span className="pt-card__badge">
            -{discountPct}%
          </span>
        )}

        {/* out of stock overlay */}
        {!inStock && (
          <div className="pt-card__oos">
            <span>OUT OF STOCK</span>
          </div>
        )}
      </Link>

      {/* ── body ── */}
      <div className="pt-card__body">
        {/* name */}
        <h2 className="pt-card__name">
          <Link href={`/product/${id}`} className="text-decoration-none text-inherit">
            {name}
          </Link>
        </h2>

        {/* price row */}
        <div className="pt-card__price-row">
          <span className="pt-card__price-sale">{saleFormatted}</span>
          {isOnSale && regularFormatted && (
            <span className="pt-card__price-original">{regularFormatted}</span>
          )}
        </div>

        {/* action row */}
        <div className="pt-card__actions mt-auto pt-3">
          <Link
            href={`/product/${id}`}
            className="pt-card__info-btn"
            aria-label={`View details for ${name}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="8" />
              <line x1="12" y1="12" x2="12" y2="16" />
            </svg>
          </Link>
          <button
            className="pt-card__atc-btn"
            onClick={handleAddToCart}
            disabled={!inStock}
            aria-label={`Add ${name} to cart`}
          >
            {inStock ? 'Add to cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
