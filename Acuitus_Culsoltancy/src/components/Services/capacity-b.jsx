import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "../../assets/animation/branding2.json";
import Navbar from "../../components/landingPage/nav";
import "../../assets/styles/services/branding.scss";
import AboutFooter from "../../components/landingPage/aboutFooter";
import ImageComponent from "./imagesRender";

export default function Capacity() {
  const container = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    // Return a cleanup function to stop the animation when the component unmounts
    return () => {
      animation.destroy();
    };
  }, []); // Empty dependency array to run the effect once

  return (
    <>
      <div className="brand-body">
        <Navbar />
        <div className="branding-header">
          <div className="branding-background-layer">
            <div className="branding-content">
              <h1
                className="headerh1"
                style={{
                  fontSize: "2.5rem",
                }}
              >
                Branding
              </h1>
              <p
                style={{
                  fontSize: "1rem",
                }}
              >
                GROW WITH US TODAY!
              </p>
            </div>
          </div>
        </div>
        <div className="spliter">
          <div className="text-cont">
            <h1 className="heading">Capacity Building</h1>
            <p className="intro-text">
              Our expertise extends to a wide spectrum of training and
              mentorship programs that cover critical areas such as
              Agribusiness, Value Addition, Financial Literacy, Business
              Development, Technology integration, Market Analysis, Financial
              Literacy,Linkages, Climate change and Disaster management,
              Leadership and Healthcare Education. We also provide financial and
              market linkages, facilitating connections between groups and
              financial institutions as well as markets for their products.
              Acuitus Duo Company excels in capacity building, having
              successfully trained diverse groups such as Village Savings and
              Loan Associations, Farmer Service Centers, business groups, and
              entrepreneurs, among others. With our experienced trainers guiding
              the way, our capacity-building initiatives empower individuals and
              organizations to achieve sustained growth and excellence. We
              believe in equipping you with the knowledge and skills needed to
              navigate complex challenges and seize new opportunities.
            </p>
          </div>
          </div>
        <ImageComponent />
        <AboutFooter />
      </div>
    </>
  );
}
