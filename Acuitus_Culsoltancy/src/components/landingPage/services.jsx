import React from "react";
import Navbar from "./nav";
import "../../assets/styles/landingPage/services.scss";
import Card from "./services-card";
import ContactUs from "./contactUs";
// import Footer from "./footer";
// import Contactform from "./contactForm";
import AboutFooter from "./aboutFooter";

const Services = () => {
  return (
    <>
    <Navbar />
    <div className="service-header">
      <div className="background-layer">
        <div className="content">
          <h1>Our Services</h1>
          <p>GROW WITH US</p>
        </div>
      </div>
    </div>
    <div>
    <div className="services">
    <Card />
    </div> 
    </div>
    <AboutFooter />
    </>
  );
};

export default Services;
// Services
// <Navbar />
