import { Fragment, useRef, useState } from "react";
import useSticky from "hooks/useSticky";
import Image from "next/image";
import Link from "next/link";

import NextLink from "./NextLink";
import SocialLinks from "./SocialLinks";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useCart } from "context/CartContext";

import { NAV_ITEMS } from "../data.js";


const Navbar = ({ navClassName, navOtherClass, fancy, stickyBox }) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);
  const { cartCount } = useCart();



  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-auto">
        <NextLink
          href="/"
          title={
            <img
              alt="Logo | Poshak Tattva"
              className="py-2"
              src="/img/logo_new.png"
              style={{ maxHeight: "90px", width: "auto" }}
            />
          }
        />
      </div>

      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        <div className="offcanvas-header d-lg-none offcavas-bg nav-logo">
          <NextLink
            href="/"
            title={
              <img
                id="nav-logo"
                alt="Logo | Poshak Tattva"
                className="p-2 bg-white rounded"
                src="/img/logo_new.png"
                style={{ maxWidth: "200px", height: "auto" }}
              />
            }
          />
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white ms-auto"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column flex-lg-row h-100 offcavas-bg">
          {/* Desktop Navigation */}
          <div className="d-none d-lg-flex">
            <DesktopNav items={NAV_ITEMS} />
          </div>

          {/* Mobile Navigation */}
          <div className="d-lg-none">
            <MobileNav items={NAV_ITEMS} />
          </div>

          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink
                title="poshaktattva@gmail.com"
                className="link-inverse"
                href="mailto:poshaktattva@gmail.com"
              />
              <br />
              <NextLink href="tel:+919351500400" title="+919351500400" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>


      </div>

      <div className={navOtherClass}>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          className="hamburger offcanvas-nav-btn"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <a href="#main-content" className="skip-link">Skip to content</a>
      {stickyBox && (
        <div
          style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }}
        />
      )}

      <nav
        ref={navbarRef}
        className={
          sticky
            ? "navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed"
            : navClassName
        }
      >
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-end">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">
            {headerContent}
          </div>
        )}
      </nav>
    </Fragment>
  );
};

Navbar.defaultProps = {
  stickyBox: true,
  navOtherClass: "navbar-other  d-flex  d-lg-none",
  navClassName: "navbar navbar-expand-lg center-nav transparent navbar-light",
};

export default Navbar;
