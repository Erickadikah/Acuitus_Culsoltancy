import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

export default function ServicesAccordion({ servicesCard }) {
  const [expanded, setExpanded] = useState({});

  const handleToggle = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div id="servicesAccordion" className='container'>
      {servicesCard.map((service, index) => (
        <div className="card text-white bg-black mb-3 shadow-lg" key={index}>
          <div className="card-header" id={`heading${index}`}>
            <h2 className="mb-0">
              <button
                className="btn btn-link text-white text-decoration-none"
                type="button"
                onClick={() => handleToggle(index)}
                style={{
                  outline: 'none',
                  border: 'none',
                  width: '100%',
                  textAlign: 'start',
                }}
              >
                {service.title}{' '}
                <div style={{ float: 'right' }}>
                  {expanded[index] ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </div>
              </button>
            </h2>
          </div>

          <div
            id={`collapse${index}`}
            className={`collapse ${expanded[index] ? 'show' : ''}`}
            aria-labelledby={`heading${index}`}
          >
            <div className="card-body">
              <p>{service.subTitle}</p>
              <ul>
                {service.services.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="btn btn-primary d-block" style={{margin: "10px auto"}}>Get Started</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
