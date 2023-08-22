import React from "react";
import Navbar from "./components/landingPage/nav";
import Hero from "./components/landingPage/Hero";
import TechStacks from "./components/landingPage/tech-stacks";
import OurServices from "./components/landingPage/service";
import "bootstrap/dist/css/bootstrap.css"
import "./assets/styles/landingPage/landing.scss";
import PageFooter from "./components/landingPage/pagefooter";
import NewsLetterSection from "./components/landingPage/newsletter-section";






function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurServices />
      {/*<TechStacks />*/}
      <NewsLetterSection />
      <PageFooter />
    </div>
  )
}

export default App
