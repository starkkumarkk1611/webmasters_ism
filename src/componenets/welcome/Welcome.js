import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./welcome.css";
import SmallCard from "./smallCard";
import { FaGreaterThan } from 'react-icons/fa';
import React, { useEffect, useState } from "react";
import TopComp from "./TopComp";

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
  "Student Learning Assessment-PARAKH|",
  "Student Learning Assessment-PARAKH|",
  "Approval Process 2022-23",
  "ODL and Online Regulatory Framework|",
  "PMSSS J&K|",
  "Policies & Reforms|",
  "FDP-SI Web portal",
  "AICTE FIT India Challenge",
  "AICTE KARMA",
  "Academic Leaders' Conclave",
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
                  <li className="ql-li" key={`quicklink-${index}`}>
                    <FaGreaterThan />
                    <a href="#"> {ql}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </Col>
        <Col sm={12} lg={6}>
          <div className="quickLinks">
            <h3 className="head_ql">Quick Links</h3>
            <ul className="ql">
              {quickLinksArr.map((ql, index) => {
                return (
                  <li className="ql-li" key={`quicklink2-${index}`} >
                    <FaGreaterThan />
                    <a href="#"> {ql}</a>
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
