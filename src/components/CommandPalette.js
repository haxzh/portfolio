import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiX,
  FiHome,
  FiUser,
  FiLayers,
  FiFileText,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiDownload,
  FiCopy,
  FiCheck,
  FiArrowRight
} from "react-icons/fi";
import { projectsData } from "../data/projectsData";
import { playClick, playOpen, playClose, playSuccess, playSwitch } from "../utils/SoundManager";
import pdf from "../Assets/harsh_resume.pdf";

const THEMES = [
  { id: "violet", name: "Cyber Violet", color: "#a855f7" },
  { id: "cyan", name: "Electric Cyan", color: "#06b6d4" },
  { id: "emerald", name: "Neon Emerald", color: "#10b981" },
  { id: "rose", name: "Sunset Rose", color: "#f43f5e" }
];

function CommandPalette({ isOpen, onClose }) {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedAction, setCopiedAction] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      playOpen();
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const allItems = useMemo(() => {
    const navItems = [
      { id: "nav-home", title: "Home", subtitle: "Go to landing page & developer config", icon: <FiHome />, category: "Navigation", action: () => navigate("/") },
      { id: "nav-about", title: "About", subtitle: "Biography, education & skillset matrix", icon: <FiUser />, category: "Navigation", action: () => navigate("/about") },
      { id: "nav-projects", title: "Projects", subtitle: "Explore 9+ full-stack & AI applications", icon: <FiLayers />, category: "Navigation", action: () => navigate("/project") },
      { id: "nav-resume", title: "Resume", subtitle: "View credentials, experience & PDF", icon: <FiFileText />, category: "Navigation", action: () => navigate("/resume") },
      { id: "nav-contact", title: "Contact", subtitle: "Direct message form & social channels", icon: <FiMail />, category: "Navigation", action: () => navigate("/contact") }
    ];

    const projectItems = projectsData.map((proj) => ({
      id: `proj-${proj.id}`,
      title: proj.title,
      subtitle: proj.summary || proj.category,
      badge: proj.category,
      icon: <FiLayers />,
      category: "Projects",
      action: () => {
        if (proj.ghLink) window.open(proj.ghLink, "_blank");
        else navigate("/project");
      }
    }));

    const actionItems = [
      {
        id: "act-download-resume",
        title: "Download Resume",
        subtitle: "Get Harsh Kumar's official PDF CV",
        icon: <FiDownload />,
        category: "Quick Actions",
        action: () => {
          const a = document.createElement("a");
          a.href = pdf;
          a.download = "Harsh_Kumar_Resume.pdf";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      },
      {
        id: "act-copy-email",
        title: "Copy Email Address",
        subtitle: "harshshakya908431@gmail.com",
        icon: copiedAction === "email" ? <FiCheck className="text-success" /> : <FiCopy />,
        category: "Quick Actions",
        action: () => {
          navigator.clipboard.writeText("harshshakya908431@gmail.com");
          setCopiedAction("email");
          setTimeout(() => setCopiedAction(""), 2000);
        }
      },
      {
        id: "act-github",
        title: "Open GitHub Profile",
        subtitle: "github.com/haxzh (Projects & Commits)",
        icon: <FiGithub />,
        category: "Quick Actions",
        action: () => window.open("https://github.com/haxzh", "_blank")
      },
      {
        id: "act-linkedin",
        title: "Open LinkedIn Profile",
        subtitle: "linkedin.com/in/haxzh (Connect / InMail)",
        icon: <FiLinkedin />,
        category: "Quick Actions",
        action: () => window.open("https://www.linkedin.com/in/haxzh", "_blank")
      },
      {
        id: "act-twitter",
        title: "Open Twitter / X Profile",
        subtitle: "twitter.com/harsh_shakya_84",
        icon: <FiTwitter />,
        category: "Quick Actions",
        action: () => window.open("https://twitter.com/harsh_shakya_84", "_blank")
      }
    ];

    const themeItems = THEMES.map((theme) => ({
      id: `theme-${theme.id}`,
      title: `Switch Theme: ${theme.name}`,
      subtitle: `Apply ${theme.name} ambient color palette`,
      icon: <span className="theme-cmd-dot" style={{ backgroundColor: theme.color }}></span>,
      category: "Appearance",
      action: () => {
        playSwitch();
        const root = document.documentElement;
        if (theme.id === "violet") {
          root.style.setProperty("--purple-primary", "#a855f7");
          root.style.setProperty("--purple-light", "#c084fc");
          root.style.setProperty("--purple-glow", "rgba(168, 85, 247, 0.45)");
          root.style.setProperty("--cyan-accent", "#38bdf8");
        } else if (theme.id === "cyan") {
          root.style.setProperty("--purple-primary", "#06b6d4");
          root.style.setProperty("--purple-light", "#38bdf8");
          root.style.setProperty("--purple-glow", "rgba(6, 182, 212, 0.45)");
          root.style.setProperty("--cyan-accent", "#a855f7");
        } else if (theme.id === "emerald") {
          root.style.setProperty("--purple-primary", "#10b981");
          root.style.setProperty("--purple-light", "#34d399");
          root.style.setProperty("--purple-glow", "rgba(16, 185, 129, 0.45)");
          root.style.setProperty("--cyan-accent", "#06b6d4");
        } else if (theme.id === "rose") {
          root.style.setProperty("--purple-primary", "#f43f5e");
          root.style.setProperty("--purple-light", "#fb7185");
          root.style.setProperty("--purple-glow", "rgba(244, 63, 94, 0.45)");
          root.style.setProperty("--cyan-accent", "#c084fc");
        }
        localStorage.setItem("portfolio_theme", theme.id);
      }
    }));

    return [...navItems, ...actionItems, ...projectItems, ...themeItems];
  }, [navigate, copiedAction]);

  const filteredItems = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return allItems;
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q)
    );
  }, [allItems, search]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems]);

  // Keyboard navigation inside Command Palette
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      playClose();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      playClick();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? (filteredItems.length ? filteredItems.length - 1 : 0) : prev - 1
      );
      playClick();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        executeItem(filteredItems[selectedIndex]);
      }
    }
  };

  const executeItem = (item) => {
    playSuccess();
    item.action();
    if (item.category !== "Quick Actions" || item.id !== "act-copy-email") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="command-palette-backdrop" onClick={onClose}>
      <div
        className="command-palette-modal"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Header */}
        <div className="cmd-search-box">
          <FiSearch className="cmd-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="cmd-search-input"
            placeholder="Search commands, projects, navigation, themes... (ESC to close)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              className="cmd-clear-btn"
              onClick={() => {
                setSearch("");
                inputRef.current?.focus();
              }}
            >
              <FiX />
            </button>
          )}
          <span className="cmd-badge-esc">ESC</span>
        </div>

        {/* Results List */}
        <div className="cmd-results-list" ref={listRef}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  className={`cmd-item-row ${isSelected ? "selected" : ""}`}
                  onClick={() => executeItem(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className="cmd-item-icon">{item.icon}</div>
                  <div className="cmd-item-text">
                    <span className="cmd-item-title">{item.title}</span>
                    {item.subtitle && (
                      <span className="cmd-item-subtitle">{item.subtitle}</span>
                    )}
                  </div>
                  <div className="cmd-item-meta">
                    {item.badge && <span className="cmd-tag-badge">{item.badge}</span>}
                    <span className="cmd-category-tag">{item.category}</span>
                    {isSelected && <FiArrowRight className="cmd-arrow-indicator" />}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="cmd-no-results text-center py-4">
              <p className="mb-0 text-muted">No results found for "{search}"</p>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="cmd-footer-bar">
          <div className="cmd-shortcuts-tips">
            <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
            <span><kbd>↵</kbd> Select</span>
            <span><kbd>ESC</kbd> Close</span>
          </div>
          <span className="cmd-brand-tag">&lt;Harsh.dev /&gt;</span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CommandPalette);
