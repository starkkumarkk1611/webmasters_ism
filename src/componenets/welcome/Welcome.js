import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./welcome.css";
import Cards from "../../componenets/Cards/BureauCard";
import pmssLogo from "../../assets/welcome/Mask group.png";
import pgdmLogo from "../../assets/welcome/Rectangle 1993.png";
import centerLogo from "../../assets/welcome/Rectangle 1996.png";
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
function ResponsiveAutoExample() {
  return (
    <Container style={{ height: "fit-content" }}>

        <Row style={{marginTop:"0px"}}>
        <Col md={4} >
          <div className="quickLinks">
          <h3 className="head_ql">Welcome to AICTE</h3>
          <p className="ql">
               All India Council for Technical Education (AICTE) was set up in
               November 1945 as a national-level Apex Advisory Body to conduct a
               survey on the facilities available for technical education and to
               promote development in the country in a coordinated and integrated
               manner.
           </p>
         
          </div>
         
        </Col>
        <Col sm={2}>
          <div className="quickLinks1" style={{ backgroundcolor: "white" }}>
          <img src={ pmssLogo} alt="aictelogo" className="imglogo"/>
          <h3 className="head_ql">PMSSS Registration</h3> 
          </div>
         
        </Col>
        <Col sm={2}>
          <div className="quickLinks1">
          <img src={  pmssLogo } alt="aictelogo"  className="imglogo" />
          <h3 className="head_ql">PGDM Student Verification</h3>
          
         
          </div>
         
        </Col>
        <Col sm={2}>
          <div className="quickLinks1">
          <img src={ pmssLogo} alt="aictelogo"  className="imglogo"/>
          <h3 className="head_ql">Centralized Support System</h3>
         
          </div>
         
        </Col>
        
      </Row>


    </Container>
    
  );
}

export default ResponsiveAutoExample;
