import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md className="pe-3">
            <h2 className="text-center mt-4 mb-2">
              Why Choose{" "}
              <span className="text-warnin" style={{ color: "#008B8B" }}>
                Medlearn ?
              </span>
            </h2>
            <h5 style={{ color: "#0a3d62" }}>About Us</h5>
            <p className="text-muted">
              Labaid is one of the largest and most recognized private
              healthcare brands in Bangladesh. Known for its pioneering works in
              setting-up the first super-specialty Cardiac hospital within
              country.
            </p>
            <p className="text-muted">
              Labaid is also widely acknowledged for bringing high quality
              diagnostic & specialized consultation facilities under a single
              roof through its now ubiquitous centers in all corners of
              Bangladesh. Around 2.1 million annual patient interactions, more
              than 5,000 employees, and upward of 800 consultant physicians
              countrywide. Led by the visionary physician-entrepreneur Dr. A M
              Shamim. Labaid over the last 30 years - almost single handedly
              transformed the face of private, corporate healthcare in
              Bangladesh by providing quality platform for home-grown physicians
              and medical practitioners, by setting up centers of excellence,
              and in this process, gradually changing the collective mindset
              where people now believe that complex treatments like
              transplantation or cardio-vascular surgeries can happen with
              excellent outcome in Bangladesh by Bangladeshi doctors.
            </p>
            <div>
              <Button style={{ background: "#0a3d62" }} className=" mb-md-5">
                Learn More
              </Button>
            </div>
          </Col>
          <Col md className="pe-3 mt-md-5">
            <img
              className="img-fluid"
              src={
                "https://c8.alamy.com/zooms/9/ed61f1ec8e2a460c958e6c6bb2f4f46a/2bf3abw.jpg"
              }
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
