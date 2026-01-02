import experience from "../../data/experience";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css"

function Experience() {
  return (
    <section id="experience">
      <h2>Work Experience</h2>

      {experience.map((role, index) => (
        <ExperienceCard key={index} role={role} />
      ))}
    </section>
  );
}

export default Experience;
