import React, { useState } from 'react';

import { Card, Col, Row, Form } from 'react-bootstrap';
import Heading from '../../components/Heading';
import { TagsInput } from "react-tag-input-component";
import BlogAditor from './BlogAditor';
const AddPost = () => {
    const [selected, setSelected] = useState([]);

    const [postadd, setPostAdd] = useState({
        name: "", message: ""
    });

    const onInputChange = (e) => {
        setPostAdd({ ...postadd, [e.target.name]: e.target.value })
    }

    const { name, message } = postadd;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, message);
        setPostAdd({ name: "", message: "" })
    }

    return (
        <div className='blog-details section_padding'>
            <Row>
                <Col lg={8} className='mx-auto'>
                    <div className="post-section">
                        <Card>
                            <Heading heading="Add Post" />
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Your Title"
                                        name="name"
                                        value={name}
                                        onChange={(e) => onInputChange(e)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control as="select" custom>
                                        <option>HTML</option>
                                        <option>CSS</option>
                                        <option>Javascript</option>
                                    </Form.Control>
                                    {/* <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select> */}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Description</Form.Label>
                                    <BlogAditor />
                                    {/* <Form.Control as="textarea"
                                        rows={5} name="message"
                                        value={message}
                                        onChange={(e) => onInputChange(e)}
                                        placeholder='Your Description' required /> */}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Tags</Form.Label>
                                    <TagsInput
                                        value={selected}
                                        onChange={setSelected}
                                        name="fruits"
                                        placeHolder="enter fruits"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <button className="btn-gray" type="submit">Submit</button>
                                </Form.Group>
                            </Form>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default AddPost;