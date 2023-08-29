import React from 'react'
import Navbar  from '../../components/landingPage/nav'
import { BsTelephoneXFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { color } from 'framer-motion'
import { MdOutlineMailOutline } from 'react-icons/md'

const ContactUs = () => {
  return (
    <div>
    <Navbar />
    <div>
    <h1 className='text-center' style={{
        marginTop: '100px'
    }}>
    Contact Us
    </h1>
    </div>
    <div className='container'>
    <div className='phone' style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
}}>
    <BsTelephoneXFill style={{
        fontSize: '50px',
        color: `rgb(0,208,132)`
    }}/>
    <p><strong>Phone</strong></p>
    <p><strong>Phone:</strong> +234 810 000 0000</p>
    <p><strong>Support:</strong></p>
    <p><strong>Jobs:</strong></p>
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
        color: `rgb(0,208,132)`
    }}/>
    <p><strong>Email</strong></p>
    <p>
    We relpy within 24 hours
    </p>
    <p><strong>Acuitusconsoltancy@gmai.com</strong></p>
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
        color: `rgb(0,208,132)`
    }} />
    <p><strong>Address:</strong> 1, Oba Akran Avenue, Ikeja, Lagos</p>
    <p><strong>Address:</strong> 2, Oba Akran Avenue, Ikeja, Lagos</p>
</div>
    </div>
    </div>
  )
}

export default ContactUs