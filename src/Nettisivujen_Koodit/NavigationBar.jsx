import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Hope Tails Rescue ry</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="adoptionDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Adoption
              </a>
              <ul className="dropdown-menu" aria-labelledby="adoptionDropdown">
                <li>
                  <Link className="dropdown-item" to="/adoption/info-guides">Info and Guides</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/adoption/policies">Policies</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/adoption/fees-and-process">Fees and Process</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/adoption/faq">FAQ</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/adoption/trial-adoption">Trial Adoption</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dog-profiles">Dog Profiles</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="contanctDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact Details
              </a>
              <ul className="dropdown-menu" aria-labelledby="contactDropdown">
                <li>
                  <Link className="dropdown-item" to="/contact/pre-approval">Pre Approval</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
              </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;