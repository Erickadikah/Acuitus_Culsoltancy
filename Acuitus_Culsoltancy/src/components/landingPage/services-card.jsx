import React, { useState } from "react";
import "../../assets/styles/landingPage/services-card.scss";
import { BiChevronDown } from "react-icons/bi";
import heroImage2 from "../../assets/images/landingPage/image1.jpg";

const Card = () => {
  const [show, setShow] = useState(false);

  const handleClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };
  return (
    <div className="card-holder">
      <div className="card-04">
        <h1 className="card-title heading">Capacity building</h1>
        <BiChevronDown
          style={{
            fontSize: "30px",
          }}
        />
      </div>
      {// <div className="card-explainer">
      //   <img
      //     src={heroImage2}
      //     className="about-image"
      //     alt="About us"
      //     style={{
      //       width: "50vh",
      //       height: "65vh",
      //     }}
      //   />
      //   <h1 className="text-center heading">Capacity building</h1>
      //   <p className="text-center">
      //     Our expertise extends to a wide spectrum of training and mentorship
      //     programs that cover critical areas such as Agribusiness, Value
      //     Addition, Financial Literacy, Business Development, Technology
      //     integration, Market Analysis, Financial Literacy,Linkages, Climate
      //     change and Disaster management, Leadership and Healthcare Education.
      //     We also provide financial and market linkages, facilitating
      //     connections between groups and financial institutions as well as
      //     markets for their products. Acuitus Duo Company excels in capacity
      //     building, having successfully trained diverse groups such as Village
      //     Savings and Loan Associations, Farmer Service Centers, business
      //     groups, and entrepreneurs, among others. With our experienced trainers
      //     guiding the way, our capacity-building initiatives empower individuals
      //     and organizations to achieve sustained growth and excellence. We
      //     believe in equipping you with the knowledge and skills needed to
      //     navigate complex challenges and seize new opportunities.
      //   </p>
      // </div>}
      }
      <div className="card-04">
        <h1 className="card-title heading">Digital Marketing</h1>
        <BiChevronDown
          style={{
            fontSize: "30px",
          }}
        />
      </div>
      <div className="card-04">
        <h1 className="card-title heading">Training</h1>
        <BiChevronDown
          style={{
            fontSize: "30px",
          }}
        />
      </div>
      <div className="card-04">
        <h1 className="card-title heading">Capacity building</h1>
        <BiChevronDown
          style={{
            fontSize: "30px",
          }}
        />
      </div>
      {/* the show content*/}
    </div>
  );
};
export default Card;
