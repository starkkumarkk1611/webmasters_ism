import React from "react";

import InitiativesImage1 from "../assets/initiatives/initiatives-1.png";
import InitiativesImage2 from "../assets/initiatives/initiatives-2.png";
import InitiativesImage3 from "../assets/initiatives/initiatives-3.png";
import InitiativesImage4 from "../assets/initiatives/initiatives-4.png";
import InitiativesImage5 from "../assets/initiatives/initiatives-5.png";
import InitiativesImage6 from "../assets/initiatives/initiatives-6.png";
import { BsCalendarEvent, BsChevronDoubleRight } from "react-icons/bs";

import "./bureaus.css";

export default function Bureaus() {
  return (
    <>
   
     
      <div className="initiatives">
     
        <div className="left_part">
        <h2>Bureaus</h2>
          <div style={{ display: "flex" , alignItems:"flex-start", justifyContent:"space-between",}}>
            <div style={{ width: "60%",marginRight:"2rem"}}>
              <div className="slider-1" id="slider-1">
                <img
                  className="d-block"
                  src={InitiativesImage1}
                  alt="First slide"
                  style={{
                    height: "40-vh",
                    margin: "3rem 0 0 0",
                    width: "100%",
                  }}
                />
                <div className="caption">
                  <p className="caption-p">
                    The AICTE-SLA project is designed to measure the benchmark
                    levels and gains in academic and aptitude skills by the
                    students in technical programs and to understand the various
                    factors that affect skill development of students in
                    Technical Institutes across India.
                  </p>
                  <p className="caption-learn-more">
                    <BsChevronDoubleRight /> Learn More
                  </p>
                </div>
              </div>
              <div className="slider-1-options">
                <img
                  className="options"
                  id="options1"
                  src={InitiativesImage1}
                  alt="First slide"
                  style={{
                    height: "40-vh",
                    margin: "3rem 0 0 0",
                    width: "33.33%",
                    border: "solid 5px #FE9A31",
                    padding: 0,
                    borderRadius: "5px",
                  }}
                />
                <img
                  className="options"
                  id="options1"
                  src={InitiativesImage2}
                  alt="First slide"
                  style={{
                    height: "40-vh",
                    margin: "3rem 0 0 0",
                    width: "33.33%",
                  }}
                />
                <img
                  className="options"
                  id="options1"
                  src={InitiativesImage3}
                  alt="First slide"
                  style={{
                    height: "40-vh",
                    margin: "3rem 0 0 0",
                    width: "33.33%",
                  }}
                />
              </div>
            </div>
            <div className="latest-section">
              
              <ul className="latest-list">
                <li className="latest-elements bg-b">
                 Overview
                </li>
                <li className="latest-elements">
                  Approval
                </li>
                <li className="latest-elements bg-b">
                 Policy and academic policy
                </li>
                <li className="latest-elements">
                  Administration
                </li>
                <li className="latest-elements bg-b">
                  Finance
                </li>
              </ul>
            </div>
          </div>
        </div>

       
      
         
           
        
        </div>
      </>
      
                
  );
}
