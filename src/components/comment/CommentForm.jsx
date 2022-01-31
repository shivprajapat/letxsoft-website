import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import Heading from '../Heading';

const CommentForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [message, setMessage] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        const commentdetails = {
            'Name': name,
            'Email': email,
            'Website': website,
            'Message': message
        }
        setName('')
        setEmail('')
        setWebsite('')
        setMessage('')

        console.log(commentdetails);
    }
    return (<div id='comment-form' className='section_padding'>
        <Row>
            <Col lg={12} md={12}>
                <Form>
                    <Heading top_heading="Your email address will not be published." heading="Leave a Reply" />
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGroupEmail">
                            <Col><Form.Control type="text" placeholder="Your Name *" value={name} onChange={e => setName(e.target.value)} /></Col>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGroupEmail">
                            <Col><Form.Control type="email" placeholder="Enter Email *" value={email} onChange={e => setEmail(e.target.value)} /></Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group as={Col} controlId="formGroupEmail">
                        <Form.Control type="url" placeholder="Website *" value={website} onChange={e => setWebsite(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGroupEmail">
                        <Form.Control as="textarea" rows={5} placeholder='Your Comment...' value={message} onChange={e => setMessage(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} id="formGridCheckbox" forhtmlfor="checkbox-mark">
                        <Form.Check type="checkbox" label="Save my name, email, and website in this browser for the next time I comment." id="checkbox-mark" />
                    </Form.Group>
                    <Form.Group as={Col} className="mt-3" controlId="message">
                        <button className="blue_btn" type="submit" onClick={handleClick}>Post A Comment</button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </div>
    )
};

export default CommentForm;
