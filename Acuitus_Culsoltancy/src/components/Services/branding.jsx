import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "../../assets/animation/branding2.json";
import Navbar from "../../components/landingPage/nav";
import "../../assets/styles/services/branding.scss";
import AboutFooter from "../../components/landingPage/aboutFooter"
import ImageComponent from "./imagesRender"

export default function Branding() {
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
    <div className="service-header">
      <div className="background-layer">
        <div className="content">
          <h1
            className="headerh1"
            style={{
              fontSize: "2.5rem",
            }}
          >
            Branding Services
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
      <div
        className="container"
        ref={container}
      ></div>
      <div className="text-cont">
      <h1 className="heading">Branding Services</h1>
        <p className="intro-text">
          At Acuitus Duo, we're not just crafting logos – we're building brand
          legacies. Our branding services are a fusion of creativity,
          strategy, and innovation, aimed at shaping a brand identity that
          becomes an enduring symbol of your excellence. Let us join forces to
          create a brand that not only stands out but also leaves an indelible
          mark on your industry and audience.
          With our branding services, we help you create a brand identity that
          is unique, memorable, and timeless. We help you build a brand that
          is not only a symbol of your excellence but also a reflection of the
          values you stand for. Our branding services are a fusion of
          creativity, strategy, and innovation, aimed at shaping a brand
          
          With our branding services, we help you create a brand identity that
          is unique, memorable, and timeless. We help you build a brand that
          is not only a symbol of your excellence but also a reflection of the
          values you stand for. Our branding services are a fusion of
          creativity, strategy, and innovation, aimed at shaping a brand
        </p>
      </div>
    </div>
    <ImageComponent />
    <AboutFooter />
    </div>
    </>
  );
}

// export default Branding
