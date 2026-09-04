import React, { useState } from "react";
import { FiCopy, FiCheck, FiTerminal } from "react-icons/fi";

function TerminalCard() {
  const [copied, setCopied] = useState(false);

  const codeString = `const developer = {
  name: "Harsh Kumar",
  title: "Full-Stack & AI Systems Engineer",
  location: "Noida, India",
  coreStack: ["React", "Next.js 16", "Node.js", "Django", "FastAPI"],
  aiMlTech: ["RAG Pipelines", "Gemini", "OpenAI Whisper/TTS", "pgvector", "OpenCV"],
  database: ["MongoDB", "PostgreSQL", "Supabase", "Redis", "MySQL"],
  passion: "Architecting high-speed, intelligent web applications",
  availableForHire: true,
  currentFocus: () => "Scaling AI SaaS & Real-Time Platforms"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="terminal-card-wrapper">
      <div className="terminal-card-header">
        <div className="terminal-window-buttons">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="terminal-tab-pill">
          <FiTerminal className="me-1" />
          <span>developer.config.ts</span>
        </div>
        <button
          className="terminal-copy-btn"
          onClick={handleCopy}
          title="Copy Code"
          aria-label="Copy Code"
        >
          {copied ? <FiCheck className="text-success" /> : <FiCopy />}
        </button>
      </div>

      <div className="terminal-card-body font-monospace">
        <pre className="terminal-code-content">
          <code>
            <span className="code-keyword">const</span> <span className="code-var">developer</span> = &#123;{"\n"}
            {"  "}<span className="code-prop">name</span>: <span className="code-string">"Harsh Kumar"</span>,{"\n"}
            {"  "}<span className="code-prop">title</span>: <span className="code-string">"Full-Stack & AI Systems Engineer"</span>,{"\n"}
            {"  "}<span className="code-prop">location</span>: <span className="code-string">"Noida, India"</span>,{"\n"}
            {"  "}<span className="code-prop">coreStack</span>: [<span className="code-string">"React"</span>, <span className="code-string">"Next.js"</span>, <span className="code-string">"Node.js"</span>, <span className="code-string">"Django"</span>],{"\n"}
            {"  "}<span className="code-prop">aiMlTech</span>: [<span className="code-string">"Hybrid RAG"</span>, <span className="code-string">"Gemini"</span>, <span className="code-string">"Whisper"</span>, <span className="code-string">"pgvector"</span>],{"\n"}
            {"  "}<span className="code-prop">databases</span>: [<span className="code-string">"MongoDB"</span>, <span className="code-string">"PostgreSQL"</span>, <span className="code-string">"Supabase"</span>, <span className="code-string">"Redis"</span>],{"\n"}
            {"  "}<span className="code-prop">passion</span>: <span className="code-string">"Architecting intelligent software"</span>,{"\n"}
            {"  "}<span className="code-prop">availableForHire</span>: <span className="code-bool">true</span>,{"\n"}
            {"  "}<span className="code-func">currentFocus</span>: () =&gt; <span className="code-string">"Scaling AI SaaS & Real-Time Platforms"</span>{"\n"}
            &#125;;
          </code>
        </pre>
      </div>

      <div className="terminal-card-footer">
        <span className="terminal-status-beacon"></span>
        <span className="terminal-status-text">Production Ready • 100% Type Safe</span>
      </div>
    </div>
  );
}

export default React.memo(TerminalCard);
