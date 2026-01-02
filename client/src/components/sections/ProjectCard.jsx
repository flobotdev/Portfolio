function ProjectCard({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link}>View</a>
    </div>
  );
}

export default ProjectCard;
