import React from "react";
import "./AicteCells.css";
import { Link } from "react-router-dom";
export default function AicteCell({ AicteCellsData }) {
  return (
    <div>
      <h2 className="title">AICTE Cells</h2>
      <div className="cellContainer">
        {AicteCellsData.map(({ label, href, to }, index) => (
          <div class="cell" key={index}>
            {href && <a href={href}>{label}</a>}
            {to && <Link to={to}>{label}</Link>}
          </div>
        ))}
      </div>
    </div>
  );
}
