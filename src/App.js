import React, { useState, useEffect, useCallback } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ScrollProgress from "./components/ScrollProgress";
import CommandPalette from "./components/CommandPalette";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);
  const [isCmdOpen, setIsCmdOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  // Global Ctrl + K / Cmd + K keybinding
  const handleKeyDown = useCallback((e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      setIsCmdOpen((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleCloseCommandPalette = () => setIsCmdOpen(false);

  return (
    <Router>
      <ScrollProgress />
      <CommandPalette isOpen={isCmdOpen} onClose={handleCloseCommandPalette} />
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar onOpenCommandPalette={() => setIsCmdOpen(true)} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
