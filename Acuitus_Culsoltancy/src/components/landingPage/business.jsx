import React, { useEffect, useState } from "react";
import "../../assets/styles/landingPage/business.scss";
import heroImage4 from "../../assets/images/landingPage/geet.jpg";
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
  <h1 className="header-text text-center" style={{ color: 'rgb(0, 208, 132)', fontWeight: 'bold', marginTop: '50px',}}>
    Business <span style={{ color: 'black', fontWeight: 'bold'}}>Services</span>
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
        className="bis-Txt"
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
      <a href="/capacity-building" alt='our-servics'>
      <button className="btn-s">Read More</button>
      </a>
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
          className="bis-Txt"
        >
          Research
        </h4>
        <ul className="list">
        <p className="small-header">
        Product Research
        </p>
          <li>
            Collect consumer feedback about either a new product or a new product concept. 
          </li>
          <br />
          <p className="small-header">
          Attitude Research
          </p>
          <li>
            We gather consumer's and business client's feedback regarding experience with particular brands, products, and services
          </li>
          <br />
          <p className="small-header">
          Public Policy Research
          </p>
          <li>
          Measure social change and impact, develop projection tools, run experiments and cost-benefit analysis
          </li>
        </ul>
        <a href="/services">
        <button className="btn-s">Read More</button>
        </a>
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
          className="bis-Txt"
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
        <a href="/services">
        <button className="btn-s">Read More</button>
        </a>
        </div>
    </div>
      </div>
    </div>
  );
}
