import React, { useState } from 'react';
import "../../assets/styles/landingPage/services-card.scss";
import { BiChevronDown } from "react-icons/bi";

const Card = () => {
  const [show, setShow] = useState(false);

   const handleClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };
  return (
   <div className='card-holder'>
  <div className='card-04'>
    <h1 className='card-title heading'>Capacity building</h1>
    <BiChevronDown style={{
        fontSize: '30px',
    }}/>
  </div>
  <div className='card-04'>
    <h1 className='card-title heading'>Digital Marketing</h1>
    <BiChevronDown style={{
        fontSize: '30px',
    }}/>
  </div>
  <div className='card-04' >
    <h1 className='card-title heading'>Training</h1>
    <BiChevronDown style={{
        fontSize: '30px',
    }}/>
  </div>
  <div className='card-04'>
    <h1 className='card-title heading'>Capacity building</h1>
    <BiChevronDown style={{
        fontSize: '30px',
    }}/>
  </div>
  {/* the show content*/}
</div>
  )
}
export default Card