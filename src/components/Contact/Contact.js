import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from "@emailjs/browser";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineSend,
  AiOutlineCopy,
  AiOutlineCheck,
  AiOutlineWhatsApp
} from "react-icons/ai";
import {
  FiMapPin,
  FiMessageSquare,
  FiClock,
  FiZap,
  FiBriefcase,
  FiCode,
  FiCoffee,
  FiFileText,
  FiExternalLink,
  FiCheckCircle,
  FiAlertCircle
} from "react-icons/fi";
import { playClick, playSuccess } from "../../utils/SoundManager";

const MESSAGE_TEMPLATES = [
  {
    id: "job",
    label: "💼 Job Opportunity",
    icon: <FiBriefcase className="me-1" />,
    subject: "Job Opportunity: Software Engineer / AI Developer",
    message:
      "Hi Harsh,\n\nI came across your portfolio and was impressed by your projects (Locaa-AI, FounderSaathi). We are looking for a skilled Full-Stack / AI developer at [Company Name].\n\nRole: Software Engineer\nLocation: Remote / Onsite\nTech Stack: React, Next.js, Python, AI\n\nLet's discuss if you are open to exploring this opportunity."
  },
  {
    id: "freelance",
    label: "🚀 Freelance Project",
    icon: <FiCode className="me-1" />,
    subject: "Freelance Project Inquiry: [Project Title]",
    message:
      "Hi Harsh,\n\nI have an exciting project and would love your assistance in architecting and building it.\n\nProject Scope:\nTimeline:\nBudget Range:\n\nLooking forward to hearing from you!"
  },
  {
    id: "collab",
    label: "🤝 Tech Collaboration",
    icon: <FiZap className="me-1" />,
    subject: "Collaboration on AI / Full-Stack Project",
    message:
      "Hi Harsh,\n\nI checked out your work on Hybrid RAG / SaaS platforms and wanted to reach out regarding a potential collaboration on..."
  },
  {
    id: "hello",
    label: "☕ Quick Coffee Chat",
    icon: <FiCoffee className="me-1" />,
    subject: "Saying Hi / Tech Networking",
    message:
      "Hi Harsh,\n\nJust wanted to say hi and connect! Great work on your developer portfolio and open-source contributions."
  }
];

function Contact() {
  const [copied, setCopied] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [currentTime, setCurrentTime] = useState("");

  const emailAddress = "harshshakya908431@gmail.com";

  // Live India Standard Time (IST) Clock
  useEffect(() => {
    const updateIST = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      };
      const formatted = new Intl.DateTimeFormat("en-US", options).format(new Date());
      setCurrentTime(formatted);
    };

    updateIST();
    const timer = setInterval(updateIST, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    playSuccess();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyDraft = () => {
    playSuccess();
    const draft = `Subject: ${formData.subject || "Message to Harsh Kumar"}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`;
    navigator.clipboard.writeText(draft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleSelectTemplate = (tmpl) => {
    playClick();
    setActiveTemplate(tmpl.id);
    setFormData((prev) => ({
      ...prev,
      subject: tmpl.subject,
      message: tmpl.message
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playClick();
    setIsSending(true);
    setStatusMessage(null);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS credentials are set
    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === "your_service_id_here" ||
      templateId === "your_template_id_here" ||
      publicKey === "your_public_key_here"
    ) {
      setIsSending(false);
      setStatusMessage({
        type: "warning",
        text: "EmailJS credentials are not configured yet. Please add REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, and REACT_APP_EMAILJS_PUBLIC_KEY in your .env file."
      });
      return;
    }

    // Exact EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || `New Message from ${formData.name}`,
      message: formData.message
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      playSuccess();
      setStatusMessage({
        type: "success",
        text: "Message sent successfully! Thank you for reaching out. I'll get back to you within 24 hours."
      });
      // Clear form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setActiveTemplate("");
    } catch (error) {
      console.error("EmailJS submission error:", error);
      setStatusMessage({
        type: "error",
        text: "Failed to send message. Please try again or reach out directly at harshkumar908431@gmail.com or WhatsApp."
      });
    } finally {
      setIsSending(false);
    }
  };

  const charCount = formData.message.length;
  const wordCount = formData.message.trim() ? formData.message.trim().split(/\s+/).length : 0;

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        {/* Section Header */}
        <div className="section-header-wrap text-center mb-4">
          <div className="section-badge-tag mb-2">
            <FiMessageSquare className="me-2" /> GET IN TOUCH
          </div>
          <h1 className="project-heading">
            Let's Build Something <strong className="purple">Exceptional</strong>
          </h1>
          <p className="section-description">
            Have an open software role, freelance inquiry, or innovative idea? Choose a quick template or drop a custom note below!
          </p>
        </div>

        {/* Live Status & SLA Banner */}
        <div className="contact-status-bar-wrapper mb-4">
          <div className="status-item">
            <div className="pulse-indicator-dot"></div>
            <span><strong>Status:</strong> Available for Hire & Projects</span>
          </div>
          <div className="status-item">
            <FiClock className="text-warning me-1" />
            <span><strong>Local Time:</strong> {currentTime || "IST"} (Noida, India)</span>
          </div>
          <div className="status-item">
            <FiZap className="text-info me-1" />
            <span><strong>Response Time:</strong> Under 24 Hours</span>
          </div>
        </div>

        <Row className="justify-content-center">
          {/* Left Column: Contact Details & Quick Copy */}
          <Col lg={5} md={12} className="mb-4">
            <div className="contact-info-card">
              <h3 className="contact-card-title mb-4">Contact Information</h3>

              <div className="contact-detail-item mb-4">
                <div className="contact-icon-box">
                  <AiOutlineMail />
                </div>
                <div className="contact-detail-text">
                  <span className="contact-detail-label">Direct Email</span>
                  <div className="d-flex align-items-center gap-2 flex-wrap mt-1">
                    <a href={`mailto:${emailAddress}`} className="contact-detail-value">
                      {emailAddress}
                    </a>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="copy-email-btn"
                      onClick={handleCopyEmail}
                      title="Copy Email to Clipboard"
                    >
                      {copied ? (
                        <>
                          <AiOutlineCheck className="text-success" /> Copied!
                        </>
                      ) : (
                        <>
                          <AiOutlineCopy /> Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="contact-detail-item mb-4">
                <div className="contact-icon-box">
                  <FiMapPin />
                </div>
                <div className="contact-detail-text">
                  <span className="contact-detail-label">Base Location</span>
                  <span className="contact-detail-value">Noida, Uttar Pradesh, India</span>
                  <span className="contact-detail-sub">Open to Remote & Relocation worldwide</span>
                </div>
              </div>

              {/* Direct Quick WhatsApp Connect */}
              <div className="contact-whatsapp-card mb-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="mb-1 text-white d-flex align-items-center">
                      <AiOutlineWhatsApp className="text-success me-2 fs-5" /> Quick WhatsApp
                    </h6>
                    <small className="text-muted">Direct instant messaging</small>
                  </div>
                  <a
                    href={`https://wa.me/918077827705?text=${encodeURIComponent(
                      "Hi Harsh, I saw your portfolio and would like to connect!"
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-success btn-sm whatsapp-btn"
                  >
                    Chat <FiExternalLink className="ms-1" />
                  </a>
                </div>
              </div>

              <hr className="contact-divider my-4" />

              <h5 className="socials-heading mb-3">Connect on Social Networks</h5>
              <div className="contact-social-grid">
                <a
                  href="https://github.com/haxzh"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-btn"
                >
                  <AiFillGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/haxzh"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-btn"
                >
                  <AiFillLinkedin /> LinkedIn
                </a>
                <a
                  href="https://twitter.com/harsh_shakya_84"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-btn"
                >
                  <AiOutlineTwitter /> Twitter
                </a>
                <a
                  href="https://www.instagram.com/am.haxzh"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-btn"
                >
                  <AiFillInstagram /> Instagram
                </a>
              </div>
            </div>
          </Col>

          {/* Right Column: Direct Message Form with EmailJS */}
          <Col lg={7} md={12}>
            <div className="contact-form-card">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="contact-card-title mb-0">Send a Direct Message</h3>
                {formData.message && (
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="copy-draft-btn"
                    onClick={handleCopyDraft}
                    title="Copy written message to clipboard"
                  >
                    {copiedDraft ? (
                      <>
                        <AiOutlineCheck className="text-success" /> Draft Copied!
                      </>
                    ) : (
                      <>
                        <FiFileText /> Copy Draft
                      </>
                    )}
                  </Button>
                )}
              </div>

              {/* Message Intent Presets */}
              <div className="message-templates-wrapper mb-4">
                <span className="templates-label">⚡ Quick Templates:</span>
                <div className="templates-chips-row">
                  {MESSAGE_TEMPLATES.map((tmpl) => (
                    <button
                      key={tmpl.id}
                      type="button"
                      className={`template-chip-btn ${activeTemplate === tmpl.id ? "active" : ""}`}
                      onClick={() => handleSelectTemplate(tmpl)}
                    >
                      {tmpl.icon}
                      {tmpl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status & Feedback Alerts */}
              {statusMessage && (
                <Alert
                  variant={
                    statusMessage.type === "success"
                      ? "success"
                      : statusMessage.type === "warning"
                        ? "warning"
                        : "danger"
                  }
                  className="custom-alert mb-4 d-flex align-items-center gap-2"
                  dismissible
                  onClose={() => setStatusMessage(null)}
                >
                  {statusMessage.type === "success" ? (
                    <FiCheckCircle className="fs-5 flex-shrink-0 text-success" />
                  ) : (
                    <FiAlertCircle className="fs-5 flex-shrink-0" />
                  )}
                  <div>{statusMessage.text}</div>
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formName">
                      <Form.Label className="custom-form-label">Your Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        disabled={isSending}
                        value={formData.name}
                        onChange={handleInputChange}
                        className="custom-form-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formEmail">
                      <Form.Label className="custom-form-label">Your Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        disabled={isSending}
                        value={formData.email}
                        onChange={handleInputChange}
                        className="custom-form-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Label className="custom-form-label">Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    disabled={isSending}
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="custom-form-input"
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Label className="custom-form-label">Your Message *</Form.Label>
                    <span className="text-muted small">
                      {charCount} chars • {wordCount} words
                    </span>
                  </div>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Hi Harsh, I would like to discuss..."
                    required
                    disabled={isSending}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="custom-form-input message-textarea"
                  />
                </Form.Group>

                <div className="d-flex gap-2 mt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSending}
                    className="contact-submit-btn flex-grow-1"
                  >
                    {isSending ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          className="me-2"
                        />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <AiOutlineSend /> &nbsp; Send Message
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
