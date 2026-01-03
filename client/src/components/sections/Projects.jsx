import { Link } from "react-router-dom";
import "./Projects.css";
import projects from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="skills-section">
      <div>
        <h2>Projects</h2>
        <p className="section-intro">
          A showcase of my work across game development and web applications.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to={project.path} className="project-link-btn">
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
