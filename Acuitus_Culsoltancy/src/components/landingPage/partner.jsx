import React from 'react';
import "../../assets/styles/landingPage/partner.scss";
import { motion } from 'framer-motion';
import partner1 from '../../assets/images/landingPage/Colgate-Logo.png';
import partner2 from '../../assets/images/landingPage/Arifu-Logo.png';
import partner3 from '../../assets/images/landingPage/intelliwealth logo 2.png';
import partner4 from '../../assets/images/landingPage/Worldv.png';
import partner5 from '../../assets/images/landingPage/wfp.svg';
import partner6 from '../../assets/images/landingPage/BigBad.webp';
import partner7 from '../../assets/images/landingPage/habita.png';
import partner8 from '../../assets/images/landingPage/releif.svg';


const Partner = () => {
  return (
    <>
      <div className='partner-holder'>
        <div className='partner-overlay'>
          {/*<h1 className='headtext heading'>
            <span style={{
              color: 'black'
            }}>Our</span> partners
          </h1>*/}
        </div>
        <div className='partner-images-holder'>
          <motion.img
            src={partner1}
            alt='partner1'
            className='partner-image'
            whileHover={{ scale: 1.1 }} // Add pop-out effect on hover
          />
          <motion.img
            src={partner2}
            alt='partner2'
            className='partner-image'
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={partner3}
            alt='partner3'
            className='partner-image'
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={partner4}
            alt='partner4'
            className='partner-image'
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={partner5}
            alt='partner5'
            className='partner-image-5'
            style={{
              backgroundColor: `rgb(0,125,188)`
            }}
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={partner6}
            alt='partner6'
            className='partner-image'
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={partner7}
            alt='partner6'
            className='partner-image'
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={partner8}
            alt='partner6'
            className='partner-image'
            whileHover={{ scale: 1.1 }}
          />
        </div>
      </div>
    </>
  )
}

export default Partner;