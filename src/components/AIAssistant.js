import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FiX,
  FiSend,
  FiTrash2,
  FiMaximize2,
  FiMinimize2,
  FiExternalLink,
  FiDownload,
  FiCopy,
  FiCheck,
  FiZap,
  FiCpu
} from "react-icons/fi";
import { playClick, playOpen, playClose, playSuccess } from "../utils/SoundManager";
import pdf from "../Assets/harsh_resume.pdf";

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "bot",
    text: "👋 Hi there! I'm **Harsh AI**, an interactive assistant here to help you explore Harsh Kumar's portfolio, 9+ full-stack & AI projects, and technical skills. How can I help you today?",
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    chips: [
      "🚀 Top Projects",
      "🤖 AI & RAG Tech",
      "💼 Hire Harsh",
      "📄 Resume & Bio",
      "📫 Contact Details"
    ]
  }
];

const SUGGESTED_QUESTIONS = [
  "🚀 Top Projects",
  "🤖 AI & RAG Tech",
  "💼 Hire Harsh",
  "📄 Resume Details",
  "📫 Contact Info",
  "⚡ Locaa-AI SaaS",
  "✨ FounderSaathi RAG"
];

// Comprehensive Knowledge Base for Harsh Kumar
const getBotResponse = (input) => {
  const query = input.toLowerCase().trim();

  // Locaa-AI
  if (query.includes("locaa") || (query.includes("video") && query.includes("dub"))) {
    return {
      text: "**Locaa-AI** is Harsh's creator SaaS platform that turns long YouTube videos into viral short-form clips and dubbed videos in 50+ languages! 🎬\n\n- **Tech Stack:** React 18, Flask, Python, OpenAI Whisper, OpenAI TTS, FFmpeg, Celery, Redis, PostgreSQL, Stripe & Razorpay.\n- **Features:** Auto scene detection, dynamic captions, multi-platform 1-click publishing (Shorts, Reels, TikTok, Facebook).",
      action: {
        label: "View Locaa-AI on GitHub",
        link: "https://github.com/haxzh/Locaa-AI",
        isExternal: true
      },
      chips: ["✨ FounderSaathi RAG", "💼 Hire Harsh", "🚀 More Projects"]
    };
  }

  // FounderSaathi
  if (query.includes("foundersaathi") || query.includes("rag") || query.includes("vector")) {
    return {
      text: "**FounderSaathi** is an AI workspace for startup founders featuring persistent context memory and a Hybrid RAG pipeline! 🧠\n\n- **Architecture:** Next.js 16 App Router, TypeScript, Google Gemini LLM, Supabase pgvector + PostgreSQL full-text keyword search.\n- **Testing:** Automated RAG domain relevance and smoke test suites.",
      action: {
        label: "View FounderSaathi on GitHub",
        link: "https://github.com/haxzh/foundersaathi",
        isExternal: true
      },
      chips: ["⚡ Locaa-AI SaaS", "🤖 All AI Skills", "🚀 Other Projects"]
    };
  }

  // AI Face Recognition
  if (query.includes("face") || query.includes("attendance") || query.includes("opencv")) {
    return {
      text: "**AI Face Recognition Attendance System** is Harsh's BCA Final Year Major Project! 👁️\n\n- **Stack:** Django REST Framework, React.js, OpenCV, dlib (128-d encodings), MySQL.\n- **Features:** Webcam facial verification, duplicate check prevention, Admin & Student dashboards.",
      action: {
        label: "View Face Attendance System",
        link: "https://github.com/haxzh/AI_Face_Attendance_System",
        isExternal: true
      },
      chips: ["📄 Education Details", "🚀 Top Projects", "📫 Contact Harsh"]
    };
  }

  // Top Projects / Work
  if (query.includes("project") || query.includes("work") || query.includes("portfolio") || query.includes("top projects")) {
    return {
      text: "Harsh has built **9+ Production-grade Full-Stack & AI Applications** across multiple domains:\n\n1. **Locaa-AI:** Video Dubbing in 50+ languages & Shorts SaaS (Whisper, Celery, Redis)\n2. **FounderSaathi:** AI Founder Companion with Hybrid pgvector RAG (Next.js 16, Gemini)\n3. **AI Face Attendance System:** OpenCV + Django REST attendance engine\n4. **Solar Energy Forecasting:** Machine Learning prediction platform with Chart.js\n5. **Cold Email Automation:** Streamlit & Python status-aware bulk sender\n6. **Real-Time Chat App:** Socket.IO + MERN messaging platform\n7. **Employee Management System:** Role-based MERN admin portal\n8. **EventSphere:** Event ticketing & discovery platform",
      action: {
        label: "Explore All 9+ Projects",
        link: "/project",
        isInternal: true
      },
      chips: ["⚡ Locaa-AI SaaS", "✨ FounderSaathi RAG", "💼 Hire Harsh"]
    };
  }

  // Skills / Tech Stack
  if (query.includes("skill") || query.includes("stack") || query.includes("tech") || query.includes("language") || query.includes("python") || query.includes("react")) {
    return {
      text: "Harsh's Technical Arsenal spans Full-Stack & AI Systems:\n\n- **Frontend:** React.js, Next.js 16 App Router, TypeScript, JavaScript (ES6+), Tailwind CSS, Bootstrap, HTML5/CSS3\n- **Backend & APIs:** Python (Django, Flask, FastAPI), Node.js (Express), REST APIs, Socket.IO\n- **AI & ML:** Hybrid RAG, Supabase pgvector, Google Gemini, OpenAI Whisper/TTS, OpenCV, Scikit-learn, Streamlit\n- **Databases & Queues:** PostgreSQL, MongoDB, MySQL, Redis, Supabase, Celery\n- **Tools:** Git, GitHub, Linux, Postman, VS Code",
      action: {
        label: "View Detailed Skills Page",
        link: "/about",
        isInternal: true
      },
      chips: ["🚀 Top Projects", "📄 Download Resume", "📫 Contact Harsh"]
    };
  }

  // Hire / Available for work / Freelance
  if (query.includes("hire") || query.includes("job") || query.includes("freelance") || query.includes("opportunity") || query.includes("contract") || query.includes("available")) {
    return {
      text: "Harsh is **actively open and available for hire** for Full-Time Software Engineering roles, Full-Stack / AI developer positions, and high-impact Freelance contracts! 🚀\n\n- **Email:** harshshakya908431@gmail.com\n- **Location:** Noida, Uttar Pradesh, India (Open to Remote / Relocation)\n- **Turnaround:** Replies within 24 hours.",
      action: {
        label: "Send a Message Directly",
        link: "/contact",
        isInternal: true
      },
      chips: ["📄 Resume Details", "📫 Quick Contact", "🚀 Top Projects"]
    };
  }

  // Resume / Education / Bio
  if (query.includes("resume") || query.includes("cv") || query.includes("education") || query.includes("college") || query.includes("bca") || query.includes("degree")) {
    return {
      text: "🎓 **Harsh Kumar** is a Computer Science Graduate (**BCA**) from **ITM University Gwalior** (2023 – 2026).\n\nHe has a strong foundation in Data Structures, Algorithms, Software Engineering principles, and AI Systems.",
      action: {
        label: "Download Full Resume (PDF)",
        link: pdf,
        isDownload: true
      },
      chips: ["💼 Hire Harsh", "🚀 Top Projects", "📫 Contact Info"]
    };
  }

  // Contact / Email / Socials
  if (query.includes("contact") || query.includes("email") || query.includes("phone") || query.includes("reach") || query.includes("message") || query.includes("social")) {
    return {
      text: "You can easily connect with Harsh through multiple channels:\n\n- 📧 **Email:** harshshakya908431@gmail.com\n- 💼 **LinkedIn:** linkedin.com/in/haxzh\n- 🐙 **GitHub:** github.com/haxzh\n- 🐦 **Twitter:** @harsh_shakya_84\n- 📸 **Instagram:** @am.haxzh\n- 📍 **Location:** Noida, Uttar Pradesh, India",
      action: {
        label: "Open Contact Page",
        link: "/contact",
        isInternal: true
      },
      chips: ["💼 Hire Harsh", "📄 Download Resume", "🚀 Top Projects"]
    };
  }

  // Who is Harsh?
  if (query.includes("who") || query.includes("about") || query.includes("harsh")) {
    return {
      text: "👨‍💻 **Harsh Kumar** is a Full-Stack & AI Systems Developer passionate about architecting intelligent platforms, high-speed web apps with **React & Next.js 16**, asynchronous backend pipelines with **Python / Django / Celery**, and **Hybrid RAG** semantic search systems.",
      action: {
        label: "Read Full Bio",
        link: "/about",
        isInternal: true
      },
      chips: ["🚀 Top Projects", "🤖 AI & RAG Tech", "💼 Hire Harsh"]
    };
  }

  // Default fallback
  return {
    text: "Thanks for asking! Harsh is a **Full-Stack & AI Systems Developer** skilled in React, Next.js 16, Python, Django, Hybrid RAG, and microservice architectures.\n\nWould you like to explore his projects, review his resume, or send him a direct message?",
    chips: ["🚀 Top Projects", "🤖 AI & RAG Tech", "📄 Resume Details", "📫 Contact Info"]
  };
};

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isTyping]);

  const toggleOpen = () => {
    if (!isOpen) {
      playOpen();
      setIsOpen(true);
    } else {
      playClose();
      setIsOpen(false);
    }
  };

  const handleSend = (textToSend) => {
    const queryText = (textToSend || inputVal).trim();
    if (!queryText) return;

    playClick();

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const responseData = getBotResponse(queryText);
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: responseData.text,
        action: responseData.action,
        chips: responseData.chips || SUGGESTED_QUESTIONS.slice(0, 4),
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
      playSuccess();
    }, 450);
  };

  const handleClearChat = () => {
    playClick();
    setMessages(INITIAL_MESSAGES);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("harshshakya908431@gmail.com");
    setCopiedLink(true);
    playSuccess();
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className={`ai-assistant-widget ${isOpen ? "open" : ""} ${isExpanded ? "expanded" : ""}`}>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          className="ai-assistant-fab"
          onClick={toggleOpen}
          aria-label="Open AI Portfolio Assistant"
          title="Chat with Harsh AI Assistant"
        >
          <div className="ai-fab-glow-ring"></div>
          <div className="ai-fab-inner">
            <FiCpu className="ai-fab-icon" />
            <span className="ai-fab-badge">AI</span>
          </div>
          <span className="ai-fab-tooltip">Ask AI About Harsh</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window">
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-header-left">
              <div className="ai-avatar-badge">
                <FiZap className="ai-avatar-icon" />
                <span className="ai-online-dot"></span>
              </div>
              <div className="ai-header-text">
                <h6 className="ai-header-title">Harsh AI Assistant</h6>
                <span className="ai-header-status">
                  <span className="status-pulse"></span> Ready to assist you
                </span>
              </div>
            </div>

            <div className="ai-header-actions">
              <button
                className="ai-header-btn"
                onClick={handleCopyEmail}
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedLink ? <FiCheck className="text-success" /> : <FiCopy />}
              </button>
              <button
                className="ai-header-btn"
                onClick={handleClearChat}
                title="Clear Chat History"
                aria-label="Clear Chat History"
              >
                <FiTrash2 />
              </button>
              <button
                className="ai-header-btn"
                onClick={() => {
                  playClick();
                  setIsExpanded(!isExpanded);
                }}
                title={isExpanded ? "Restore Size" : "Expand Size"}
                aria-label="Toggle Size"
              >
                {isExpanded ? <FiMinimize2 /> : <FiMaximize2 />}
              </button>
              <button
                className="ai-header-btn ai-close-btn"
                onClick={toggleOpen}
                title="Close AI Assistant"
                aria-label="Close"
              >
                <FiX />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="ai-chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`ai-message-row ${msg.sender}-row`}>
                {msg.sender === "bot" && (
                  <div className="ai-bot-avatar-small">
                    <FiCpu />
                  </div>
                )}

                <div className={`ai-message-bubble ${msg.sender}-bubble`}>
                  <div className="ai-message-text">
                    {msg.text.split("\n\n").map((para, pIdx) => (
                      <p key={pIdx} className="mb-2">
                        {para.split("\n").map((line, lIdx) => (
                          <span key={lIdx}>
                            {line.startsWith("- ") ? (
                              <span className="ai-bullet-item">{line}</span>
                            ) : line.startsWith("**") || line.includes("**") ? (
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: line.replace(
                                    /\*\*(.*?)\*\*/g,
                                    "<strong>$1</strong>"
                                  )
                                }}
                              />
                            ) : (
                              line
                            )}
                            {lIdx < para.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>

                  {/* Interactive Action Button if attached */}
                  {msg.action && (
                    <div className="ai-message-action mt-2">
                      {msg.action.isInternal ? (
                        <Link
                          to={msg.action.link}
                          className="ai-action-btn"
                          onClick={() => {
                            playClick();
                            setIsOpen(false);
                          }}
                        >
                          <FiExternalLink className="me-1" /> {msg.action.label}
                        </Link>
                      ) : msg.action.isDownload ? (
                        <a
                          href={msg.action.link}
                          download="Harsh_Kumar_Resume.pdf"
                          className="ai-action-btn"
                          onClick={playClick}
                        >
                          <FiDownload className="me-1" /> {msg.action.label}
                        </a>
                      ) : (
                        <a
                          href={msg.action.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ai-action-btn"
                          onClick={playClick}
                        >
                          <FiExternalLink className="me-1" /> {msg.action.label}
                        </a>
                      )}
                    </div>
                  )}

                  <span className="ai-timestamp">{msg.timestamp}</span>

                  {/* Suggested Chips */}
                  {msg.chips && msg.chips.length > 0 && (
                    <div className="ai-chips-wrap mt-2">
                      {msg.chips.map((chip, cIdx) => (
                        <button
                          key={cIdx}
                          className="ai-chip-pill"
                          onClick={() => handleSend(chip)}
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="ai-message-row bot-row">
                <div className="ai-bot-avatar-small">
                  <FiCpu />
                </div>
                <div className="ai-message-bubble bot-bubble ai-typing-bubble">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form
            className="ai-chat-input-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              ref={inputRef}
              type="text"
              className="ai-chat-input"
              placeholder="Ask about projects, skills, resume..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button
              type="submit"
              className="ai-chat-send-btn"
              disabled={!inputVal.trim()}
              title="Send Message"
              aria-label="Send"
            >
              <FiSend />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default React.memo(AIAssistant);
