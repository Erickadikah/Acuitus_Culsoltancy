import React from "react";
import heroImage4 from "../../assets/images/landingPage/geet.jpg";
import { FaArrowRight } from "react-icons/fa";
import "../../assets/styles/landingPage/newsletter-section.scss";

export default function NewsLetterSection() {
  const styles = {
    background: `rgba(0, 0, 0, 0.8);`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    placeContent: "center",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  };

  const buttonStyles = {
    height: "50px",
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
    <section className="form">
      <div className="newsletter">
        <div className="first-cont">
        <h6 className="text-white">WE HAVE A SOLID BACKGROUND</h6>
         <h1
            className="my-t"
            style={{
              // fontSize: "55px",
              fontWeight: "900",
              color: "white",
            }}
          >
            Our solutions for your
            <br />
            <span
              style={{
                color: "#145038",
              }}>
              {" "}
              business growth
            </span>
          </h1>
          <br />
          <p className=" text-white" style={{
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
              }}
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
            color: "#145038",
            fontSize: "50px",
            fontWeight: "bolder",
            fontFamily: "poppins",
    
          }}>
            <div className="counter-item">
              <h1>700</h1>
              <p style={{
                fontSize: '18px',
                whiteSpace: 'nowrap',
                color: 'white'
              }}>Work Hours</p>
            </div>
            <div className="counter-item">
              <h1>1080</h1>
              <p
              style={{
                fontSize: '18px',
                whiteSpace: 'nowrap',
                color: 'white'
              }}
              >Great Reviews</p>
            </div>
            <div className="counter-item">
              <h1>340</h1>
              <p
              style={{
                fontSize: '18px',
                whiteSpace: 'nowrap',
                color: 'white'
              }}
              >Projects Done</p>
            </div>
            <div className="counter-item">
              <h1>400</h1>
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
  );
}
