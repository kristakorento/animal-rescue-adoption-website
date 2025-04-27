import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/images/logo-ympyrä.png"
import "../Nettisivujen_Tyylit/NavigationBar.css";

const NavigationBar = () => {
  const [adoptionOpen, setAdoptionOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  //Change hover effect on dropdowns based on screen size
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

  //Close dropdowns when clicking outside
  const handleDropdownClick = (dropdown) => {
    if (dropdown === "adoption") {
      setAdoptionOpen(!adoptionOpen);
      setContactOpen(false);
    } else if (dropdown === "contact") {
      setContactOpen(!contactOpen);
      setAdoptionOpen(false);
    }
  };

  const handleTitleClick = () => {
    setExpanded(false); // Close the burger menu when a title is clicked
    setAdoptionOpen(false); // Close all dropdowns
    setContactOpen(false);
  };

  const handlePageClick = () => {
    setExpanded(false); // Close the burger menu when a page is clicked
    setAdoptionOpen(false); // Close all dropdowns
    setContactOpen(false);
  };

  return (
    <Navbar expand="lg" className="nav-bg-color py-1" expanded={expanded}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              alt="Hope Tails Logo"
              style={{ height: "40px" }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" onSelect={handlePageClick} activeKey="/">
            <LinkContainer to="/">
              <Nav.Link className="nav-title">Home</Nav.Link>
            </LinkContainer>

            {/* Adoption Section */}
            <NavDropdown
              title={
                <>
                  <Link
                    to="/adoption"
                    className="dropdown-title"
                    onClick={handleTitleClick}
                  >
                    Adoption
                  </Link>
                  <Button
                    className="dropdown-toggle-button"
                    onClick={(e) => {
                      e.preventDefault()
                      handleDropdownClick("adoption")
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
                <NavDropdown.Item onClick={handlePageClick}>
                  Info & Guides
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/adoption/policies">
                <NavDropdown.Item onClick={handlePageClick}>
                  Policies
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/adoption/fees-and-process">
                <NavDropdown.Item onClick={handlePageClick}>
                  Fees & Process
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/adoption/faq">
                <NavDropdown.Item onClick={handlePageClick}>
                  FAQ
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/adoption/trial-adoption">
                <NavDropdown.Item onClick={handlePageClick}>
                  Trial Adoption
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/dog-profiles">
              <Nav.Link className="nav-title" onClick={handlePageClick}>
                Dogs
              </Nav.Link>
            </LinkContainer>

            {/* Contact Details Section */}
            <NavDropdown
              title={
                <>
                  <Link
                    to="/contact-details"
                    className="dropdown-title"
                    onClick={handleTitleClick}
                  >
                    Contact Details
                  </Link>
                  <Button
                    className="dropdown-toggle-button"
                    onClick={(e) => {
                      e.preventDefault()
                      handleDropdownClick("contact");
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
                <NavDropdown.Item onClick={handlePageClick}>
                  Privacy Policy
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/blogs">
              <Nav.Link className="nav-title" onClick={handlePageClick}>Blog</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
