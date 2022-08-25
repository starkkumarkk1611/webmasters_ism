import React from 'react'
import "./Search.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../assets/bhaba.png"
import {MdKeyboardVoice} from 'react-icons/md'
import {AiFillCamera} from 'react-icons/ai' 
import {BiSearchAlt} from "react-icons/bi";
import { FaGreaterThan } from 'react-icons/fa';
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
  return (
    <div className='searchDiv'>
    <div className='searchDiv2'>
    <input className='searchInput' placeholder='Search'></input>
    <a><MdKeyboardVoice size="2vw" style={{margin:"0px 10px"}}/></a>
    <a><AiFillCamera size="2vw" style={{margin:"0px 10px"}}/></a>
    <a><BiSearchAlt size="2vw" style={{margin:"0px 10px"}}/></a>
    </div>
    <br />
    <br />
    {/* voice,  search, cam */}
    <Container >
    <Row>
        <Col sm={12} lg={8} >
          <div className='cardSearch'>
            <h4 className='pad pad1'>Head</h4>
            <p className='pad'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            <br />
            <button className='btnSearch'>Learn More</button>
            <br />
          </div>
        </Col>    
        <Col sm={12} lg={4} >
          <div className="quickLinks1">
                <h3 className="head_ql1">Quick Links</h3>
                <ul className="ql1">
                  {quickLinksArr.map((ql, index) => {
                    return (
                      <li className="ql1-li">
                        <FaGreaterThan />
                        <a className='linkSearch' href="#"> {ql}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Search