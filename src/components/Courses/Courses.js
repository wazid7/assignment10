import React from "react";
import { Container, Row } from "react-bootstrap";
import useCourses from "../../Hooks/useCourses";
import Course from "../Course/Course";
import bgImage from "./../../assets/images/sectionBg.png";

const Courses = () => {
  const [courses] = useCourses();
  return (
    <div
      style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
    >
      <Container className="py-5">
        <h2 className="text-center text-white mb-0">Our All Courses</h2>

        <p className="my-4 mt-2 text-center text-muted fs-5">
          Learn exciting technologies from web development, design, game
          development and more!
        </p>
        <Row>
          {courses?.map((course) => (
            <Course course={course} key={course.key}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
