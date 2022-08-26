import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./welcome.css";
import SmallCard from "./smallCard";
import angle from "../../assets/welcome/Angle.png";
import React, { useEffect, useState } from "react";
import TopComp from "./TopComp";
import { FaGreaterThan } from "react-icons/fa";

const useDeviceDetect = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return width <= 900;
};
var buttonArr = [
  "PGDM Student Verification",
  "Approval process 2022-23",
  "Centralized Support System",
];
var quickLinksArr = [
  "DigitalSkilling 1 Crore Students",
  "AICTE Internship Portal",
  "Cyber Secutity Awareness",
  "AICT-AI Language tRANSLATION Tool",
  "Approval process 2022-23",
  "ATAL Academy",
  "ODL and Online Regulatory Framework"
];
var quickLinksArr2 = [
  "DigitalSkilling 1 Crore Students",
  "AICTE Internship Portal",
  "Cyber Secutity Awareness",
  "AICT-AI Language tRANSLATION Tool",
  "Approval process 2022-23",
  "ATAL Academy",
  "ODL and Online Regulatory Framework"
];
function Welcome() {
  return (
    <Container style={{ height: "fit-content" }}>
        <Row>
        <TopComp />
          <Col sm={12} lg={6} >
          <div className="quickLinks">
                <h3 className="head_ql">Quick Links</h3>
                <ul className="ql">
                  {quickLinksArr.map((ql, index) => {
                    return (
                      <li className="ql-li">
                      <img className="me-2" src={angle} al="angle" />
                        <a href="#">{ql}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </Col>
          <Col sm={12} lg={6}>
          <div className="quickLinks">
                <h3 className="head_ql">Announcement</h3>
                <ul className="ql">
                  {quickLinksArr2.map((ql, index) => {
                    return (
                      <li className="ql-li">
                      <img className="me-2" src={angle} al="angle" />
                        <a href="#">{ql}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </Col>
        </Row>
    </Container>
  );
}

export default Welcome;
