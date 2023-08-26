import React from "react";
import Navbar from "../components/landingPage/nav";
import Hero from "./landingPage/Hero";
// import TechStacks from "./components/landingPage/tech-stacks";
// import OurServices from "./components/landingPage/service";
import "bootstrap/dist/css/bootstrap.css"
import "../assets/styles/landingPage/landing.scss";
import PageFooter from "./landingPage/pagefooter";
import NewsLetterSection from "./landingPage/newsletter-section";
import Article from "./landingPage/article"
import Business from "./landingPage/business";
import Request from "./landingPage/request"
// import "bootstrap/dist/css/bootstrap.css"
// import "./assets/styles/landingPage/landing.scss";



function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/*<OurServices />*/}
      <Business />
      <NewsLetterSection />
      <Article />
      <Request />
      <PageFooter />
    </div>
  )
}

export default LandingPage