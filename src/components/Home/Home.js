import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import TerminalCard from "./TerminalCard";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
  AiOutlineArrowRight
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FiCode, FiZap, FiGitBranch, FiAward, FiLayers, FiTerminal } from "react-icons/fi";

function Home() {
  const [heroView, setHeroView] = useState("terminal"); // "terminal" | "visual"

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={7} md={12} className="home-header">
              {/* Availability Badge */}
              <div className="availability-badge-wrapper mb-3">
                <span className="availability-badge">
                  <span className="badge-dot"></span> Available for Hire & Innovative Projects
                </span>
              </div>

              <h1 className="heading mb-2">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name mb-4">
                I'M <strong className="main-name glowing-text">Harsh Kumar</strong>
              </h1>

              <div className="typewriter-container mb-4">
                <Type />
              </div>

              <p className="hero-bio-text mb-4">
                Full-stack & AI Systems engineer architecting intelligent platforms with <strong>React, Next.js 16</strong>, <strong>Python/Django</strong>, and <strong>Hybrid RAG</strong> pipelines. Passionate about solving complex problems with clean code and high performance.
              </p>

              {/* Action Buttons */}
              <div className="hero-cta-buttons mb-5">
                <Button
                  as={Link}
                  to="/project"
                  variant="primary"
                  className="hero-btn primary-hero-btn"
                >
                  <AiOutlineFundProjectionScreen /> Explore 9+ Projects <AiOutlineArrowRight className="ms-1" />
                </Button>

                <Button
                  as={Link}
                  to="/contact"
                  variant="outline-light"
                  className="hero-btn secondary-hero-btn"
                >
                  <AiOutlineMail /> Let's Connect
                </Button>

                <Button
                  as={Link}
                  to="/resume"
                  variant="outline-secondary"
                  className="hero-btn resume-hero-btn"
                >
                  <CgFileDocument /> Resume
                </Button>
              </div>

              {/* Stats Highlight Bar */}
              <div className="hero-stats-grid">
                <div className="stat-card">
                  <div className="stat-icon-wrapper">
                    <FiCode className="stat-icon" />
                  </div>
                  <div className="stat-info">
                    <h3 className="stat-number">9+</h3>
                    <p className="stat-label">Fullstack & AI Projects</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon-wrapper">
                    <FiZap className="stat-icon" />
                  </div>
                  <div className="stat-info">
                    <h3 className="stat-number">15+</h3>
                    <p className="stat-label">Tech Skills</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon-wrapper">
                    <FiGitBranch className="stat-icon" />
                  </div>
                  <div className="stat-info">
                    <h3 className="stat-number">100+</h3>
                    <p className="stat-label">Git Commits</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon-wrapper">
                    <FiAward className="stat-icon" />
                  </div>
                  <div className="stat-info">
                    <h3 className="stat-number">BCA</h3>
                    <p className="stat-label">CS Graduate</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={5} md={12} className="home-image-col text-center mt-5 mt-lg-0">
              <div className="hero-interactive-preview-card">
                <div className="hero-preview-tabs mb-3">
                  <button
                    className={`preview-tab-btn ${heroView === "terminal" ? "active" : ""}`}
                    onClick={() => setHeroView("terminal")}
                  >
                    <FiTerminal className="me-1" /> Developer Config
                  </button>
                  <button
                    className={`preview-tab-btn ${heroView === "visual" ? "active" : ""}`}
                    onClick={() => setHeroView("visual")}
                  >
                    <FiLayers className="me-1" /> Visual Aura
                  </button>
                </div>

                {heroView === "terminal" ? (
                  <TerminalCard />
                ) : (
                  <div className="hero-img-glow-wrap">
                    <img
                      src={homeLogo}
                      alt="home illustration"
                      className="img-fluid hero-main-img"
                      style={{ maxHeight: "380px" }}
                    />
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
