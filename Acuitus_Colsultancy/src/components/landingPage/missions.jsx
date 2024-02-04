import React from "react";
import "../../assets/styles/landingPage/missions.scss";
import vision from '../../assets/images/landingPage/vision.jpg'

const Missions = () => {
  return (
    <div className="our-values">
     <div className="container">
        <div>
          <h1>Mission</h1>
          <p>
            Enabling Progress, Inspiring Transformation: Our mission is to
            empower individuals, organizations, and communities with innovative
            solutions and unwavering support. Through strategic guidance,
            comprehensive resources, and creative activations, we are committed
            to fostering growth, catalyzing change, and leaving a positive
            imprint on the world.
          </p>
        </div>
        <div>
          <h1>Vision</h1>
          <p>
            Shaping Possibilities, Igniting Excellence: Our vision is to be the
            leading catalyst for holistic growth and innovation across diverse
            sectors. We envision a future where every endeavor thrives through
            informed decisions, strategic collaborations, and memorable
            experiences, creating a ripple effect of positive impact.
          </p>
        </div>
        <div>
          <h1>Values</h1>
          <ul>
            <li>Excellence</li>
            <li>Innovation</li>
            <li>Empowerment</li>
            <li>Collaboration</li>
            <li>Reliable</li>
            <li>Impact</li>
            <li>Adaptability</li>
          </ul>
        </div>
  </div>
    </div>
  );
};

export default Missions;
