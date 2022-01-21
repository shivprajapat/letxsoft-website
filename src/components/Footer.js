import React from "react";
import {
  FaAngleDoubleRight,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegClock,
} from "react-icons/fa";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="widgets-section">
          <div className="row">
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                  <div className="footer-widget logo-widget">
                    <div className="logo">
                      <a href="#regin">Letxsoft technology</a>
                    </div>
                    <div className="text">
                      <h5>
                        <FaRegClock /> opening hours
                      </h5>
                      <p>Monday to Saturday- 10 A.M to 7 P.M </p>
                    </div>
                    <ul className="social-box list-unstyled mb-0">
                      <li>
                        <a href="https://www.facebook.com/helpfulinsightsolution/">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="https://in.linkedin.com/in">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com">
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h5>Quick Links</h5>
                    <ul className="list-link list-unstyled mb-0">
                      <li>
                        <a href="#regin">
                          <FaAngleDoubleRight />
                          Who We Are
                        </a>
                      </li>
                      <li>
                        <a href="#regin">
                          <FaAngleDoubleRight />
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="#regin">
                          <FaAngleDoubleRight />
                          Our Portfolio
                        </a>
                      </li>
                      <li>
                        <Link to="/contact">
                          <FaAngleDoubleRight />
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <a href="#regin">
                          <FaAngleDoubleRight />
                          Free Consultation
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget news-widget">
                    <h5>Services</h5>
                    <ul className="list-link list-unstyled mb-0">
                      <li>
                        <a href="#regin">
                          <FaAngleDoubleRight /> Cross Platform
                        </a>
                      </li>
                      <li>
                        <a href="#regin">
                          <FaAngleDoubleRight /> Hybrid
                        </a>
                      </li>
                      <li>
                        <a href="#regin">
                          <FaAngleDoubleRight /> PHP Development
                        </a>
                      </li>
                      <li>
                        <a href="#regin">
                          <FaAngleDoubleRight /> CMS Development
                        </a>
                      </li>
                      <li>
                        <a href="#regin">
                          <FaAngleDoubleRight /> UI/UX Design
                        </a>
                      </li>
                      <li>
                        <a href="#regin">
                          <FaAngleDoubleRight /> PSD to HTML
                        </a>
                      </li>
                      <li>
                        <a href="#regin">
                          <FaAngleDoubleRight /> E commerce Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget contact-widget">
                    <h5>Contact Us</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <span className="icon">
                          <FaMapMarkerAlt />
                        </span>
                        <strong>Address</strong>
                        <a href="https://g.page/HelpfulInsight?share">
                          {" "}
                          s-1 top floor pradhan-tower, sec-5, near mahindra
                          showroom,tonk road, jaipur{" "}
                        </a>
                      </li>
                      <li>
                        <span className="icon">
                          <HiPhone />
                        </span>
                        <strong>Phone</strong>
                        <a href="tel:+919001721837">+91 123456789</a>
                      </li>
                      <li>
                        <span className="icon">
                          <HiOutlineMail />
                        </span>
                        <strong>E-Mail</strong>
                        <a href="mailto:info@helpfulinsightsolution.com">
                          info@letxsoft.com{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <div className="copyright">
          Copyright © 2022 <a href="/">Letxsoft Technology</a>. All Rights Reserved.
        </div>
      </div>
      <div className="spinning-circle-top"></div>
      <div className="spinning-circle-bottom"></div>
    </footer>
  );
}
