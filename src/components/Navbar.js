import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { playClick } from "../utils/SoundManager";

function Navbar({ onOpenCommandPalette }) {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home", icon: AiOutlineHome },
    { path: "/about", label: "About", icon: AiOutlineUser },
    { path: "/project", label: "Work", icon: AiOutlineFundProjectionScreen },
    { path: "/resume", label: "Resume", icon: CgFileDocument },
    { path: "/contact", label: "Contact", icon: AiOutlineMail },
  ];

  return (
    <nav className="floating-nav" aria-label="Primary navigation">
      <Link to="/" className="floating-nav-mark" onClick={playClick} aria-label="Harsh Kumar home">
        HK
      </Link>

      <div className="floating-nav-links">
        {links.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            onClick={playClick}
            className={`floating-nav-link ${location.pathname === path ? "active" : ""}`}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </Link>
        ))}
      </div>

      <button
        className="floating-search"
        onClick={() => {
          playClick();
          onOpenCommandPalette();
        }}
        aria-label="Open quick search"
        title="Quick search (Ctrl + K)"
      >
        <FiSearch aria-hidden="true" />
      </button>
    </nav>
  );
}

export default Navbar;
