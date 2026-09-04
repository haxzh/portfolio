import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/harsh_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FiExternalLink, FiFileText, FiAward, FiCode, FiCheck } from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPdfError(false);
  }

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        {/* Section Header */}
        <div className="section-header-wrap text-center mb-4">
          <div className="section-badge-tag mb-2">
            <FiFileText className="me-2" /> CURRICULUM VITAE
          </div>
          <h1 className="project-heading">
            Resume & <strong className="purple">Credentials</strong>
          </h1>
          <p className="section-description">
            Explore my academic background, technical skills, and software engineering experience.
          </p>
        </div>

        {/* Action Controls */}
        <div className="resume-actions-bar text-center mb-4">
          <Button
            variant="primary"
            href={pdf}
            download="Harsh_Kumar_Resume.pdf"
            className="resume-action-btn me-2"
          >
            <AiOutlineDownload /> &nbsp; Download Resume
          </Button>

          <Button
            variant="outline-light"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-action-btn"
          >
            <FiExternalLink /> &nbsp; Open in New Tab
          </Button>
        </div>

        {/* Quick Highlights Grid */}
        <Row className="justify-content-center mb-5">
          <Col md={4} sm={6} className="mb-3">
            <div className="resume-highlight-card">
              <FiAward className="highlight-icon text-warning" />
              <h6>Education</h6>
              <p>BCA @ ITM University Gwalior</p>
            </div>
          </Col>
          <Col md={4} sm={6} className="mb-3">
            <div className="resume-highlight-card">
              <FiCode className="highlight-icon text-info" />
              <h6>Primary Stack</h6>
              <p>MERN (React, Node, Express, MongoDB)</p>
            </div>
          </Col>
          <Col md={4} sm={6} className="mb-3">
            <div className="resume-highlight-card">
              <FiCheck className="highlight-icon text-success" />
              <h6>Specialization</h6>
              <p>Fullstack Web Dev, Django, Python & REST</p>
            </div>
          </Col>
        </Row>

        {/* PDF Document Viewer with fallback */}
        <Row className="resume justify-content-center">
          <Col lg={9} md={11} className="d-flex flex-column align-items-center">
            <div className="pdf-viewer-frame">
              {!pdfError ? (
                <Document
                  file={pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={() => setPdfError(true)}
                  className="d-flex justify-content-center"
                  loading={
                    <div className="text-center py-5 text-muted">
                      <div className="spinner-border text-primary mb-2" role="status"></div>
                      <div>Loading Resume Preview...</div>
                    </div>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    scale={width > 992 ? 1.4 : width > 768 ? 1.0 : 0.6}
                    renderTextLayer={false}
                  />
                </Document>
              ) : (
                <div className="pdf-fallback-box text-center py-5">
                  <h4>Resume Document Ready</h4>
                  <p className="text-muted">
                    Click the download button above to view the full PDF offline or open in your browser.
                  </p>
                  <Button
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    className="mt-2"
                  >
                    <FiExternalLink /> &nbsp; Open Document
                  </Button>
                </div>
              )}
            </div>
            {numPages && (
              <span className="text-muted mt-2 font-monospace">
                Page {pageNumber} of {numPages}
              </span>
            )}
          </Col>
        </Row>

        {/* Bottom Download Button */}
        <div className="text-center mt-5 mb-3">
          <Button
            variant="primary"
            href={pdf}
            download="Harsh_Kumar_Resume.pdf"
            className="resume-action-btn"
          >
            <AiOutlineDownload /> &nbsp; Download Resume (PDF)
          </Button>
        </div>
      </Container>
    </Container>
  );
}

export default ResumeNew;
