import React from "react";
import { FaAngleDoubleRight, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineMail, HiPhone } from "react-icons/hi";

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
                                            <a href="/">Letxsoft technology</a>
                                        </div>
                                        <div className="text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis at porro, qui officia aliquid quisquam aperiam a sunt ipsum iure doloremque molestias. Delectus repellat asperiores velit ut
                                            eius nemo?
                                        </div>
                                        <ul className="social-box list-unstyled mb-0">
                                            <li>
                                                <a href="https://www.facebook.com/helpfulinsightsolution/">
                                                    <FaFacebookF />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://in.linkedin.com/in">
                                                    <FaLinkedinIn />
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
                                                <a href="/">
                                                    <FaAngleDoubleRight />
                                                    Who We Are
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <FaAngleDoubleRight />
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <FaAngleDoubleRight />
                                                    Our Portfolio
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <FaAngleDoubleRight />
                                                    Contact Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
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
                                                <a href="/">
                                                    <FaAngleDoubleRight /> Cross Platform
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <FaAngleDoubleRight /> Hybrid
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <FaAngleDoubleRight /> PHP Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <FaAngleDoubleRight /> CMS Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <FaAngleDoubleRight /> UI/UX Design
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <FaAngleDoubleRight /> PSD to WordPress
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
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
                                                <a href="https://g.page/HelpfulInsight?share"> Jaipur, India 302020</a>
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
                                                <a href="mailto:info@helpfulinsightsolution.com">info@letxsoft.com</a>
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
                    Copyright © 2021 <b>Letxsoft Technology</b>. All Rights Reserved.
                </div>
            </div>
            <div className="spinning-circle-top blurs-circle"></div>
            <div className="spinning-circle-bottom blurs-circle"></div>

        </footer>
    );
}
