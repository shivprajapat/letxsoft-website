import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPlus, FaUserFriends, FaRegCalendarAlt } from "react-icons/fa";
import Heading from "../../components/Heading";

export default function Blog() {
  return (
    <section className="blog">
      <Container>
        <Heading heading="WE PROVIDE BETTER" top_heading="SERVICES" />
        <Row>
          <Col lg={6} md={6} sm={12} className='d-flex'>
            <div className="blog_sec">
              <div className="blog_sec_img">
                <img src={require("../../images/mobileapp.jpg").default} alt="" />
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
                        Aug 31, 2021
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog_sec_content_meta_txt">
                  <h4>mobile app</h4>
                  <p>
                    Your customer is on the move and needs access to your brand
                    anytime, anywhere. Our team is ready to engineer (not just
                    code) your app in whatever form you need. Our award winning
                    apps make businesses more productive and cost efficient.
                  </p>
                  <a href="#regin" className="btn_link">
                    <span>
                      <FaPlus />
                    </span>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className='d-flex'>
            <div className="blog_sec">
              <div className="blog_sec_img">
                <img src={require("../../images/web-development.jpg").default} alt="" />
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
                        Aug 31, 2021
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog_sec_content_meta_txt">
                  <h4>web development</h4>
                  <p>
                    The role is responsible for designing, coding and modifying
                    websites, from layout to function and according to a
                    client's specifications. Strive to create visually appealing
                    sites that feature user-friendly design and clear
                    navigation.
                  </p>
                  <a href="#regin" className="btn_link">
                    <span>
                      <FaPlus />
                    </span>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className='d-flex'>
            <div className="blog_sec">
              <div className="blog_sec_img">
                <img src={require("../../images/ecommerce.jpg").default} alt="" />
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
                        Aug 31, 2021
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog_sec_content_meta_txt">
                  <h4>E-commerce</h4>
                  <p>
                    You need to sell stuff online with tried and tested
                    solutions. We are certified developers of world-renowned
                    platforms such as Magento, PrestaShop and WooCommerce
                  </p>
                  <a href="#regin" className="btn_link">
                    <span>
                      <FaPlus />
                    </span>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className='d-flex'>
            <div className="blog_sec">
              <div className="blog_sec_img">
                <img src={require("../../images/digital transform.jpg").default} alt="" />
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
                        Aug 31, 2021
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog_sec_content_meta_txt">
                  <h4>digital transform</h4>
                  <p>
                    When you need extra software development professionals for
                    at least a month and prefer to hire on a loan basis rather
                    than as permanent employees,
                  </p>
                  <a href="#regin" className="btn_link">
                    <span>
                      <FaPlus />
                    </span>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
