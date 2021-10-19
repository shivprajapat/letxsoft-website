import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../../../components/Card";
import data from "./data";

export default function HomeInner() {
  return (
    <section className="home_card">
        <Container>
      <Row>
        <Col lg={12} className="mx-auto">
          <Row className='justify-content-center'>
            {data.map((item, index) => {
              return (
                <Col lg={4} md={6} key={index} className='d-flex card_space'>
                  <Card {...item} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
    </section>
  );
}
