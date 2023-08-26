import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import "../../assets/styles/landingPage/request.scss";

const Request = () => {
  return (
  <div className="outer-b">
  <h1 style={{
        color: "black",
        fontFamily: 'sans-serif'
    }}>Request a call  <span
    style={{
        color: `rgb(0, 208, 132)`,
    }}
    >
    from
    <br />
    Us</span></h1>
    {/*<div style={{
      fontSize: '1rem'
    }}>
    <FiPhoneCall />
  </div>*/}
  <p>
  GET US TO DO ALL THE WORK AND MAKE EVERYTHING EASIER FOR YOU.
  </p>
      <div className="container-r">
        <div className="inner-r">
          <input placeholder="Full Name" className="input-area" />
          <input placeholder="E-mail Address" className="input-area" />
          <input placeholder="Subject" className="input-area" />
          <input placeholder="Message" className="input-text" />
        </div>
      </div>
    </div>
  );
};

export default Request;
