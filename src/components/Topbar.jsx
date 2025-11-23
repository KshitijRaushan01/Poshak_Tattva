import Link from "next/link";

const Topbar = () => {
  return (
    <section className="primary-bg d-none d-md-block">
      <div className="container">
        <div className="py-1 d-flex align-items-center justify-content-between justify-content-xxl-center w-100 row">
          {/* Info Text */}
          <div className="d-none d-xxl-flex col-md-5 text-white fw-semibold fs-16">
            <p className="m-0"> HEALING THROUGH BALANCE, NOT MEDICINE.</p>
          </div>

          {/* Email Contact */}
          <div className="d-flex align-items-center justify-content-xxl-center col-4 col-xxl-2 me-2">
            <i
              className="uil uil-envelope text-white fs-22 mt-1 me-2"
              aria-hidden="true"
            />
            <Link
              href="mailto:poshaktattva@gmail.com"
              className="link-white hover fw-semibold"
              aria-label="Email contact"
            >
              poshaktattva@gmail.com
            </Link>
          </div>

          {/* Phone Contact */}
          <div className=" d-flex align-items-center justify-content-center col-4 col-xxl-2 me-10">
            <i
              className="uil uil-phone-volume text-white fs-22 mt-1 me-2"
              aria-hidden="true"
            />
            <Link
              href="tel:+919351500400"
              className="link-white hover fw-semibold text-white"
              aria-label="Phone contact"
            >
              +91 9351500400
            </Link>
          </div>

          {/* Social Icons */}
          <div className="d-flex align-items-center justify-content-center col-1">
            {[
              {
                href: "https://www.facebook.com/share/1AHRDfFEe8/",
                icon: "facebook",
                label: "Facebook",
              },
              {
                href: "https://www.instagram.com/poshak_tattva?igshid=1gcwnpf94lpyf",
                icon: "instagram",
                label: "Instagram",
              },
              {
                href: "https://api.whatsapp.com/send?phone=9351500400",
                icon: "whatsapp",
                label: "WhatsApp",
              },
            ].map(({ href, icon, label }) => (
              <Link
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-white hover mx-1`}
                aria-label={label}
              >
                <i className={`uil uil-${icon} text-white fs-22 mt-1`} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
