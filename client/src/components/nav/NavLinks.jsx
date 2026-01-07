import { Link } from "react-router-dom";
import { sections } from "../../data/sections";

function NavLinks({
  activeId,
  expandedSection,
  isOnSubPage,
  onSectionClick,
  onNavItemClick,
  onNavigate,
}) {
  return (
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
                    onNavigate(`/#${section.id}`);
                    onNavItemClick?.();
                  }}
                >
                  {activeId === section.id && <span className="dash">— </span>}
                  {section.label}
                  <span
                    className="expand-icon"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onSectionClick(section);
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
                    onNavItemClick?.();
                  }}
                >
                  {activeId === section.id && <span className="dash">— </span>}
                  {section.label}
                  <span
                    className="expand-icon"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onSectionClick(section);
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
                        onClick={onNavItemClick}
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
                onNavigate(`/#${section.id}`);
                onNavItemClick?.();
              }}
            >
              {activeId === section.id && <span className="dash">— </span>}
              {section.label}
            </button>
          ) : (
            <a
              href={`#${section.id}`}
              className={activeId === section.id ? "active" : ""}
              onClick={onNavItemClick}
            >
              {activeId === section.id && <span className="dash">— </span>}
              {section.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
