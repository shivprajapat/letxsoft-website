import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {data} from './data'
import ServiceCard from '../../../components/ServiceCard'
import Heading from '../../../components/Heading'
export default function Services() {
    return (
<section className="services-section">
    <div className="upper-box">
        <div className="icon-one"></div>
        <div className="icon-two"></div>
        <div className="icon-three"></div>
        <Container>
            <div className='text-center'>
            <Heading heading="We deal with the aspects of professional IT Services" top_heading='WHO WE ARE' />
            </div>
            <Row>
            {data.map((item,index)=>{
                    return(
                        <Col lg={3} md={6} sm={12} className="service-block d-flex card_space" key={index}>
                        <ServiceCard {...item}/>
                        </Col>
                    )
                })}
            </Row>
</Container>
    </div>
</section>
    )
}
