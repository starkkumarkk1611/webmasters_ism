import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./welcome.css";
import React, { useEffect, useState } from "react";

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
      {!useDeviceDetect() ? (
        <Row>
          <Col sm={7}>
            <h2 className="welcome">Welcome to AICTE</h2>
            <p>
              All India Council for Technical Education (AICTE) was set up in
              November 1945 as a national-level Apex Advisory Body to conduct a
              survey on the facilities available for technical education and to
              promote development in the country in a coordinated and integrated
              manner.
            </p>
            <Button
              style={{ marginTop: "5vh", marginRight: "10px" }}
              variant="primary"
            >
              PGDM Student Verification
            </Button>
            <Button
              style={{ marginTop: "5vh", marginRight: "10px" }}
              variant="primary"
            >
              Approval process 2022-23
            </Button>
            <Button style={{ marginTop: "5vh" }} variant="primary">
              Centralized Support System
            </Button>
          </Col>
          <Col sm={5}>
            <div className="quickLinks">
            <h3 className="head_ql">Quick Links</h3>
              <ul className="ql">
                <li className="ql-li">
                  <a href="" />
                  Student Learning Assessment-PARAKH|
                </li>
                <li>
                  <a href="" />
                  Student Learning Assessment-PARAKH|
                </li>
                <li>
                  <a href="" />
                  Approval Process 2022-23
                </li>
                <li>
                  <a href="" />
                  ODL and Online Regulatory Framework|
                </li>
                <li>
                  <a href="" />
                  PMSSS J&K|
                </li>
                <li>
                  <a href="" />
                  Policies & Reforms|
                </li>
                <li>
                  <a href="" />
                  FDP-SI Web portal
                </li>
                <li>
                  <a href="" />
                  AICTE FIT India Challenge
                </li>
                <li>
                  <a href="" />
                  AICTE KARMA
                </li>
                <li>
                  <a href="" />
                  Academic Leaders' Conclave
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      ) : (
        <>
          <Row>
            <Col sm={12}>
              <h2 className="welcome">Welcome to AICTE</h2>
              <p>
                All India Council for Technical Education (AICTE) was set up in
                November 1945 as a national-level Apex Advisory Body to conduct
                a survey on the facilities available for technical education and
                to promote development in the country in a coordinated and
                integrated manner.
              </p>
              <Button
                style={{ marginTop: "5vh", marginRight: "10px" }}
                variant="primary"
              >
                PGDM Student Verification
              </Button>
              <Button
                style={{ marginTop: "5vh", marginRight: "10px" }}
                variant="primary"
              >
                Approval process 2022-23
              </Button>
              <Button style={{ marginTop: "5vh" }} variant="primary">
                Centralized Support System
              </Button>
            </Col>
          </Row>
          <Row style={{marginTop:"30px"}}>
            <Col sm={12}>
              <div className="quickLinks">
              <h3 className="head_ql">Quick Links</h3>
              <ul className="ql">
                <li className="ql-li">
                  <a href="" />
                  Student Learning Assessment-PARAKH|
                </li>
                <li>
                  <a href="" />
                  Student Learning Assessment-PARAKH|
                </li>
                <li>
                  <a href="" />
                  Approval Process 2022-23
                </li>
                <li>
                  <a href="" />
                  ODL and Online Regulatory Framework|
                </li>
                <li>
                  <a href="" />
                  PMSSS J&K|
                </li>
                <li>
                  <a href="" />
                  Policies & Reforms|
                </li>
                <li>
                  <a href="" />
                  FDP-SI Web portal
                </li>
                <li>
                  <a href="" />
                  AICTE FIT India Challenge
                </li>
                <li>
                  <a href="" />
                  AICTE KARMA
                </li>
                <li>
                  <a href="" />
                  Academic Leaders' Conclave
                </li>
              </ul>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Container>
    
  );
}

export default Welcome;
