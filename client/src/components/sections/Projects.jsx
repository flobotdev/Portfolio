import ModCarousel from "./steammods/ModsSection"
import { dayzMods } from "../../data/steammods";
import { dayzCollabMods } from "../../data/steammods";

function Projects() {
  return (
    <section id="projects" className="skills-section">
      <div>
        <h2>DayZ Mods</h2>
        <ModCarousel title="Published Mods" initialMods={dayzMods} />
        <ModCarousel title="Collaborations" initialMods={dayzCollabMods} />
      </div>
    </section>
  );
}

export default Projects;
