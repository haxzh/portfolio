import React, { useState, useEffect } from "react";
import { Modal, Button, Badge } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCopy,
  AiOutlineCheck
} from "react-icons/ai";
import { FiLayers, FiZap, FiCode, FiExternalLink } from "react-icons/fi";
import { playClick, playOpen, playClose, playSuccess } from "../../utils/SoundManager";

function ProjectModal({ project, show, onHide }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (show) {
      playOpen();
      setActiveTab("overview");
    }
  }, [show]);

  if (!project) return null;

  const handleClose = () => {
    playClose();
    onHide();
  };

  const handleCopyLink = () => {
    playSuccess();
    if (project.ghLink) {
      navigator.clipboard.writeText(project.ghLink);
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      className="custom-project-modal"
    >
      <Modal.Header className="custom-modal-header">
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <Modal.Title className="custom-modal-title mb-0">
            {project.title}
          </Modal.Title>
          {project.badge && (
            <Badge bg="primary" className="custom-modal-badge">
              {project.badge}
            </Badge>
          )}
        </div>
        <div className="d-flex align-items-center gap-2">
          <button
            className="custom-modal-icon-btn"
            onClick={handleCopyLink}
            title="Copy Repository Link"
            aria-label="Copy Link"
          >
            {copied ? <AiOutlineCheck className="text-success" /> : <AiOutlineCopy />}
          </button>
          <button
            className="custom-modal-close-btn"
            onClick={handleClose}
            aria-label="Close"
          >
            <AiOutlineClose />
          </button>
        </div>
      </Modal.Header>

      {/* Modal Tabs Bar */}
      <div className="modal-tabs-header px-4 pt-3 pb-0">
        <button
          className={`modal-tab-item ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => {
            playClick();
            setActiveTab("overview");
          }}
        >
          <FiLayers className="me-1" /> Overview
        </button>
        <button
          className={`modal-tab-item ${activeTab === "features" ? "active" : ""}`}
          onClick={() => {
            playClick();
            setActiveTab("features");
          }}
        >
          <FiZap className="me-1" /> Features ({project.features?.length || 0})
        </button>
        <button
          className={`modal-tab-item ${activeTab === "stack" ? "active" : ""}`}
          onClick={() => {
            playClick();
            setActiveTab("stack");
          }}
        >
          <FiCode className="me-1" /> Tech Stack ({project.techStack?.length || 0})
        </button>
      </div>

      <Modal.Body className="custom-modal-body">
        {activeTab === "overview" && (
          <div className="modal-tab-pane animate-fade-in">
            <div className="modal-img-container mb-4">
              <img
                src={project.imgPath}
                alt={project.title}
                className="img-fluid modal-project-img"
              />
            </div>

            <div className="modal-section mb-3">
              <h5 className="modal-section-title">Architectural Overview</h5>
              <p className="modal-desc">{project.description}</p>
            </div>

            {project.summary && (
              <div className="modal-summary-box p-3 rounded mb-3">
                <span className="summary-label">Key Value Proposition:</span>
                <p className="mb-0 text-white-50">{project.summary}</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "features" && (
          <div className="modal-tab-pane animate-fade-in">
            <div className="modal-section mb-3">
              <h5 className="modal-section-title">Core Engineering Capabilities</h5>
              {project.features && project.features.length > 0 ? (
                <ul className="modal-features-list">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="mb-3">
                      <AiOutlineCheckCircle className="feature-icon text-success fs-5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted">No specific feature list declared.</p>
              )}
            </div>
          </div>
        )}

        {activeTab === "stack" && (
          <div className="modal-tab-pane animate-fade-in">
            <div className="modal-section mb-3">
              <h5 className="modal-section-title">Technologies, Frameworks & Libraries</h5>
              <p className="text-muted small">
                Every component is carefully selected for performance, type safety, and scalability.
              </p>
              <div className="modal-tech-pills">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal.Body>

      <Modal.Footer className="custom-modal-footer">
        {project.ghLink && (
          <Button
            variant="outline-light"
            href={project.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-action-btn github-btn"
            onClick={playClick}
          >
            <BsGithub /> &nbsp; GitHub Repository
          </Button>
        )}

        {project.demoLink ? (
          <Button
            variant="primary"
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-action-btn demo-btn"
            onClick={playClick}
          >
            <span className="live-dot pulse"></span>
            <CgWebsite /> &nbsp; Live Interactive Demo <FiExternalLink className="ms-1" />
          </Button>
        ) : (
          <span className="text-muted demo-unavailable small">
            (Deployment build available on GitHub)
          </span>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
