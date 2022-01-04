import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPlus, FaUserFriends, FaRegCalendarAlt } from "react-icons/fa";
import Heading from "../../../components/Heading";

import { Blogdata } from "./data";
export default function Blog() {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="blog section_padding">
      <Container>
        <Heading heading="WE PROVIDE BETTER" top_heading="Blog" />
        <Row className="justify-content-center">
          {Blogdata.map((blogitem, index) => {
            const { title, animation, img, desc, date } = blogitem;
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
                      <h4>{title}</h4>
                      <p>{readMore ? desc : `${desc.substring(0, 90)}...`}</p>
                      <a href="#regin" className="btn_link">
                        <span>
                          <FaPlus />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
