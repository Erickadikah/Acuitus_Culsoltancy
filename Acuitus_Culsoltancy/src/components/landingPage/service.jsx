// OurServices.jsx
import React from 'react';
import { servicesCard } from './servicesDescriptor'; // Import your services data
import ServicesAccordion from './services-accordion'; // Correct the import name

export default function OurServices() {
  return (
    <div className='container' style={{padding: "20px 10px"}}>
      <h1 className='text-center text-info'>Our Services</h1>
      <ServicesAccordion servicesCard={servicesCard} /> {/* Correct the component name */}
    </div>
  );
}
