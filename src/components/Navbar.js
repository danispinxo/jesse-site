import * as React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "../pages/styles.scss";

export default function TopNavbar () {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resources">Help & Resources</Link>
      </div>

      <div className="title">
        <h1>Jesse Pajuäär Therapy Studios</h1>
      </div>

      <div className="btn-holder">
        <a href="https://oab.owlpractice.ca/jpts">
          <button className="client-btn">
            <FontAwesomeIcon icon={faHome} /> <br/>
            Client Portal
          </button>
        </a>
      </div>

    </div>
  )
};