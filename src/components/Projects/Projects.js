import React, { useState, useMemo } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectModal from "./ProjectModal";
import Particle from "../Particle";
import { projectsData, projectCategories } from "../../data/projectsData";
import {
  FiSearch,
  FiX,
  FiLayers,
  FiGrid,
  FiList,
  FiFilter
} from "react-icons/fi";
import { playClick, playSuccess } from "../../utils/SoundManager";

const TOP_TECH_FILTERS = [
  "All Tech",
  "React",
  "Next.js 16",
  "Python",
  "Django",
  "Flask",
  "Streamlit",
  "RAG",
  "Supabase",
  "OpenCV",
  "MongoDB",
  "Redis"
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All Tech");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  // Filter projects based on category, tech pill, and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((proj) => {
      const matchesCategory =
        selectedCategory === "All" || proj.category === selectedCategory;

      const matchesTech =
        selectedTech === "All Tech" ||
        proj.techStack.some((t) =>
          t.toLowerCase().includes(selectedTech.toLowerCase())
        );

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        proj.title.toLowerCase().includes(q) ||
        proj.description.toLowerCase().includes(q) ||
        (proj.summary && proj.summary.toLowerCase().includes(q)) ||
        proj.techStack.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [selectedCategory, selectedTech, searchQuery]);

  const handleCategoryChange = (cat) => {
    playClick();
    setSelectedCategory(cat);
  };

  const handleTechChange = (tech) => {
    playClick();
    setSelectedTech(tech);
  };

  const handleViewModeChange = (mode) => {
    playClick();
    setViewMode(mode);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Section Header */}
        <div className="section-header-wrap text-center mb-4">
          <span className="section-subtitle">
            <FiLayers /> PORTFOLIO SHOWCASE
          </span>
          <h1 className="project-heading">
            My Recent <strong className="purple">Crafted Works</strong>
          </h1>
          <p className="section-description">
            Explore a curated selection of full-stack web applications, AI/RAG architectures, and asynchronous automation tools I've engineered.
          </p>
        </div>

        {/* Primary Controls Bar: Categories & Search & View Mode */}
        <div className="project-controls-bar mb-3">
          {/* Category Tabs */}
          <div className="category-filter-group">
            {projectCategories.map((cat) => {
              const count =
                cat === "All"
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  className={`category-filter-btn ${selectedCategory === cat ? "active" : ""
                    }`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat} <span className="cat-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & View Mode Switcher */}
          <div className="d-flex align-items-center gap-2 flex-wrap search-view-wrap">
            <div className="search-box-wrapper flex-grow-1">
              <InputGroup className="custom-search-input-group">
                <InputGroup.Text className="search-icon-addon">
                  <FiSearch />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search by name, tech (Whisper, Django, RAG)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="custom-search-input"
                />
                {searchQuery && (
                  <Button
                    variant="link"
                    className="clear-search-btn"
                    onClick={() => {
                      playClick();
                      setSearchQuery("");
                    }}
                  >
                    <FiX />
                  </Button>
                )}
              </InputGroup>
            </div>

            {/* View Mode Switcher */}
            <div className="view-mode-toggle-group">
              <button
                className={`view-mode-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => handleViewModeChange("grid")}
                title="Grid View"
                aria-label="Grid View"
              >
                <FiGrid />
              </button>
              <button
                className={`view-mode-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => handleViewModeChange("list")}
                title="List View"
                aria-label="List View"
              >
                <FiList />
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Tech Pills Filter */}
        <div className="tech-filter-pills-bar mb-4">
          <span className="tech-filter-label">
            <FiFilter className="me-1" /> Filter by Stack:
          </span>
          <div className="tech-filter-chips">
            {TOP_TECH_FILTERS.map((tech) => (
              <button
                key={tech}
                className={`tech-chip-filter-btn ${selectedTech === tech ? "active" : ""
                  }`}
                onClick={() => handleTechChange(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Project Count Meta */}
        <div className="projects-count-meta text-muted mb-4 d-flex justify-content-between align-items-center flex-wrap">
          <div>
            Showing <strong>{filteredProjects.length}</strong> of{" "}
            <strong>{projectsData.length}</strong> projects
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {selectedTech !== "All Tech" && ` using ${selectedTech}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </div>

          {(selectedCategory !== "All" || selectedTech !== "All Tech" || searchQuery) && (
            <button
              className="btn btn-link btn-sm text-decoration-none text-info p-0"
              onClick={() => {
                playSuccess();
                setSelectedCategory("All");
                setSelectedTech("All Tech");
                setSearchQuery("");
              }}
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Projects Display: Grid or List */}
        {viewMode === "grid" ? (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <Col
                  lg={4}
                  md={6}
                  key={project.id}
                  className="project-card d-flex align-items-stretch"
                >
                  <ProjectCard
                    project={project}
                    onSelectProject={handleOpenModal}
                    viewMode="grid"
                  />
                </Col>
              ))
            ) : (
              <Col md={8} className="no-projects-found text-center py-5">
                <div className="empty-state-icon">🔍</div>
                <h3>No matching projects found</h3>
                <p className="text-muted">
                  Try searching for a different keyword or resetting your filter category.
                </p>
                <Button
                  variant="primary"
                  className="mt-2"
                  onClick={() => {
                    playSuccess();
                    setSelectedCategory("All");
                    setSelectedTech("All Tech");
                    setSearchQuery("");
                  }}
                >
                  Reset All Filters
                </Button>
              </Col>
            )}
          </Row>
        ) : (
          <div className="project-list-container mb-4">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelectProject={handleOpenModal}
                  viewMode="list"
                />
              ))
            ) : (
              <div className="no-projects-found text-center py-5">
                <div className="empty-state-icon">🔍</div>
                <h3>No matching projects found</h3>
                <p className="text-muted">
                  Try searching for a different keyword or resetting your filter category.
                </p>
                <Button
                  variant="primary"
                  className="mt-2"
                  onClick={() => {
                    playSuccess();
                    setSelectedCategory("All");
                    setSelectedTech("All Tech");
                    setSearchQuery("");
                  }}
                >
                  Reset All Filters
                </Button>
              </div>
            )}
          </div>
        )}
      </Container>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        show={showModal}
        onHide={handleCloseModal}
      />
    </Container>
  );
}

export default Projects;
