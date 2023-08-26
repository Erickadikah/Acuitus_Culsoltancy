import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.css"

export default function LandingNavBar() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-lg" style={{ paddingLeft: "10px" }}>
        <a className="navbar-brand text-info" rel="noopener" href="#">
          <b>Acuitus Duo Consultancy Firm.</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{marginRight: "30px", border: 0, outline: "none"}}
        >
          <HiOutlineMenu />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft: '10%' }}>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" rel="noopener" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="webDevelopmentDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Our Services
              </a>
              <div className="dropdown-menu shadow-lg border-0" aria-labelledby="webDevelopmentDropdown" >
                <a className="dropdown-item" href="#">
                  Project Management
                </a>
                <a className="dropdown-item" href="#">
                  Data
                </a>
                <a className="dropdown-item" href="#">
                  Social Media Management
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="solutionsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Solutions
              </a>
              <div className="dropdown-menu shadow-lg border-0" aria-labelledby="solutionsDropdown">
                <a className="dropdown-item" href="#">
                  Custom Software Development
                </a>
                <a className="dropdown-item" href="#">
                  Enterprise Solutions
                </a>
                <a className="dropdown-item" href="#">
                  Cloud Services
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" rel="noopener" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" rel="noopener" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <div className="btn-group" style={{ position: "fixed", right: "30px" }}>
                <button className="btn btn-primary btn-sm">
                  <a rel="noopener" href="#" className="text-decoration-none text-light">
                    Talk to Us
                  </a>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
