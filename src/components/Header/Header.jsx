import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import TopBar from "./TopBar";
export default function Header() {
  return (
    <React.Fragment>
      <TopBar />
      <header>
        <Container>
          <Navbar expand="md">
            <Navbar.Brand>
              {" "}
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
                  <NavLink activeClassName="active" to="/career">
                      Services
                  </NavLink>
                </li>
                {/* <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                </NavDropdown> */}
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
