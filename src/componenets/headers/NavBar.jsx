import React, { useRef, useEffect, useState } from "react";
import "./NavBar.css";
import { AiFillHome } from "react-icons/ai";

import { BsChevronCompactDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import MainMenu from "../../utils/CONSTANTS/NavMenuData";
import { useTranslation } from "react-i18next";

const NavBar = ({ navItems = MainMenu }) => {
  const { t } = useTranslation(["home"]);
  const navBarRef = useRef(null);
  const [dropDownTop, setDropDownTop] = useState("12em");
  const handleDropDownToggle = (el) => {
    window.document.querySelectorAll(".dropDown").forEach((el) => {
      el.style.display = "none";
    });
    el.currentTarget.lastElementChild.style.display = "flex";
  };
  const handleDropDownHeight = () => {
    setDropDownTop(navBarRef.current.getBoundingClientRect().bottom);
  };
  const handleDropDownNone = (event) => {
    event.currentTarget.style.display = "none";
  };
  useEffect(() => {
    window.addEventListener("resize", handleDropDownHeight, false);
  }, []);

  return (
    <div
      ref={navBarRef}
      className="d-flex align-items-center justify-content-center  nav-bar"
    >
      <div className="nav-items d-flex align-items-center">
        <div className="d-flex">
          <p className="d-flex align-items-center m-0">
            <AiFillHome size="25" />
          </p>
          <span> </span>
        </div>
      </div>
      {navItems.map(({ labellngkey, dropDownItems }, index) => (
        <div
          className="nav-items d-flex align-items-center"
          key={index}
          onMouseOver={handleDropDownToggle}
        >
          <div className="d-flex align-items-center">
            <p className="d-flex align-items-center m-0">
              {t(`navbar.${labellngkey}`)}
            </p>
            <BsChevronCompactDown size={20} className="carret mx-1" />
          </div>
          <div
            className="dropDown"
            style={{ top: dropDownTop, zIndex: "1" }}
            onMouseLeave={handleDropDownNone}
          >
            {dropDownItems.map(({ label, desc, href, to }, index) => (
              <Link
                to="/about-us/overview"
                className="p-2 mb-2 drop-down-items text-decoration-none"
                key={index}
              >
                <div style={{ textAlign: "left" }} className="label_navlink">
                  {label}
                </div>
                <div className="small">{desc}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
