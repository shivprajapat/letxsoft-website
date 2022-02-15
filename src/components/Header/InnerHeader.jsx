import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { routesData } from './routesData';

export default function InnerHeader() {
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
      <header className={header ? "active " : "innerheader"}>
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand>
              <Link to="/">Letxsoft</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                {routesData.map((route, index) => {
                  return (

                    <li key={index}>
                      <NavLink to={route.path} activeClassName="active">
                        {route.name}
                      </NavLink>
                    </li>
                  );
                })}
                {localStorage.getItem("login") ? (
                  <>
                    <li>
                      <NavLink activeClassName="active" exact to="/dashboard">
                        Dashborad
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/logout">
                        Logout
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li>
                    <NavLink activeClassName="active" to="/login">
                      Login
                    </NavLink>
                  </li>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </React.Fragment>
  );
}
