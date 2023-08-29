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
      <div className="holder-2">
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
    We are a Kenyan Agribusiness Consultancy firm with top-notch Consultancy, Training, and Research. We are renowned Agribusiness experts in financial inclusion, Capacity Building, Business Development Coaching, Enterprise development. Our offices are based in Nairobi. Our mission is to transform the agricultural sector into a profitable venture through capacity building of small-holder farmers and related Micro, small and medium enterprises (MSMEs). We also focus on strengthening rural agricultural finance options suitable and viable for smallholder farmers.
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
