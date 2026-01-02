import skills from "../../data/skills";
import "./Skills.css"

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>What I do</h2>

      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skills-group">
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
