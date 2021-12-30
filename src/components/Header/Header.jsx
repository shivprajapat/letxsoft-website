import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import TopBar from "./TopBar";
export default function Header() {
  const [header, setHeader] = useState(false);
  const sticky_header = () => {
    if (window.scrollY >= 90) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", sticky_header);

  return (
    <React.Fragment>
      <TopBar />
      <header className={header ? "active " : ""}>
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand>
              <Link to="/">Letxsoft</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <li>
                  <NavLink exact activeClassName="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/career">
                    Career
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/service">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </React.Fragment>
  );
}
