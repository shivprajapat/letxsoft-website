import React from 'react'
import InnerBanner from "../../../components/InnerBanner";

import InnerHeader from "../../../components/Header/InnerHeader";
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../../../components/Heading'
import { FaRegCalendarAlt, FaUserAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import BlogRight from './BlogRight';
import { Blogdata } from "./data";

const BlogDetails = (props) => {
  let getId = props.match.params.id;
  const getData = Blogdata.cardData[getId - 1];

  console.log(getData);
  return (
    <React.Fragment>
      <InnerHeader />
      <InnerBanner heading="Blog Details" />
      <div className='blog-details section_padding'>
        <Container>
          <Row>
            <Col lg={8}>
              <div className='left-section clearfix'>
                <Heading heading="Mobile App" />
                <div className="user-tab">
                  <div className="user-sec">
                    <ul>
                      <li><span><FaUserAlt /></span> User</li>
                      <li><span><FaRegCalendarAlt /></span> Aug 31, 2021
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='ServiceBox-tab d-flex'>
                  <div className="card mb-4 text-left">
                    <div className="img-wrap">
                      <img src={getData.img} className='img-fluid' alt="" />
                    </div>
                    <div className="card-body p-0">
                      <h5 className="card-title">{getData.title}</h5>
                      <p className="card-text"><small className="text-muted">{getData.date}</small></p>
                      <p className="card-text">{getData.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="goback">
                  <Link to='/'>
                    <FaArrowLeft />
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <BlogRight />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default BlogDetails
