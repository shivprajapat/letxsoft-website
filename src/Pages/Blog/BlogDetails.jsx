import React from 'react'
import InnerBanner from "../../components/InnerBanner";

import InnerHeader from "../../components/Header/InnerHeader";
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../../components/Heading'
import { FaEyeSlash, FaUserAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import BlogRight from './BlogRight';
import blogdetailsimg from '../../Assets/images/blog/mobileapp.jpg'
const BlogDetails = () => {
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
                      <li><span><FaUserAlt /></span> Admin</li>
                      <li><span><FaEyeSlash /></span> 33</li>
                    </ul>
                  </div>
                </div>
                <div className='ServiceBox-tab d-flex'>
                  <div className="card mb-4 text-left">
                    <div className="img-wrap">
                      <img src={blogdetailsimg} className='img-fluid' alt="" />
                    </div>
                    <div className="card-body p-0">
                      <h5 className="card-title">Mobile</h5>
                      <p className="card-text"><small className="text-muted">Aug 31, 2021</small></p>
                      <p className="card-text">Your customer is on the move and needs access to your brand anytime, anywhere. Our team is ready to engineer (not just code) your app in whatever form you need. Our award winning apps make businesses more productive and cost efficient.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="goback">
                  <Link to='/blog'>
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
