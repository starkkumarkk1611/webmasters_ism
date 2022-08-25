import React from "react";

const LeaderCard = ({ imgSrc, name, position }) => {
  return (
    <div className="leader-card">
      <a
        className="leader-card-image"
        href="#a"
        target="_blank"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <img src={imgSrc} alt={name} />
      </a>
      <a className="leader-card-description" href="!#" target="_blank">
        <h2>{name}</h2>
        <p>{position}`</p>
      </a>
    </div>
  );
};

export default LeaderCard;
