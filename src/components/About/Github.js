import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";
import { FiGithub, FiActivity } from "react-icons/fi";

function Github() {
  return (
    <Row className="github-section-row" style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <Col md={12} className="text-center">
        <div className="section-badge-tag mb-2">
          <FiActivity className="me-2" /> CONTRIBUTION ACTIVITY
        </div>
        <h1 className="project-heading" style={{ paddingBottom: "15px" }}>
          Days I <strong className="purple">Code & Build</strong>
        </h1>
        <p className="text-muted mb-4">
          Visual representation of my open-source commits, feature pushes, and repositories on GitHub.
        </p>
      </Col>

      <Col lg={10} className="github-calendar-card text-center">
        <div className="calendar-inner-scroll">
          <GitHubCalendar
            username="haxzh"
            blockSize={14}
            blockMargin={5}
            color="#c084f5"
            fontSize={14}
          />
        </div>
        <div className="calendar-card-footer mt-3">
          <a
            href="https://github.com/haxzh"
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            <FiGithub className="me-1" /> View Full Profile & Repositories @haxzh
          </a>
        </div>
      </Col>
    </Row>
  );
}

export default Github;
