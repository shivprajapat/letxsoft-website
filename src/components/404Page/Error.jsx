import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css'
function Error() {
    return (
        <section className="not-found-header pt-0 position-relative">
            <Container>
                <Row>
                    <Col lg={12} sm={12}>
                        <div className="head-inner text-center">
                            <div className="head-txt">
                                <div className="text-effect" data-tip="404"></div>
                                <h1 className="text-uppercase">Page Not Found</h1>
                                <p className="text-dark">Sorry, We can't find the page you're looking for.</p>
                                <div className="head-bttn">
                                    <Link to="/" className="bttn dblue">Back To Home</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="background-shapes">
                <div className="box1"></div>
                <div className="box3"></div>
                <div className="dot1"></div>
                <div className="heart1"></div>
                <div className="dot2"></div>
                <div className="circle2"></div>
            </div>
        </section>
    )
}

export default Error
