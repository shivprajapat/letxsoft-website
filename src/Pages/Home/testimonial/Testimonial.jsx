import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import Testimonialdata from './Testimonialdata'
import TestimonialItem from '../../../components/TestimonialItem'
import Heading from "../../../components/Heading";
var client = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          client: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          client: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 576,
          client: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};
export default function Testimonial() {
    return (
        <section className="testimonial">
            <Container>
            <Heading heading="WHAT CLIENT SAY" top_heading='TESTIMONIAL' />

  <Slider {...client}>
                {
                    Testimonialdata.map((item,index)=>{
                        return(
                            <TestimonialItem {...item} key={index}/>
                        )
                    })
                }

            </Slider>
            </Container>
        </section>
    );
}
