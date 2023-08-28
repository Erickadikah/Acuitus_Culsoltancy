import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './landingPage';
import About from "./landingPage/about"
import Services from "./landingPage/services"

const FirmPages = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/about' element={<About />} />
    <Route path='/services' element={<Services />} />
    </Routes>
    </BrowserRouter>
  );
}

export default FirmPages;