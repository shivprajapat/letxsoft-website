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
          <Col lg={6}>
            <div className="testimonial_content text-left">
              <Heading
                heading="See What Our Clients Say’s"
                top_heading="TESTIMONIAL"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque maxime accusantium velit sapiente vel minus labore
                voluptatum exercitationem, molestiae harum!
              </p>
            </div>
          </Col>
          <Col lg={6}>
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
