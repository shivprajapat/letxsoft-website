import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import { OpenPositionsData } from "./data";
const OpenPositions = () => {

  return (
    <section className="open-positions section_padding">
      <Container>
        <Row className="justify-content-center">
          <Heading heading="Open Positions" />
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
            {OpenPositionsData.CareerData.map((career, index) => {
              const { title, salary, opening, id } = career;
              return (
                <div className="job-apply-box" key={index}>
                  <Row className="align-items-center">
                    <Col lg={9} md={8}>
                      <div className="left-side">
                        <h3>{title}</h3>
                        <p className="mb-0">
                          <span>
                            <strong>Job Type: </strong> Full Time
                          </span>
                          <span>
                            <strong>Job Opening: </strong> {opening}
                          </span>
                          <span>
                            <strong>Price: {salary}</strong>{" "}
                          </span>
                        </p>
                      </div>
                    </Col>
                    <Col lg={3} md={4}>
                      <div className="apply-now text-md-right">
                        <Link className="apply-now-btn" to={`/career-details/${id}`}>
                          Apply Now
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OpenPositions;
