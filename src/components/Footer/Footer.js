import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Payment from "./../../assets/images/payment.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Footer.css";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

library.add(
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faFacebookF,
  faYoutube,
  faLinkedin
);
const Footer = () => {
  const navStyle = {
    textDecoration: "none",
    color: "white",
    borderBottom: "2px solid transparent",
    fontSize: "17px",
    fontWeight: "bold",
    marginBottom: "10px",
    display: "inline-block",
  };
  return (
    <div
      style={{
        backgroundColor: "darkcyan",
        padding: "40px 0 0",
      }}
    >
      <Container>
        <Row>
          <Col>
            <div>
              <img
                width="120px"
                src={
                  "https://template.hasthemes.com/medilearn/medilearn/images/logo/2.png"
                }
                alt=""
              />
            </div>
            <ul className="list-unstyled mt-3 w-100">
              <li className="fs-6 fw-bold mb-2 text-white">
                <FontAwesomeIcon
                  className="me-2 social-icon"
                  icon={faMapMarkerAlt}
                />{" "}
                House- 06, Road-04, Dhanmondi, Dhaka 1205, Bangladesh.
              </li>
              <li className="fs-6 fw-bold mb-2 text-white">
                <FontAwesomeIcon
                  className="me-2 social-icon"
                  icon={faEnvelope}
                />{" "}
                info@labaidgroup.com
              </li>
              <li className="fs-6 fw-bold mb-2 text-white">
                <FontAwesomeIcon className="me-2 social-icon" icon={faPhone} />{" "}
                Helpline: +88 02 9676356, +88 02 58610793-8
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="list-unstyle">
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/about">
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink className="menuStyle" style={navStyle} to="/contact">
                  Contact us
                </NavLink>
              </li>

              <li>
                <NavLink className="menuStyle" style={navStyle} to="/courses">
                  Courses
                </NavLink>
              </li>

              <li>
                <NavLink className="menuStyle" style={navStyle} to="/policy">
                  Policy
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={5}>
            <img className="img-fluid" src={Payment} alt="" />
          </Col>
        </Row>
        <div>
          <h4 className="text-white text-center">Join With Us</h4>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="social-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/groups/codingclubpro2021"
              >
                <FontAwesomeIcon
                  style={{ color: "#3b5998" }}
                  className="me-2 facebook social-icon"
                  icon={faFacebookF}
                />
              </a>
            </li>
            <li className="social-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com"
              >
                <FontAwesomeIcon
                  className="me-2 youtube social-icon"
                  icon={faYoutube}
                />
              </a>
            </li>
            <li className="social-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com"
              >
                <FontAwesomeIcon
                  className="me-2 linkedin social-icon"
                  icon={faLinkedin}
                />
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <hr className="mt-2 mb-0 bg-white" />
      <p
        style={{ background: "#0a3d62" }}
        className="m-0 fw-bold py-3  text-white text-center"
      >
        Copyright &copy; All Reserved by{" "}
        <a
          className="text-decoration-none"
          style={{ color: "#fff" }}
          target="_blank"
          rel="noreFerrer"
          href="https://www.facebook.com"
        >
          MedLearn Inc.
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
