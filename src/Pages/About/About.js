import React from 'react'
import { Container } from 'react-bootstrap'
import InnerBanner from '../../components/InnerBanner'

const About = () => {
    return (
        <React.Fragment>
            <InnerBanner heading="About" />
            <div id='about' className='section_padding'>
                <Container>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default About
