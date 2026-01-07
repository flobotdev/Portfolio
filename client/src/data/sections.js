import projects from "./projects";

export const sections = [
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
