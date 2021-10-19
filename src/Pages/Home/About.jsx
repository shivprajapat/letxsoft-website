import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../components/Heading";
export default function About() {
  return (
    <section className='about section_padding'>
      <Container>
        <Row>
          <Col lg={5} md={5} >
            <div className="about_sec">
              <Heading heading="about" top_heading="About" />
              <div className="about_txt">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia numquam autem expedita accusamus possimus quas dolorem eos, eaque, fuga vel magni fugiat corporis laudantium! In illum quisquam ad eius voluptatibus.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia numquam autem expedita accusamus possimus quas dolorem eos, eaque, fuga vel magni fugiat corporis laudantium! In illum quisquam ad eius voluptatibus.</p>
              </div>
              <div className="btn-block">
                <a href="#regin" className='blue_btn'>Learn More</a>
              </div>
            </div>
          </Col>
          <Col lg={7} md={7} >
            <div className="about_img">
              <img src={require("../../images/01.png").default} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
