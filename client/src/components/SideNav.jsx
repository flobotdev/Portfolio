import "./SideNav.css";
import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

import Button from "./Button";
import linkedButtons from "../data/links";
import projects from "../data/projects";

const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  {
    id: "projects",
    label: "Projects",
    subItems: projects,
  },
  { id: "experience", label: "Experience" },
  { id: "references", label: "References" },
];

function SideNav() {
  const [activeId, setActiveId] = useState("hero");
  const [expandedSection, setExpandedSection] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on a project sub-page
  const isOnSubPage = location.pathname !== "/";
  useEffect(() => {
    if (location.pathname.startsWith("/projects/")) {
      setExpandedSection("projects");
      const pathSegment = location.pathname.split("/projects/")[1];

      // Find the matching sub-item by path
      const projectsSection = sections.find((s) => s.id === "projects");
      const matchingSubItem = projectsSection?.subItems?.find(
        (item) => item.path === `/projects/${pathSegment}`
      );

      if (matchingSubItem) {
        setActiveId(matchingSubItem.id);
      }
    }
  }, [location]);

  useEffect(() => {
    // Only run IntersectionObserver on the main page
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleSectionClick = (section) => {
    if (section.subItems) {
      setExpandedSection(expandedSection === section.id ? null : section.id);
    }
  };

  return (
    <nav className="side-nav">
      <div className="side-nav-top">
        <h1 className="nav-name">FLORINA PANAITE</h1>
        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section.id}>
              {section.subItems ? (
                <>
                  {isOnSubPage ? (
                    <button
                      className={`nav-link-btn ${
                        activeId === section.id ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/#${section.id}`);
                      }}
                    >
                      {activeId === section.id && (
                        <span className="dash">— </span>
                      )}
                      {section.label}
                      <span
                        className="expand-icon"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleSectionClick(section);
                        }}
                      >
                        {expandedSection === section.id ? "▼" : "▶"}
                      </span>
                    </button>
                  ) : (
                    <a
                      href={`#${section.id}`}
                      className={activeId === section.id ? "active" : ""}
                      onClick={(e) => {
                        document
                          .getElementById(section.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {activeId === section.id && (
                        <span className="dash">— </span>
                      )}
                      {section.label}
                      <span
                        className="expand-icon"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleSectionClick(section);
                        }}
                      >
                        {expandedSection === section.id ? "▼" : "▶"}
                      </span>
                    </a>
                  )}
                  {expandedSection === section.id && (
                    <ul className="sub-nav-links">
                      {section.subItems.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            to={subItem.path}
                            className={activeId === subItem.id ? "active" : ""}
                          >
                            {activeId === subItem.id && (
                              <span className="dash">— </span>
                            )}
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : isOnSubPage ? (
                <button
                  className={`nav-link-btn ${
                    activeId === section.id ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/#${section.id}`);
                  }}
                >
                  {activeId === section.id && <span className="dash">— </span>}
                  {section.label}
                </button>
              ) : (
                <a
                  href={`#${section.id}`}
                  className={activeId === section.id ? "active" : ""}
                >
                  {activeId === section.id && <span className="dash">— </span>}
                  {section.label}
                </a>
              )}
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
