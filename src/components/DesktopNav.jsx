import { useState } from "react";
import Link from "next/link";
import { useCart } from "context/CartContext";

const DesktopNav = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { cartCount } = useCart();

  return (
    <ul className="navbar-nav desktop-nav align-items-center">
      {items.map((item) => {
        if (item.type === "cart") {
          return (
            <li className="nav-item ms-lg-3" key="cart">
              <Link href="/cart" className="nav-link position-relative" aria-label="View Cart">
                🛒
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount > 9 ? '9+' : cartCount}</span>
                )}
              </Link>
            </li>
          );
        }

        if (item.type === "button") {
          return (
            <li className="nav-item ms-lg-3" key="appointment">
              <Link
                href={item.href}
                className="btn btn-sm secondary-bg text-white rounded"
              >
                {item.label}
              </Link>
            </li>
          );
        }

        return (
          <li 
            className={`nav-item dropdown ${item.children?.length > 0 ? "has-dropdown" : ""}`} 
            key={item.label}
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link 
              href={item.href} 
              className="nav-link"
              aria-haspopup={item.children?.length > 0 ? "true" : undefined}
              aria-expanded={item.children?.length > 0 ? hoveredItem === item.label : undefined}
            >
              {item.label}
              {item.children?.length > 0 && (
                <i className="uil uil-angle-down ms-1" aria-hidden="true"></i>
              )}
            </Link>

            {item.children?.length > 0 && (
              <ul 
                className={`dropdown-menu ${hoveredItem === item.label ? "show" : ""}`}
                aria-label={`${item.label} sub-menu`}
              >
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className="dropdown-item">
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopNav;

