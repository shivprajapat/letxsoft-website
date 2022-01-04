import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerHeader from "./Header/InnerHeader";

const ThankYou = () => {
  return (
    <>
      <InnerHeader />
      <div className="thank_you section_padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="thank_you_tab">
                <div className="thank-content">
                  <img src="" alt="" />
                  <h1>Thank you !</h1>
                  <p>Thanks for subscribing to our news letter. </p>
                  <p>you should receive a confirmation email soon </p>
                </div>
                <Link to="/">
                  <button className="btn-gray">go home</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ThankYou;
