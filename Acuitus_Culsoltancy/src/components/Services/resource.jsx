import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "../../assets/animation/branding2.json";
import Navbar from "../../components/landingPage/nav";
import "../../assets/styles/services/research.scss";
import AboutFooter from "../../components/landingPage/aboutFooter";
import ImageComponent from "./imagesRender";

export default function Resource() {
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
                Resource Mobilization
              </h1>
              <p
                style={{
                  fontSize: "1rem",
                }}
              >
                WORK WITH US TODAY!
              </p>
            </div>
          </div>
        </div>
        <div className="spliter">
          <div className="text-cont">
            <h1
              className="heading text-center"
              style={{
                marginBottom: "1rem",
                color: "rgb(0,70,95)",
                fontWeight: "bold",
              }}
            >
              Resource Mobilization
            </h1>
            <p className="intro-text">
              In the pursuit of growth, securing the necessary resources is a
              pivotal step. At Acuitus Duo Company, we excel in crafting
              resource mobilization strategies that not only facilitate access
              to vital resources but also lay the groundwork for sustainable
              development. Our approach to resource mobilization is a carefully
              orchestrated process that harnesses expertise, connections, and
              innovation. We work closely with you to understand your goals and
              develop a strategy that aligns with your vision. Our team of
              experts then implements the strategy, leveraging our extensive
              network of partners and stakeholders to secure the resources you
              need. We also provide ongoing support to ensure that your resource
              mobilization efforts continue to deliver results.
            </p>
          </div>
          <h1
            className="headerh1"
            style={{
              marginTop: "2rem",
              color: "rgb(0,70,95)",
              fontWeight: "bold",
            }}
          >
            Resource mobilization areas that we focus on:
          </h1>
          <ul className="myblist">
            <li className="my-li">Compelling Narratives</li>
            <p className="">
              In the age of information overload, storytelling is a powerful
              tool. We help you weave compelling narratives that captivate your
              audience and establish a meaningful connection. Our creative team
              combines expertise in content creation, design, and communication
              to convey your brand's values, vision, and offerings in a way that
              resonates with authenticity and emotion.
            </p>
            <li className="my-li">Strategic Assessment</li>
            <p className="">
              Our resource mobilization experts begin by conducting a
              comprehensive assessment of your organization's needs, objectives,
              and growth plans. This strategic evaluation forms the foundation
              for devising tailored resource mobilization strategies that align
              with your vision.
            </p>
            <li className="my-li">Partnership Cultivation</li>
            <p className="">
              Leveraging our extensive network, we identify and cultivate
              partnerships with organizations, institutions, and individuals who
              share a vested interest in your success. These partnerships extend
              beyond financial backing to encompass knowledge-sharing,
              mentorship, and collaborative initiatives that amplify your
              impact.
            </p>
            <li className="my-li">Investor Engagement:</li>
            <p className="">
              Our team engages with potential investors who are aligned with
              your mission and values. We craft compelling pitches and
              presentations that effectively communicate the potential and value
              proposition of your initiatives. This personalized approach
              fosters meaningful connections that go beyond financial support,
              creating a network of advocates for your cause.
            </p>
            <li className="my-li">Opportunity Identification</li>
            <p className="">
              Resource mobilization isn't just about funds; it's about
              leveraging opportunities that contribute to your growth. We
              proactively identify grants, competitions, and programs that
              provide a platform for showcasing your work and accessing valuable
              resources.
            </p>
          </ul>
          <p className="">
            By entrusting Acuitus Duo with your resource mobilization needs,
            you're tapping into a wealth of strategic insight, an expansive
            network, and a commitment to your organization's growth. Our
            resource mobilization strategies are a collaborative journey,
            designed to open doors, spark innovation, and drive sustainable
            progress. Let's embark on this journey together, turning your
            aspirations into reality through effective resource mobilization.
          </p>
        </div>
        {/*<ImageComponent />*/}
        <AboutFooter />
      </div>
    </>
  );
}
