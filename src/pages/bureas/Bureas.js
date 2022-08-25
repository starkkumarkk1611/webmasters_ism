import { Col, Row } from "react-bootstrap";
import Cards from "../../componenets/Cards/BureauCard";
import NavBar from "../../componenets/headers/NavBar";
import AicteCell from "../../componenets/AicteCell/AicteCells";

import bureau1Img from "../../assets/bureaus/bureau1_0.png";

import AicteCellsData from "../../utils/CONSTANTS/AicteCellsData";

const BureasData = [
  {
    title: "APPROVAL",
    heading: "Prof. Rajendra B Kakde",
    profile: "Adviser -I",
    description:
      "The Approvals Bureau processes proposals for grant of approval for establishing a new technical institution or an integrated campus. ",
    imgSrc: bureau1Img,
  },
  {
    title: "POLICY & ACADEMIC PLANNING",
    heading: "Dr Ramesh Unnikrishnan",
    profile: "Advisor-II",
    description:
      "Special Cell for Research & Coordination with State Govt./UTs. and others coordinates and integrates development of technical education.",
    imgSrc: bureau1Img,
  },
  {
    title: "ADMINISTRATION",
    heading: "Smt Gujju Manushree ",
    profile: "Director",
    description:
      "The Administration Bureau nominates AICTE representatives on various bodies and committees, along with providing logistic support for conducting meetings and trainings for all the staff of the Council.",
    imgSrc: bureau1Img,
  },
  {
    title: "FINANCE",
    heading: "Sh. Ravinder Singh",
    profile: "Director",
    description:
      "The Finance Bureau owns drawing and disbursement of planned and non-planned accounts, along with the management of cash and bills.",
    imgSrc: bureau1Img,
  },
];

export default function Bureas() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className="title">
          The organization structure of the AICTE comprises of the following
          bureaus
        </h2>
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
        </Row>

        <AicteCell AicteCellsData={AicteCellsData} />
      </div>
    </>
  );
}
