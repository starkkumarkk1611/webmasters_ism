import React from "react";
import { GiSmartphone } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import aicteLogo from "../../assets/aictelogo.png";
import { useTranslation } from "react-i18next";
import "./Header.css";
const Header = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div
      className="d-flex align-items-center justify-content-evenly p-2"
      id="main-header"
    >
      <div className="d-flex align-items-center justify-content-evenly main-logo">
        <img src={aicteLogo} alt="aictelogo" />
        <h2 className="mx-2 p-0">AICTE</h2>
        <span className="vertical-main-bar"></span>
        <div className="mx-0">
          <p className="m-0 p-0 small">
            All India Council for Technical Education
          </p>
          <p className="m-0 p-0 small">अखिल भारतीय तकनीकी शिक्षा परिषद</p>
        </div>
      </div>
      <div
        className="d-flex align-items-center justify-content-evenly p-3"
        style={{ color: "#545454" }}
      >
        <div className="d-flex align-items-center justify-content-evenly">
          <GiSmartphone size={22} />
          1800 12345
        </div>
        <span className="vertical-bar"></span>

        <div
          className="d-flex align-items-center justify-content-evenly m-0 p-0"
          style={{
            borderWidth: "2px",
          }}
        >
          <FaMapMarkerAlt />
          Dhanbad, Jharkhand
        </div>
        <span className="vertical-bar"></span>
        <div className="d-flex align-items-center justify-content-evenly">
          <TiWeatherPartlySunny />
          24&#8451;/75&#8457;
        </div>
      </div>
    </div>
  );
};

export default Header;
