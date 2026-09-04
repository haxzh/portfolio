import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avtaar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin
} from "react-icons/ai";
import { DiReact, DiNodejs, DiPython, DiMongodb } from "react-icons/di";
import { FiUserCheck, FiCpu, FiLayers, FiDatabase, FiTrendingUp } from "react-icons/fi";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about-preview">
      <Container>
        <Row className="align-items-center">
          <Col lg={8} md={12} className="home-about-description">
            <div className="section-badge-tag mb-3">
              <FiUserCheck className="me-2" /> BACKGROUND & ARCHITECTURE EXPERTISE
            </div>

            <h1 className="section-title-large">
              LET ME <span className="purple">INTRODUCE</span> MY WORK
            </h1>

            <p className="home-about-body">
              I am a results-driven <b className="purple">Full-Stack & AI Systems Developer</b> who designs and scales complete modern web ecosystems, AI platforms, and real-time backend microservices.
              <br />
              <br />
              My core programming languages and runtimes include:
              <i>
                <b className="purple"> JavaScript (ES6+), TypeScript, Python, C++, and Golang.</b>
              </i>
              <br />
              <br />
              Specialized in building:
              <i>
                <b className="purple">
                  {" "}
                  Full Stack Web Applications (React, Next.js 16, Django, Flask), Hybrid RAG Pipelines (Gemini + Supabase pgvector), and Asynchronous Worker Queues (Celery + Redis).
                </b>
              </i>
            </p>

            {/* Core Engineering Pillars */}
            <div className="expertise-pillars-grid mt-4">
              <div className="pillar-item">
                <FiLayers className="pillar-icon" />
                <div>
                  <h6 className="pillar-title">Full Stack Architecture</h6>
                  <p className="pillar-sub">MERN, Next.js 16 App Router & Django REST APIs</p>
                </div>
              </div>

              <div className="pillar-item">
                <FiCpu className="pillar-icon" />
                <div>
                  <h6 className="pillar-title">AI & RAG Engineering</h6>
                  <p className="pillar-sub">Hybrid pgvector semantic search & Gemini/Whisper LLMs</p>
                </div>
              </div>

              <div className="pillar-item">
                <FiDatabase className="pillar-icon" />
                <div>
                  <h6 className="pillar-title">Databases & Caching</h6>
                  <p className="pillar-sub">PostgreSQL, MongoDB, MySQL, Redis & Supabase</p>
                </div>
              </div>

              <div className="pillar-item">
                <FiTrendingUp className="pillar-icon" />
                <div>
                  <h6 className="pillar-title">High Scalability</h6>
                  <p className="pillar-sub">Background queues, WebSockets & real-time sync</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={12} className="myAvtar text-center mt-5 mt-lg-0">
            <div className="avatar-tilt-wrapper">
              <div className="avatar-glowing-ring"></div>
              {/* Floating badges around avatar */}
              <div className="floating-badge badge-react" title="React.js">
                <DiReact />
              </div>
              <div className="floating-badge badge-node" title="Node.js">
                <DiNodejs />
              </div>
              <div className="floating-badge badge-python" title="Python">
                <DiPython />
              </div>
              <div className="floating-badge badge-mongo" title="MongoDB">
                <DiMongodb />
              </div>

              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} scale={1.04}>
                <div className="avatar-glass-frame">
                  <img src={myImg} className="img-fluid rounded-avatar" alt="Harsh avatar" />
                </div>
              </Tilt>
            </div>
          </Col>
        </Row>

        {/* Social Connect Banner */}
        <Row className="mt-5 pt-3">
          <Col md={12} className="home-about-social">
            <h2 className="connect-heading">LET'S CONNECT & COLLABORATE</h2>
            <p className="connect-subtitle">
              Feel free to <span className="purple">reach out</span> for full-time opportunities, freelance projects, or tech discussions!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/haxzh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/haxzh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/harsh_shakya_84"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/am.haxzh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
