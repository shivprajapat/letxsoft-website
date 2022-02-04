import React, { useState } from 'react';
import { Card, Col, Row, Form, Container } from 'react-bootstrap';
import Heading from '../../components/Heading';
const Login = () => {
    const [logout, setLogout] = useState({ name: "", password: "" });

    const onInputChange = (e) => {
        setLogout({ ...logout, [e.target.name]: e.target.value })
    }
    const { name, password } = logout;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, password);
        setLogout({ name: "", password: "" })
    }
    return (
        <div className='login-details section_padding'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="login-img">
                            <img src={require("../../Assets/images/login.png").default} alt="" className='img-fluid' />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="post-section">
                            <Card>
                                <Heading heading='Login' />
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
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
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Your Password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => onInputChange(e)}
                                            required
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
            </Container>
        </div>
    )
};

export default Login;