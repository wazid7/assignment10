import React from "react";
import "./Header.css";
import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar className="navBar" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/contact">
            <img
              src={
                "https://template.hasthemes.com/medilearn/medilearn/images/logo/2.png"
              }
              alt=""
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto header-nav">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/courses">
                Courses
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>

              {user.displayName ? (
                <NavDropdown
                  title={
                    <img src={user.photoURL} className="headerPhoto" alt="" />
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item className="text-center">
                    <span>{user.displayName}</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-center">
                    <Button className="btn btn-success " onClick={logOut}>
                      Logout
                    </Button>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/login">
                    LogIn
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/signup">
                    SignUP
                  </Nav.Link>
                </>
              )}

              <Nav.Link as={NavLink} to="/cart">
                <FontAwesomeIcon
                  style={{ fontSize: "20px" }}
                  icon={faShoppingCart}
                />
                <Badge bg="warning" className="badge">
                  0
                </Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
