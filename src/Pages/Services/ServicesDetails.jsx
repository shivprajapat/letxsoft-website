import React from 'react';
import { data } from '../Home/Services/data'
import InnerHeader from "../../components/Header/InnerHeader";
import InnerBanner from "../../components/InnerBanner";
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaRegEnvelope, FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";
const ServicesDetails = (props) => {

    let getId = props.match.params.id;
    const getData = data[getId - 1];

    const { name, desc } = getData;
    console.log(getData);
    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <title>Service Details || Page</title>
                <meta name="description" content="Service Details Page" />
            </Helmet>
            <InnerHeader />
            <InnerBanner heading="Services Details" name="Home" subname="Services Details" />
            <div className='blog-details section_padding'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="blog_left_sec">
                                <Card>
                                    <div className="blog_img">
                                        <Card.Img variant="top" src={require('../../Assets/images/blog/01.png').default} />

                                    </div>
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text>{desc}</Card.Text>
                                        <div className="card_second">
                                            <Row>
                                                <Col lg={6} md={6}>
                                                    <div className="image">
                                                        <img src="https://rewy-gatsby.envytheme.com/static/project2-72d0d71900dee6c1c3b754157a9708a0.jpg"
                                                            className='img-fulid' alt="about" /></div>
                                                </Col>
                                                <Col lg={6} md={6}>
                                                    <div className="content"><h3>Important Facts</h3><div className='technologies-features'><span>The Field of Data Science</span><span>The Problem</span><span>The Solution</span><span>The Skills</span><span>Statistics</span><span>Mathematics</span></div></div></Col>
                                            </Row>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <Technologies />
                            <BlogContact />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>

    )
};

export default ServicesDetails;

const Technologies = () => {
    return (
        <div className="services-contact-info">
            <Card>
                <h3>Contact Info</h3>
                <div className="technologies-features">
                    <span>JavaScript</span>
                    <span>Python</span>
                    <span>Java</span>
                    <span>C/CPP</span>
                    <span>PHP</span>
                    <span>Swift</span>
                    <span>C# (C- Sharp)</span>
                    <span>Ruby</span>
                    <span>SQL</span>
                </div>
            </Card>
        </div>
    )
}
const BlogContact = () => {
    return (
        <div className="services-contact-info">
            <Card>
                <h3>Contact Info</h3>
                <ul>
                    <li>
                        <div className="icon">
                            <FaPhoneSquareAlt /></div>
                        <span>Phone:</span>
                        <a href="tel:+123456789">+91 123456789</a>
                    </li>
                    <li>
                        <div className="icon"><FaMapMarkerAlt /></div>
                        <span>Location:</span>
                        <div>jaipur</div>
                    </li>
                    <li>
                        <div className="icon"><FaRegEnvelope /></div>
                        <span>Email:</span>
                        <a href="mailto:info@letxsoft.com">info@letxsoft.com</a>
                    </li>
                </ul>
            </Card>
        </div>
    )
}
