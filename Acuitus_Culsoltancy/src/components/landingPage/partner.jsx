import React from 'react'
import "../../assets/styles/landingPage/partner.scss";
import partner1 from '../../assets/images/landingPage/Colgate-Logo.png';
import partner2 from '../../assets/images/landingPage/Arifu-Logo.png';
import partner3 from '../../assets/images/landingPage/intelliwealth logo 2.png';
import partner4 from '../../assets/images/landingPage/Worldv.png'

const Partner = () => {
  return (
    <>
    <div className='partner-holder'>
    <div className='partner-overlay'>
    <h1 className='headtext heading'>
    <span style={{
        color: 'black'
    }}>Our</span> partners</h1>
    </div>
    <p className='headtextp'>
    We are proud to be associated with the following partners</p>
    <div className='partner-images-holder'>
        <img src={partner1} alt='partner1' className='partner-image'/>
        <img src={partner2} alt='partner2' className='partner-image'/>
        <img src={partner3} alt='partner3' className='partner-image'/>
        <img src={partner4} alt='partner4' className='partner-image'/>
        {/*<img src={require('../../assets/images/landingPage/partner5.png')} alt='partner5' />*/}
    </div>
    </div>
    </>
  )
}

export default Partner