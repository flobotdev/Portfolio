function ExperienceCategory({ category }) {
  const { name, points } = category;

  return (
    <details className="experience-category">      
      <summary>
        <h4>{name}</h4>
      </summary>

      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </details>
  );
}

function ExperienceCard({ role }) {
  const { title, company, startDate, endDate, categories } = role;

  return (
    <article className="experience-card">
      <header className="experience-header">
        <div>
          <h3 className="title">{title}</h3>
          <p className="company">{company} | {startDate} — {endDate}</p>
        </div>        
      </header>
      <div className="experience-body">
        {categories.map((category, index) => (
          <ExperienceCategory key={index} category={category} />
        ))}
      </div>
    </article>
  );
}

export default ExperienceCard;
