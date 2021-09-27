import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Services from "../Services/Services";
import HomeCard from "./HomeCard/HomeCard";
import About from '../About/About'
import Blog from "../Blog/Blog";
const Home = () => {
  return (
    <React.Fragment>
      <div className="home" id="home">
      <div className="grid-animation"><div></div><div></div><div></div><div></div></div>
      <Container>
        <Row>
          <Col md={6} lg={6}>
            <div className="home_content">
              <h1>software development company in india</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, soluta! Totam, modi.</p>
              <div className="btn-block">
                <a href="/" className='home_btn'>Get Started</a>
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
    </React.Fragment>
  );
};

export default Home;
