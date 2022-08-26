import React, { useRef } from "react";
import "./Search.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../assets/bhaba.png";
import { MdKeyboardVoice } from "react-icons/md";
import { AiFillCamera } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
// const { google } = require("googleapis");

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

function Search() {
  // const customsearch = google.customsearch("v1");
  const inputRef = useRef();
  const handleSearchText = (e) => {
    const q = inputRef.current.value;

    e.preventDefault();
    // customsearch.cse
    //   .list({
    //     auth: "AIzaSyCrCccWBsR-RD5gLm9gW00LqvbenUuO8g4",
    //     cx: "05cee66f354374f75",
    //     q,
    //   })
    //   .then((result) => result.data)
    //   .then((result) => {
    //     const { queries, items, searchInformation } = result;

    //     const page = (queries.request || [])[0] || {};
    //     const previousPage = (queries.previousPage || [])[0] || {};
    //     const nextPage = (queries.nextPage || [])[0] || {};

    //     const data = {
    //       q,
    //       totalResults: page.totalResults,
    //       count: page.count,
    //       startIndex: page.startIndex,
    //       nextPage: nextPage.startIndex,
    //       previousPage: previousPage.startIndex,
    //       time: searchInformation.searchTime,
    //       items: items.map((o) => ({
    //         link: o.link,
    //         title: o.title,
    //         snippet: o.snippet,
    //         img: (((o.pagemap || {}).cse_image || {})[0] || {}).src,
    //       })),
    //     };
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    console.log(inputRef.current.value);
  };

  return (
    <div className="searchDiv">
      <form className="searchDiv2" onSubmit={handleSearchText}>
        <input
          className="searchInput"
          ref={inputRef}
          placeholder="Search"
        ></input>
        <button type="submit">
          <BiSearchAlt size="2vw" style={{ margin: "0px 10px" }} />
        </button>
        <a href="!#">
          <MdKeyboardVoice size="2vw" style={{ margin: "0px 10px" }} />
        </a>
        <a href="!#">
          <AiFillCamera size="2vw" style={{ margin: "0px 10px" }} />
        </a>
      </form>
      <br />
      <br />
      {/* voice,  search, cam */}
      <Container>
        <Row>
          <Col sm={12} lg={8}>
            <div className="cardSearch">
              <h4 className="pad pad1">Head</h4>
              <p className="pad">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
              <br />
              <button className="btnSearch">Learn More</button>
              <br />
            </div>
          </Col>
          <Col sm={12} lg={4}>
            <div className="quickLinks1">
              <h3 className="head_ql1">Quick Links</h3>
              <ul className="ql1">
                {quickLinksArr.map((ql, index) => {
                  return (
                    <li className="ql1-li">
                      <FaGreaterThan />
                      <a className="linkSearch" href="!#">
                        {ql}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
