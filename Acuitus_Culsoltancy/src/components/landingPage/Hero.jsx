import React, { useState, useEffect } from 'react';
import heroImage1 from "../../assets/images/landingPage/burner.jpg";
import heroImage2 from "../../assets/images/landingPage/ex1.jpg";
// import heroImage3 from "../../assets/images/landingPage/image1.jpg";
// import heroImage4 from "../../assets/images/landingPage/geet.jpg";
import "../../assets/styles/landingPage/Hero.scss";
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr'

const imageUrls = [heroImage1, heroImage2];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return (
    <div className='Hero'>
      <img src={imageUrls[currentImageIndex]} alt='image' className='hero-image' />
      <GrLinkPrevious onClick={goToPreviousImage} className='prev-button'/>
      <GrLinkNext className='next-button' onClick={goToNextImage}/>
      <div className='below'>
      <div>
      <h3 className='text-white'>Want to reach Out ? Request A call Now</h3>
      <p style={{
        color: 'white'
      }}>Get us to do all the work and make everything easier for you.</p>
      </div>
      <button className='btn-b'>
        Contact Us
      </button>
      </div>
    </div>
  );
}

export default Hero;

