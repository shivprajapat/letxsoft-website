import { Col, Container, Row } from "react-bootstrap";
import { FaUserAlt, FaFileSignature } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { BiPlanet } from "react-icons/bi";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <section class="counter_section section_padding">
      <Container>
        <Row class="text-center">
          <Col lg={3} sm={6}>
            <div class="counter">
              <i>
                <FaUserAlt />
              </i>
              <CountUp end={495} duration={2.75} />
              <p>Happy Clients</p>
            </div>
          </Col>

          <Col lg={3} sm={6}>
            <div class="counter">
              <i>
                <FaFileSignature />
              </i>
              <CountUp end={540} duration={2.75} />{" "}
              <p class="count-text ">Projects</p>
            </div>
          </Col>

          <Col lg={3} sm={6}>
            <div class="counter">
              <i>
                <BsBarChartFill />
              </i>
              <CountUp end={30} duration={2.75} />
              <p class="count-text ">Skilled Techies</p>
            </div>
          </Col>

          <Col lg={3} sm={6}>
            <div class="counter">
              <i>
                <BiPlanet />
              </i>
              <CountUp end={12} duration={2.75} />
              <p class="count-text ">Years of Experience</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Counter;
