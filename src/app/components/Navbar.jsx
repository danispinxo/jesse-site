import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.scss";

export default function TopNavbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/resources">Help & Resources</Link>
      </div>

      <div className="nav-content">
        <Link href="/contact">
          <img className="nav-logo" src="/images/Logo.webp" />
        </Link>

        <div className="title">Jesse Pajuäär Therapy Studios</div>

        <a
          href="https://oab.owlpractice.ca/jpts"
          target="_blank"
          rel="noreferrer"
        >
          <button className="client-btn">
            <FontAwesomeIcon icon={faHome} className="client-icon" /> <br />
            Client Portal
          </button>
        </a>
      </div>
    </div>
  );
}
