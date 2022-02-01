import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Heading from '../Heading';
import { commentdata } from './commentdata'


const Comment = () => {
    const [activecomment] = useState(commentdata[0]);

    // console.log(commentdata);
    return (
        <div className='comment'>
            <Row>
                <Col lg={12} md={12}>
                    <Heading heading="2 Comments:" />
                    {
                        commentdata.map((item, index) => {
                            const { c_title, c_img, c_desc, c_date } = item;
                            return (
                                <div key={index}>
                                    <div className='comment-meta' >
                                        <div className="avatar">
                                            <img src={c_img} alt="" />
                                        </div>
                                        <div className='comment-data'>
                                            <h3>{c_title}</h3>
                                            <span>{c_date}</span>
                                            <div className="comment-content">
                                                <p>{c_desc}</p>
                                                <Link to="/" className="reply">Reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Commentuser  activecomment={activecomment} />

                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
        </div>
    )
};

export default Comment;

const Commentuser = ({ activecomment }) => {
    return (
        <>
            {
                activecomment.comment_data.map((item, index) => {
                    const { title, img, desc, date } = item;
                    return (
                        <div className='comment-meta reply-user' key={index}>
                            <div className="avatar">
                                <img src={img} alt="" />
                            </div>
                            <div className='comment-data'>
                                <h3>{title}</h3>
                                <span>{date}</span>

                                <div className="comment-content">
                                    <p>{desc}</p>
                                    <Link to="/" className="reply">Reply</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}