import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaClock,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const TopBar = () => {
  return (
    <>
      <div className="header-top">
        <Container>
          <Row className="align-items-center">
            <Col md={6} lg={8} className="top-header-left">
              <ul>
                <li>
                  <span>Call Us:</span>123456789
                </li>
                <li>
                  <span>Email us:</span>example@gmail.com
                </li>
                <li>
                  <span>address:</span>Jaipur India
                </li>
              </ul>
            </Col>
            <Col md={6} lg={4} className="top-header-right">
              <div className="office-time">
                <i>
                  <FaClock />
                </i>
                <span>09:00 am - 05:00 pm</span>
              </div>
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="http://facebook.com">
                      <i>
                        <FaFacebookF />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="http://twitter.com">
                      <i>
                        <FaTwitter />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i>
                        <FaInstagram />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i>
                        <FaPinterestP />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TopBar;