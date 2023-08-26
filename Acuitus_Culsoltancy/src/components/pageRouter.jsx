import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './landingPage';
import About from "./landingPage/about"

const FirmPages = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
  );
}

export default FirmPages;