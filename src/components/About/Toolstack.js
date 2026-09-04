import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiVercel,
  SiApple,
  SiGithub,
  SiLinux,
  SiDocker
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsSlack } from "react-icons/bs";

const toolsList = [
  { name: "VS Code", icon: <TbBrandVscode />, color: "#007acc", role: "Primary Editor" },
  { name: "Postman", icon: <SiPostman />, color: "#ff6c37", role: "API Testing" },
  { name: "GitHub", icon: <SiGithub />, color: "#ffffff", role: "Version Control" },
  { name: "Vercel", icon: <SiVercel />, color: "#ffffff", role: "Cloud Deploy" },
  { name: "macOS / iOS", icon: <SiApple />, color: "#d1d5db", role: "Operating System" },
  { name: "Linux", icon: <SiLinux />, color: "#fcc624", role: "Server OS" },
  { name: "Slack", icon: <BsSlack />, color: "#ecb22e", role: "Team Collab" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ed", role: "Containers" }
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
      {toolsList.map((tool, idx) => (
        <Col xs={6} sm={4} md={3} lg={2} key={idx} className="tech-icon-col">
          <div className="tech-card-item tool-card-item">
            <div className="tech-icon-symbol" style={{ color: tool.color }}>
              {tool.icon}
            </div>
            <span className="tech-name-label">{tool.name}</span>
            <span className="tech-tag-badge">{tool.role}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
