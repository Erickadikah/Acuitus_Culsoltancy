import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "../../assets/animation/branding2.json";
import Navbar from "../landingPage/nav";
import "../../assets/styles/services/activation-c.scss";
import AboutFooter from "../landingPage/aboutFooter";
// import ImageComponent from "./imagesRender";
import CarouselCard from "../landingPage/comp/carousel";

export default function Activations() {
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
      <div className="activation-body">
        <Navbar />
        <div className="activation-header">
          <div className="activation-background-layer">
            <div className="activation-content">
              <h1
                className="headerh1"
                style={{
                  fontSize: "2.5rem",
                }}
              >
                Activations
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
              Activations
            </h1>
            <p className="intro-text">
              In a rapidly evolving business landscape, effective marketing is
              the cornerstone of success. At Acuitus consultancy, we specialize
              in crafting holistic marketing strategies that not only cater to
              your unique needs but also create a lasting impact. Our approach
              is centered on a deep understanding of your brand, audience, and
              objectives, allowing us to develop strategies that resonate and
              drive results. Strategic Planning: Our marketing experts work
              closely with you to chart out a strategic roadmap that aligns with
              your goals. We analyze market trends, consumer behavior, and
              competitive landscapes to identify opportunities for
              differentiation and growth. This planning phase ensures that every
              marketing effort is purposeful and directed towards achieving
              tangible outcomes.
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
            Activations areas that we focus on:
          </h1>
          <ul className="myblist">
            <li className="my-li">Product Launch Activations</li>
            <p className="my-p">
              We specialize in creating buzz and excitement around new products.
              From dynamic launch events to interactive demonstrations, we
              ensure that your product grabs the attention it deserves and
              resonates with your target audience.
            </p>
            <li className="my-li">Brand Experience Centers</li>
            <p className="my-p">
              Imagine a space that brings your brand to life – a physical or
              virtual environment where customers can immerse themselves in your
              brand's story, values, and offerings. We design and execute brand
              experience centers that leave a lasting impact.
            </p>
            <li className="my-li">Influencer Collaborations</li>
            <p className="my-p">
              Leveraging the power of influencers can amplify your brand's
              reach. We collaborate with influencers who align with your values,
              creating memorable activations that showcase your products or
              services to their engaged audiences.
            </p>
            <li className="my-li">Community Engagement Initiatives</li>
            <p className="my-p">
              Engaging with the community can establish strong connections and
              build loyalty. We design activations that foster meaningful
              relationships with your local audience through events, workshops,
              and initiatives that give back.
            </p>
            <li className="my-li">Digital Experiences</li>
            <p className="my-p">
              The virtual realm offers endless possibilities for activations.
              Whether it's a virtual launch, webinar, or immersive online
              experience, we leverage digital platforms to create engaging moments
              that transcend physical boundaries.
            </p>
            <li className="my-li">Measurement and Analysis</li>
            <p className="my-p">
              Our Activation service doesn't end with the event itself. We analyze
              the impact and effectiveness of the experience, measuring key
              performance indicators to gauge success and refine strategies for
              the future.
            </p>
          </ul>
          <p className="my-p">
            Whether it's launching a new product, unveiling a brand, or sparking
            community engagement, our Activation service is designed to create
            moments that transcend the ordinary. With a blend of strategy,
            creativity, and precision, we craft experiences that not only align
            with your vision but also ignite excitement and foster meaningful
            connections. Let us turn your ideas into vibrant realities through
            our expert Activation service.
          </p>
        </div>
        <div className="carousel-card">
          <CarouselCard />
        </div>
        <AboutFooter />
      </div>
    </>
  );
}
