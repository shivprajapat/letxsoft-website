import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../components/Heading";
export default function About() {
  return (
    <section className="about section_padding">
      <Container>
        <Row>
          <Col lg={5} md={5}>
            <div className="about_sec">
              <Heading heading="about" top_heading="About" />
              <div className="about_txt">
                <p>
                  Letxsoft Technology is one of the well-known leaders in the
                  technology revolution and provides complete IT solutions since
                  2016. The company provides the best services in Mobile
                  application, Website development, Designing & Digital
                  marketing. We are a team of highly professional experts.{" "}
                </p>
              </div>
              <div className="btn-block">
                <a href="#regin" className="blue_btn">
                  Learn More
                </a>
              </div>
            </div>
          </Col>
          <Col lg={7} md={7}>
            <div className="about_img up-down">
              <img src={require("../../images/01.png").default} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
