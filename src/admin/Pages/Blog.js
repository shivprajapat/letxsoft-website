import React, { useState } from "react";
import { Table, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Heading from '../../components/Heading'
import { PostData } from '../blog/PostData'
import { FaPlus } from "react-icons/fa";

export default function Blog() {
    const [post, setPost] = useState(PostData)
    console.log(setPost);
    return (
        <div className='postlist-section card-sec'>
            <Row>
                <Col lg={12} className='mx-auto'>

                    <div className="btn-block">
                        <Link to='/dashboard/add-post' className='btn'><FaPlus /> Add</Link>
                    </div>
                    <Card>
                        <Heading heading='Category Listing' />
                        <Table responsive striped bordered>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {post.map((blogitem, index) => {
                                    const { title, id, date } = blogitem;
                                    return (
                                        <tr key={index}>
                                            <td>{id}</td>
                                            <td>{title}</td>
                                            <td>{date}</td>
                                            <td><Link className='btn btn-sm btn-primary' to={`/dashboard/edit-post/${id}`}>Edit</Link></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}