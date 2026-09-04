import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink, FiInfo } from "react-icons/fi";
import { playClick } from "../../utils/SoundManager";

function ProjectCards({ project, onSelectProject, viewMode = "grid" }) {
  const { title, summary, description, imgPath, ghLink, demoLink, techStack, category, badge } = project;

  if (viewMode === "list") {
    return (
      <div className="project-list-card modern-card mb-3 p-3">
        <div className="row align-items-center">
          <div className="col-md-3 col-12 mb-3 mb-md-0">
            <div
              className="list-img-wrapper cursor-pointer"
              onClick={() => {
                playClick();
                onSelectProject(project);
              }}
            >
              <img
                src={imgPath}
                alt={title}
                className="img-fluid rounded list-project-img"
                loading="lazy"
              />
              {badge && <span className="card-badge list-badge">{badge}</span>}
            </div>
          </div>

          <div className="col-md-6 col-12 mb-3 mb-md-0">
            <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
              <span className="project-category-tag">{category}</span>
              {demoLink && (
                <span className="live-indicator">
                  <span className="pulse-dot"></span> Live
                </span>
              )}
            </div>
            <h4
              className="project-title-text list-title mb-2 cursor-pointer"
              onClick={() => {
                playClick();
                onSelectProject(project);
              }}
            >
              {title}
            </h4>
            <p className="project-desc-text list-desc mb-2 text-muted">
              {summary || description}
            </p>
            {techStack && techStack.length > 0 && (
              <div className="project-tech-tags">
                {techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag-chip">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="col-md-3 col-12 text-md-end">
            <div className="d-flex flex-column gap-2 justify-content-center">
              <Button
                variant="outline-secondary"
                size="sm"
                className="action-btn details-btn w-100"
                onClick={() => {
                  playClick();
                  onSelectProject(project);
                }}
              >
                <FiInfo /> &nbsp; Architecture Details
              </Button>

              {ghLink && (
                <Button
                  variant="outline-light"
                  size="sm"
                  href={ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn code-btn w-100"
                  onClick={playClick}
                >
                  <BsGithub /> &nbsp; Source Code
                </Button>
              )}

              {demoLink && (
                <Button
                  variant="primary"
                  size="sm"
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn demo-btn w-100"
                  onClick={playClick}
                >
                  <FiExternalLink /> &nbsp; Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Grid Card View
  return (
    <Card className="project-card-view modern-card">
      <div
        className="card-img-wrapper"
        onClick={() => {
          playClick();
          onSelectProject(project);
        }}
      >
        <Card.Img
          variant="top"
          src={imgPath}
          alt={title}
          className="project-card-image"
          loading="lazy"
        />
        <div className="card-img-overlay-hover">
          <span className="preview-label">
            <FiInfo /> View Details & Architecture
          </span>
        </div>
        {badge && <span className="card-badge">{badge}</span>}
      </div>

      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="project-category-tag">{category}</span>
          {demoLink && (
            <span className="live-indicator">
              <span className="pulse-dot"></span> Live
            </span>
          )}
        </div>

        <Card.Title
          className="project-title-text cursor-pointer"
          onClick={() => {
            playClick();
            onSelectProject(project);
          }}
        >
          {title}
        </Card.Title>

        <Card.Text className="project-desc-text flex-grow-1">
          {summary || description}
        </Card.Text>

        {techStack && techStack.length > 0 && (
          <div className="project-tech-tags mb-3">
            {techStack.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="tech-tag-chip">
                {tech}
              </span>
            ))}
            {techStack.length > 4 && (
              <span className="tech-tag-chip more-chip">
                +{techStack.length - 4}
              </span>
            )}
          </div>
        )}

        <div className="project-card-actions mt-auto pt-2">
          <Button
            variant="outline-light"
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn code-btn"
            onClick={playClick}
          >
            <BsGithub /> &nbsp; Code
          </Button>

          {demoLink ? (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn demo-btn"
              onClick={playClick}
            >
              <FiExternalLink /> &nbsp; Live Demo
            </Button>
          ) : (
            <Button
              variant="outline-secondary"
              className="action-btn details-btn"
              onClick={() => {
                playClick();
                onSelectProject(project);
              }}
            >
              <FiInfo /> &nbsp; Details
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
