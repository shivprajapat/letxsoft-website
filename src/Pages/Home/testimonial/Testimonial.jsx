import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Testimonialdata from "./Testimonialdata";
import TestimonialItem from "../../../components/TestimonialItem";
import Heading from "../../../components/Heading";
var client = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export default function Testimonial() {
  return (
    <section className="testimonial section_padding">
      <Container>
        <Row>
          <Col lg={6} data-aos="zoom-in-right" data-aos-duration="1000">
            <div className="testimonial_content text-left">
              <Heading heading="What Client Say" top_heading="TESTIMONIAL" />
              <p>
                We take great pride in offering amazing service to our clients
                and this is how many of our clients have built wonderful
                partnerships with us, and we are grateful for that. Take a look
                at what our clients have to say about their experiences working
                with us.
              </p>
            </div>
          </Col>
          <Col lg={6} data-aos="zoom-in-left" data-aos-duration="1000">
            <div className="testimonial_slider">
              <div className="testimonial_slider_box">
                <Slider {...client}>
                  {Testimonialdata.map((item, index) => {
                    return <TestimonialItem {...item} key={index} />;
                  })}
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
