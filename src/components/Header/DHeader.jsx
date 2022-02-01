import React from "react";
import { FaSearch, FaRegBell, FaRegEnvelope } from "react-icons/fa";
import { Row, Col, Form, Spinner } from "react-bootstrap";
import Notification from "../dashborad/Notification";
const DHeader = () => {
  const [notificationtoggle, setNotificationToggle] = React.useState(false);
  const handleclick = () => {
    setNotificationToggle(!notificationtoggle);
    // console.log(handleclick);
  };
  return (
    <div className="dheader">
      <div className="container-fluid no-gutters">
        <Row>
          <Col lg={12} className="p-0 ">
            <div className="header_iner">
              <div className="header_iner_serach">
                <div className="search_inner">
                  <form action="#">
                    <div className="search_field">
                      <Form>
                        <Form.Control
                          type="text"
                          placeholder="Search here..."
                        />
                      </Form>
                    </div>
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div>
              </div>
              <div className="header_iner_right">
                <div className="header_iner_right_notification">
                  <li>
                    <span className="nav-link-notify" onClick={handleclick}>
                      <FaRegBell />
                    </span>
                    {notificationtoggle ? (
                      <div
                        className={
                          notificationtoggle
                            ? "notification active"
                            : " notification"
                        }
                      >
                        <div className="notification_Header">
                          <h4>Notifications</h4>
                        </div>
                        <div className="notification_body">
                          <Notification />
                        </div>
                        <div className="text-center nofity_footer">
                          <a href="/" className="btn_1">
                            See More
                          </a>
                        </div>
                      </div>
                    ) : (
                      <Spinner variant="red" />
                    )}
                  </li>
                  <li>
                    <span className="nav-link-notify">
                      <FaRegEnvelope />
                    </span>
                  </li>
                </div>
                <div className="profile_info">
                  <img
                    src="https://www.kindpng.com/picc/m/113-1137263_doctor-good-happy-vector-clipart-doctors-and-transparent.png"
                    alt="/user"
                  />
                  <div className="profile_info_iner">
                    <div className="profile_author_name">
                      <p>Neurologist </p>
                      <h5>Dr. Robar Smith</h5>
                    </div>
                    <div className="profile_info_details">
                      <a href="/">My Profile </a>
                      <a href="/">Settings</a>
                      <a href="/">Log Out </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DHeader;
