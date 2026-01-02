import "./SideNav.css";
import { useEffect, useState } from "react";

import Button from "./Button";
import linkedButtons from "../data/links";

const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "references", label: "References" },
];

function SideNav() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="side-nav">
      <div className="side-nav-top">
        <h1 className="nav-name">FLORINA PANAITE</h1>
        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={activeId === section.id ? "active" : ""}
              >
                {activeId === section.id && <span className="dash">— </span>}
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="side-nav-btn-container">
        <div className="side-nav-button-contact">
          <Button
            href={linkedButtons.find((l) => l.label === "Email")?.href}
            showIcon
          >
            Get in touch
          </Button>
        </div>
        <div className="side-nav-buttons">
          {linkedButtons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bottom-btn-icon"
              aria-label={btn.label}
            >
              {btn.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default SideNav;
