import React from "react";
import { Col, Row, Container, Form } from "react-bootstrap";
import InnerBanner from "../../components/InnerBanner";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaSkype,
  FaEnvelope,
} from "react-icons/fa";
import InnerHeader from "../../components/Header/InnerHeader";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <React.Fragment>
      <Helmet htmlAttributes>
        <title>Contact Us || Page</title>
        <meta name="description" content="Contact Us Page" />
      </Helmet>
      <InnerHeader />
      <InnerBanner heading="Contact"  name="Home" subname="Contact"/>
      <div id="contact" className="section_padding">
        <Container>
          <Row>
            <Col lg={8} className="shaddow-bg">
              <Form>
                <Form.Group className="mb-3" controlId="formText">
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Phone Number"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <button className="btn-gray">Submit</button>
                </Form.Group>
              </Form>
            </Col>
            <Col lg={4} className="side-contact">
              <div className="">
                <h2 className="heading">
                  <span>Get In Touch</span>
                </h2>
                <p>
                  Renowned mobile app development company delivering
                  user-engaging mobile applications for multiple industry
                  verticals.
                </p>
                <div className="info-tab mail">
                  <h5>Mail to our sales department</h5>
                  <a href="/" className="btn style_3">
                    <abbr>
                      <FaEnvelope />
                    </abbr>
                    <span> sales@letxsoft.com</span>
                  </a>
                </div>
                <div className="info-tab skype">
                  <h5>Our Skype ID</h5>
                  <a href="https://join.skype.com/invite/address" className="btn style_3">
                    <abbr>
                      <FaSkype />
                    </abbr>
                    <span> letxsoft</span>
                  </a>
                </div>
                <div className="info-tab social">
                  <h5>Connect with us</h5>
                  <ul className="socials_icons">
                    <li>
                      <a href="/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FaYoutube />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <div className="hr-contact">
            <h3>Contact our HR at</h3>
            <ul className="for-hr">
              <li>+91 123456789</li>
              <li>
                <a href="/">Info@Letxsoft.Com</a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Contact;
