import React from "react";
import Navbar from "../components/landingPage/nav";
import Hero from "./landingPage/Hero";
// import TechStacks from "./components/landingPage/tech-stacks";
// import OurServices from "./components/landingPage/service";
import "bootstrap/dist/css/bootstrap.css"
import "../assets/styles/landingPage/landing.scss";
import PageFooter from "./landingPage/pagefooter";
import NewsLetterSection from "./landingPage/newsletter-section";
// import Article from "./landingPage/article"
import Business from "./landingPage/business";
// import "bootstrap/dist/css/bootstrap.css"
// import "./assets/styles/landingPage/landing.scss";
import Bestwork from "./landingPage/bestwork"
import ContactUs from "./contact-us"

const categories = [
  { image: 'https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg?auto=compress&cs=tinysrgb&w=1600', label: 'Customer Support' },
  { image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=1600', label: 'Digital Marketing' },
  { image: 'https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'Sales Questions' },
];


function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/*<OurServices />*/}
      <Business />
      <NewsLetterSection />
      {/*<Article />*/}
      <Bestwork />
      {/*<Request />*/}
      <ContactUs categories={categories}/>
      <PageFooter />
    </div>
  )
}

export default LandingPage