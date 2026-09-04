import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FiMapPin, FiBookOpen, FiAward, FiHeart } from "react-icons/fi";

function AboutCard() {
  return (
    <Card className="quote-card-view modern-about-card">
      <Card.Body>
        <div className="about-personal-info mb-3">
          <p className="about-text-lead">
            Hello! I am <span className="purple fw-bold">Harsh Kumar</span>, an enthusiastic Full Stack Software Developer based in{" "}
            <span className="purple"><FiMapPin className="inline-icon" /> Noida, India.</span>
          </p>

          <div className="education-mini-pill mb-3">
            <FiBookOpen className="me-2 text-info" />
            <span>Pursuing <strong>BCA (Bachelor of Computer Applications)</strong> at <strong>ITM University Gwalior</strong></span>
          </div>

          <p className="about-desc-para">
            I am driven by curiosity and the continuous pursuit of building high-performance, user-centric digital solutions. Whether designing intuitive user interfaces with React or architecting scalable backend APIs with Node.js and Django, I focus on delivering clean, maintainable, and efficient code.
          </p>

          <div className="about-passions-section mt-4">
            <h6 className="passions-title">
              <FiHeart className="me-2 text-danger" /> Beyond Coding, I enjoy:
            </h6>
            <ul className="about-activities-list">
              <li className="about-activity">
                <ImPointRight className="purple me-2" /> 🎮 Strategic Multiplayer & Video Gaming
              </li>
              <li className="about-activity">
                <ImPointRight className="purple me-2" /> ✍️ Writing Tech Articles & Architecture Breakdowns
              </li>
              <li className="about-activity">
                <ImPointRight className="purple me-2" /> ✈️ Traveling & Exploring New Places
              </li>
              <li className="about-activity">
                <ImPointRight className="purple me-2" /> 🚀 Exploring Cutting-Edge AI Models & Web3
              </li>
            </ul>
          </div>
        </div>

        <blockquote className="blockquote modern-blockquote mt-4">
          <p className="quote-text">
            "Strive to build meaningful software that solves real-world challenges and elevates human potential."
          </p>
          <footer className="blockquote-footer text-end mt-2">
            <FiAward className="me-1" /> Harsh Kumar
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
