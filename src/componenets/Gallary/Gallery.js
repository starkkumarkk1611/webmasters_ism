import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./gallary.css"
function Eminent() {
  return (
    <div className='gallary'>
        <h3>Photos and Gallary</h3>
        <hr></hr>
        <br></br>
        <br></br>
        <Row style={{height: "50vh"}}>
          <Col sm={6}>
            <div className='bg_img'>
              <h4 className='img_txt'>Police Training</h4>
              <p>The nation wide launch of the Student Police Cadet</p>
            </div>
          </Col>
          <Col sm={3}>
            <div className='pics'>
              <div className='top'>
                <h4 className='pic'>Photos</h4>
              </div>
              <div className='mid'>
              </div>
              <div className='mid'>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div className='vids'></div>
          </Col>
        </Row>
    </div>
  )
}

export default Eminent