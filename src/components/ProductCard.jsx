'use client'
import { BadgeInfo } from 'lucide-react'
import { useCart } from 'context/CartContext'
import { toast } from 'react-toastify'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ product }) => {
  const { id, title, image, discount, discountedPrice, price } = product
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigating to the product page when clicking "Add to cart"
    addToCart(product)
    toast.success(`${title} added to cart!`, { autoClose: 1500 })
  }

  const handleShowProductInfo = (e) => {
    e.preventDefault();
    toast.info(`${title}: Premium quality wellness product.`, { autoClose: 2500 })
  }

  return (
    <Link href={`/product/${id}`} className="text-decoration-none text-dark d-block">
      <div
        className="transition-all hover:shadow-lg"
        style={{
          borderRadius: '16px',
          border: '1px solid #e0eaf3',
          background: '#fff',
          padding: '6px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            height: '240px',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '12px',
            background: '#F6DAB0',
            padding: '16px',
            overflow: 'hidden',
          }}
        >
          <Image
            src={image}
            alt={`${title}`}
            fill
            style={{ objectFit: 'contain', padding: '1rem' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transition-transform duration-300 hover:scale-105"
          />
          {discount && (
            <span
              style={{
                position: 'absolute',
                left: '8px',
                top: '8px',
                borderRadius: '6px',
                background: '#FB991C',
                padding: '2px 8px',
                fontSize: '13px',
                color: '#fff',
                fontWeight: '600',
                zIndex: 10
              }}
            >
              -{discount}%
            </span>
          )}
        </div>

        <div style={{ padding: '8px 8px 0' }}>
          <h3 className="hover:text-orange-500 transition-colors" style={{ margin: '16px 0', fontSize: '15px', fontWeight: '600', lineHeight: '1.4', minHeight: '42px', color: '#1e293b' }}>
            {title}
          </h3>

          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            {discountedPrice ? (
              <>
                <span style={{ marginRight: '8px', fontSize: '18px', fontWeight: 'bold', color: '#b91c1c' }}>₹{discountedPrice}</span>
                <span style={{ fontWeight: '500', color: '#94a3b8', textDecoration: 'line-through', fontSize: '14px' }}>₹{price}</span>
              </>
            ) : (
              <span style={{ marginRight: '8px', fontSize: '18px', fontWeight: 'bold', color: '#b91c1c' }}>₹{price}</span>
            )}
          </div>

          <div style={{ display: 'flex', gap: '10px', paddingBottom: '8px' }}>
            <button
              onClick={handleShowProductInfo}
              style={{
                borderRadius: '8px',
                background: '#eff6fb',
                padding: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              aria-label={`View details of ${title}`}
              onMouseEnter={e => e.currentTarget.style.background = '#e1e2e6'}
              onMouseLeave={e => e.currentTarget.style.background = '#eff6fb'}
            >
              <BadgeInfo size={20} color="#94a3b8" />
            </button>
            <button
              onClick={handleAddToCart}
              style={{
                width: '100%',
                borderRadius: '8px',
                background: '#eff6fb',
                padding: '8px 12px',
                fontWeight: '600',
                color: '#1C7690',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#d0e9f3'}
              onMouseLeave={e => e.currentTarget.style.background = '#eff6fb'}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
