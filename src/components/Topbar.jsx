import Link from "next/link";

const Topbar = () => {
  return (
    <section className="primary-bg d-none d-lg-block">
      <div className="container">
        <div className="py-2 d-flex align-items-center justify-content-between flex-nowrap">
          {/* Tagline */}
          <div className="d-flex align-items-center">
            <p className="m-0 text-white fw-semibold fs-14 text-nowrap">
              Healing Through Balance, Not Medicine.
            </p>
          </div>

          {/* Email */}
          <div className="d-flex align-items-center gap-2">
            <i className="uil uil-envelope text-white fs-18 mt-1" aria-hidden="true" />
            <Link
              href="mailto:poshaktattva@gmail.com"
              className="text-white hover fw-semibold fs-14"
              aria-label="Email contact"
            >
              poshaktattva@gmail.com
            </Link>
          </div>

          {/* Phone */}
          <div className="d-flex align-items-center gap-2">
            <i className="uil uil-phone-volume text-white fs-18 mt-1" aria-hidden="true" />
            <Link
              href="tel:+919351500400"
              className="text-white hover fw-semibold fs-14"
              aria-label="Phone contact"
            >
              +91 9351500400
            </Link>
          </div>

          {/* Social Icons */}
          <div className="d-flex align-items-center gap-3">
            {[
              { href: "https://www.facebook.com/share/1AHRDfFEe8/", icon: "facebook", label: "Facebook" },
              { href: "https://www.instagram.com/poshak_tattva?igshid=1gcwnpf94lpyf", icon: "instagram", label: "Instagram" },
              { href: "https://api.whatsapp.com/send?phone=9351500400", icon: "whatsapp", label: "WhatsApp" },
              { href: "https://in.linkedin.com/in/priyanka-pugalia-18b4b5169/", icon: "linkedin", label: "LinkedIn" },
            ].map(({ href, icon, label }) => (
              <Link
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover-opacity"
                aria-label={label}
              >
                <i className={`uil uil-${icon} fs-18`} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;