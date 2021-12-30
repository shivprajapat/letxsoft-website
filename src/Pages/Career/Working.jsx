import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { WorkingData } from "./data";
const Working = () => {
  return (
    <section className="working-section section_padding">
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            <div className="career-heading">
              <h2>Life at Letxsoft technology</h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12}>
            <div className="working-tab">
              {WorkingData.map((work, index) => {
                const { title, description, img } = work;

                return (
                  <div className="column">
                    <div className="icon mb-3 mb-md-0">
                      <img className="img-fluid" src={img} alt="Office" />
                    </div>
                    <div className="content">
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Working;
