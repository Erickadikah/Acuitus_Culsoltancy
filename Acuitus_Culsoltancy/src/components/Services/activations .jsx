import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "../../assets/animation/branding2.json";
import Navbar from "../../components/landingPage/nav";
import "../../assets/styles/services/research.scss";
import AboutFooter from "../../components/landingPage/aboutFooter";
import ImageComponent from "./imagesRender";

export default function Activations () {
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
              n a rapidly evolving business landscape, effective marketing is
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
            Marketing areas that we focus on:
          </h1>
          <ul className="myblist">
            <li className="my-li">Compelling Narratives</li>
            <p className="my-p">
              In the age of information overload, storytelling is a powerful
              tool. We help you weave compelling narratives that captivate your
              audience and establish a meaningful connection. Our creative team
              combines expertise in content creation, design, and communication
              to convey your brand's values, vision, and offerings in a way that
              resonates with authenticity and emotion.
            </p>
            <li className="my-li">Multichannel Approach</li>
            <p className="my-p">
              The modern consumer engages with brands through various
              touchpoints. Our marketing strategies encompass a multichannel
              approach, leveraging platforms such as social media, digital
              advertising, content marketing, email campaigns, and more. This
              ensures that your message reaches your audience where they are,
              enhancing visibility and engagement.
            </p>
            <li className="my-li">Data-Driven Insights</li>
            <p className="my-p">
              Data forms the foundation of effective marketing strategies. We
              employ advanced analytics and tracking tools to gather valuable
              insights about campaign performance. This data-driven approach
              allows us to make informed refinements and optimizations, ensuring
              that your marketing efforts continually evolve to meet changing
              market dynamics.
            </p>
            <li className="my-li">Measurable Impact</li>
            <p className="my-p">
              Our commitment to results is unwavering. We establish key
              performance indicators (KPIs) to measure the impact of each
              marketing campaign. Whether it's brand awareness, lead generation,
              or customer engagement, we provide you with clear metrics that
              demonstrate the effectiveness of our strategies.
            </p>
          </ul>
          <p className="my-p">
            At Acuitus Duo, marketing isn't just about promoting your brand –
            it's about creating meaningful connections, driving engagement, and
            fostering loyalty. Our tailored strategies are designed to propel
            your brand forward in a competitive landscape, making an indelible
            mark on your audience and achieving sustainable growth. Let's
            collaborate to unlock the full potential of your brand through
            strategic and impactful marketing initiatives.
          </p>
        </div>
        {/*<ImageComponent />*/}
        <AboutFooter />
      </div>
    </>
  );
}
