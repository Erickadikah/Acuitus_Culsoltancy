import React from "react";
import "../../assets/styles/landingPage/about.scss";
import heroImage2 from "../../assets/images/landingPage/image1.jpg";
import PageFooter from "./pagefooter";
import Missions from "./missions"
import AboutFooter from "./aboutFooter"
import Navbar from "./nav";

const About = () => {
  return (
    <>
    <Navbar />
    <div className="about">
    <div className="header">
      <h1 className="header-text">About Us</h1>
      <p>
      GROW WITH US
      </p>
      </div>
      <div>
  {/*<div className="div-1">
    <img src={heroImage2} className="about-image" alt="About us" />
  </div>*/}
  <div className="content">
    <h6 className="text-center">OUR SOLID BACKGROUND ON AGRIBUSINESS</h6>
    <h1 className="text-center heading">
      Get to know about <span className="highlight">our company</span>
    </h1>
   <div className="text-container">
  <p className="intro-text">
  Established with a vision to catalyze progress,
  Acuitus Duo Company brings together a team of seasoned professionals driven by a passion for making a meaningful impact. With a wealth of expertise across diverse sectors, we are dedicated to crafting tailored solutions that resonate with authenticity and creativity
  </p>
  <p className="main-text">
    We offer programs and services that integrate small-holder farmers and agro enterprises into the agricultural value chain that bring empowerment to the youth and women in agribusiness. In collaboration with other stakeholders such as the County and National Government service providers, agricultural organizations, and cooperatives, we work directly with the smallholder farmers and micro enterprises to provide Business Development Agribusiness Development services, rural agricultural finance options (community-managed microfinance) training and linkage of farmers to formal financial institutions and markets for access of farm inputs and produce market.
  </p>

  <button href='/services' className="btn-s">
   View Our Services
  </button>
</div>
  </div>
</div>
    <Missions />
    <AboutFooter />
    </div>
    </>
  );
};

export default About;
