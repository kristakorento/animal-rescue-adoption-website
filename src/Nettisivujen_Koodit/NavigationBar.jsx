import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "../Nettisivujen_Tyylit/NavigationBar.css";

const NavigationBar = () => {
  const [adoptionOpen, setAdoptionOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Hope Tails</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            {/* Adoption Section */}
            <NavDropdown
              title={
                <Link to="/adoption" className="dropdown-title">
                  Adoption
                </Link>
              }
              id="adoption-dropdown"
              show={adoptionOpen}
              onMouseEnter={() => setAdoptionOpen(true)}
              onMouseLeave={() => setAdoptionOpen(false)}
            >
              <LinkContainer to="/adoption/info-guides">
                <NavDropdown.Item>Info Guides</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/adoption/policies">
                <NavDropdown.Item>Policies</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/adoption/fees-and-process">
                <NavDropdown.Item>Fees & Process</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/adoption/faq">
                <NavDropdown.Item>FAQ</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/adoption/trial-adoption">
                <NavDropdown.Item>Trial Adoption</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/dog-profiles">
              <Nav.Link>Dog Profiles</Nav.Link>
            </LinkContainer>

            {/* Contact Details Section */}
            <NavDropdown
              title={
                <Link to="/contact-details" className="dropdown-title">
                  Contact Details
                </Link>
              }
              id="contact-dropdown"
              show={contactOpen}
              onMouseEnter={() => setContactOpen(true)}
              onMouseLeave={() => setContactOpen(false)}
            >
              <LinkContainer to="/contact-details/pre-approval">
                <NavDropdown.Item>Pre-Approval</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/contact-details/privacy-policy">
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
