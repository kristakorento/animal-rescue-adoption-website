import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/images/Logo-navi.png";
import "../Nettisivujen_Tyylit/NavigationBar.css";

const NavigationBar = () => {
  const [adoptionOpen, setAdoptionOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  const location = useLocation(); // Get the current route

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
    setExpanded(false);
    setAdoptionOpen(false);
    setContactOpen(false);
  };

  const handlePageClick = () => {
    setExpanded(false);
    setAdoptionOpen(false);
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
          <Nav className="ms-auto" onSelect={handlePageClick} activeKey={location.pathname}>
            <LinkContainer to="/">
              <Nav.Link className="nav-title" active={location.pathname === "/"}>
                Home
              </Nav.Link>
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
                      e.preventDefault();
                      handleDropdownClick("adoption");
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
              active={location.pathname.startsWith("/adoption")}
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
              <Nav.Link
                className="nav-title"
                onClick={handlePageClick}
                active={location.pathname === "/dog-profiles"}
              >
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
                      e.preventDefault();
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
              active={location.pathname.startsWith("/contact-details")}
            >
              <LinkContainer to="/contact-details/privacy-policy">
                <NavDropdown.Item onClick={handlePageClick}>
                  Privacy Policy
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/blogs">
              <Nav.Link
                className="nav-title"
                onClick={handlePageClick}
                active={location.pathname === "/blogs"}
              >
                Blog
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;