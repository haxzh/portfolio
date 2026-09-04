import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer modern-footer">
      <Container>
        <Row className="align-items-center py-3">
          <Col md={4} className="footer-copywright text-center text-md-start">
            <h3 className="footer-title">
              Designed & Built by <span className="purple">Harsh Kumar</span>
            </h3>
          </Col>

          <Col md={4} className="footer-copywright text-center">
            <h3 className="footer-copyright-text">
              Copyright © {year} <span className="purple">HK</span>. All rights reserved.
            </h3>
            <div className="footer-nav-mini">
              <Link to="/">Home</Link> • <Link to="/about">About</Link> •{" "}
              <Link to="/project">Projects</Link> • <Link to="/contact">Contact</Link>
            </div>
          </Col>

          <Col md={4} className="footer-body text-center text-md-end">
            <ul className="footer-icons mb-0">
              <li className="social-icons">
                <a
                  href="https://github.com/haxzh"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="footer-social-link"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/harsh_shakya_84"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="footer-social-link"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/haxzh"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="footer-social-link"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/am.haxzh"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="footer-social-link"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
