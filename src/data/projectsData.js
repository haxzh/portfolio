import ems from "../Assets/Projects/ems.png";
import chat from "../Assets/Projects/chat-app.png";
import digitalClock from "../Assets/Projects/digital_clock.png";
import event from "../Assets/Projects/event.png";
import task from "../Assets/Projects/task.png";
import foundersaathi from "../Assets/Projects/foundersaathi.png";
import aiFaceAttendance from "../Assets/Projects/AI Face Recognition.png";
import locaaAi from "../Assets/Projects/LocaaAi.png";
import autoSendMail from "../Assets/Projects/AutoSendMail.png";
import solarForecasting from "../Assets/Projects/Solar Energy Production Forecasting System.png";

export const projectsData = [
  {
    id: "locaa-ai",
    title: "Locaa-AI - Video Dubbing & Shorts Automation SaaS",
    category: "AI & Full Stack",
    badge: "SaaS Platform",
    imgPath: locaaAi,
    summary: "AI-powered video dubbing in 50+ languages, viral short clip extraction, custom branding, and multi-platform 1-click publishing.",
    description: "Locaa-AI is a production-ready creator SaaS platform that turns long YouTube videos into viral short-form clips and dubbed videos in 50+ languages. Powered by OpenAI Whisper for transcription, OpenAI TTS for expressive voice synthesis, FFmpeg/MoviePy for video processing, and Celery + Redis background workers with multi-platform publishing to YouTube, Instagram, Facebook, and TikTok.",
    features: [
      "AI-Powered Video Dubbing across 50+ languages with OpenAI Whisper transcription and natural voice synthesis",
      "Smart Viral Clip Generation with automatic scene detection, dynamic captions, and 9:16 vertical re-framing",
      "One-Click Multi-Platform Auto-Publishing directly to YouTube Shorts, Instagram Reels, Facebook & TikTok",
      "Complete SaaS Architecture: Multi-tier subscription plans (Free/Pro/Business), Stripe & Razorpay payments, and JWT auth",
      "High-Performance Asynchronous Job Processing Queue with Celery, Redis, and FFmpeg pipeline",
      "Advanced Brand Engine: Custom logo overlays, dynamic text watermarks, intro/outros, and automated thumbnail generation"
    ],
    techStack: ["React 18", "Flask", "Python", "OpenAI Whisper", "OpenAI TTS", "FFmpeg", "MoviePy", "Celery", "Redis", "PostgreSQL", "Stripe", "Razorpay"],
    ghLink: "https://github.com/haxzh/Locaa-AI",
    demoLink: "",
    featured: true
  },
  {
    id: "foundersaathi",
    title: "FounderSaathi - AI Founder Companion",
    category: "AI & Full Stack",
    badge: "Featured AI",
    imgPath: foundersaathi,
    summary: "AI workspace for startup founders featuring persistent memory, Gemini conversational AI, and a Hybrid RAG knowledge base.",
    description: "FounderSaathi is an AI-powered workspace tailored for startup founders to think through critical business decisions using conversational AI, persistent chat history, founder context memory, and a high-performance Hybrid RAG (pgvector semantic similarity + PostgreSQL full-text keyword search) knowledge pipeline.",
    features: [
      "AI Founder Chat for startup decision-making, growth, hiring, and fundraising",
      "Hybrid RAG Pipeline (Gemini embeddings + Supabase pgvector + Full-text search)",
      "Founder Context Memory & persistent multi-conversation history",
      "Built with Next.js 16 App Router, React, TypeScript, and Tailwind CSS",
      "Automated RAG smoke and evaluation testing suite for domain relevance verification"
    ],
    techStack: ["Next.js 16", "React", "TypeScript", "Google Gemini", "Supabase", "pgvector", "Hybrid RAG", "Tailwind CSS", "PostgreSQL"],
    ghLink: "https://github.com/haxzh/foundersaathi",
    demoLink: "",
    featured: true
  },
  {
    id: "ai-face-attendance",
    title: "AI Face Recognition Attendance System",
    category: "AI & Full Stack",
    badge: "Final Year Major",
    imgPath: aiFaceAttendance,
    summary: "Industry-grade automated attendance system with browser webcam capture, 128-d face encodings, and role-based access.",
    description: "An industry-grade full-stack facial recognition-based attendance platform developed as a BCA Final Year Major Project. Built with Django REST Framework and React.js, the system utilizes OpenCV, dlib, and 128-dimensional face encodings to deliver automated webcam attendance marking, one-to-one identity verification, strict duplicate prevention, and detailed attendance analytics backed by MySQL.",
    features: [
      "Role-Based Authentication: Separate secure portals for Admin and Students with PBKDF2 password encryption",
      "Real-time Browser Webcam Face Matching with instant visual feedback and confidence score calculation",
      "One-to-One Verification ensuring attendance is exclusively recorded for the authenticated student",
      "Strict Duplicate Prevention enforcing exactly one attendance record per student per day",
      "Admin Portal for student enrollment, single-face validation, and comprehensive report exports",
      "Student Attendance Dashboard with real-time statistics (Present/Absent/Percentage tracking)"
    ],
    techStack: ["Django", "Python", "React.js", "OpenCV", "dlib", "face_recognition", "MySQL", "Django REST Framework", "Axios", "CSS3"],
    ghLink: "https://github.com/haxzh/AI_Face_Attendance_System",
    demoLink: "",
    featured: true
  },
  {
    id: "solar-energy-forecasting",
    title: "Solar Energy Production Forecasting System",
    category: "AI & Full Stack",
    badge: "Machine Learning",
    imgPath: solarForecasting,
    summary: "Full-stack ML forecasting platform predicting solar energy outputs from weather metrics with interactive Chart.js visualizations.",
    description: "A full-stack machine learning web application built with Flask and Scikit-learn that forecasts solar power production based on environmental parameters (Temperature, Irradiance, Humidity, and Wind Speed). Features dynamic CSV model training from the web UI, real-time prediction REST APIs, statistical metric evaluation (MAE, RMSE, R²), and interactive Actual vs Predicted visualizations powered by Chart.js.",
    features: [
      "In-Browser Dataset Training: Upload weather & solar CSV datasets to dynamically train and serialize regression models",
      "Statistical Accuracy Evaluation: Real-time calculation of MAE, RMSE, and R² score metrics post-training",
      "Interactive Prediction Engine: Real-time inference API predicting solar power output (kWh) based on weather metrics",
      "Dynamic Chart.js Visualizations: Interactive line charts plotting Actual vs Predicted solar output trends",
      "Clean Flask Backend Architecture: Modular REST endpoints (/api/train, /api/predict) with input validation"
    ],
    techStack: ["Python", "Flask", "Scikit-Learn", "Machine Learning", "Chart.js", "JavaScript", "HTML5", "CSS3", "Pandas"],
    ghLink: "https://github.com/haxzh/Solar-Energy-Production-Forecasting-System",
    demoLink: "",
    featured: false
  },
  {
    id: "cold-email-automation",
    title: "Cold Email Automation Dashboard",
    category: "Python / Django",
    badge: "Automation Tool",
    imgPath: autoSendMail,
    summary: "Status-aware cold email automation engine & Streamlit dashboard for personalized batch sending with PDF attachments.",
    description: "A Python and Streamlit-powered cold email automation suite designed to execute personalized outreach campaigns using Gmail SMTP and Excel tracking. Features include dynamic placeholder personalization ({name}, {company}, {title}), automatic duplicate/sent status skipping, PDF resume attachment handling, randomized human-like delays, per-run quotas, and real-time campaign analytics.",
    features: [
      "Status-Aware Processing: Automatically processes only pending contacts and skips already-sent rows to prevent duplicates",
      "Dynamic Template Engine: Personalizes subject lines and email body with placeholders ({name}, {company}, {title})",
      "Automated Attachment Pipeline: Supports attaching tailored PDF resumes and portfolio documents dynamically",
      "Interactive Streamlit Dashboard: Real-time visual metrics tracking Total, Pending, Sent, and Failed outreach records",
      "Anti-Spam Humanized Sending: Configurable random delay intervals between dispatches and batch send quotas",
      "Two-Way Excel Synchronization: Automatically updates row statuses (Sent / Failed) and timestamps in the source Excel file"
    ],
    techStack: ["Python", "Streamlit", "Pandas", "Gmail SMTP", "OpenPyXL", "Python-dotenv"],
    ghLink: "https://github.com/haxzh/Cold-Email-Automation-Dashboard",
    demoLink: "",
    featured: false
  },
  {
    id: "chat-app",
    title: "Real-Time Chat Application",
    category: "Full Stack",
    badge: "Featured",
    imgPath: chat,
    summary: "Instant 1-on-1 & group messaging platform with real-time Socket.IO communication and JWT authentication.",
    description: "A full-featured Real-Time Chat Application built with the MERN stack and Socket.IO. Features include instant 1-to-1 messaging, group chats, typing indicators, active online user status, and persistent MongoDB message storage with media support.",
    features: [
      "Real-time bidirectional messaging powered by Socket.IO",
      "Secure JWT user authentication & session management",
      "Online/Offline user presence and live typing indicators",
      "Responsive, modern UI styled with Tailwind CSS",
      "Persistent chat history stored securely in MongoDB"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS", "JWT"],
    ghLink: "https://github.com/haxzh/chat-app",
    demoLink: "https://chat-app-frontend-one-flax.vercel.app/",
    featured: true
  },
  {
    id: "ems",
    title: "Employee Management System",
    category: "Full Stack",
    badge: "Popular",
    imgPath: ems,
    summary: "Comprehensive organizational portal to manage employee records, task assignments, and role-based permissions.",
    description: "A full-stack Employee Management System designed to handle organizational workflows. Admins can assign tasks, track project progress, monitor employee attendance, and manage secure role-based dashboard access.",
    features: [
      "Role-Based Access Control (Admin vs Employee Dashboards)",
      "Dynamic task creation, assignment, and status updates",
      "CRUD operations for employee records and profiles",
      "Secure RESTful APIs with MongoDB data persistence",
      "Clean, modern UI designed with Tailwind CSS and React"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    ghLink: "https://github.com/haxzh/Employee-management-system",
    demoLink: "",
    featured: true
  },
  {
    id: "eventsphere",
    title: "EventSphere - Event Platform",
    category: "Full Stack",
    badge: "MERN",
    imgPath: event,
    summary: "All-in-one event discovery, organizer ticketing, and real-time registration management platform.",
    description: "EventSphere is a full-stack event discovery and ticketing platform. Organizers can create customized events, manage registrations, track ticket sales, and interact with attendees via real-time notifications.",
    features: [
      "Event creation, categorization, and ticket booking workflow",
      "User registration, attendee confirmation, and ticketing history",
      "Real-time updates and API-driven status synchronization",
      "Responsive glassmorphism UI optimized for all devices"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "REST APIs"],
    ghLink: "https://github.com/haxzh/EventSphere",
    demoLink: "",
    featured: true
  },
  {
    id: "smart-task-analyzer",
    title: "Smart Task Analyzer",
    category: "Python / Django",
    badge: "AI / Python",
    imgPath: task,
    summary: "Intelligent task prioritization engine ranking tasks by urgency, importance, effort, and dependency scoring.",
    description: "Smart Task Analyzer is a Django-based intelligent productivity tool that helps individuals and teams prioritize workloads by algorithmically scoring tasks based on Eisenhower matrix metrics, effort estimates, and dependencies.",
    features: [
      "Algorithmic priority scoring based on effort vs impact",
      "Interactive dashboard for rapid task entry and rank inspection",
      "Django backend providing high-throughput API endpoints",
      "Dynamic visual analytics and progress metrics"
    ],
    techStack: ["Python", "Django", "JavaScript", "HTML5", "CSS3", "SQLite"],
    ghLink: "https://github.com/haxzh/smart-task-analyzer",
    demoLink: "",
    featured: false
  },
  {
    id: "digital-clock",
    title: "Dynamic Digital Clock & Timer",
    category: "Python / Django",
    badge: "Utility",
    imgPath: digitalClock,
    summary: "Real-time dynamic timekeeping web application with multi-timezone support and customizable styling.",
    description: "Digital Clock Application built with Django and dynamic JavaScript rendering to display precision real-time date and time without requiring page refreshes, featuring customizable time formats and themes.",
    features: [
      "Instant real-time clock rendering without page reload",
      "Customizable 12-hour / 24-hour time formatting and date tracking",
      "Lightweight Django backend architecture for rapid deployment",
      "Clean, minimalist responsive aesthetic"
    ],
    techStack: ["Django", "Python", "JavaScript", "HTML5", "CSS3"],
    ghLink: "https://github.com/haxzh/Digitalclock",
    demoLink: "",
    featured: false
  }
];

export const projectCategories = [
  "All",
  "AI & Full Stack",
  "Full Stack",
  "Python / Django"
];
