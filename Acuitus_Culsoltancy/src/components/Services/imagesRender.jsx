import React from "react";
import "../../assets/styles/services/imagecomp.scss";
import image1 from "../../assets/images/landingPage/trainee.jpeg";
import image2 from "../../assets/images/landingPage/framtraining.jpg";
import image3 from "../../assets/images/landingPage/chamaaT.jpeg";
import image4 from "../../assets/images/landingPage/beehive.jpeg";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"

function ImageComponent() {
  return (
    <div className="big-g">
      <div className="texth">
        <p className="my-g">
          Be part of this amazing community and get to know more about us
        </p>
        <Link to='/contactUs'>
          <button className="btn-s"
            style={{
              borderRadius: '25px',
            }}
          > Contact Us</button>
        </Link>
      </div>
      <div className="images-holder">
        <div className="section-1_image">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="image-container">
              <img src={image1} className="image1" alt="Training" />
              <p className="image-text">Our training and mentorship programs</p>
            </div>
          </motion.div>
          <div className="section-flex-image">
            <div class="image-wrapper">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="image-container">
                  <img src={image2} className="image2" alt="Image 2" />
                  <p className="image-text">Agricultural Trainings</p>
                </div>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="image-container">
                  <img src={image3} className="image3" alt="Image 3" />
                  <p className="image-text">Chama Activations</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="section-2_image">
          <motion.div
            initial={{ opacity: 0.8, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="image-container">
              <img src={image4} className="image4" alt="Image 4" />
              <p className="image-text">Bee keeping trainig at kinda kwer in west Alego ward, Siaya county</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ImageComponent;

