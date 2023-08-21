import React from "react";
import "../../assets/styles/landingPage/tech-card.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoReact, BiLogoAngular, BiLogoVuejs } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJquery } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiPhp, DiDjango } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { FaApple, FaAndroid } from "react-icons/fa";
import { DiIonic, DiReact } from "react-icons/di";
import Image from "../../assets/images/landingPage/next-js.svg";
import Node from "../../assets/images/landingPage/nodejs-icon.svg";
import Reddis from "../../assets/images/landingPage/redis-logo.png"
import Firebase from "../../assets/images/landingPage/firebase-1.svg"
import Express from "../../assets/images/landingPage/express-js-icon (1).svg"
import icon2 from "../../assets/images/landingPage/icons8-react-native.svg"
import icon3 from "../../assets/images/landingPage/mongodb-svgrepo-com.svg"
import dockerIcon from "../../assets/images/landingPage/docker (1).svg"
import aws from "../../assets/images/landingPage/aws.png"
import python from "../../assets/images/landingPage/Python-logo.png"

const technologies = [
  {
    title: "Nextjs",
    languages: [
      { icon: <img className="stack-icon" src={Image} alt="Next.js" />},
    
    ],
  },
  {
    title: "Nodejs",
    languages: [
      {icon: <img className="stack-icon" src={Node} alt="Node" />},
    ],
  },
  {
    title: "Firebase",
    languages: [
      {icon: <img className="stack-icon" src={Firebase} alt="Firebase" />},
    ]
  },
  {
    title: "Reddis",
    languages: [
      { icon: <img className="stack-icon" src={Reddis} alt="Reddis" />}
    ],
  },
  {
    title: "ExpressJs",
    languages: [
      { icon: <img className="stack-icon" src={Express} alt="Express" />}
    ],
  },
  {
    title: "ReactJs",
    languages: [
      { icon: <img className="stack-icon"  src={icon2} alt="reactjs" />}
    ],
  },
  {
    title: "MongoDB",
    languages: [
      { icon: <img className="stack-icon"  src={icon3} alt="mongodb" />}
    ],
  },
  {
    title: "Docker",
    languages: [
      { icon: <img className="stack-icon"  src={dockerIcon} alt="docker" />}
    ],
  },
  {
    title: "aws",
    languages: [
      { icon: <img className="stack-icon"  src={aws} alt="docker" />}
    ],
  },
  {
    title: "Python",
    languages: [
      { icon: <img className="stack-icon"  src={python} alt="docker" />}
    ],
  }
  
];

const TechStacks = () => {
  return (
    <div className="container tech-stacks">
      <div className="container">
        <h1 className="text-center text-light"><b>Technologies used</b></h1>
      </div>
      <div  id="tech--stacks">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-card bg-dark text-white shadow-lg d-flex flex-column align-items-center justify-content-center">
            <h6>{tech.title}</h6>
            <div>
              {tech.languages.map((item, index) => (
                <div key={index} className="stack-name">
                  <div>{item.icon}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
