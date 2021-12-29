import React from "react";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar expand="sm" style={{backgroundColor:"pink"}}>
      <Navbar.Brand href="/">Swarns Kollection</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/"> Home </Nav.Link>
          <Nav.Link href="/contactus"> Contact Us </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
