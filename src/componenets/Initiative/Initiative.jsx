import React from 'react'
import Cards from "../../componenets/Cards/BureauCard";
import Cards2 from "../../componenets/Cards/initCard";
import img from "../../assets/cardImg.png";
import img3 from "../../assets/womEmp.png";
import img4 from "../../assets/disable.png";
import img5 from "../../assets/research.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img2 from "../../assets/initAs.png";

const BureasData = [
    {
    //   title: "APPROVAL",
    //   heading: "Prof. Rajendra B Kakde",
    //   profile: "Adviser -I",
      description:
        "The Approvals Bureau processes proposals for grant of approval for establishing a new technical institution or an integrated campus. ",
      imgSrc: img,
    },
    {
        // title: "APPROVAL",
        // heading: "Prof. Rajendra B Kakde",
        // profile: "Adviser -I",
        description:
          "The Approvals Bureau processes proposals for grant of approval for establishing a new technical institution or an integrated campus. ",
        imgSrc: img,
      }
  ];

  const BureasData2 = [
    {
      profile : "National e-Scholarship",
    //   heading: "Prof. Rajendra B Kakde",
    //   profile: "Adviser -I",
    description:
    "National e-Scholarship is the one-stop solution to help students seek various scholarships.",
    },
    {
        profile : "APPROVAL",
        // heading: "Prof. Rajendra B Kakde",
        // profile: "Adviser -I",
        description:
          "National e-Scholarship is the one-stop solution to help students seek various scholarships."
        // imgSrc: img,
      },
      {
        profile: "National e-Scholarship",
      //   heading: "Prof. Rajendra B Kakde",
      //   profile: "Adviser -I",
      description:
      "National e-Scholarship is the one-stop solution to help students seek various scholarships.",
      },
      {
          profile: "APPROVAL",
          // heading: "Prof. Rajendra B Kakde",
          // profile: "Adviser -I",
          description:
            "National e-Scholarship is the one-stop solution to help students seek various scholarships."
          // imgSrc: img,
        }
  ];
  const BureasData3 = [
    {
    //   title: "APPROVAL",
    //   heading: "Prof. Rajendra B Kakde",
    //   profile: "Adviser -I",
      description:
        "The Approvals Bureau processes proposals for grant of approval for establishing a new technical institution or an integrated campus. ",
      imgSrc: img3,
    },
    {
        // title: "APPROVAL",
        // heading: "Prof. Rajendra B Kakde",
        // profile: "Adviser -I",
        description:
          "The Approvals Bureau processes proposals for grant of approval for establishing a new technical institution or an integrated campus. ",
        imgSrc: img4,
      },
      {
        // title: "APPROVAL",
        // heading: "Prof. Rajendra B Kakde",
        // profile: "Adviser -I",
        description:
          "The Approvals Bureau processes proposals for grant of approval for establishing a new technical institution or an integrated campus. ",
        imgSrc: img5,
      }
  ];
function Initiative() {
  return (
    <div className='eminent'>
    <h3 className="eminent_head">Initiatives & Schemes</h3>
    <hr className='hor_rule'></hr>
    <Container>
    <Row>
    {BureasData.map(
            ({ title, heading, profile, description, imgSrc }, index) => (
              <Col xs={12} md={6} lg={3} key={index}>
                <Cards
                  title={title}
                  heading={heading}
                  profile={profile}
                  description={description}
                  imgSrc={imgSrc}
                />
              </Col>
            )
          )}
      <Col lg={6}>
        <img className='imgInit' src={img2} alt="img2" />
      </Col>;
    </Row>
    <br />  
    <Row >
    {BureasData2.map(
            ({ title, heading, profile, description, imgSrc }, index) => (
              <Col xs={12} md={6} lg={3} key={index}>
                <Cards
                  title={title}
                  heading={heading}
                  profile={profile}
                  description={description}
                  imgSrc={imgSrc}
                />
              </Col>
            )
          )}
    </Row>
    <br />
    <br />
    <Row>
    {BureasData3.map(
            ({ title, heading, profile, description, imgSrc }, index) => (
              <>
              <Col style={{paddingBottom : "3vw"}} s={12} md={5} lg={3} key={index}>
                <img src={imgSrc} alt="img2" />
              </Col>
              <Col s={1} md={0} lg={1} key={index}>
              </Col>
              </>
            )
          )}
    </Row>
  </Container>
  </div>
  )
}

export default Initiative