import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const InnerBanner = ({ heading }) => {
    return (
        <section className="innerBanner">
            <div className="home_bubble">
                <div className="bubble b_one"></div>
                <div className="bubble b_two"></div>
                <div className="bubble b_three"></div>
                <div className="bubble b_four"></div>
                <div className="bubble b_five"></div>
                <div className="bubble b_six"></div>
            </div>
            <Container>
                <Row className="justify-content-center">
                    <Col xl={8} className="text-center text-white">
                        <h1 className='inner_heading'>{heading}</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default InnerBanner
