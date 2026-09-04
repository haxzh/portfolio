import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5
} from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTailwindcss,
  SiDjango,
  SiExpress,
  SiTypescript,
  SiSupabase,
  SiFlask,
  SiMysql,
  SiOpencv,
  SiStreamlit
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const skillsCategories = {
  all: [
    { name: "React.js", icon: <DiReact />, color: "#61dafb", tag: "Frontend" },
    { name: "Next.js 16", icon: <SiNextdotjs />, color: "#ffffff", tag: "Full-Stack" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6", tag: "Language" },
    { name: "JavaScript", icon: <DiJavascript1 />, color: "#f7df1e", tag: "Language" },
    { name: "Node.js", icon: <DiNodejs />, color: "#68a063", tag: "Backend" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff", tag: "Backend" },
    { name: "Python", icon: <DiPython />, color: "#3776ab", tag: "Language" },
    { name: "Django", icon: <SiDjango />, color: "#092e20", tag: "Backend" },
    { name: "Flask", icon: <SiFlask />, color: "#ffffff", tag: "Backend" },
    { name: "MongoDB", icon: <DiMongodb />, color: "#47a248", tag: "Database" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", tag: "Database" },
    { name: "Supabase / pgvector", icon: <SiSupabase />, color: "#3ecf8e", tag: "AI / DB" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479a1", tag: "Database" },
    { name: "Redis", icon: <SiRedis />, color: "#dc382d", tag: "Cache DB" },
    { name: "OpenCV", icon: <SiOpencv />, color: "#5c3ee8", tag: "Computer Vision" },
    { name: "Streamlit", icon: <SiStreamlit />, color: "#ff4b4b", tag: "AI UI" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", tag: "Frontend" },
    { name: "C++", icon: <CgCPlusPlus />, color: "#00599c", tag: "Language" },
    { name: "Golang", icon: <TbBrandGolang />, color: "#00add8", tag: "Language" },
    { name: "Git", icon: <DiGit />, color: "#f05032", tag: "DevOps" }
  ],
  aiml: [
    { name: "Supabase / pgvector", icon: <SiSupabase />, color: "#3ecf8e", tag: "Vector RAG" },
    { name: "OpenCV", icon: <SiOpencv />, color: "#5c3ee8", tag: "Computer Vision" },
    { name: "Python", icon: <DiPython />, color: "#3776ab", tag: "AI Core" },
    { name: "Streamlit", icon: <SiStreamlit />, color: "#ff4b4b", tag: "AI Dashboards" },
    { name: "Flask ML APIs", icon: <SiFlask />, color: "#ffffff", tag: "ML Serving" }
  ],
  frontend: [
    { name: "React.js", icon: <DiReact />, color: "#61dafb", tag: "Library" },
    { name: "Next.js 16", icon: <SiNextdotjs />, color: "#ffffff", tag: "Framework" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6", tag: "Type System" },
    { name: "JavaScript (ES6+)", icon: <DiJavascript1 />, color: "#f7df1e", tag: "Core" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", tag: "Styling" },
    { name: "HTML5 / CSS3", icon: <DiHtml5 />, color: "#e34f26", tag: "Markup" }
  ],
  backend: [
    { name: "Node.js", icon: <DiNodejs />, color: "#68a063", tag: "Runtime" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff", tag: "Framework" },
    { name: "Django", icon: <SiDjango />, color: "#092e20", tag: "Framework" },
    { name: "Flask", icon: <SiFlask />, color: "#ffffff", tag: "Microframework" },
    { name: "MongoDB", icon: <DiMongodb />, color: "#47a248", tag: "NoSQL DB" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", tag: "SQL DB" },
    { name: "Supabase", icon: <SiSupabase />, color: "#3ecf8e", tag: "Cloud DB" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479a1", tag: "Relational DB" },
    { name: "Redis", icon: <SiRedis />, color: "#dc382d", tag: "Cache & Queues" }
  ],
  languages: [
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6", tag: "Typed JS" },
    { name: "JavaScript", icon: <DiJavascript1 />, color: "#f7df1e", tag: "Web Engine" },
    { name: "Python", icon: <DiPython />, color: "#3776ab", tag: "AI & Backend" },
    { name: "C++", icon: <CgCPlusPlus />, color: "#00599c", tag: "Systems & DSA" },
    { name: "Golang", icon: <TbBrandGolang />, color: "#00add8", tag: "Cloud & APIs" },
    { name: "Java", icon: <DiJava />, color: "#ea2d2e", tag: "OOP" },
    { name: "Solidity", icon: <SiSolidity />, color: "#656565", tag: "Smart Contracts" }
  ]
};

function Techstack() {
  const [activeTab, setActiveTab] = useState("all");

  const currentSkills = skillsCategories[activeTab] || skillsCategories.all;

  return (
    <div className="tech-stack-container">
      {/* Skill Tabs */}
      <div className="skills-subtabs-group text-center mb-4">
        <button
          className={`skill-tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All Skills ({skillsCategories.all.length})
        </button>
        <button
          className={`skill-tab-btn ${activeTab === "aiml" ? "active" : ""}`}
          onClick={() => setActiveTab("aiml")}
        >
          🤖 AI & Vector ML ({skillsCategories.aiml.length})
        </button>
        <button
          className={`skill-tab-btn ${activeTab === "frontend" ? "active" : ""}`}
          onClick={() => setActiveTab("frontend")}
        >
          ⚡ Frontend ({skillsCategories.frontend.length})
        </button>
        <button
          className={`skill-tab-btn ${activeTab === "backend" ? "active" : ""}`}
          onClick={() => setActiveTab("backend")}
        >
          🛠 Backend & DBs ({skillsCategories.backend.length})
        </button>
        <button
          className={`skill-tab-btn ${activeTab === "languages" ? "active" : ""}`}
          onClick={() => setActiveTab("languages")}
        >
          💻 Languages ({skillsCategories.languages.length})
        </button>
      </div>

      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {currentSkills.map((skill, idx) => (
          <Col xs={6} sm={4} md={3} lg={2} key={idx} className="tech-icon-col">
            <div className="tech-card-item">
              <div className="tech-icon-symbol" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <span className="tech-name-label">{skill.name}</span>
              <span className="tech-tag-badge">{skill.tag}</span>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
