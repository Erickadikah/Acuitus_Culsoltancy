import React from "react";
import "../../assets/styles/landingPage/hero.scss";
import heroImage from "../../assets/images/landingPage/hero.jpg";
import "bootstrap/dist/css/bootstrap.css"
import { motion } from "framer-motion";
import { Button } from "antd";

export default function Hero() {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <motion.div className="hero bg-black" initial="hidden" animate="visible">
      <div className="d-flex align-items-center justify-content-center flex-column hero-text text-light">
        <motion.div
          id="hero-text"
          variants={textVariants}
        >
          <div>
            <h1 className="text-center text-text-dark-emphasis">
              Acuitus Duo <br /> Consultancy Firm.
            </h1>
          </div>
          <div>
            <p className="text-center">
              <b>Transforming Ideas into Reality - Explore DevDynamos Today!</b>
            </p>
          </div>
          <motion.div
            className="banner-message"
            variants={textVariants}
          >
            <p className="text-justify">
              Unlock Your Business's Potential with Exceptional Results.
              Trust Our Software Development Company to
              Thrive in Today's Competitive Landscape.
            </p>
            <Button type="primary" className="Btn">
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div variants={imageVariants}>
        <img src={heroImage} alt="hero" className="hero-image" />
      </motion.div>
    </motion.div>
  );
}
