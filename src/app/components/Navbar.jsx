"use client";
import { Nav, Container, Navbar } from "react-bootstrap";
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
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/resources">Help & Resources</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="https://oab.owlpractice.ca/jpts"
                target="_blank"
                rel="noreferrer"
              >
                Client Portal
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
