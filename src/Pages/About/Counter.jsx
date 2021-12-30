import { Col, Container, Row } from "react-bootstrap";
import { FaUserAlt, FaFileSignature } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { BiPlanet } from "react-icons/bi";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <section className="counter_section section_padding">
      <Container>
        <Row className="text-center">
          <Col lg={3} sm={6}>
            <div className="counter">
              <i>
                <FaUserAlt />
              </i>
              <CountUp end={495} duration={2.75} />
              <p>Happy Clients</p>
            </div>
          </Col>

          <Col lg={3} sm={6}>
            <div className="counter">
              <i>
                <FaFileSignature />
              </i>
              <CountUp end={540} duration={2.75} />{" "}
              <p className="count-text ">Projects</p>
            </div>
          </Col>

          <Col lg={3} sm={6}>
            <div className="counter">
              <i>
                <BsBarChartFill />
              </i>
              <CountUp end={30} duration={2.75} />
              <p className="count-text ">Skilled Techies</p>
            </div>
          </Col>

          <Col lg={3} sm={6}>
            <div className="counter">
              <i>
                <BiPlanet />
              </i>
              <CountUp end={12} duration={2.75} />
              <p className="count-text ">Years of Experience</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Counter;
