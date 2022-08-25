import React from "react";
import NavBar from "../../componenets/headers/NavBar";
import InitiativesHeroImage from "../../assets/initiatives/initiatives.png";
import InitiativesImage1 from "../../assets/initiatives/initiatives-1.png";
import InitiativesImage2 from "../../assets/initiatives/initiatives-2.png";
import InitiativesImage3 from "../../assets/initiatives/initiatives-3.png";
import InitiativesImage4 from "../../assets/initiatives/initiatives-4.png";
import InitiativesImage5 from "../../assets/initiatives/initiatives-5.png";
import InitiativesImage6 from "../../assets/initiatives/initiatives-6.png";
import { BsCalendarEvent, BsChevronDoubleRight } from "react-icons/bs";
import Footer from "../../componenets/footer/Footer";
import "./initiative.css";

export default function InitiativesPage() {
  return (
    <>
      <NavBar />
      <img
        className="d-block w-100"
        src={InitiativesHeroImage}
        alt="First slide"
        style={{ height: "70vh" }}
      />
      <div className="initiatives">
        <div className="left_part">
          <h2 className="title">
            Read about the initiatives undertaken by AICTE to promote technical
            education
          </h2>
          <div style={{ display: "flex" }}>
            <div style={{ width: "100%" }}>
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
                  id="options2"
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
                  id="options3"
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
              <h1 className="latest-heading">LATEST</h1>
              <ul className="latest-list">
                <li className="latest-elements bg-b">
                  AICTE Student Learning Assessment Project
                </li>
                <li className="latest-elements">
                  AICTE Student Learning Assessment Project
                </li>
                <li className="latest-elements bg-b">
                  AICTE Student Learning Assessment Project
                </li>
                <li className="latest-elements">
                  AICTE Student Learning Assessment Project
                </li>
                <li className="latest-elements bg-b">
                  AICTE Student Learning Assessment Project
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="right_part">
          <h2 className="news_box_title">News and Announcements</h2>
          <span className="small_text">
            AICTE PARAKH Portal is OPEN for Registration and Assesments
          </span>
          <p className="dates">
            <BsCalendarEvent /> Thursday, October 7, 2021
          </p>
          <span className="small_text">
            Applications invited for AICTE-UKIERI Technical Education Leadership
            Development Programme AY 2020-21
          </span>
          <p className="dates">
            <BsCalendarEvent /> Wednesday, June 3, 2020
          </p>
          <span className="small_text">
            From addressing underemployment among engineering graduates to
            handing them degrees only on completion of four months of
            internship.
          </span>
          <p className="dates">
            <BsCalendarEvent /> Sunday, June 25, 2017
          </p>
          <span className="small_text">
            Engineering colleges not maintaining the prescribed student-faculty
            ratio will be liable for action, the All India Council for Technical
            Education (AICTE) has said.
          </span>
          <p className="dates">
            <BsCalendarEvent /> Sunday, June 25, 2017
          </p>
          <span className="small_text">
            Engineering colleges not maintaining the prescribed student-faculty
            ratio will be liable for action, the All India Council for Technical
            Education (AICTE) has said.
          </span>
          <p className="dates">
            <BsCalendarEvent /> Sunday, April 9, 2017
          </p>
          <button
            className="d-flex mx-2"
            id="top-nav-login"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "0.2rem 1rem 0.2rem 1rem",
              margin: "0.5rem 0 0.5rem 0",
              border: "none",
            }}
          >
            Read More
          </button>
        </div>
      </div>
      <div className="initiatives-2">
        <h2 className="title">More Initiatives</h2>
        <div className="other-initiatives">
          <div className="initiative-card">
            <img
              className="options"
              id="options1"
              src={InitiativesImage4}
              alt="First slide"
              style={{
                margin: "3rem 0 0 0",
                width: "100%",
                padding: "1.5rem",
              }}
            />
            <p className="img-caption">AICTE-CII India Innovation Initiative</p>
          </div>
          <div className="initiative-card">
            <img
              className="options"
              id="options2"
              src={InitiativesImage5}
              alt="First slide"
              style={{
                margin: "3rem 0 0 0",
                width: "100%",
                padding: "1.5rem",
              }}
            />
            <p className="img-caption">Clean & Green Campus</p>
          </div>
          <div className="initiative-card">
            <img
              className="options"
              id="options3"
              src={InitiativesImage6}
              alt="First slide"
              style={{
                margin: "3rem 0 0 0",
                width: "100%",
                padding: "1.5rem",
              }}
            />
            <p className="img-caption">Jal Shakti Abhiyan</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
