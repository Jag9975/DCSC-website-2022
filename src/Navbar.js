import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import navLogo from "./assets/nav-logo.png";
import './index.css';

function Navigation() {
  return (
    <Navbar className="navbar" bg="dark" expand="lg" variant="dark">
      <Container className="navbar-container">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={navLogo}
            width="50"
            height="50"
            className="d-inline-block align-top brand-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse collapseOnSelect>
          <Nav
            className="me-auto nav-links justify-content-end"
            style={{ width: "100%" }}
          >
            <Nav.Link style={{paddingLeft: "30px", paddingRight: "30px"}} href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link style={{paddingLeft: "30px", paddingRight: "30px"}} href="/events" className="nav-link">Events</Nav.Link>
            <Nav.Link style={{paddingLeft: "30px", paddingRight: "30px"}} href="/aboutus" className="nav-link">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
