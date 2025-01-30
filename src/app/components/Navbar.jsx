"use client";
import { Nav, Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsTurnRight } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";

export default function TopNavbar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        data-bs-theme="dark"
        expand="lg"
      >
        <Container className="nav-custom">
          <Navbar.Brand href="/">
            <img className="nav-logo" src="/images/Logo.webp" alt="JPTS logo" />
            JESSE PAJUÄÄR THERAPY STUDIOS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/services" className="navbar-link">
                Services
              </Nav.Link>
              <Nav.Link href="/about" className="navbar-link">
                About
              </Nav.Link>
              <Nav.Link href="/contact" className="navbar-link">
                Contact
              </Nav.Link>
              <Nav.Link href="/resources" className="navbar-link">
                Help & Resources
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                className="navbar-link client-portal-link"
                href="https://jpts.noustalk.com/login"
                target="_blank"
                rel="noreferrer"
              >
                <span>NousTalk </span> Client Portal{" "}
                <FontAwesomeIcon icon={faArrowsTurnRight} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
