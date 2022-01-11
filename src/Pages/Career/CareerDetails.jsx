import React from "react";
import InnerBanner from "../../components/InnerBanner";
import InnerHeader from "../../components/Header/InnerHeader";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";

import jobIcon from "../../Assets/images/icons/job_image-main.svg";
import { Link } from "react-router-dom";
import CareerForm from "../../components/CareerForm";
const CareerDetails = () => {
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
  return (
    <div className="career_details_section">
      <InnerHeader />
      <InnerBanner heading="Career Details" />
      <Container>
        <Row>
          <Col col={12} lg={12}>
            <div className="d-md-flex detail_desc justify-content-md-center align-items-center">
              <div className="ur-detail-box d-md-flex mr-md-3">
                <div className="ur-img mr-md-3">
                  <img className="img-fluid" src={jobIcon} alt="Office" />
                </div>
                <div className="ur-title my-3 my-md-0">
                  <h4 className="mb-1">React JS Developer</h4>
                  <span className="full_time job_type">Full Time</span>
                  <div>
                    <span>
                      <strong>Experience:</strong> 1-4 Years
                    </span>
                  </div>
                  <div>
                    <span>
                      <strong>Job Opening:</strong> 3 Positions
                    </span>
                  </div>
                  <div>
                    <span>
                      <strong>Offerd Salary:</strong> 1.2 - 12.0 LPA
                    </span>
                  </div>
                </div>
              </div>
              <div className="ur-detail-btn">
                <Link to="/" className="btn  mt-1">
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
              <p className="px-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                dicta harum quos consectetur asperiores facilis eum, neque
                provident voluptatem, qui, officia debitis iure quisquam
                recusandae aperiam magnam? Ipsam, maxime praesentium. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Facere dicta
                harum quos consectetur asperiores facilis eum, neque provident
                voluptatem, qui, officia debitis iure quisquam recusandae
                aperiam magnam? Ipsam, maxime praesentium. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Facere dicta harum quos
                consectetur asperiores facilis eum, neque provident voluptatem,
                qui, officia debitis iure quisquam recusandae aperiam magnam?
                Ipsam, maxime praesentium.
              </p>
              <p className="px-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                dicta harum quos consectetur asperiores facilis eum, neque
                provident voluptatem, qui, officia debitis iure quisquam
                recusandae aperiam magnam? Ipsam, maxime praesentium.
              </p>
            </div>
            <div className="detail_description">
              <DetailsHeader title="Required Knowledge, Skills, and Abilities" />
            </div>
            <div className="detail_description">
              <DetailsHeader title="Education + Experience" />
              <ul>
                {experienceData.map((item, index) => {
                  return (
                    <li key={index}>
                      <i>
                        <FaArrowAltCircleRight />
                      </i>{" "}
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
  );
};

export default CareerDetails;

const DetailsHeader = ({ title }) => {
  return <h5>{title}</h5>;
};
