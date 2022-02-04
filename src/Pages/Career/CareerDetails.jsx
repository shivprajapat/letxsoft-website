import React from "react";
import InnerBanner from "../../components/InnerBanner";
import InnerHeader from "../../components/Header/InnerHeader";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";

import jobIcon from "../../Assets/images/icons/job_image-main.svg";
import { Link } from "react-router-dom";
import CareerForm from "../../components/CareerForm";
import { OpenPositionsData } from "./data";
import { Helmet } from "react-helmet";

const CareerDetails = (props) => {
  const experienceData = [
    {
      title:
        "Bachelor’s degree in computer science, information technology, or a similar field.",
    },
    { title: "Previous experience working as a react.js developer." },
    {
      title:
        "In-depth knowledge of JavaScript, CSS, HTML, and front-end languages.",
    },
    {
      title: "Knowledge of REACT tools including React.js, Webpack, and Redux.",
    },
    { title: "Experience with user interface design." },
    {
      title:
        "Knowledge of performance testing frameworks including Mocha and Jest.",
    },
    { title: "Good project management skills." },
  ];

  let getId = props.match.params.id;
  const getData = OpenPositionsData.CareerData[getId - 1];

  console.log(getData);
  return (
    <React.Fragment>
      <Helmet>
        <title>Career Details || Page</title>
        <meta name="description" content="Career Details Page" />
      </Helmet>
      <div className="career_details_section">
        <InnerHeader />
        <InnerBanner heading="Career Details" name="Home" subname="Career Details"/>
        <Container>
          <Row>
            <Col col={12} lg={12}>
              <div className="d-md-flex detail_desc justify-content-md-center align-items-center">
                <div className="ur-detail-box d-md-flex mr-md-3">
                  <div className="ur-img mr-md-3">
                    <img className="img-fluid" src={jobIcon} alt="Office" />
                  </div>
                  <div className="ur-title my-3 my-md-0">
                    <h4 className="mb-1">{getData.title}</h4>
                    <span className="full_time job_type">Full Time</span>
                    <div>
                      <span>
                        <strong>Experience:</strong> 1-4 Years
                      </span>
                    </div>
                    <div>
                      <span>
                        <strong>Job Opening:</strong> {getData.opening} Positions
                      </span>
                    </div>
                    <div>
                      <span>
                        <strong>Offerd Salary:</strong> {getData.salary}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ur-detail-btn">
                  <Link to="/career" className="btn  mt-1">
                    <span>Go Back</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="section_padding">
            <Col col={12} lg={8} mb={4}>
              <div className="detail_description">
                <DetailsHeader title="Job Description" />
                <p className="px-3">{getData.jobDescription}</p>
              </div>
              <div className="detail_description">
                <DetailsHeader title="Required Knowledge, Skills + Experience" />
                <ul>
                  {experienceData.map((item, index) => {
                    return (
                      <li key={index}>
                        <i>
                          <FaArrowAltCircleRight />
                        </i>
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col col={12} lg={4} className="detail_form_tab">
              <CareerForm />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CareerDetails;

const DetailsHeader = ({ title }) => {
  return <h5>{title}</h5>;
};
