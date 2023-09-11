import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "../../assets/animation/branding2.json";
import Navbar from "../../components/landingPage/nav";
import "../../assets/styles/services/branding.scss";
import AboutFooter from "../../components/landingPage/aboutFooter";
import ImageComponent from "./imagesRender";
import Carouselb from "../../components/landingPage/comp/branding-c";
import Foot from "../../components/landingPage/foot"

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
            <h1 className="heading">Branding Services</h1>
            <p className="intro-text">
              Your brand is more than just a logo or a name – it's the essence
              of what you stand for. At Acuitus Duo Company, we understand that
              a strong brand identity is the cornerstone of building a lasting
              impression and establishing meaningful connections. Our
              comprehensive branding services are designed to elevate your brand
              into a distinctive force that resonates with your audience and
              embodies your core values.
            </p>
          </div>
          <ul className="myblist">
            <li className="my-li">Strategic Brand Assessment</li>
            <p className="">
              Our branding experts initiate the process by conducting a thorough
              assessment of your current brand identity. We analyze your
              messaging, visuals, positioning, and market perception. This
              strategic evaluation serves as the foundation for the brand
              transformation journey.
            </p>
            <li className="my-li">Defining Brand Values</li>
            <p className="">
              A powerful brand is built on authenticity and consistency. We
              collaborate closely with you to articulate your brand's values,
              mission, and vision. This process not only reinforces internal
              alignment but also ensures that your brand communicates a clear
              and compelling narrative to the outside world.
            </p>
            <li className="my-li">Visual Identity Refinement</li>
            <p className="">
              The visual components of your brand are your visual ambassadors.
              From logo design to color palettes and typography, we refine and
              enhance these elements to align with your brand's personality and
              resonate with your target audience. Storytelling through Branding:
              Your brand story is what makes you relatable and relatable. We
              help you craft a compelling brand story that goes beyond features
              and benefits, connecting on an emotional level with your audience.
              This narrative enriches the brand experience, fostering deeper
              connections and loyalty.
            </p>
            <li className="my-li">Multichannel Brand Consistency</li>
            <p className="">
              A consistent brand presence across all touchpoints is essential
              for brand recognition. We ensure that your brand identity is
              seamlessly integrated into every aspect of your organization, from
              marketing materials and website design to social media and
              customer interactions.
            </p>
            <li className="my-li">Engaging Brand Experiences</li>
            <p className="">
              We create strategies that drive meaningful engagement and
              interaction with your audience. These strategies range from
              experiential marketing initiatives to creating memorable brand
              moments that leave a lasting impact.
            </p>
            <li className="my-li">Brand Evolution</li>
            <p className="">
              As your organization evolves, so should your brand. We offer
              ongoing support to adapt your brand identity to changing market
              dynamics, ensuring that your brand remains relevant, innovative,
              and captivating.
            </p>
          </ul>
          <p className="">
            At Acuitus Duo, we're not just crafting logos – we're building brand
            legacies. Our branding services are a fusion of creativity,
            strategy, and innovation, aimed at shaping a brand identity that
            becomes an enduring symbol of your excellence. Let us join forces to
            create a brand that not only stands out but also leaves an indelible
            mark on your industry and audience.
          </p>
        </div>
        <div className="carosel-br">
        <Carouselb />
        </div>
        <AboutFooter />
        <Foot />
      </div>
    </>
  );
}
