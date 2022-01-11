import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InnerBanner from "../../components/InnerBanner";
import InnerHeader from "../../components/Header/InnerHeader";
import Heading from "../../components/Heading";
import aboutimg from "../../Assets/images/img-about1.png";
import Counter from "./Counter";
const About = () => {
  return (
    <React.Fragment>
      <InnerHeader />
      <InnerBanner heading="About" />
      <div id="about" className="section_padding">
        <Container>
          <Row className="clearfix align-items-center">
            <Col lg={7} md={12} sm={12} className="content-column order-1">
              <div className="sec-title">
                <Heading
                  heading="Web and Mobile App Development Company"
                  top_heading="About us"
                />
              </div>
              <div className="inner-column">
                <div className="text pb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

                <div className="text pb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.{" "}
                </div>

                <div className="text pb-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </div>
              </div>
            </Col>

            <Col lg={5} className="text-center">
              <div className="img1 d-lg-block up-down">
                <img
                  src={aboutimg}
                  alt="Frontend Development"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Counter />
    </React.Fragment>
  );
};

export default About;
