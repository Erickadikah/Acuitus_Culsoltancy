import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.css"
import logo from "../../assets/images/landingPage/logo.png";

export default function LandingNavBar() {
  return (
    <header>
    <nav className="navbar navbar-expand-xl navbar-dark bg-white fixed-top" style={{
          paddingLeft: "10px",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}>
        <a className="navbar-brand text-info" rel="noopener" href="#" style={{ display: 'flex'}}>
        <img src={logo} alt="Acuitus Consultancy Logo" width="40" height="40" class="d-inline-block align-top"/>
        <h6 className="heading" style={{
          fontWeight: "900",
          fontSize: "20px",
          marginTop: "10px",
          marginLeft: "10px",
        }}>Acuitus Consultancy</h6>
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
          <HiOutlineMenu style={{
            color: 'black'
          }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft: '10%' }}>
  <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" rel="noopener" href="#" style={{ color: 'black', fontSize: '16px' }}>
        Home
      </a>
    </li>
    {/* ... other navigation items ... */}
    <li className="nav-item">
      <a className="nav-link" rel="noopener" href="/about" style={{ color: 'black', fontSize: '16px'}}>
        About Us
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" rel="noopener" href="/services" style={{ color: 'black', fontSize: '16px'}}>
        Our Services
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" rel="noopener" href="#" style={{ color: 'black', fontSize: '16px' }}>
        Contact Us
      </a>
    </li>
    <li className="nav-item">
      <div className="btn-group" style={{ position: "fixed", right: "30px" }}>
        <button className="btn btn-primary btn-sm ">
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
