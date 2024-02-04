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
    children: ["Intelli Wealth", "Colgate", "Arifu", "World Vision", "BigBadWolf Books", "Relief Web", "Habitat", "World Food Program"],
  },

  {
    title: "Company",
    children: [
      "About",
      "Pricing",
      "Our Team",
      "Careers", // Fixed typo here
      "Join Us",
      "Our Community",
    ],
  },

  {
    title: "Industries",
    children: [
      "Research",
      "Business", // Fixed typo here
      "Education",
      "Agriculture",
      "Entertainment",
      "Real Estate",
    ],
  },

  {
    title: "Contact Us",
    children: ["HOURS: Mon-Fri 09:00-17:00", "EMAIL: acuitusduo@gmail.com", "PHONE: 0115188498", "LOCATION: Westlands, Nairobi"],
  },

  {
    title: "Legal",
    children: [
      "Terms of Service", // Changed to "Terms of Service" for consistency
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
      <a href="https://www.linkedin.com/company/acuitus-consultancy"> {/* Replace with your actual LinkedIn URL */}
        <FaLinkedin fontSize={"18px"} />
      </a>,
    ],
  },
];
