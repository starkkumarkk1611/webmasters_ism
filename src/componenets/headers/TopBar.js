import React, { useState, useEffect } from "react";
import { GiSpeaker } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import "./TopBar.css";
const TopBar = () => {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    setInterval(() => setDateTime(new Date().toLocaleString()), 500);
  }, []);

  return (
    <div className="vw-100 d-flex align-items-center justify-content-evenly top-bar">
      <div className="d-flex align-items-center justify-content-center ">
        <div className="mx-4">{dateTime}</div>
        <div className="d-flex align-items-center justify-content-center">
          <GiSpeaker size={20} />
          Screen Reader Access
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex mx-2 align-items-center">
          Text Size
          <strong className="font-weight-bold mx-1">A-</strong>
          <strong className="font-weight-bold mx-1">A</strong>
          <strong className="font-weight-bold mx-1">A+</strong>
        </div>
        <div id="social-media" className="mx-2">
          <GiSpeaker size={20} />
        </div>
        <div id="site-map" className="mx-2">
          <GiSpeaker size={20} />
        </div>
        <div id="translate">
          <GiSpeaker size={20} />
        </div>

        <button
          className="d-flex mx-2"
          id="top-nav-login"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <FaUserAlt color="white" size={15} />
          Web Portal Login
        </button>
      </div>
    </div>
  );
};

export default TopBar;
