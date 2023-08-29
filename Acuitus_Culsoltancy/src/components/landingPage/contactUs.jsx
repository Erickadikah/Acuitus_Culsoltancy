import React from 'react'
import Navbar  from '../../components/landingPage/nav'
import { BsTelephoneXFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { color } from 'framer-motion'
import { MdOutlineMailOutline } from 'react-icons/md'
import AboutFooter from "./aboutFooter"
import "../../assets/styles/landingPage/contactUs.scss";

const ContactUs = () => {
  return (
    <div>
    <Navbar />
    <div className='contact-us'>
    <h1 className='text-center heading' style={{
        marginTop: '100px',
        fontSize: '50px',
    }}>
    Contact Us
    </h1>
    <p className='text-center'>FEEL FREE TO SEND US A MESSAGE</p>
    </div>
    <div className='container holder'>
    <div className='phone' style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
}}>
    <BsTelephoneXFill style={{
        fontSize: '45px',
        color: `rgb(0,208,132)`,
        marginBottom: '30px'
    }}/>
    <p className='heading'><strong>Phone</strong></p>
    <p><strong>+234 810 000 0000</strong></p>
    </div>
    <div className='email' style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 'none'
}}>
    <MdOutlineMailOutline style={{
        fontSize: '50px',
        color: `rgb(0,208,132)`,
        marginBottom: '30px'
    }}/>
    <p className='heading'><strong>Phone</strong></p>
    <p>
    We reply to emails
    withing the hour.
    </p>
    <a href='mailto:erickadikah2030@gmail.com' style={{
        textDecoration: 'none'
    }}>
    <p style={{
        marginTop: '10px',
        color: 'rgb(0,208,132)'
    }}><strong>Acuitusconsoltancy@gmai.com</strong></p>
    </a>
    </div>
   <div className='address' style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
}}>
    <FaMapMarkerAlt style={{
        fontSize: '50px',
        color: `rgb(0,208,132)`,
        marginBottom: '30px'
    }} />
    <p className='heading'><strong>Location</strong></p>
    <p>Oba Akran Avenue, Ngong, Nairobi</p>
    </div>
    </div>
    <AboutFooter />
    </div>
  )
}

export default ContactUs