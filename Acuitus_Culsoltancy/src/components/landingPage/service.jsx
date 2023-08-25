import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import FaArrowRight
// import { servicesCard } from "./servicesDescriptor";
// import ServicesAccordion from "./services-accordion";
import "../../assets/styles/landingPage/service.scss";
import heroImage2 from "../../assets/images/landingPage/ex1.jpg";

export default function OurServices() {
  return (
    <div
      className="bg-white service-cont"
    >
      <div className="company">
        <div
          className="about-company"
          style={{
            padding: "20px 10px",
          }}
        >
          <div className="section-one">
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                display: "flex",
              }}
            >
              <img
                src={heroImage2}
                style={{
                  width: "750px",
                  height: "475px",
                }}
                alt="heroImage"
                className="img"
              />
            </div>
            <div
              className="about"
              style={{
                textAlign: "center",
                marginTop: "20px",
              }}
            >
          <div>
          <h3 style={{ fontWeight: "600", color: "#145038", fontSize: '26px'}}>About Us</h3>
          <div class="line long-line"></div>
          <div class="line"></div>
          </div>
              <h1
                className="about-company__title text-center"
                style={{
                  color: "#145038",
                  fontWeight: "bolder",
                  fontSize: "2.5rem",
                  fontFamily: "Poppins",
                }}
              >
                Welcome to{" "}
                <span
                  style={{
                    color: "#8D2A1C",
                  }}
                >
                  {" "}
                  Acuitus Duo Consultancy.{" "}
                </span>
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                  lineHeight: "1.6",
                }}
              >
                Acuitus Duo Co. Ltd is a global institutional capacity building,
                technical, and management consultancy firm. We offer a diverse
                range of services including education and training for
                individuals, groups, and organizations, sustainable
              capacity-building programs, data analytics, brand/product
              research, market insights, and sales and marketing strategies.
              </p>
              <br />
              <p
              style={{
                  fontSize: "16px",
                  color: "#333",
                  lineHeight: "1.6",
                }}>
                We are a team of highly skilled and experienced professionals
                with a passion for helping individuals, groups, and
                organizations to adapt, thrive, and survive in the modern world.
              </p>
              <ul className="my-list">
                <li>
                  <FaArrowRight className="arrow-icon" />
                  <span>Education and Training</span>
                </li>
                <li>
                  <FaArrowRight className="arrow-icon" />
                  <span>Capacity Building</span>
                </li>
                <li>
                  <FaArrowRight className="arrow-icon" />
                  <span>Data Analytics</span>
                </li>
                <li>
                  <FaArrowRight className="arrow-icon" />
                  <span>Market Research</span>
                </li>
                <li>
                  <FaArrowRight className="arrow-icon" />
                  <span>Sales and Marketing</span>
                </li>
                <li>
                  <FaArrowRight className="arrow-icon" />
                  <span>Project Management</span>
                </li>
              </ul>
              <button
                className="btn-r"
                style={{
                  marginTop: "",
                fontSize: "1.0rem",
                }}
              >
                Read More
              </button>
            </div>
          </div>
          <serviceCard />
          {/*<div className="our-about">
            <div className="mission">
              <div className="mission-icon"></div>
              <h3 className="text-center mission-title text-white">Mission</h3>
              <p className="text-center mission-text">
                Develop and strengthen the skills, abilities, and processes
                required by communities and organizations to adapt, thrive, and
                survive in the modern world.
              </p>
              <p className="text-center mission-text">
                Offer sustainable solutions to modern-day problems relating to
                research, data analytics, marketing, social media management,
                branding, design, and project management.
              </p>
            </div>
            <div className="vision">
              <h3
                style={{
                  marginTop: "20px",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "24px", // Adjust font size
                  marginBottom: "50px",
                }}
                className="text-center"
              >
                Vision
              </h3>
              <p
                className="text-center"
                style={{
                  fontSize: "18px", // Adjust font size
                  lineHeight: "1.5",
                }}
              >
                To perpetuate lifelong skills in a way that expands your
                creative thinking, skills and stimulates your problem-solving
                abilities in order to unlock more opportunities.
              </p>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  marginTop: "15px",
                  padding: "8px 20px",
                  backgroundColor: "white",
                  color: "#145038",
                  fontWeight: "bold",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease",
                }}
              >
                Learn More
              </a>
            </div>
            <div
              className="values"
              style={{
                padding: "20px 10px",
              }}
            >
              <h3
                style={{
                  marginBottom: "60px",
                  fontWeight: "600",
                  color: "white",
                }}
                className="text-center"
              >
                Values
              </h3>
              <ul
                className="core-values-list text-center"
                style={{
                  justifyContent: "space-around",
                  padding: 0,
                  flexWrap: "wrap",
                  fontSize: "1.0rem",
                }}
              >
                <li>Top Talent People</li>
                <li>Improvement</li>
                <li>Quality</li>
                <li>Integrity</li>
                <li>Equality</li>
                <li>Reliable</li>
                <li>Care</li>
              </ul>
            </div>
          </div>
        </div>
              </div>*/}
      {/*<div className='container' style={{
        padding: "20px 10px",
        marginTop: '12rem',
      }}>
        <h1 className='text-center ' style={{
          color: '#145038',
          fontFamily: 'Poppins',
          fontWeight: 'bold',
          fontSize: '2.5rem',
        }}>Our Services</h1>
        <ServicesAccordion servicesCard={servicesCard} />
      </div>*/}
    </div>
    </div>
    </div>
  );
}
