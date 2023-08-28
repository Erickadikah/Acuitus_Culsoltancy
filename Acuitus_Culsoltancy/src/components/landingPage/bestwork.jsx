import React from "react";
import "../../assets/styles/landingPage/bestwork.scss";

const Bestwork = () => {
  return (
    <div className="best-work heading">
      <h1 style={{
        marginTop: "20px",
        fontWeight: "600",
      }}>Some of our best work</h1>
      <div className="holder">
      <div className="card">
        <h2>Data Managent</h2>
        <p>Farming Trainings</p>
      </div>
      <div className="card">
        <h2>Business Development</h2>
        <p>Won Awards in Best Training institutions</p>
      </div>
      <div className="card">
        <h2>Agri Business</h2>
        <p>Farming Trainings</p>
      </div>
      </div>
    </div>
  );
};

export default Bestwork;
