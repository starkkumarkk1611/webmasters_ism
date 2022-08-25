import React from "react";
import NavBar from "../../componenets/headers/NavBar";
import Footer from "../../componenets/footer/Footer";
import LeaderCard from "../../componenets/Cards/LeaderCard";
import {
  Leaders,
  Adviser2,
  CioAdviserCco,
  Directors,
} from "../../utils/CONSTANTS/LeaderShipData";

import "./Leadership.css";

export default function Leadership() {
  return (
    <>
      <NavBar />
      <div className="leadership-section">
        <h2 className="title">
          Meet the individuals who bring unique perspectives, broad experience
          acquired through close collaborations, and deep insight to our work.
        </h2>
        <div className="container-message-teams">
          <div className="name-grid  top-names">
            {Leaders.map(({ imgSrc, name, position }, index) => (
              <LeaderCard
                imgSrc={imgSrc}
                name={name}
                position={position}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="container-message-teams">
          <h3 className="positions">CIO/Adviser I/CCO</h3>
          <div className="name-grid">
            {CioAdviserCco.map(({ imgSrc, name, position }, index) => (
              <LeaderCard
                imgSrc={imgSrc}
                name={name}
                position={position}
                key={index}
              />
            ))}
          </div>
          <h3 className="positions">Adviser II</h3>
          <div className="name-grid">
            {Adviser2.map(({ imgSrc, name, position }, index) => (
              <LeaderCard
                imgSrc={imgSrc}
                name={name}
                position={position}
                key={index}
              />
            ))}
          </div>
          <h3 className="positions">Directors</h3>
          <div className="name-grid">
            {Directors.map(({ imgSrc, name, position }, index) => (
              <LeaderCard
                imgSrc={imgSrc}
                name={name}
                position={position}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
