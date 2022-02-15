import React, { Component } from 'react'
import { Card, Col, Row, Form, Container } from 'react-bootstrap';
import InnerHeader from '../../components/Header/InnerHeader';
import Heading from '../../components/Heading';
export class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: "",
        };
    }
    login() {
        console.warn(this.state);
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp);
                if (resp.length > 0) {
                    localStorage.setItem("login", JSON.stringify(resp));
                    console.warn(this.props.history.push("/"));
                } else {
                    alert("Pelase check username and password");
                }
            });
        });
    }
    render() {
        return (
            <React.Fragment>
                <InnerHeader />
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
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Your name"
                                                name="user"
                                                onChange={(event) => this.setState({
                                                    name: event.target.value

                                                })}
                                                required />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Your Password"
                                                name="password"
                                                onChange={(event) => this.setState({ password: event.target.value })}
                                                required />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <button className="btn-gray" onClick={() => { this.login() }}>Submit</button>
                                        </Form.Group>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default Login