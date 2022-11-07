import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

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
        <a href="https://oab.owlpractice.ca/jpts"><button className="client-btn">Current Clients</button></a>
      </div>

    </div>
  )
};