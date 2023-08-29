import React, { useEffect, useState } from "react";
import "../../assets/styles/landingPage/business.scss";
import heroImage4 from "../../assets/images/landingPage/greetings.jpg";
import heroImag3 from "../../assets/images/landingPage/search .jpg";
import heroImage2 from "../../assets/images/landingPage/d.jpg";
import { motion, AnimatePresence } from "framer-motion";


export default function Business() {
  const [cardsVisible, setCardsVisible] = useState(false);
  useEffect(() => {
      // Delaying setting cardsVisible to true to trigger animations
      const animationTimeout = setTimeout(() => {
        setCardsVisible(true);
      }, 200);
  
      return () => {
        clearTimeout(animationTimeout);
      };
    }, []);
  return (
    <div className="bussiness">
    <div className="inner" style={{ marginBottom: '20px' }}>
  <h1 className="header-text text-center heading" style={{ color: 'rgb(0, 208, 132)', fontWeight: 'bold', marginTop: '50px', fontSize: '38px' }}>
    Business <span style={{ color: 'black', fontWeight: 'bold', fontSize: '38px' }}>Services</span>
  </h1>
  <h6 style={{ fontSize: '14px', marginTop: '10px'}} className="text-center">WE ARE HERE TO SUPPORT YOU</h6>
    <div className="bis-cont">
     <AnimatePresence>
     <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bis-card"
    >
    <img src={heroImage4} className="image-1" />
      <h4
        style={{
          color: "black",
          textAlign: "center",
          marginTop: "2rem",
          fontSize: "1.5rem",
          // fontWeight: "bold",
        }}
        className="heading"
      >
        Capacity Building
      </h4>
      <ul className="list">
        <li>
          Enhancing sustainable livelihoods through capacity building
        </li>
        <li>
          Groups savings and loans methodology (Village Savings & Loans
          Association (VSLA))
        </li>
        <li>
          Financial literacy & entrepreneurship Gender equality and women
        </li>
        <li>Gender equality and women empowerment program</li>
        <li>Oral Health Education</li>
        <li>Resource mobilization</li>
        <li>Healthcare education</li>
        <li>Disaster management</li>
        <li>Climate Change & Management</li>
          <li>Governance & advocacy</li>
        <li>
          Youth Training & mentorship
        </li>
      </ul>
      <button className="btn-s">Read More</button>
    </motion.div>
     </AnimatePresence>
      <div className="bis-card">
      <img src={heroImag3} className="image-1" />
        <h4
          style={{
            color: "black",
            textAlign: "center",
            marginTop: "2rem",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
          className="heading"
        >
          Research
        </h4>
        <ul className="list">
        <p>
        Product Research
        </p>
          <li>
            Collect consumer feedback about either a new product or a new product concept. 
          </li>
          <br />
          <p>
          Attitude Research
          </p>
          <li>
            Gather consumers’ and business clients’ feedback regarding experience with particular brands, products, and services
          </li>
          <br />
          <p>
          Public Policy Research
          </p>
          <li>
          Measure social change and impact, develop projection tools, run experiments and cost-benefit analysis
          </li>
        </ul>
        <button className="btn-s">Read More</button>
      </div>
      <div className="bis-card">
       <img src={heroImage2} className="image-1" />
        <h4
          style={{
            color: "black",
            textAlign: "center",
            marginTop: "2rem",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
          className="heading"
        >
          Digital Marketing
        </h4>
        <ul className="list">
          <li>
            Engine Optimization
          </li>
          <li>
            Pay-per-Click
          </li>
          <li>
           Social Media Marketing
          </li>
          <li>Content Marketing</li>
          <li>Email Marketing </li>
          <li>Mobile Marketing</li>
          <li>Marketing Analytics</li>
        <li>Affiliate Marketing</li>
        </ul>
        <button className="btn-s">Read More</button>
        </div>
    </div>
      </div>
    </div>
  );
}
