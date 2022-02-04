import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InnerBanner from "../../components/InnerBanner";
import InnerHeader from "../../components/Header/InnerHeader";
import Heading from "../../components/Heading";
import aboutimg from "../../Assets/images/img-about1.png";
import Counter from "./Counter";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About || Page</title>
        <meta name="description" content="About Page" />
      </Helmet>
      <InnerHeader />
      <InnerBanner heading="About" name="Home" subname="About" />
      <div id="about" className="section_padding">
        <Container>
          <Row className="clearfix align-items-center">
            <Col lg={7} md={12} sm={12} className="content-column order-1">
              <div className="sec-title">
                <Heading
                  heading="Web and Mobile App Development Company"
                  top_heading="About us"/>
              </div>
              <div className="inner-column">
                <div className="text pb-4">Letxsoft Technology is one of the well-known leaders in the technology revolution and provides complete IT solutions since 2020. The company provides the best services in Mobile application, Desktop application, Website development, Designing & Digital marketing. We are a team of highly professional experts. We are rigorously committed to quality and professionalism. We always seek an opportunity to help & Consult with any requirements, rather than selling our services to anyone.</div>
              </div>
            </Col>
            <Col lg={5} className="text-center">
              <div className="img1 d-lg-block up-down">
                <img
                  src={aboutimg}
                  alt="Frontend Development"
                  className="img-fluid"/>
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