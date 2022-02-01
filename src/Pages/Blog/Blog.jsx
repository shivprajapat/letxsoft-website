import React,{useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import InnerBanner from "../../components/InnerBanner";
import InnerHeader from "../../components/Header/InnerHeader";
import { FaPlus, FaUserFriends, FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Blogdata } from "../Home/Blog/data";
import { Helmet } from "react-helmet";

const Blog = () => {
    const [readMore] = useState('');
    return (
        <React.Fragment>
          <Helmet htmlAttributes>
        <title>Blog || Page</title>
        <meta name="description" content="Blog Page" />
      </Helmet>
            <InnerHeader />
            <InnerBanner heading="Blog"  name="Home" subname="Blog"/>
            <div id="blog" className="section_padding">
                <Container>
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
                      <h4>{title}</h4>
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
                </Container>
            </div>
        </React.Fragment>

    )
};

export default Blog;
