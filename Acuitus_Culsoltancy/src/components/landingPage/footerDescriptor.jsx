import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

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
    title: "Partners",
    children: ["Intelli Wealth", "Colgate", "Arifu", "World vision", "BigBadWolf Books", "Relief web", "Habitat", "World Food Program"],
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
    title: "Contact Us",
    children: ["HOURS: Mon-Fri 09:00-17:00", "EMAIL: acuitusduo@gmail.com", "PHONE: +254 708038818, +254 721141938", "LOCATION: Westlands, Nairobi"],
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
    <a href="https://www.facebook.com/profile.php?id=61550987138556&is_tour_dismissed=true">
      <FaFacebook fontSize={"18px"} />
    </a>,
    <a href="https://twitter.com/AcuitusC">
      <FaTwitter fontSize={"18px"} />
    </a>,
    <a href="https://www.instagram.com/acuitusduo/">
      <FaInstagram fontSize={"18px"} />
    </a>,
    <a href="https://www.linkedin.com/your-linkedin-page">
      <FaLinkedin fontSize={"18px"} />
    </a>,
  ],
},
];
