import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
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
import Partner from "./landingPage/partner"

const categories = [
  { image: 'https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg?auto=compress&cs=tinysrgb&w=1600', label: 'Customer Support' },
  { image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=1600', label: 'Digital Marketing' },
  { image: 'https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=400', label: 'Sales Questions' },
];


function LandingPage() {
  const heroAnimationControls = useAnimation();
  const businessAnimationControls = useAnimation();
  const bestworkAnimationControls = useAnimation();

  useEffect(() => {
    const handleScroll = async () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Define the trigger points for each animation (adjust as needed)
      const heroTriggerPoint = windowHeight * 0.5;
      const businessTriggerPoint = windowHeight * 0.3;
      const bestworkTriggerPoint = windowHeight * 0.7;

      // Control animations for each section
      if (scrollPosition >= heroTriggerPoint) {
        await heroAnimationControls.start({ opacity: 1, y: 0 });
      } else {
        await heroAnimationControls.start({ opacity: 0, y: 100 });
      }

      if (scrollPosition >= businessTriggerPoint) {
        await businessAnimationControls.start({ opacity: 1, y: 0 });
      } else {
        await businessAnimationControls.start({ opacity: 0, y: 100 });
      }

      if (scrollPosition >= bestworkTriggerPoint) {
        await bestworkAnimationControls.start({ opacity: 1, y: 0 });
      } else {
        await bestworkAnimationControls.start({ opacity: 0, y: 100 });
      }
    };


  window.addEventListener("scroll", handleScroll);
  return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroAnimationControls, businessAnimationControls, bestworkAnimationControls ]);


  return (
    <div className="land">
      <Navbar />
      <Hero />
      <motion.div
        className="hero"
        initial={{ opacity: 2, y: 100 }}
        animate={heroAnimationControls}>
        <Business />
      </motion.div>
      <NewsLetterSection />
       <motion.div
        className="best"
        initial={{ opacity: 1, y: 100 }}
        animate={bestworkAnimationControls}
      >
        <Bestwork />
      </motion.div>
      <div className="our-info">
      <ContactUs categories={categories}/>
      </div>
      <Partner />
      <PageFooter />
    </div>
  )
}

export default LandingPage