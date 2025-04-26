import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "../Nettisivujen_Tyylit/NavigationBar.css";

const NavigationBar = () => {
  const [adoptionOpen, setAdoptionOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavSelect = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="nav-bg-color py-1" expanded={expanded}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Hope Tails</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" onSelect={handleNavSelect}>
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
                      e.preventDefault()
                      setAdoptionOpen(!adoptionOpen)
                    }}
                  >
                    ▼
                  </Button>
                </>
              }
              id="adoption-dropdown"
              show={adoptionOpen}
              onMouseEnter={() => isLargeScreen && setAdoptionOpen(true)}
              onMouseLeave={() => isLargeScreen && setAdoptionOpen(false)}
            >
              <LinkContainer to="/adoption/info-guides">
                <NavDropdown.Item onClick={() => setAdoptionOpen(false)}>
                  Info & Guides
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/adoption/policies">
                <NavDropdown.Item onClick={() => setAdoptionOpen(false)}>
                  Policies
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/adoption/fees-and-process">
                <NavDropdown.Item onClick={() => setAdoptionOpen(false)}>
                  Fees & Process
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/adoption/faq">
                <NavDropdown.Item onClick={() => setAdoptionOpen(false)}>
                  FAQ
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/adoption/trial-adoption">
                <NavDropdown.Item onClick={() => setAdoptionOpen(false)}>
                  Trial Adoption
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/dog-profiles">
              <Nav.Link className="nav-title">Dogs</Nav.Link>
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
                      e.preventDefault()
                      setContactOpen(!contactOpen);
                    }}
                  >
                    ▼
                  </Button>
                </>
              }
              id="contact-dropdown"
              show={contactOpen}
              onMouseEnter={() => isLargeScreen && setContactOpen(true)}
              onMouseLeave={() => isLargeScreen && setContactOpen(false)}
            >
              <LinkContainer to="/contact-details/privacy-policy">
                <NavDropdown.Item onClick={() => setContactOpen(false)}>
                  Privacy Policy
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/blogs">
              <Nav.Link className="nav-title">Blog</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
