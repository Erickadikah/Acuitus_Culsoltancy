import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/images/landingPage/logo100.svg";

export default function LandingNavBar() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-white fixed-top"
        style={{
          paddingLeft: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <a
          className="navbar-brand text-info"
          rel="noopener"
          href="/"
          style={{ display: "flex" }}
        >
          <img
            src={logo}
            alt="Acuitus Consultancy Logo"
            width="250"
            height="55"
            class="d-inline-block align-top"
          />
          {/*<h6
            className="heading"
            style={{
              fontWeight: "900",
              fontSize: "18px",
              marginTop: "10px",
              marginLeft: "10px",
              color: `rgb(0,208,132)`,
            }}
          >
            Acuitus Consultancy
          </h6>*/}
          {/*<p>
            <span>
              <small
                className="text-muted"
                style={{ fontSize: "9px", marginBottom: "5px" }}
              >
                <i>GROW your business TODAY</i>
              </small>
            </span>
          </p>*/}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ marginRight: "30px", border: 0, outline: "none" }}
        >
          <HiOutlineMenu
            style={{
              color: "black",
            }}
          />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ marginLeft: "10%" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link"
                rel="noopener"
                href="/"
                style={{ color: "black", fontSize: "14px" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="ChooseUs"
                rel="noopener"
                role="button"
                href="/about"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "black", fontSize: "14px" }}
              >
                About Us
              </a>
              <div className="dropdown-menu" aria-labelledby="ChooseUs">
                <a className="dropdown-item" href="/about">
                  Who We Are
                </a>
                <a className="dropdown-item" href="/projects">
                Projects
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                rel="noopener"
                href="/services"
                style={{ color: "black", fontSize: "14px" }}
              >
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                rel="noopener"
                href="/contactUs"
                style={{ color: "black", fontSize: "14px" }}
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                rel="noopener"
                href="/blog"
                style={{ color: "black", fontSize: "14px" }}
              >
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <div
                className="btn-group"
                style={{ position: "fixed", right: "30px" }}>
                <button
                  className="btn btn-primary btn-sm"
                  style={{
                    backgroundColor: "rgb(0, 208, 132)",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  <a
                    rel="noopener"
                    href="mailto:acuitusduo@gmail.com"
                    className="text-decoration-none text-light">
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
