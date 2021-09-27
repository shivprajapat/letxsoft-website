import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {FaPlus,FaUserFriends,FaRegCalendarAlt} from "react-icons/fa";

export default function Blog() {
    return (
        <div className='blog'>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className="blog_sec">
                            <div className="blog_sec_img">
                                <img src={require('../../images/blog1.png').default} alt="" />
                            </div>
                            <div className="blog_sec_content">
                                <div className="blog_sec_content_meta">
                                    <ul>
                                        <li>
                                            <a href="/" className="posted-by">
                                        <span><FaUserFriends/></span>    
                                                Provpn
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" className="posted-on">
                                                <span><FaRegCalendarAlt/></span>
                                                Aug 31, 2021
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog_sec_content_meta_txt">
                                <h4>
                                Lorem ipsum dolor sit amet, consectetur
                                    </h4>
                                <a href="/" className="btn_link">
                                    <span><FaPlus/></span>
                                    Read More
                                </a>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="blog_sec">
                            <div className="blog_sec_img">
                                <img src={require('../../images/blog1.png').default} alt="" />
                            </div>
                            <div className="blog_sec_content">
                                <div className="blog_sec_content_meta">
                                    <ul>
                                        <li>
                                            <a href="/" className="posted-by">
                                        <span><FaUserFriends/></span>    
                                                Provpn
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" className="posted-on">
                                                <span><FaRegCalendarAlt/></span>
                                                Aug 31, 2021
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog_sec_content_meta_txt">
                                <h4>
                                Lorem ipsum dolor sit amet, consectetur
                                    </h4>
                                <a href="/" className="btn_link">
                                    <span><FaPlus/></span>
                                    Read More
                                </a>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="blog_sec">
                            <div className="blog_sec_img">
                                <img src={require('../../images/blog1.png').default} alt="" />
                            </div>
                            <div className="blog_sec_content">
                                <div className="blog_sec_content_meta">
                                    <ul>
                                        <li>
                                            <a href="/" className="posted-by">
                                        <span><FaUserFriends/></span>    
                                                Provpn
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" className="posted-on">
                                                <span><FaRegCalendarAlt/></span>
                                                Aug 31, 2021
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog_sec_content_meta_txt">
                                <h4>
                                Lorem ipsum dolor sit amet, consectetur
                                    </h4>
                                <a href="/" className="btn_link">
                                    <span><FaPlus/></span>
                                    Read More
                                </a>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
