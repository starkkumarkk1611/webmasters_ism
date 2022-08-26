import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./topComp.css";
// import Cards from "../../componenets/Cards/BureauCard";
import img1 from "../../assets/topComp/img1.png";
import img2 from "../../assets/topComp/img2.png";
import img3 from "../../assets/topComp/img3.png";
// import pgdmLogo from "../../assets/welcome/Rectangle 1993.png";
// import centerLogo from "../../assets/welcome/Rectangle 1996.png";
import React from "react";
function ResponsiveAutoExample() {
  return (
    <Container style={{ height: "fit-content" }}>

        <Row style={{marginTop:"0px"}}>
        <Col md={12} lg={6} >
          <div className="quickLinks1">
          <h3 className="head_ql1">Welcome to AICTE</h3>
          <p className="ql1">
               All India Council for Technical Education (AICTE) was set up in
               November 1945 as a national-level Apex Advisory Body to conduct a
               survey on the facilities available for technical education and to
               promote development in the country in a coordinated and integrated
               manner.
           </p>
         
          </div>
         
        </Col>
        <Col className="imgDiv" md={4} lg={2}>
          <img src={ img1} alt="aictelogo" className="imgT" />
        </Col>
        <Col md={4} lg={2}>
          <img src={ img2} alt="aictelogo" className="imgT" />
         
        </Col>
        <Col className="mb-5" md={4} lg={2}>
          <img src={ img3} alt="aictelogo" className="imgT"  />
         
        </Col>
        
      </Row>


    </Container>
    
  );
}

export default ResponsiveAutoExample;
