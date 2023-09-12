import React from "react";
import Navbar from "../../components/landingPage/nav";
import { BsTelephoneXFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { color } from "framer-motion";
import { MdOutlineMailOutline } from "react-icons/md";
import AboutFooter from "./aboutFooter";
import "../../assets/styles/landingPage/contactUs.scss";
import Contactform from "./contactForm";
import Form from "./form";
import Foot from "./foot";
const ContactUs = () => {
  return (
    <div className="holder">
      <Navbar />
      <div className="contact-us">
        <h1
          className="text-center heading"
          style={{
            marginTop: "100px",
            fontSize: "40px",
          }}
        >
          Contact Us
        </h1>
        <p className="text-center">FEEL FREE TO SEND US A MESSAGE ANY TIME!</p>
      </div>
      <div className="form-c">
        <div>
          <Contactform />
        </div>
        <div className="my-contact-info">
          <div className="contact-info-item">
            <BsTelephoneXFill className="icon" />
            <p className="heading">
              <strong>Phone</strong>
            </p>
            <p>We'll call you back as soon as possible.</p>
            <p>
              <strong>+254 708038818</strong>
            </p>
            <p>
              <strong>+254 721141938</strong>
            </p>
          </div>
          <div className="contact-item-holder">
          <div className="contact-info-item">
            <MdOutlineMailOutline className="icon" />
            <p className="heading">
              <strong>Email</strong>
            </p>
            <p>We reply to emails within the hour.</p>
            <a
              href="mailto:acuitusduo@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <p style={{ marginTop: "10px", color: "rgb(0, 208, 132)" }}>
                <strong className="strong">ACUITUSDUO@GMAIL.COM</strong>
              </p>
            </a>
          </div>
          </div>
          <div className="contact-info-item">
            <FaMapMarkerAlt className="icon" />
            <p className="heading">
              <strong>Location</strong>
            </p>
            <p>Westlands, Nairobi</p>
          </div>
        </div>
      </div>
      <Form />
      <AboutFooter />
      <Foot />
    </div>
  );
};

export default ContactUs;
