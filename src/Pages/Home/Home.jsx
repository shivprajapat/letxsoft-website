import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Services from "../Services/Services";
import HomeCard from "./HomeCard/HomeCard";
import About from '../About/About'
import Blog from "../Blog/Blog";
import Testimonial from "../testimonial/Testimonial";
const Home = () => {
  return (
    <React.Fragment>
      <div className="home" id="home">
      <divnpm className="grid-animation"><div></div><div></div><div></div><div></div></divnpm>
      <Container>
        <Row>
          <Col md={6} lg={6}>
            <div className="home_content">
              <h1>software development company in india</h1>
              <p>build for smart future</p>
              <div className="btn-block">
              <a href="/" className='home_btn'> our work</a>
              <a href="/" className='home_btn'> contact us</a>
               </div>
            </div>
          </Col>
          <Col md={6} lg={6}>
            <div className="home_img">
              <img src="https://espirittech.com/wp-content/uploads/2021/02/about.png" alt="" className='img-fulid' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <HomeCard/> 
    <About/>
    <Services/>
    <Blog/>
    <Testimonial/>
    </React.Fragment>
  );
};

export default Home;
