import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import NextLink from "./NextLink";

import { treatmentsFooter, aboutUsFooter } from "../data";

// Extracted reusable widget for footer sections
const FooterWidget = ({ title, items }) => (
  <div className="widget">
    <h3 className="widget-title fs-20 mb-3">{title}</h3>
    <ul className="list-unstyled text-reset mb-0">
      {items.map(({ id, url, title }) => (
        <li key={id}>
          <i className="uil uil-arrow-right me-3" />
          {/* Preserved content & route (even if dummy) */}
          <NextLink href={url || "#"} title={title} className="footer-links" />
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top bg-white-900 overflow-hidden">
      <div className="container pb-3 mt-10">
        <div className="row justify-content-around">
          {/* Logo + Contact Info */}
          <div className="col-lg-3">
            <div className="widget d-flex flex-column align-items-center">
              <div className="d-flex w-100 justify-content-center">
                <img
                  src="/img/logo_new.png"
                  alt="Logo | Poshak Tattva"
                  className="text-center"
                  style={{ maxWidth: "200px", height: "auto" }}
                />
              </div>

              {/* Address, Email, Phone */}
              <div className="widget mt-3">
                <div className="d-flex mb-1 align-items-start">
                  <i className="uil uil-location-pin-alt fs-26" />
                  <address className="ms-2 m-0 mt-1">
                    177, Vinoba Puri,Lajpat nagar 2, New Delhi, Delhi 110024
                  </address>
                </div>
                <div className="d-flex mb-1 align-items-center">
                  <i className="uil uil-envelope fs-26" />
                  <Link
                    href="mailto:poshaktattva@gmail.com"
                    className="link-body ms-2"
                  >
                    poshaktattva@gmail.com
                  </Link>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <i className="uil uil-phone-volume fs-26" />
                  <p className="m-0 ms-2 fs-16">
                    <Link href="tel:+919351500400">+91 9351500400</Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="d-flex flex-column mt-3">
              <h3 className="fs-20">Connect With Us</h3>
              <SocialLinks className="nav social" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-sm-6 col-md-4 col-lg-2 mt-md-5 mt-lg-0 mt-10 ms-0 ms-md-5">
            <FooterWidget title="Quick Links" items={aboutUsFooter} />
          </div>

          {/* Treatments */}
          <div className="col-sm-6 col-md-4 col-lg-3 mt-md-5 mt-lg-0 mt-10 ms-0 ms-md-5">
            <FooterWidget title="Treatments" items={treatmentsFooter} />
          </div>

          {/* Location Map */}
          <div className="col-lg-3 mt-md-5 mt-lg-0 mt-10">
            <div className="widget">
              <h3 className="widget-title fs-20 mb-3">Location</h3>
              <div className="d-flex justify-content-center border rounded">
                <iframe
                  title="Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0649167484435!2d77.2483968!3d28.567813299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b1c61b8de3%3A0x3f5eb4ad848c7922!2s177%2C%20Vinobha%20Puri%2C%20Vinoba%20Puri%2C%20Block%20M%2C%20Lajpat%20Nagar%20II%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1762953791402!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-4 mt-md-4 mb-3" />

        {/* Copyright */}
        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-2 mb-lg-0">
            © {new Date().getFullYear()} Poshak Tattva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
