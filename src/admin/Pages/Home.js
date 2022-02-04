import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import Heading from '../../components/Heading'
const Home = () => {
  return (
    <div className='card-sec'>
      <Row>
        <Col lg={12} className='mx-auto'>
          <Card>
            <Heading heading='Home Page' />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Home;