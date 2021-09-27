import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../../../components/card/Card";
import data from "./data";

export default function HomeInner() {
  return (
    <div className="home_card">
        <Container>
      <Row>
        <Col lg={12} className="mx-auto">
          <Row>
            {data.map((item, index) => {
              return (
                <Col lg={4} md={4} key={item} className='d-flex'>
                  <Card {...item} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
