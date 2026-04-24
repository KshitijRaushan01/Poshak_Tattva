import { useState } from "react";
import Link from "next/link";
import { useCart } from "context/CartContext";

const MobileNav = ({ items }) => {
  const [openItem, setOpenItem] = useState(null);
  const { cartCount } = useCart();

  const toggleItem = (label) => {
    setOpenItem((prev) => (prev === label ? null : label));
  };

  return (
    <ul className="navbar-nav">
      {items.map((item) => {
        if (item.type === "cart") {
          return (
            <li className="nav-item" key="cart">
              <Link href="/cart" className="nav-link d-flex align-items-center" aria-label="View Cart">
                <span data-bs-dismiss="offcanvas" className="d-flex align-items-center w-100">
                  <span className="me-2">🛒 Cart</span>
                  {cartCount > 0 && (
                    <span className="badge bg-primary rounded-pill ms-auto">{cartCount > 9 ? '9+' : cartCount}</span>
                  )}
                </span>
              </Link>
            </li>
          );
        }

        if (item.type === "button") {
          return (
            <li className="nav-item mt-3" key="appointment">
              <Link
                href={item.href}
                className="btn btn-sm secondary-bg text-white w-100 rounded"
              >
                <span data-bs-dismiss="offcanvas" className="d-block w-100">{item.label}</span>
              </Link>
            </li>
          );
        }

        return (
          <li className="nav-item" key={item.label}>
            <div className="d-flex align-items-center justify-content-between">
              <Link 
                href={item.href} 
                className="nav-link flex-grow-1"
              >
                <span data-bs-dismiss="offcanvas" className="d-block w-100">{item.label}</span>
              </Link>

              {item.children?.length > 0 && (
                <button
                  className={`toggle-btn ${openItem === item.label ? "open" : ""}`}
                  onClick={() => toggleItem(item.label)}
                  aria-label={`Toggle ${item.label} sub-menu`}
                  aria-expanded={openItem === item.label}
                  aria-controls={`submenu-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <i className="uil uil-angle-down" style={{ fontSize: '1.2rem' }}></i>
                </button>
              )}
            </div>

            {item.children?.length > 0 && (
              <ul 
                id={`submenu-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`submenu ${openItem === item.label ? "open" : ""}`}
              >
                {item.children.map((child) => (
                  <li className="nav-item" key={child.href}>
                    <Link href={child.href} className="nav-link ps-6">
                      <span data-bs-dismiss="offcanvas" className="d-block w-100">{child.label}</span>
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

export default MobileNav;

