import "../SideNav.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContactButton from "../ContactButton";
import linkedButtons from "../../data/links";
import { sections } from "../../data/sections";
import NavLinks from "./NavLinks";

function MobileNav() {
  const [activeId, setActiveId] = useState("hero");
  const [expandedSection, setExpandedSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isOnSubPage = location.pathname !== "/";

  useEffect(() => {
    if (location.pathname.startsWith("/projects/")) {
      setExpandedSection("projects");
      const pathSegment = location.pathname.split("/projects/")[1];

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

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="mobile-header">
        <div className="mobile-name">FLORINA PANAITE</div>
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav
        className={`side-nav mobile-nav ${
          isMobileMenuOpen ? "mobile-open" : ""
        }`}
      >
        <div className="side-nav-top">
          <h1 className="nav-name">
            {" "}
            <br></br>
          </h1>
          <NavLinks
            activeId={activeId}
            expandedSection={expandedSection}
            isOnSubPage={isOnSubPage}
            onSectionClick={handleSectionClick}
            onNavItemClick={handleNavItemClick}
            onNavigate={navigate}
          />
        </div>

        <div className="side-nav-btn-container">
          <div className="side-nav-button-contact">
            <ContactButton
              href={linkedButtons.find((l) => l.label === "Email")?.href}
              showIcon
            >
              Get in touch
            </ContactButton>
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
    </>
  );
}

export default MobileNav;
