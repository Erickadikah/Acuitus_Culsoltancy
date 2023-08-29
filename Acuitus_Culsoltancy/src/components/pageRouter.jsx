import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './landingPage';
import About from "./landingPage/about"
import Services from "./landingPage/services"
import ContactUs from "./landingPage/contactUs"

const FirmPages = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/about' element={<About />} />
    <Route path='/services' element={<Services />} />
    <Route path='/contactUs' element={<ContactUs />} />
    </Routes>
    </BrowserRouter>
  );
}

export default FirmPages;