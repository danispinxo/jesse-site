import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/Logo.webp';
import '../pages/styles.scss';

export default function TopNavbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resources">Help & Resources</Link>
      </div>

      <div className="nav-content">
        <Link to="/contact">
          <img className="nav-logo" src={Logo} />
        </Link>

        <div className="title">Jesse Pajuäär Therapy Studios</div>

        <a href="https://oab.owlpractice.ca/jpts">
          <button className="client-btn">
            <FontAwesomeIcon icon={faHome} /> <br />
            Client Portal
          </button>
        </a>
      </div>
    </div>
  );
}
