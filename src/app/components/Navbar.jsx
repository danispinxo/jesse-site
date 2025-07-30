"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faArrowsTurnRight,
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" onClick={handleLinkClick}>
          <Image
            src="/images/Logo.webp"
            alt="Therapy Logo"
            width={50}
            height={50}
            className="logo-image"
          />
          <span className="logo-text">
            <span className="name">JESSE PAJUÄÄR</span>
            <span className="studio">THERAPY STUDIOS</span>
          </span>
        </Link>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <Link href="/about" className="nav-link" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="/services" className="nav-link" onClick={handleLinkClick}>
            Services
          </Link>
          <Link
            href="/resources"
            className="nav-link"
            onClick={handleLinkClick}
          >
            Resources
          </Link>
          <Link href="/contact" className="nav-link" onClick={handleLinkClick}>
            Contact
          </Link>
          <Link
            className="nav-link consultation-button"
            href="https://jpts.noustalk.com/login"
            target="_blank"
            rel="noreferrer"
            onClick={handleLinkClick}
          >
            <span className="client-portal-text">Client Portal</span>
            <FontAwesomeIcon icon={faArrowsTurnRight} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
