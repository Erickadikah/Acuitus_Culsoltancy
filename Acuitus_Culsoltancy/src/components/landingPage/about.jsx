import React from "react";
import "../../assets/styles/landingPage/about.scss";
import heroImage2 from "../../assets/images/landingPage/acutuslogo.png";
import PageFooter from "./pagefooter";
import Missions from "./missions";
import AboutFooter from "./aboutFooter";
import Navbar from "./nav";
import Partner from "./partner";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="header">
          <h1 className="header-text">About Us</h1>
          <p
            style={{
              fontSize: "1rem",
            }}
          >
            GROW WITH US
          </p>
        </div>
        <div className="logo-about">
          <div className="cont">
            <h6
              className="text-center"
              style={{
                // marginBottom: "1rem",
                fontSize: "1rem",
              }}
            >
              OUR SOLID BACKGROUND
            </h6>
            <h1 className="header-text heading">
              Get to know about our{" "}
              <span className="highlight">
                <br />
                company
              </span>
            </h1>
              <p className="intro-text">
                Established with a vision to catalyze progress, Acuitus Duo
                Company brings together a team of seasoned professionals driven
                by a passion for making a meaningful impact. With a wealth of
                expertise across diverse sectors, we are dedicated to crafting
                tailored solutions that resonate with authenticity and
                creativity. At the core of our approach lies a deep
                understanding of your unique needs and aspirations. We believe
                in the power of collaboration, harnessing our expertise to
                create strategies, activations, and initiatives that amplify
                your potential and create enduring value.
                <br />
                With a commitment to excellence, integrity, and innovation, we
                are more than service providers – we are partners in your
                journey toward growth and transformation. Whether it's capacity
                building, strategic research, impactful marketing, or resource
                mobilization, our mission is to empower you to reach new
                heights. Join us as we embark on a dynamic journey of discovery,
                progress, and excellence. Our Office is based in Westlands, Nairobi, Kenya.
              </p>
              <div className="contained">
              <h1 className="heading" style={{
                color: 'rgb(0,208,132)'
              }}>Why Choose Us?</h1>
              <ul className="about-ul">
                <li className="about-li">Data Excellence</li>
                <p className="about-p">
                  We specialize in data. Our team comprises data scientists,
                  analysts, and experts who are passionate about transforming
                  raw data into actionable insights.
                </p>
                <li className="about-li">Tailored Solutions:</li>
                <p className="about-p">
                  We understand that your data needs are unique. We work closely
                  with you to customize solutions that align with your business
                  objectives.
                </p>
                <li className="about-li">Cutting-Edge Technology</li>
                <p className="about-p">
                  We leverage the latest tools and technologies to ensure that
                  you have access to the most accurate and up-to-date data.
                </p>
              </ul>
              <h1 className='heading'
               style={{
                color: 'rgb(0,208,132)'
              }}
              >Our Comprehensive Data Services Include</h1>
              <ul className="about-ul">
                <li className="about-li">Data Collection</li>
                <li className="about-li">Data Cleaning</li>
                <li className="about-li">Data Analysis</li>
                <li className="about-li">Data Visualization</li>
                <li className="about-li">Predictive Analytics</li>
              </ul>
              </div>
          </div>
              </div>
        <Missions />
        <Partner />
        <AboutFooter />
      </div>
    </>
  );
};

export default About;
