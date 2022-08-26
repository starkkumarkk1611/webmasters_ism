import React, { useRef, useState } from "react";
import "./Search.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdKeyboardVoice } from "react-icons/md";
import { AiFillCamera } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";

import axios from "axios";

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
  const [searchData, setSearchData] = useState([]);
  const inputRef = useRef();
  const handleSearchText = async (e) => {
    e.preventDefault();
    const q = inputRef.current.value;
    console.log(q);
    const res = await axios.get("http://localhost:3001/search", {
      params: {
        q: q,
      },
    });
    setSearchData(res.data.items);
    console.log("res", res);
  };

  return (
    <div className="searchDiv">
      <form className="searchDiv2" onSubmit={handleSearchText}>
        <input
          className="searchInput"
          ref={inputRef}
          placeholder="Search"
        ></input>
        <button type="submit" className="btn-link border-0">
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
            {searchData.map(({ link, snippet, title }) => (
              <a href={link} className="cardSearch">
                <h4 className="pad pad1">{title}</h4>
                <p className="pad">{snippet}</p>
              </a>
            ))}
          </Col>
          {/* <Col sm={12} lg={4}>
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
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Search;
