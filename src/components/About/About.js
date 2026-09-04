import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { FiUser, FiCode, FiTool, FiBook } from "react-icons/fi";
import { educationData } from "../../data/skillsData";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* About Hero Row */}
        <Row style={{ justifyContent: "center", padding: "10px", alignItems: "center" }}>
          <Col
            md={7}
            style={{
              paddingTop: "20px",
              paddingBottom: "40px",
            }}
          >
            <div className="section-badge-tag mb-3">
              <FiUser className="me-2" /> BIOGRAPHY
            </div>
            <h1 style={{ fontSize: "2.3em", paddingBottom: "15px" }}>
              Know Who <strong className="purple">I AM</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "40px" }}
            className="about-img text-center"
          >
            <div className="about-illustration-wrap">
              <img src={laptopImg} alt="about developer" className="img-fluid floating-illustration" />
            </div>
          </Col>
        </Row>

        {/* Education & Academic Journey */}
        <div className="education-journey-wrap my-5">
          <div className="text-center mb-4">
            <div className="section-badge-tag mb-2">
              <FiBook className="me-2" /> ACADEMIC BACKGROUND
            </div>
            <h1 className="project-heading">
              Education & <strong className="purple">Milestones</strong>
            </h1>
          </div>

          <Row className="justify-content-center">
            {educationData.map((edu, idx) => (
              <Col md={10} key={idx}>
                <div className="education-timeline-card">
                  <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                    <h3 className="edu-degree-title">{edu.degree}</h3>
                    <span className="edu-duration-pill">{edu.duration}</span>
                  </div>
                  <h5 className="edu-institution-name">{edu.institution}</h5>
                  <p className="edu-description-text">{edu.description}</p>
                  <span className="edu-status-badge">{edu.badge}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Professional Skillset */}
        <div className="skills-section-wrap my-5">
          <div className="text-center mb-4">
            <div className="section-badge-tag mb-2">
              <FiCode className="me-2" /> TECHNICAL PROFICIENCY
            </div>
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset</strong>
            </h1>
            <p className="text-muted">
              Languages, frameworks, databases, and libraries I utilize to build modern software.
            </p>
          </div>
          <Techstack />
        </div>

        {/* Tools Section */}
        <div className="tools-section-wrap my-5">
          <div className="text-center mb-4">
            <div className="section-badge-tag mb-2">
              <FiTool className="me-2" /> WORKFLOW & ECOSYSTEM
            </div>
            <h1 className="project-heading">
              <strong className="purple">Tools & Platforms</strong> I Use
            </h1>
            <p className="text-muted">
              Development environments, productivity utilities, and deployment services.
            </p>
          </div>
          <Toolstack />
        </div>

        {/* GitHub Activity */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
