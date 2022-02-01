import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Breadcrumb } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const InnerBanner = (props) => {
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
                        <h1 className='inner_heading'>{props.heading}</h1>
                        <Breadcrumb>
                            <Breadcrumb.Item >
                            <Link to='/'>{props.name}</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>{props.subname}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default InnerBanner
