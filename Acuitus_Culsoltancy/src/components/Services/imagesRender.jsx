import React from "react";
import "../../assets/styles/services/imagecomp.scss";
import image1 from "../../assets/images/landingPage/trainee.jpeg";
import image2 from "../../assets/images/landingPage/event.jpg";
import image3 from "../../assets/images/landingPage/chamaaT.jpeg";
import image4 from "../../assets/images/landingPage/chamaactv.jpeg";
import { motion } from 'framer-motion';

function ImageComponent() {
  return (
<div className="big-g">
      <div className="texth">
        <h1 className="big-g-h text-center heading">Popular Work</h1>
        <p className="my-p">
        Be part of this amazing community and get to know more about us
        </p>
      </div>
      <div className="images-holder">
        <div className="section-1_image">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img src={image1} className="image1" alt="Image 1" />
          </motion.div>
          <div className="section-flex-image">
            <div class="image-wrapper">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <img src={image2} className="image2" alt="Image 2" />
              </motion.div>
          {/*<p className="image-text">Text test</p>*/}
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <img src={image3} className="image3" alt="Image 3" />
              </motion.div>
             {/*<p className="testyp">Training
             myblist Myblist  </p>*/}
            </div>
          </div>
        </div>
        <div className="section-2_image">
        <motion.div
          initial={{ opacity: 0.8, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          >
            <img src={image4} className="image4" alt="Image 4" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ImageComponent;
