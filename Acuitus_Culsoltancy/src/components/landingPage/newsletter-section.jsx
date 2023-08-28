import React, { useEffect, useState } from "react";
import heroImage4 from "../../assets/images/landingPage/geet.jpg";
import { FaArrowRight } from "react-icons/fa";
import "../../assets/styles/landingPage/newsletter-section.scss";

export default function NewsLetterSection() {
  const [countersVisible, setCountersVisible] = useState(false);
  const [workHours, setWorkHours] = useState(0);
  const [greatReviews, setGreatReviews] = useState(0);
  const [projectsDone, setProjectsDone] = useState(0);
  const [awardsWon, setAwardsWon] = useState(0);

  useEffect(() => {
    // Start counting up to the target numbers over a period of time
    const targetNumbers = {
      workHours: 700,
      greatReviews: 1080,
      projectsDone: 340,
      awardsWon: 400,
    };
  
  const stepDuration = 10; // Time in milliseconds for each step
    const steps = Math.ceil(targetNumbers.workHours / stepDuration);
    let currentStep = 0;

    const countInterval = setInterval(() => {
      currentStep++;
      setWorkHours(Math.ceil((targetNumbers.workHours / steps) * currentStep));
      setGreatReviews(Math.ceil((targetNumbers.greatReviews / steps) * currentStep));
      setProjectsDone(Math.ceil((targetNumbers.projectsDone / steps) * currentStep));
      setAwardsWon(Math.ceil((targetNumbers.awardsWon / steps) * currentStep));

      if (currentStep === steps) {
        clearInterval(countInterval);
      }
    }, stepDuration);

    // Delay setting countersVisible to true to trigger animations
    const animationTimeout = setTimeout(() => {
      setCountersVisible(true);
    }, stepDuration * steps + 200); // Delay the counter animations accordingly

    return () => {
      clearInterval(countInterval);
      clearTimeout(animationTimeout);
    };
  }, []);
  const styles = {
    background: `rgba(0, 0, 0, 0.8);`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    placeContent: "center",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  };

  const buttonStyles = {
    height: "50px",
    background: `rgb(0,208,132)` /* fallback color */,
    width: "150px",
    border: "none",
    fontSize: "16px",
    fontWeight: "bolder",
    color: "white",
    transition: "background 0.3s, color 0.3s", // Smooth transition for both background and color
  };

  const handleMouseEnter = (event) => {
    event.target.style.background = "";
    event.target.style.color = "";
  };

  const handleMouseLeave = (event) => {
    event.target.style.background = "#145038";
    event.target.style.color = "white";
  };

  return (
    <>
    <section className="form">
      <div className="newsletter">
        <div className="first-cont">
        <h6 className="text-white h6">WE HAVE A SOLID BACKGROUND</h6>
         <h1
            className="my-t heading"
            style={{
              fontWeight: "900",
              color: "white",
              fontSize: "38px",
            }}
          >
            Our solutions for
            <br />
            your
            <span
              style={{
                color: `rgb(0,208,132)` /* fallback color */,
                fontSize: "38px",
              }}>
              {" "}
            business growth
            </span>
          </h1>
          <br />
          <p className=" text-white news-letter" style={{
            fontSize: "16px",
            color: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            We pride ourselves in providing training and coaching that aims to
            improve food security while providing sustainable livelihood options
            for farmers especially the women and the youth in agribusiness. We,
            therefore, establish sustainable partnerships that promote and share
            our vision for the agribusiness sector.
            Our Agricultural Financial Inclusion programs aim to provide
            small-holder farmers and MSMEs with access to affordable financing
            through linkage to financial institutions and also the adoption of
            the VSLA model. 
          </p>
          <br />
          <p className="text-white" style={{
            fontSize: "16px",
          }}>
            This has helped to establish community-based
            financing thus promoting sustainable rural financial models and
            financial literacy, especially for rural farmers.
          </p>

          <button
            style={buttonStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="my-btn"
          >
            <a
              style={{
                textDecoration: "none",
                color: 'white',
              }}
              href="/about"
            >
              Read More
            </a>
          </button>
        </div>
        {/*<div
      style={{
        marginLeft: "50px",
        marginTop: "8rem",

      }}
      className="card-1"
    >
        <div
          style={{
            display: "block",
          }}
            >
          <img
            src={heroImage4}
            alt="image"
            style={{ 
            width: "600px", 
            height: "400px" }}
          />
          <p
            style={{
              fontSize: "16px",
              color: "black",
              width: "600px",
              height: "200px",
              background: "#FFFFFF",
              padding: "20px 10px",
            }}
            className="card-text"
          >
            <ul className="arrow-list">
              <li>
                <FaArrowRight className="arrow-icon" />
                Acuitus Duo Company Ltd provides Market research and analysis
                that offer clients actionable solutions to their problems.
              </li>
              <FaArrowRight className="arrow-icon" />
              The world is rapidly changing therefore the need for reliable
              information to make confident decisions has never been greater.
              <li>
                <FaArrowRight className="arrow-icon" />
                At Acuitus we believe our clients need more than a data
                supplier, they need a partner who can produce accurate and
                relevant information and turn it into actionable truth.
              </li>
            </ul>
          </p>
        </div>
          </div>*/}
          <div className="counter" style={{
            color: `rgb(0,208,132)` /* fallback color */,
            // background: ,
            fontSize: "50px",
            fontWeight: "bolder",
            fontFamily: "poppins",
    
          }}>
            <div className={`counter-item ${countersVisible ? "animate" : ""}`}>
              <h1>{workHours}</h1>
              <p style={{
                fontSize: '18px',
                whiteSpace: 'nowrap',
                color: 'white'
              }}>Work Hours</p>
            </div>
            <div className={`counter-item ${countersVisible ? "animate" : ""}`}>
              <h1>{greatReviews}</h1>
              <p
              style={{
                fontSize: '18px',
                whiteSpace: 'nowrap',
                color: 'white'
              }}
              >Great Reviews</p>
            </div>
            <div className={`counter-item ${countersVisible ? "animate" : ""}`}>
              <h1>{projectsDone}</h1>
              <p
              style={{
                fontSize: '18px',
                whiteSpace: 'nowrap',
                color: 'white'
              }}
              >Projects Done</p>
            </div>
            <div className={`counter-item ${countersVisible ? "animate" : ""}`}>
              <h1>{awardsWon}</h1>
              <p
              style={{
                fontSize: '18px',
                whiteSpace: 'nowrap',
                color: 'white'
              }}
              >Awards Won</p>
            </div>
          </div>
      </div>
    </section>
    </>
  );
}
