import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const footerItems = [
  {
    title: "Home",
    children: ["About Us", "Our Team", "Our Community", "Our Partners"],
  },
  {
    title: "Services",
    children: [
      "Activations",
      "Resource Mobilization",
      "Project Management",
      "Capacity Building",
      "Marketing",
      "Research",
      "Branding Services",
      "Business Development",
      "Business Consultancy",
    ],
  },
  {
    title: "Products",
    children: ["Revenue Calculator", "Book Keeper"],
  },

  {
    title: "Company",
    children: [
      "About",
      "Pricing",
      "Our Team",
      "Careeers",
      "Join Us",
      "Our Commmunity",
    ],
  },

  {
    title: "Industries",
    children: [
      "Research",
      "Busisness",
      "Education",
      "Agriculture",
      "Entertainment",
      "Real Estate",
    ],
  },

  {
    title: "Resources",
    children: ["Our learning", "Help Center Support", "FAQs"],
  },

  {
    title: "Legal",
    children: [
      "Terms of Services",
      "Privacy Notice",
      "Cookie Policy",
      "Privacy Center",
    ],
  },

  {
    title: "Social Media Links",
    children: [
      <FaFacebook fontSize={"18px"} />,
      <FaTwitter fontSize={"18px"} />,
      <FaInstagram fontSize={"18px"} />,
    ],
  },
];
