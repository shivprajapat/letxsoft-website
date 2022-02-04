import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPlus, FaUserFriends, FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Heading from "../../../components/Heading";

import { Blogdata } from "./data";
export default function Blog() {
  const [readMore] = useState('');
  return (
    <section className="blog section_padding">
      <Container>
        <Heading heading="WE PROVIDE BETTER" top_heading="Blog" linkTag='blog' />
        <Row className="justify-content-center">
          {Blogdata.cardData.map((blogitem, index) => {
            const { title, id, animation, img, desc, date } = blogitem;
            return (
              <Col
                lg={4}
                md={6}
                sm={12}
                className="align-items-stretch"
                key={index}
                data-aos={animation}
                data-aos-duration="1000"
              >
                <div className="blog_sec">
                  <div className="blog_sec_img">
                    <img src={img} alt="" />
                  </div>
                  <div className="blog_sec_content">
                    <div className="blog_sec_content_meta">
                      <ul>
                        <li>
                          <a href="#regin" className="posted-by">
                            <span>
                              <FaUserFriends />
                            </span>
                            user
                          </a>
                        </li>
                        <li>
                          <a href="#regin" className="posted-on">
                            <span>
                              <FaRegCalendarAlt />
                            </span>
                            {date}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="blog_sec_content_meta_txt">
                      <h3>{title}</h3>
                      <p>{readMore ? desc : `${desc.substring(0, 150)}...`}</p>
                      <Link to={`/blog-details/${id}`} className="btn_link">
                        <span>
                          <FaPlus />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="text-center">
        <div className="btn-block"><a className="blue_btn" href="/blog">View More</a></div>
        </div>
      </Container>
    </section>
  );
}
