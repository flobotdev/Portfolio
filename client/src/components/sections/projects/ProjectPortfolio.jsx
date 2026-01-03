import Card from "../../common/Card";
import LinkButton from "../../common/LinkButton";

function ProjectPortfolio() {
  return (
    <section id="project-portfolio" className="skills-section">
      <div>
        <h2>flobot.dev</h2>
        <p className="project-intro">
          A modern, responsive portfolio website built with React to showcase my
          game development projects, Steam Workshop mods, professional
          experience, and technical skills. The site features dynamic data
          loading, interactive components, and seamless navigation.
        </p>
        <h3>Tech Stack:</h3>
        <ul>
          <li>React</li>
          <li>Node.js & Express</li>
          <li>Steam Web API integration</li>
          <li>CSS3 with responsive design</li>
          <li>Vercel deployment</li>
        </ul>

        <LinkButton
          href={`https://github.com/flobotdev/Portfolio`}
          className="link-button-generic"
        >
          View Source
        </LinkButton>
      </div>

      <div className="cards-grid">
        <Card title="Dynamic Steam Mods Section">
          <ul>
            <li>Real-time Steam Workshop integration via Steam Web API</li>
            <li>Fetches live subscriber counts and preview images</li>
            <li>Custom 3D carousel with smooth transitions</li>
            <li>Automatic caching system to optimize API calls</li>
            <li>Responsive card layout with hover effects</li>
          </ul>
        </Card>
        <Card title="Projects Showcase">
          <ul>
            <li>Dedicated pages for each major project</li>
            <li>Lazy loading for optimal performance</li>
            <li>Interactive cards with feature breakdowns</li>
            <li>Screenshots and detailed technical descriptions</li>
            <li>Smooth navigation between project details</li>
          </ul>
        </Card>
        <Card title="Responsive Design">
          <ul>
            <li>Mobile-first approach with adaptive layouts</li>
            <li>Custom CSS animations and transitions</li>
            <li>Smooth scrolling and section navigation</li>
            <li>Optimized for all screen sizes and devices</li>
            <li>Fast loading with code splitting</li>
          </ul>
        </Card>
        <Card title="Backend API Server">
          <ul>
            <li>Express server for Steam API proxy</li>
            <li>CORS configuration for secure cross-origin requests</li>
            <li>Rate limiting and caching mechanisms</li>
            <li>Environment-based configuration</li>
            <li>Deployed on Vercel serverless functions</li>
          </ul>
        </Card>
        <Card title="Reusable Components">
          <ul>
            <li>Modular component architecture</li>
            <li>Custom Button and LinkButton components</li>
            <li>Reusable Card components for consistent design</li>
            <li>SideNav with smooth scroll behavior</li>
            <li>Header with responsive navigation</li>
          </ul>
        </Card>
        <Card title="Professional Sections">
          <ul>
            <li>Skills section with categorized technologies</li>
            <li>Experience timeline with detailed role descriptions</li>
            <li>References section with testimonials</li>
            <li>Hero section with animated introduction</li>
            <li>Footer with social links and contact information</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

export default ProjectPortfolio;
