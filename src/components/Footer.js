import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaMobileAlt,
  FaMapMarkerAlt, FaAngleRight,
  FaRegClock, FaRegEnvelope
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="main-footer">
      <Container>
        <Row className="clearfix">
          <Col lg={4} md={6} sm={12} className="footer-column">
            <div className="footer-widget logo-widget">
              <div className="logo">
                <Link to="/">Letxsoft technology</Link>
              </div>
              <div className="text">
                <h5>
                  <FaRegClock /> opening hours
                </h5>
                <p>Monday to Saturday- 10 A.M to 7 P.M </p>
              </div>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12} className="footer-column">
            <div className="footer-widget links-widget">
              <h5>Explore Links</h5>
              <ul className="list-link list-unstyled mb-0">
                <li>
                  <Link to="/"><FaAngleRight />Home</Link>
                </li>
                <li>
                  <Link to="/about"><FaAngleRight />About</Link>
                </li>
                <li>
                  <Link to="/portfolio"><FaAngleRight />Our Portfolio</Link>
                </li>
                <li>
                  <Link to="/blog"><FaAngleRight />Our Blog</Link>
                </li>
                <li>
                  <Link to="/contact"><FaAngleRight />Contact Us</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12} className="footer-column">
            <div className="footer-widget news-widget">
              <h5>Services</h5>
              <ul className="list-link list-unstyled mb-0">
                <li>
                  <Link to="/service">
                    <FaAngleRight /> Our Services
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="footer-column">
            <div className="footer-widget contact-widget">
              <h5>Contact Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <span className="icon">
                    <FaMapMarkerAlt />
                  </span>
                  <strong>Address</strong>
                  <a href="/">
                    s-1 top floor pradhan-tower, sec-5, near mahindra
                    showroom,tonk road, jaipur
                  </a>
                </li>
                <li>
                  <span className="icon">
                    <FaMobileAlt />
                  </span>
                  <strong>Phone</strong>
                  <a href="tel:+91-9818155498">+91-9818155498</a>
                </li>
                <li>
                  <span className="icon">
                    <FaRegEnvelope />
                  </span>
                  <strong>E-Mail</strong>
                  <a href="mailto:info@letxsoft.com">
                    info@letxsoft.com
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom text-center">
        <div className="copyright">
          Copyright © 2022 <Link to="/">Letxsoft Technology</Link>. All Rights Reserved.
        </div>
      </div>
      <div className="circle-top"></div>
      <div className="circle-bottom"></div>
    </footer>
  );
}
