import React from 'react';
import "../../assets/styles/landingPage/form.scss";
import partner1 from '../../assets/images/landingPage/Colgate-Logo.png';
import partner2 from '../../assets/images/landingPage/Arifu-Logo.png';
import partner3 from '../../assets/images/landingPage/intelliwealth logo 2.png';
import partner4 from '../../assets/images/landingPage/Worldv.png';
// import partner5 from '../../assets/images/landingPage/wfp.svg';
import partner6 from '../../assets/images/landingPage/BigBad.webp';
import partner7 from '../../assets/images/landingPage/habita.png';
import partner8 from '../../assets/images/landingPage/releif.svg';

const Form = () => {
  return (
    <div className='partner-images-holdr'>
        <img src={partner1} alt='partner1' className='partner-imagry'/>
        <img src={partner2} alt='partner2' className='partner-imagry'/>
        <img src={partner3} alt='partner3' className='partner-imagry'/>
        <img src={partner4} alt='partner4' className='partner-imagry'/>
        <img src={partner6} alt='partner4' className='partner-image'/>
        <img src={partner7} alt='partner4' className='partner-image'/>
        <img src={partner8} alt='partner4' className='partner-image'/>
    </div>
  );
}

export default Form;
