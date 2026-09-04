import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail
} from "react-icons/ai";
import { FiSearch, FiVolume2, FiVolumeX } from "react-icons/fi";
import { isSoundEnabled, toggleSound, playClick } from "../utils/SoundManager";

function NavBar({ onOpenCommandPalette }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [soundOn, setSoundOn] = useState(isSoundEnabled());
  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleToggleSound = () => {
    const nextState = toggleSound();
    setSoundOn(nextState);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "sticky modern-navbar" : "navbar modern-navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center brand-link">
          <div className="brand-logo-glow">
            <span className="brand-symbol">&lt;</span>
            <span className="brand-name">Harsh</span>
            <span className="brand-dot">.dev</span>
            <span className="brand-symbol"> /&gt;</span>
          </div>
        </Navbar.Brand>

        {/* Command Palette Trigger in Navbar */}
        <button
          className="navbar-cmd-trigger-btn d-none d-md-flex align-items-center"
          onClick={() => {
            playClick();
            if (onOpenCommandPalette) onOpenCommandPalette();
          }}
          title="Open Command Palette (Ctrl + K)"
        >
          <FiSearch className="cmd-icon-small me-1" />
          <span>Quick Search...</span>
          <span className="cmd-shortcut-key">Ctrl K</span>
        </button>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-navbar-toggler"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                className={`nav-link-item ${isActive("/") ? "active-nav-link" : ""}`}
                onClick={() => {
                  playClick();
                  updateExpanded(false);
                }}
              >
                <AiOutlineHome className="nav-icon" /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                className={`nav-link-item ${isActive("/about") ? "active-nav-link" : ""}`}
                onClick={() => {
                  playClick();
                  updateExpanded(false);
                }}
              >
                <AiOutlineUser className="nav-icon" /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                className={`nav-link-item ${isActive("/project") ? "active-nav-link" : ""}`}
                onClick={() => {
                  playClick();
                  updateExpanded(false);
                }}
              >
                <AiOutlineFundProjectionScreen className="nav-icon" /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                className={`nav-link-item ${isActive("/resume") ? "active-nav-link" : ""}`}
                onClick={() => {
                  playClick();
                  updateExpanded(false);
                }}
              >
                <CgFileDocument className="nav-icon" /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                className={`nav-link-item ${isActive("/contact") ? "active-nav-link" : ""}`}
                onClick={() => {
                  playClick();
                  updateExpanded(false);
                }}
              >
                <AiOutlineMail className="nav-icon" /> Contact
              </Nav.Link>
            </Nav.Item>

            {/* Sound FX Toggle Button */}
            <Nav.Item>
              <button
                className="nav-sound-toggle-btn"
                onClick={handleToggleSound}
                title={soundOn ? "Mute Sound FX" : "Enable Sound FX"}
                aria-label="Toggle Sound Effects"
              >
                {soundOn ? <FiVolume2 className="text-info" /> : <FiVolumeX className="text-muted" />}
              </button>
            </Nav.Item>

            {/* GitHub Stars / Fork Button */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/haxzh/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="fork-btn-inner"
                onClick={playClick}
              >
                <CgGitFork style={{ fontSize: "1.1em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.05em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
