import React from "react";
import "./Home.css";
import bgImage from "./../../assets/images/sectionBg.png";
import Bg from "./../../assets/images/bg.png";
import { Container, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Course from "./../Course/Course";
import useCourses from "./../../Hooks/useCourses";

const Home = () => {
  const history = useHistory();
  const [courses] = useCourses();
  const featureCourses = courses.slice(0, 6);
  function GoServices() {
    history.push("/courses");
  }

  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div className="row">
            <div className="col-md-8">
              <div
                style={{ height: "90vh" }}
                className="d-flex justify-content-center align-items-center"
              >
                <div className="text-white my-5 py-5">
                  <h4>Welcome To MediLearn</h4>
                  <h1>MediLearn Is Best In Medical World!</h1>
                  <p className="my-4 fs-5">
                    Compassion. Innovation. Trust. Compassionate Care, Advanced
                    Medicine, Close to Home. Confidence for the good life.
                    Dedicated to Discovery.!
                  </p>

                  <Button
                    onClick={GoServices}
                    className=" fs-5 py-2 px-4"
                    variant="success"
                  >
                    View Courses
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
      >
        <Container className="py-5">
          <h2 className="text-center text-white mb-2">Featured Courses</h2>

          <p className="text-muted text-center">
            Here you can find our all latest courses. Choose some of them and
            try to grow up your skills.
          </p>

          <Row>
            {featureCourses?.map((course) => (
              <Course course={course} key={course.key}></Course>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
