import React from "react";
import { FaSearch, FaRegBell, FaRegEnvelope } from "react-icons/fa";
import { Row, Col, Form, Spinner } from "react-bootstrap";
import Notification from "./Notification";
import { Link } from "react-router-dom";
import { FaGripHorizontal, FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const [notificationtoggle, setNotificationToggle] = React.useState(false);
  const handleclick = () => {
    setNotificationToggle(!notificationtoggle);
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
                          type="text" placeholder="Search here..." />
                      </Form>
                      <button type="submit"><FaSearch /></button>
                    </div>
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
                  <ul>
                    <li className="dropdown ml-2">
                      <div className="rounded-circle" role="button" id="dropdownUser"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="avatar">
                          <img src={require('../../Assets/images/user.jpeg').default} alt="avatar" />
                        </div>
                      </div>
                      <div className="dropdown-menu pb-2" aria-labelledby="dropdownUser">
                        <div className="dropdown-item">
                          <div className="user-info">
                            <div className="avatar">
                              <img src={require('../../Assets/images/user.jpeg').default} alt="avatar" />
                            </div>
                            <h5>Dammy User</h5>
                          </div>
                        </div>
                        <ul>
                          <li className="dropdown-item">
                            <span><FaUserAlt /></span>My Profile
                          </li>
                          <li className="dropdown-item">
                            <span><FaGripHorizontal /></span>Settings
                          </li>
                          <li className="dropdown-item">
                            <Link to="/dashboard/logout"><span><FiLogOut /></span>Log Out</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;