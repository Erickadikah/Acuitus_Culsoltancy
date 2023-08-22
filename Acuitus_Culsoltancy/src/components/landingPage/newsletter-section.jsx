import React from "react";
import heroImage4 from "../../assets/images/landingPage/geet.jpg";
import { FaArrowRight } from "react-icons/fa";
import "../../assets/styles/landingPage/newsletter-section.scss";

export default function NewsLetterSection() {
  const styles = {
    background: `rgba(35, 35, 35, 0.9)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "100px 10px",
    display: "flex",
    placeContent: "center",
    height: "65rem",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    flexDirection: "row",
  };

  const buttonStyles = {
    background: "#145038",
    height: "50px",
    width: "150px",
    borderRadius: "40px",
    border: "none",
    fontSize: "16px",
    fontWeight: "bolder",
    transition: "background 0.3s, color 0.3s", // Smooth transition for both background and color
  };

  const handleMouseEnter = (event) => {
    event.target.style.background = "white";
    event.target.style.color = "#145038";
  };

  const handleMouseLeave = (event) => {
    event.target.style.background = "#145038";
    event.target.style.color = "#145038";
  };

  return (
    <section style={styles}>
      <div
        style={{
          height: "400px",
          width: "400px",
          marginBottom: "20rem",
        }}
      >
        <h1
          className="text-white"
          style={{
            fontSize: "50px",
            fontWeight: "bolder",
          }}
        >
          Our solutions for your
          <span
            style={{
              color: "#145038",
            }}
          >
            {" "}
            business growth
          </span>
        </h1>
        <br></br>
        <p
          className="text-white"
          style={{
            fontSize: "18px",
          }}
        >
          We pride ourselves in providing training and coaching that aims to
          improve food security while providing sustainable livelihood options
          for farmers especially the women and the youth in agribusiness. We,
          therefore, establish sustainable partnerships that promote and share
          our vision for the agribusiness sector. Our Agricultural Financial
          Inclusion programs aim to provide small-holder farmers and MSMEs with
          access to affordable financing through linkage to financial
          institutions and also the adoption of the VSLA model.
        </p>
        <br></br>
        <p
          style={{
            fontSize: "18px",
          }}
          className="text-white"
        >
          This has helped to establish community-based financing thus promoting
          sustainable rural financial models and financial literacy, especially
          for rural farmers.
        </p>
        <button
          style={buttonStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            style={{
              textDecoration: "none",
            }}
          >
            Read More
          </a>
        </button>
      </div>
      <div
        style={{
          marginLeft: "50px",
          marginTop: "14rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
          }}
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
        </div>
      </div>
    </section>
  );
}
