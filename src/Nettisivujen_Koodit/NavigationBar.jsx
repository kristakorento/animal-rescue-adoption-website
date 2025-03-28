import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Animal Rescue</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Adoption" id="basic-nav-dropdown">
              <LinkContainer to="/info-guides">
                <NavDropdown.Item>Info Guides</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/policies">
                <NavDropdown.Item>Policies</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/fees-and-process">
                <NavDropdown.Item>Fees & Process</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/faq">
                <NavDropdown.Item>FAQ</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="trial-adoption">
                <NavDropdown.Item>Trial Adoption</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/dog-profiles">
              <Nav.Link>Dog Profiles</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Contact Details" id="basic-nav-dropdown">
              <LinkContainer to="/pre-approval">
                <NavDropdown.Item>Pre-Approval</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/privacy-policy">
                <NavDropdown.Item>Privacy Policy</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/blogs">
              <Nav.Link>Blogs</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;