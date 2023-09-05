import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './landingPage';
import About from "./landingPage/about"
import Services from "./landingPage/services"
import ContactUs from "./landingPage/contactUs"
import Branding from "../components/Services/branding"
import Research from "../components/Services/research"
// import Activation from "../components/Services/activations"
import Marketing from "../components/Services/marketing"
import Resource from "../components/Services/resource"
// import Activations from '../components/Services/activations';
import Capacity from '../components/Services/capacity-b';


const FirmPages = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/about' element={<About />} />
    <Route path='/services' element={<Services />} />
    <Route path='/contactUs' element={<ContactUs />} />
    <Route path='/branding-services' element={<Branding />} />
    <Route path='/research' element={<Research />} />
    {/*<Route path='/activations' element={<Activations />} />*/}
    <Route path='/marketing' element={<Marketing />} />
    <Route path='/resource-mobilization' element={<Resource />} />
    <Route path='/capacity-building' element={<Capacity />} />
    </Routes>
    </BrowserRouter>
  );
}

export default FirmPages;