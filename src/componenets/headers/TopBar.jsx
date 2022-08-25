import React, { useState, useEffect } from "react";
import { GiSpeaker } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "./TopBar.css";
const TopBar = () => {
  const { i18n, t } = useTranslation(["home"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLngCng = (e) => {
    i18n.changeLanguage(e.target.value);
  };

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
          {t("topbar.screenrederaccess")}
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex mx-2 align-items-center">
          {t("topbar.textsize")}

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
        <label htmlFor="lang">
          <GrLanguage size={20} />
        </label>
        <select name="lang" id="lang" onChange={handleLngCng}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="bn">Bengoli</option>
          <option value="ta">Tamil</option>
        </select>

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
          {t("topbar.webloginportal")}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
