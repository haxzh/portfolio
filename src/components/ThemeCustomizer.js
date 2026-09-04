import React, { useState, useEffect } from "react";
import { FiSliders } from "react-icons/fi";

const themes = [
  {
    id: "violet",
    name: "Cyber Violet",
    color: "#a855f7",
    vars: {
      "--purple-primary": "#a855f7",
      "--purple-light": "#c084fc",
      "--purple-glow": "rgba(168, 85, 247, 0.45)",
      "--cyan-accent": "#38bdf8",
      "--border-glass-hover": "rgba(192, 132, 252, 0.6)",
    }
  },
  {
    id: "cyan",
    name: "Electric Cyan",
    color: "#06b6d4",
    vars: {
      "--purple-primary": "#06b6d4",
      "--purple-light": "#38bdf8",
      "--purple-glow": "rgba(6, 182, 212, 0.45)",
      "--cyan-accent": "#a855f7",
      "--border-glass-hover": "rgba(56, 189, 248, 0.6)",
    }
  },
  {
    id: "emerald",
    name: "Neon Emerald",
    color: "#10b981",
    vars: {
      "--purple-primary": "#10b981",
      "--purple-light": "#34d399",
      "--purple-glow": "rgba(16, 185, 129, 0.45)",
      "--cyan-accent": "#06b6d4",
      "--border-glass-hover": "rgba(52, 211, 153, 0.6)",
    }
  },
  {
    id: "rose",
    name: "Sunset Rose",
    color: "#f43f5e",
    vars: {
      "--purple-primary": "#f43f5e",
      "--purple-light": "#fb7185",
      "--purple-glow": "rgba(244, 63, 94, 0.45)",
      "--cyan-accent": "#c084fc",
      "--border-glass-hover": "rgba(251, 113, 133, 0.6)",
    }
  }
];

function ThemeCustomizer() {
  const [activeTheme, setActiveTheme] = useState("violet");
  const [isOpen, setIsOpen] = useState(false);

  const applyTheme = (theme) => {
    setActiveTheme(theme.id);
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });
    try {
      localStorage.setItem("portfolio_theme", theme.id);
    } catch (e) {}
  };

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_theme");
    if (saved) {
      const match = themes.find((t) => t.id === saved);
      if (match) applyTheme(match);
    }
  }, []);

  return (
    <div className={`theme-customizer-container ${isOpen ? "open" : ""}`}>
      <button
        className="theme-toggle-fab"
        onClick={() => setIsOpen(!isOpen)}
        title="Customize Color Theme"
        aria-label="Customize Color Theme"
      >
        <FiSliders />
      </button>
      {!isOpen && <span className="theme-fab-tooltip">Theme Color</span>}

      {isOpen && (
        <div className="theme-palette-modal">
          <div className="theme-palette-header">
            <span>🎨 Ambient Theme</span>
          </div>
          <div className="theme-swatch-list">
            {themes.map((theme) => (
              <button
                key={theme.id}
                className={`theme-swatch-btn ${activeTheme === theme.id ? "active" : ""}`}
                onClick={() => applyTheme(theme)}
                style={{ "--swatch-color": theme.color }}
              >
                <span className="swatch-dot" style={{ backgroundColor: theme.color }}></span>
                <span className="swatch-label">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(ThemeCustomizer);
