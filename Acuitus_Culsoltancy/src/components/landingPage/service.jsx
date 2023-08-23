import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import FaArrowRight
import { servicesCard } from './servicesDescriptor';
import ServicesAccordion from './services-accordion';
import "../../assets/styles/landingPage/service.scss";

export default function OurServices() {
  return (
    <div className='bg-white' style={{
      height: '100%',
      width: '100%',
    }}>
    <div className='company'>
        <div className='about-company' style={{
          padding: "20px 10px"
        }}>
          <h1 className='about-company__title text-center' style={{
            color: '#145038',
          }}>Welcome to <span style={{
            color: '#8D2A1C',
          }}> Acuitus Duo Consultancy Firm.</span></h1>
          <div className='about' style={{
            textAlign: 'center',
            marginTop: '20px',
          }}>
            <h3 style={{ fontWeight: '600', color: '#145038' }}>About</h3>
            <p style={{
              fontSize: '18px',
              color: '#333',
              lineHeight: '1.6'
            }}>
              Acuitus Duo Co. Ltd is a global institutional capacity building, technical,
              and management consultancy firm. We offer a diverse range of services including
              education and training for individuals, groups, and organizations, sustainable
              capacity-building programs, data analytics, brand/product research, market insights,
              and sales and marketing strategies.
            </p>
            <button className='btn-r'>
            Read More
            </button>
          </div>
          <div>
          <h3 style={{ marginTop: '20px',
           fontWeight: '600',
            color: '#145038',
           }} className='text-center'>Vision</h3>
          <p className='text-center' style={{
            fontSize: '1.0rem',
          }}>
            To perpetuate life long skills in a way that expands your creative thinking, skills and stimulates your problem-solving abilities inorder to unlock more opportunities
          </p>
          </div>
          <div>
          <h3 style={{ marginTop: '20px', fontWeight: '600', color: '#145038' }} className='text-center'>Mission</h3>
          <ul className='text-center' style={{
            listStyle: 'none',
            fontSize: '1.0rem',
          }}>
            <li>
              <FaArrowRight className="arrow-icon" />
              Develop and strengthen the skills, abilities, and processes required by communities and organizations to adapt, thrive, and survive in the modern world.
            </li>
            <li>
              <FaArrowRight className="arrow-icon" />
              Provide a platform for individuals, businesses and organizations to learn, grow and develop.
            </li>
            <li>
              <FaArrowRight className="arrow-icon" />
              Provide a platform for individuals, businesses and organizations to learn, grow and develop.
            </li>
          </ul>
          </div>
          <div className='about-company' style={{
          padding: "20px 10px"
        }}>
          <h3 style={{ marginTop: '20px', fontWeight: '600', color: '#145038' }} className='text-center'>Core Values</h3>
          <ul className='core-values-list text-center' style={{
            display: 'flex', 
            justifyContent: 'space-around',
            padding: 0,
            flexWrap: 'wrap',
            fontSize: '1.0rem',
          }}>
            <li>
              Integrity
            </li>
            <li>
              Excellence
            </li>
            <li>
              Innovation
            </li>
            <li>
              Teamwork
            </li>
            <li>
              Accountability
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div className='container' style={{
        padding: "20px 10px",
        marginTop: '12rem',
      }}>
        <h1 className='text-center text-info'>Our Services</h1>
        <ServicesAccordion servicesCard={servicesCard} />
      </div>
    </div>
  );
}

