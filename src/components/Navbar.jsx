import { Fragment, useRef, useState } from "react";
import useSticky from "hooks/useSticky";
import Image from "next/image";
import Link from "next/link";

import NextLink from "./NextLink";
import SocialLinks from "./SocialLinks";
import ListItemLink from "./ListItemLink";
import DropdownToggleLink from "./DropdownToggleLink";

import { soundHealing, diet, yoga } from "../data.js";

const Navbar = ({ navClassName, navOtherClass, fancy, stickyBox }) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);

  const renderLinks = (links) =>
    links.map((item) => (
      <ListItemLink
        href={item.url || "#"}
        title={item.title}
        linkClassName="dropdown-item"
        key={item.id}
      />
    ));

  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={
            <Image
              alt="Logo | Poshak Tattva"
              className="py-2"
              src="/img/poshak.png"
              width={90}
              height={90}
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
              <Image
                id="nav-logo"
                alt="Logo | Poshak Tattva"
                className="p-2 position-static bg-white rounded"
                src="/img/poshak.png"
                style={{ maxWidth: "200px" }}
                layout="fill"
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

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcavas-bg">
          <ul className="navbar-nav">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link" />
            </li>

            <li className="nav-item dropdown d-none d-lg-block">
              <DropdownToggleLink
                title="Yoga"
                className="nav-link dropdown-toggle"
              />
              <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                {yoga.map(({ id, url, title }) => (
                  <ListItemLink
                    key={id}
                    href={url || "#"}
                    title={title}
                    linkClassName="dropdown-item"
                  />
                ))}
              </ul>
            </li>

            <li className="nav-item dropdown d-lg-none">
              <DropdownToggleLink
                title="Yoga"
                className="nav-link dropdown-toggle"
              />
              <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                {yoga.map(({ id, url, title }) => (
                  <ListItemLink
                    key={id}
                    href={url || "#"}
                    title={title}
                    linkClassName="dropdown-item"
                  />
                ))}
              </ul>
            </li>

            <li className="nav-item dropdown d-none d-lg-block">
              <DropdownToggleLink
                title="Sound Healing"
                className="nav-link dropdown-toggle"
                href="#"
              />
              <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                {soundHealing.map(({ id, title, url }) => (
                  <ListItemLink
                    key={id}
                    href={url || "#"}
                    title={title}
                    linkClassName="dropdown-item"
                  />
                ))}
              </ul>
            </li>

            <li className="nav-item dropdown d-lg-none">
              <DropdownToggleLink
                title="Sound Healing"
                className="nav-link dropdown-toggle"
              />
              <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                {soundHealing.map(({ id, title, url }) => (
                  <ListItemLink
                    key={id}
                    href={url || "#"}
                    title={title}
                    linkClassName="dropdown-item"
                  />
                ))}
              </ul>
            </li>

            {["d-none d-lg-block", "d-lg-none"].map((cls, index) => (
              <li className={`nav-item dropdown ${cls}`} key={index}>
                <DropdownToggleLink
                  title="Diet"
                  className="nav-link dropdown-toggle"
                />
                <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                  {diet.map(({ id, title, url }) => (
                    <ListItemLink
                      key={id}
                      href={url || "#"}
                      title={title}
                      linkClassName="dropdown-item"
                    />
                  ))}
                </ul>
              </li>
            ))}

            <li
              className="nav-item align-items-center d-flex mt-3 mt-lg-0 ms-lg-3"
              data-bs-dismiss="offcanvas"
            >
              <NextLink
                title="Pricing"
                href="/pricing"
                className="nav-link"
              />
            </li>

            <li
              className="nav-item align-items-center d-flex mt-3 mt-lg-0 ms-lg-3"
              data-bs-dismiss="offcanvas"
            >
              <NextLink
                title="FAQ"
                href="/faq"
                className="nav-link"
              />
            </li>

            <li
              className="nav-item align-items-center d-flex mt-3 mt-lg-0 ms-lg-3"
              data-bs-dismiss="offcanvas"
            >
              <NextLink
                title="Book Appointment"
                href="/contact-appointment"
                className="btn btn-sm secondary-bg text-white mb-lg-1 rounded border border-md-none"
              />
            </li>
          </ul>

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
