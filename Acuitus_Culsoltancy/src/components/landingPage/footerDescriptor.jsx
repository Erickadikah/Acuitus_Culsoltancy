import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const footerItems = 
[
  {
    title: "Services",
    children : [
      "Web Design",
      "Front-end Development",
      "Back-end Development",
      "Data Analysis",
      "E-commerce Solutions",
      "iOS App Development",
      "Android App Development",
      "Cross-Platform App Development",
      "Custom Software Development",
      "Enterprise Solutions",
      "Cloud Services",
    ]
  },
  {
    title: "Products",
    children: [
      "Revenue Calculator",
      "Book Keeper",
    ]
  },

  {
    title: "Company",
    children: [
      "About",
      "Pricing",
      "Our Team",
      "Careeers",
      "Join Us",
      "Our Commmunity"
    ]
  },

  {
    title: "Industries",
    children: [
      "Legal",
      "Health",
      "Education",
      "Agriculture",
      "Entertainment",
      "Real Estate",
    ]
  },

  {
    title: "Resources",
    children: [
      "Our learning",
      "Help Center Support",
      "FAQs"
    ]
  },

  {
    title: "Legal",
    children: [
      "Terms of Services",
      "Privacy Notice",
      "Cookie Policy",
      "Privacy Center"
    ]
  },

  {
    title: "Social Media Links",
    children: [
        <FaFacebook fontSize={"18px"} />, 
        <FaTwitter fontSize={"18px"} />, 
        <FaInstagram fontSize={"18px"} />, 
    ]
  }
]
