import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "../../assets/animation/branding2.json";
import Navbar from "../../components/landingPage/nav";
import "../../assets/styles/services/research.scss";
import AboutFooter from "../../components/landingPage/aboutFooter";
import ImageComponent from "./imagesRender";

export default function Research() {
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
                Research
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
              Research Services
            </h1>
            <p className="intro-text">
              We provide insights that help you make informed decisions. Our
              comprehensive research services encompass Product research, Market
              research, and Needs assessment. These services offer a deeper
              understanding of your industry, enabling you to stay ahead of the
              curve and respond effectively to changing landscapes.
              Additionally, we offer monitoring and evaluation services to track
              and measure the impact of your initiatives, ensuring your
              strategies remain aligned with your goals.
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
            Our strategy research services cover the following areas:
          </h1>
          <ul className="myblist">
            <li className="my-li">Product Research</li>
            <p className="my-p">
              In the realm of product research, we delve into understanding the
              specific offerings your organization brings to the market. This
              involves analyzing the features, benefits, and unique selling
              points of your products. Through comprehensive product research,
              we help you refine and optimize your offerings, ensuring they meet
              the needs and preferences of your target audience. This process
              allows you to create products that stand out and resonate within
              your industry.
            </p>
            <li className="my-li">Market Research</li>
            <p className="my-p">
              Market research involves a deep exploration of the market
              landscape in which your organization operates. We gather data and
              insights about your industry, competitors, trends, customer
              behavior, and market dynamics. This information is crucial for
              identifying opportunities, potential challenges, and areas for
              growth. By conducting thorough market research, we enable you to
              make strategic decisions based on a solid understanding of the
              market's current and future conditions
            </p>
            <li className="my-li">Needs Assessment</li>
            <p className="my-p">
              Needs assessment focuses on identifying the specific requirements
              and gaps within your target audience or community. By engaging
              with stakeholders and conducting surveys or interviews, we gain
              insights into the needs, preferences, and challenges of the people
              you aim to serve. This information guides the development of
              tailored solutions and strategies that address these needs
              effectively. Needs assessment ensures that your efforts are
              aligned with the real demands of your audience, enhancing the
              impact of your initiatives.
            </p>
            <li className="my-li">Monitoring and Evaluation</li>
            <p className="my-p">
              Our monitoring and evaluation services are designed to track the
              progress and effectiveness of your projects or programs over time.
              We establish key performance indicators (KPIs) and benchmarks to
              measure success and impact. Regular monitoring allows us to
              identify any deviations from the intended outcomes, enabling
              timely adjustments and improvements. Through rigorous evaluation,
              we provide you with a comprehensive understanding of the results
              achieved, facilitating data-driven decision-making and continuous
              enhancement..
            </p>
          </ul>
          <p className="my-p">
            At Acuitus Duo Company, our research services serve as a cornerstone
            for informed decision-making, strategic planning, and sustainable
            growth. By offering expertise in product research, market research,
            needs assessment, and monitoring and evaluation, we equip you with
            the insights needed to excel in your endeavors.
          </p>
        </div>
        {/*<ImageComponent />*/}
        <AboutFooter />
      </div>
    </>
  );
}
