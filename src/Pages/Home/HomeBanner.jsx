import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const HomeBanner = () => {
    return (
        <section className="home" id="home">
        <div className="grid-animation"><div></div><div></div><div></div><div></div></div>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="home_content">
                        <h1>software development company in india</h1>
                        <p>build for smart future</p>
                        <div className="btn-block">
                            <a href="#regin" className='home_btn'> our work</a>
                            <a href="#regin" className='home_btn'> contact us</a>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="home_img">
                    <img src={require("../../images/about.png").default} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);
};

export default HomeBanner;
