import React from 'react'
import { Container } from 'react-bootstrap'
import InnerBanner from '../../components/InnerBanner'
import Service from '../Home/Services/Services'

const Services = () => {
    return (
        <React.Fragment>
            <InnerBanner heading="Services" />
            <Service />
            <div id='services'>
                <Container>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Services