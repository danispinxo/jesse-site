import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function TopNavbar () {
  return (
    <div>
    <Navbar className="navbar">
      <Container fluid>
        <Navbar.Toggle className="toggle-btn" aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" >
            <Nav.Link >
              Home
            </Nav.Link>

            <Nav.Link >
              Services
            </Nav.Link>

            <Nav.Link >
              About
            </Nav.Link>

            <Nav.Link >
              Contact
            </Nav.Link>

            <Nav.Link >
              Help & Resources
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
};