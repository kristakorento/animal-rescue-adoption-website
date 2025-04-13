import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "../Nettisivujen_Tyylit/NavigationBar.css";

const NavigationBar = () => {
  const [adoptionOpen, setAdoptionOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Navbar expand="lg" className="nav-bg-color py-1">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Hope Tails</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link className="nav-title">Home</Nav.Link>
            </LinkContainer>

            {/* Adoption Section */}
            <NavDropdown
              title={
                <>
                  <Link to="/adoption" className="dropdown-title">
                    Adoption
                  </Link>
                  <Button
                    className="dropdown-toggle-button"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation
                      setAdoptionOpen(!adoptionOpen);
                    }}
                  >
                    ▼
                  </Button>
                </>
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
              <Nav.Link className="nav-title">Dog Profiles</Nav.Link>
            </LinkContainer>

            {/* Contact Details Section */}
            <NavDropdown
              title={
                <>
                  <Link to="/contact-details" className="dropdown-title">
                    Contact Details
                  </Link>
                  <Button
                    className="dropdown-toggle-button"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation
                      setContactOpen(!contactOpen);
                    }}
                  >
                    ▼
                  </Button>
                </>
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
              <Nav.Link className="nav-title">Blogs</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
