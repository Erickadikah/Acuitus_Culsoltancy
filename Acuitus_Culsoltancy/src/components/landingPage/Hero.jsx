import React, { useState, useEffect } from 'react';
import heroImage1 from "../../assets/images/landingPage/burner.jpg";
import heroImage2 from "../../assets/images/landingPage/ex1.jpg";
// import heroImage3 from "../../assets/images/landingPage/image1.jpg";
// import heroImage4 from "../../assets/images/landingPage/geet.jpg";
import "../../assets/styles/landingPage/Hero.scss";
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr'

const imageUrls = [heroImage1, heroImage2];

const imageDetails = [
  {
    title: "Business Development Services",
    explanation: "Explanation for image 1."
  },
  {
    title: "Financial Inclusion",
    explanation: "Explanation for image 2."
  },
  {
    title: "Agribusiness Development.",
    explanation: "Explanation for image 3."
  },
  {
    title: "Title 4",
    explanation: "Explanation for image 4."
  }
];

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
      <div className='hero-details'>
        <h1 className='hero-title'>{imageDetails[currentImageIndex].title}</h1>
        {/*<p className='hero-explanation'>{imageDetails[currentImageIndex].explanation}</p>*/}
      </div>
    </div>
  );
}

export default Hero;

