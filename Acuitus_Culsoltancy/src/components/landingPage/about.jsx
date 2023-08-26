import React from "react";
import "../../assets/styles/landingPage/about.scss";
import heroImage2 from "../../assets/images/landingPage/masaai.jpg";
import PageFooter from "./pagefooter";
import Missions from "./missions"
import AboutFooter from "./aboutFooter"

const About = () => {
  return (
    <div className="about">
    <div className="header">
      <h1 className="header-text">About Us</h1>
      <p>
      GROWING YOUR BUSINESS IN AFRICA
      </p>
      </div>
      <div className="holder-2">
      <div className="div-1">
      <img src={heroImage2} className="about-image" />
      </div>
      <div className="content">
    <h6 className="text-center" style={{
        marginTop: '50px',
        fontWeight: 'bolder'
      }}>OUR SOLID BACKGROUND ON AGRIBUSINESS</h6>
      <h1 className="text-center heading">
      Get to know about <span style={{
            color: `rgb(0,208,132)`,
            fontSize: '24px'
        }}> our company</span>
      </h1>
      <p className="text">
      We offer programs and services that integrate small-holder farmers and agro enterprises into the agricultural value chain that bring empowerment to the youth and women in agribusiness. In collaboration with other stakeholders such as the County and National Government service providers, agricultural organizations, and cooperatives,
      we work directly with the smallholder farmers and micro enterprises to provide Business Development
      </p>
      <br />
      <p className="text">
        Agribusiness Development services, rural agricultural finance options (community-managed microfinance / VSLAs) 
        training and linkage of farmers to formal financial institutions and markets for access of farm inputs and produce market.
      </p>
    </div>
    </div>
    <Missions />
    <AboutFooter />
    </div>
  );
};

export default About;
