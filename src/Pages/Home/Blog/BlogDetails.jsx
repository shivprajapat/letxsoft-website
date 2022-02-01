import React from 'react'
import InnerBanner from "../../../components/InnerBanner";

import InnerHeader from "../../../components/Header/InnerHeader";
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaRegCalendarAlt } from "react-icons/fa";
import BlogRight from './BlogRight';
import { Blogdata } from "./data";
import Comment from '../../../components/comment/Comment'
import CommentForm from '../../../components/comment/CommentForm'
import Auther from '../../../components/comment/Auther';

const BlogDetails = (props) => {
  let getId = props.match.params.id;
  const getData = Blogdata.cardData[getId - 1];

  return (
    <React.Fragment>
      <InnerHeader />
      <InnerBanner heading="Blog Details"  name="Home" subname="Blog Details"/>
      <div className='blog-details section_padding'>
        <Container>
          <Row>
            <Col lg={8}>
              <div className='left-section clearfix'>
                <div className='ServiceBox-tab d-flex'>
                  <div className="card mb-4 text-left">
                    <div className="img-wrap">
                      <img src={getData.img} className='img-fluid' alt="" />
                    </div>
                    <div className="user-tab">
                      <div className="user-sec">
                        <Row>
                          <UserAction title='CATEGORY' second='Fashion' />
                          <UserAction title='LAST UPDATED' second='Aug 31, 2021' />
                          <UserAction title='VIEW' second='813,454' />
                        </Row>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <h5 className="card-title">{getData.title}</h5>
                      <p className="card-text"><small className="text-muted">{getData.date}</small></p>
                      <p className="card-text">{getData.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='details-inner-data section_padding'>
                <Auther />
                <Comment />
                <CommentForm />
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


const UserAction = (props) => {
  return (
    <Col lg={4} md={4}>
      <Card>
        <div className='icon'><FaRegCalendarAlt /></div>
        <div className='time'>
          <span>{props.title}</span>
          <a href="/">{props.second}</a>
        </div>
      </Card>
    </Col>
  )
}